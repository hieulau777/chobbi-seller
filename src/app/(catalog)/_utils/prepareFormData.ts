import type {
  CategoryNode,
  ReadProductAttributesDto,
  ClassificationGroup,
  VariationRow,
} from "../_types";
import type { ProductImageItem } from "../_hooks/useImageUpload";

type FirstOptionImagesMap = Record<
  string,
  { file?: File | null; previewUrl: string }
>;

export type PrepareFormDataParams = {
  shopId: number;
  productId?: number | null;
  /** ACTIVE hoặc DRAFT */
  status: "ACTIVE" | "DRAFT";
  productName: string;
  productDescription: string;
  weight: number;
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
    status,
    productName,
    productDescription,
    weight,
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
  const optionImages: Array<{
    tierId: number | null;
    tierName: string;
    optionId: number | null;
    optionName: string;
    imageName: string;
  }> = [];
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

    // chỉ gửi những option có file mới upload; option có ảnh cũ (từ backend) mà không thay đổi thì giữ nguyên, không gửi lại

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

  const filesToRename: Array<{ file: File; newName: string }> = [];
  productImages.forEach((item, i) => {
    if (item.file) {
      filesToRename.push({ file: item.file, newName: productImageNames[i] });
    }
  });
  Object.entries(firstOptionImages).forEach(([optionName, img], idx) => {
    let imageName = "";
    if (img.file) {
      const ext = img.file.name.split(".").pop() || "jpg";
      imageName = `opt_${optionName.replace(/\s/g, "_")}_${ts}_${idx}.${ext}`;
      filesToRename.push({ file: img.file, newName: imageName });
    }
    // Luôn gửi optionImages cho những option đang có/giữ ảnh.
    // - Có file mới  => imageName != "" và có multipart tương ứng (update ảnh)
    // - Không có file => imageName = "" (giữ ảnh cũ nếu có)
    optionImages.push({
      tierId: null,
      tierName: classificationsWithOptions[0]?.name ?? "",
      optionId: null,
      optionName,
      imageName,
    });
  });

  const productRequest = {
    shopId,
    productId: productId ?? null,
    status,
    categoryId: selectedLeaf.id,
    name: productName,
    description: productDescription,
    weight: Number(weight) >= 0 ? Number(weight) : 0,
    images,
    attributes: attributesList,
    tiers,
    optionImages,
    variations,
  };

  const formData = new FormData();
  formData.append(
    "product",
    new Blob([JSON.stringify(productRequest)], { type: "application/json" }),
    "product.json",
  );

  for (const { file, newName } of filesToRename) {
    formData.append("media", new File([file], newName, { type: file.type }));
  }

  return formData;
}
