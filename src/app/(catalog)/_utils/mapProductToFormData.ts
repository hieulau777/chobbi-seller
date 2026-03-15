import type {
  ProductDetailResponse,
  ClassificationGroup,
} from "../_types";

type AttributeSelections = Record<number, number[]>;
type VariationValues = Record<string, { price: string; stock: string }>;

export type MappedProductFormData = {
  name: string;
  description: string;
  weight: number;
  attributeSelections: AttributeSelections;
  classifications: ClassificationGroup[];
  variationValues: VariationValues;
  selectedCategoryId: number;
  firstOptionImages: Record<string, string>;
};

export function mapProductToFormData(
  product: ProductDetailResponse,
): MappedProductFormData {
  const name = product.productName;
  const description = product.description ?? "";
  const weight = product.weight ?? 0;

  const attributeSelections: AttributeSelections = {};
  for (const sa of product.selectedAttributes ?? []) {
    attributeSelections[sa.id] = [...sa.selectedValueIds];
  }

  const classifications: ClassificationGroup[] =
    product.tiers?.map((tier) => ({
      id: String(tier.id),
      name: tier.name,
      options: tier.options.map((opt) => opt.name),
    })) ?? [];

  const tierOrderById = new Map<number, number>();
  const optionNameByTierAndOptionId = new Map<string, string>();

  product.tiers?.forEach((tier, tierIndex) => {
    tierOrderById.set(tier.id, tierIndex);
    tier.options.forEach((opt) => {
      optionNameByTierAndOptionId.set(`${tier.id}:${opt.id}`, opt.name);
    });
  });

  const variationValues: VariationValues = {};
  for (const variation of product.variations ?? []) {
    const comboNames: string[] = new Array(product.tiers?.length ?? 0).fill("");
    for (const oc of variation.optionCombination ?? []) {
      const tierIndex = tierOrderById.get(oc.tierId);
      if (tierIndex === undefined) continue;
      const optName =
        optionNameByTierAndOptionId.get(`${oc.tierId}:${oc.optionId}`) ?? "";
      comboNames[tierIndex] = optName;
    }
    const key =
      comboNames.length > 0 ? comboNames.join("|") : "__default__";
    variationValues[key] = {
      price: String(variation.price ?? 0),
      stock: String(variation.stock ?? 0),
    };
  }

  // Map option-level images (only from first tier with images) -> option name -> image URL
  const firstOptionImages: Record<string, string> = {};
  const firstTier = product.tiers?.find((t) => t.hasImages);
  if (firstTier && product.optionImages && product.optionImages.length > 0) {
    const optionsById = new Map<number, string>();
    firstTier.options.forEach((opt) => {
      optionsById.set(opt.id, opt.name);
    });
    for (const oi of product.optionImages) {
      if (oi.tierId !== firstTier.id) continue;
      const optName = optionsById.get(oi.optionId);
      if (!optName) continue;
      firstOptionImages[optName] = oi.url;
    }
  }

  return {
    name,
    description,
    weight,
    attributeSelections,
    classifications,
    variationValues,
    selectedCategoryId: product.selectedCategoryId,
    firstOptionImages,
  };
}
