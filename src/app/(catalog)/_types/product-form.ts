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

export type ProductOptionImageDto = {
  tierId: number;
  optionId: number;
  url: string;
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
  /** ACTIVE | DRAFT */
  status?: string;
  description: string;
  weight?: number;
  images: ProductImageDto[];
  tiers: ProductTierDto[];
  optionImages: ProductOptionImageDto[];
  attributes: ReadProductAttributesDto[];
  selectedAttributes: ProductSelectedAttributeDto[];
  categoryTree: CategoryNode[];
  selectedCategoryId: number;
  variations: ProductVariationDto[];
};
