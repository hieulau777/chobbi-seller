import type {
  ReadProductAttributesDto,
  CategoryNode,
} from "./base";

export type ProductImageDto = {
  id: number;
  url: string;
  sort: number;
};

export type ProductTierOptionDto = {
  id: number;
  name: string;
};

export type ProductTierDto = {
  id: number;
  name: string;
  options: ProductTierOptionDto[];
  hasImages: boolean;
};

export type ProductSelectedAttributeDto = {
  id: number;
  selectedValueIds: number[];
};

export type ProductVariationOptionCombinationDto = {
  tierId: number;
  optionId: number;
};

export type ProductVariationDto = {
  id: number;
  price: number;
  stock: number;
  optionCombination: ProductVariationOptionCombinationDto[];
};

export type ProductDetailResponse = {
  productId: number;
  productName: string;
  description: string;
  images: ProductImageDto[];
  tiers: ProductTierDto[];
  optionImages: unknown[];
  attributes: ReadProductAttributesDto[];
  selectedAttributes: ProductSelectedAttributeDto[];
  categoryTree: CategoryNode[];
  selectedCategoryId: number;
  variations: ProductVariationDto[];
};
