/** DTO trả về từ API list products by shop (ReadProductSellerDto) */
export interface ReadProductSellerDto {
  id: number;
  img: string;
  name: string;
  variations: ReadProductVariationSellerDto[];
}

export interface ReadProductVariationSellerDto {
  name: string;
  price: number;
  quantity: number;
}

export interface AllProductsPagePanelProps {
  products: ReadProductSellerDto[];
}
