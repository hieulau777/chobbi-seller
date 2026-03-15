/** DTO trả về từ API list products by shop (ReadProductSellerDto) */
export interface ReadProductSellerDto {
  id: number;
  img: string;
  name: string;
  status?: string;
  variations: ReadProductVariationSellerDto[];
}

/** Trang danh sách sản phẩm (phân trang) */
export interface ProductListPageDto {
  content: ReadProductSellerDto[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}

/** Số lượng sản phẩm theo trạng thái (cho tab) */
export interface ProductSellerCountsDto {
  all: number;
  active: number;
  draft: number;
}

export interface ReadProductVariationSellerDto {
  name: string;
  price: number;
  quantity: number;
}

export type ProductListTab = "all" | "ACTIVE" | "DRAFT";

export interface AllProductsPagePanelProps {
  products: ReadProductSellerDto[];
  shopId: number;
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
  tab: ProductListTab;
  onTabChange: (tab: ProductListTab) => void;
  counts: ProductSellerCountsDto | null;
  search: string;
  minPrice: string;
  maxPrice: string;
  onSearchChange: (value: string) => void;
  onPriceChange: (min: string, max: string) => void;
  onCategoryChange: (categoryId: number | null) => void;
  sortField: "name" | "price" | "stock" | null;
  sortDirection: "asc" | "desc" | null;
  onSortChange: (field: "name" | "price" | "stock" | null, direction: "asc" | "desc" | null) => void;
}
