import type {
  CategoryNode,
  ReadProductAttributesDto,
  ClassificationGroup,
  VariationRow,
} from "../types";
import type { ProductImageItem } from "../hooks/useImageUpload";

type FirstOptionImagesMap = Record<string, { file: File; previewUrl: string }>;

export type PrepareFormDataParams = {
  shopId: number;
  productId?: number | null;
  productName: string;
  productDescription: string;
  selectedLeaf: CategoryNode;
  productImages: ProductImageItem[];
  attributes: ReadProductAttributesDto[];
  attributeSelections: Record<number, number[]>;
  classificationsWithOptions: ClassificationGroup[];
  variationRows: VariationRow[];
  variationValues: Record<string, { price: string; stock: string }>;
  firstOptionImages: FirstOptionImagesMap;
};

export function prepareFormData(params: PrepareFormDataParams): FormData {
  const {
    shopId,
    productId,
    productName,
    productDescription,
    selectedLeaf,
    productImages,
    attributes,
    attributeSelections,
    classificationsWithOptions,
    variationRows,
    variationValues,
    firstOptionImages,
  } = params;

  const ts = Date.now();

  const images = productImages.map((item, i) => {
    const sort = i + 1;
    if (item.existingId != null) {
      return { id: item.existingId, name: `existing_${item.existingId}`, sort };
    }
    const ext = item.file?.name?.split(".").pop() || "jpg";
    const name = `p${i + 1}_${ts}_${i}.${ext}`;
    return { name, sort };
  });

  const productImageNames = productImages.map((item, i) => {
    if (item.existingId != null) return `existing_${item.existingId}`;
    const ext = item.file?.name?.split(".").pop() || "jpg";
    return `p${i + 1}_${ts}_${i}.${ext}`;
  });

  const attributesList = attributes
    .map((attr) => {
      const selectedIds = attributeSelections[attr.id] ?? [];
      const valueIds = selectedIds.filter((id) => id > 0);
      const customValues = selectedIds
        .filter((id) => id < 0)
        .map((id) => attr.values?.find((v) => v.id === id)?.value)
        .filter((v): v is string => !!v);
      if (valueIds.length === 0 && customValues.length === 0) return null;
      return { id: attr.id, valueIds, customValues };
    })
    .filter((a): a is NonNullable<typeof a> => a != null);

  let tiers: Array<{
    id: number | null;
    name: string;
    options: Array<{ id: number | null; name: string }>;
    hasImages: boolean;
  }> | null = null;
  let optionImages: Array<{
    tierId: number | null;
    tierName: string;
    optionId: number | null;
    optionName: string;
    imageName: string;
  }> | null = null;
  let variations: Array<{
    id: number | null;
    price: number;
    stock: number;
    optionCombination: Array<{
      tierId: number | null;
      tierName: string;
      optionId: number | null;
      optionName: string;
    }>;
  }> = [];

  if (classificationsWithOptions.length > 0) {
    tiers = classificationsWithOptions.map((cls, tierIndex) => ({
      id: null,
      name: cls.name,
      options: cls.options.map((opt) => ({ id: null, name: opt })),
      hasImages: tierIndex === 0,
    }));

    if (Object.keys(firstOptionImages).length > 0) {
      optionImages = Object.entries(firstOptionImages).map(
        ([optionName, img], idx) => {
          const ext = img.file.name.split(".").pop() || "jpg";
          const uniqueName = `opt_${optionName.replace(/\s/g, "_")}_${ts}_${idx}.${ext}`;
          return {
            tierId: null,
            tierName: classificationsWithOptions[0].name,
            optionId: null,
            optionName,
            imageName: uniqueName,
          };
        },
      );
    }

    variations = variationRows
      .filter((row): row is { key: string; labels: string[] } => row !== null)
      .map((row) => {
        const key = row.key;
        const v = variationValues[key] ?? { price: "", stock: "" };
        const price = Number(v.price) || 0;
        const stock = Number(v.stock) || 0;
        const optionCombination = classificationsWithOptions.map((cls, i) => ({
          tierId: null,
          tierName: cls.name,
          optionId: null,
          optionName: row.labels[i],
        }));
        return {
          id: null,
          price,
          stock,
          optionCombination,
        };
      });
  } else {
    const v = variationValues["__default__"] ?? { price: "", stock: "" };
    variations = [
      {
        id: null,
        price: Number(v.price) || 0,
        stock: Number(v.stock) || 0,
        optionCombination: [],
      },
    ];
  }

  const productRequest = {
    shopId,
    productId: productId ?? null,
    categoryId: selectedLeaf.id,
    name: productName,
    description: productDescription,
    images,
    attributes: attributesList,
    tiers,
    optionImages: optionImages ?? [],
    variations,
  };

  const formData = new FormData();
  formData.append(
    "product",
    new Blob([JSON.stringify(productRequest)], { type: "application/json" }),
    "product.json",
  );

  const filesToRename: Array<{ file: File; newName: string }> = [];
  productImages.forEach((item, i) => {
    if (item.file) {
      filesToRename.push({ file: item.file, newName: productImageNames[i] });
    }
  });
  Object.entries(firstOptionImages).forEach(([optionName, img], idx) => {
    const ext = img.file.name.split(".").pop() || "jpg";
    const uniqueName = `opt_${optionName.replace(/\s/g, "_")}_${ts}_${idx}.${ext}`;
    filesToRename.push({ file: img.file, newName: uniqueName });
  });

  for (const { file, newName } of filesToRename) {
    formData.append("media", new File([file], newName, { type: file.type }));
  }

  return formData;
}
