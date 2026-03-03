"use client";

import { useProductsList } from "../_hooks/useProductsList";
import { AllProductsPagePanel } from "../_components/AllProductsPagePanel";
import { useMyShop } from "@/hooks/useMyShop";

export default function ProductsPage() {
  const { shop, loading: shopLoading, error: shopError } = useMyShop();
  const { products, loading: productsLoading, error: productsError } =
    useProductsList(shop?.id ?? 0);

  if (shopLoading || productsLoading) {
    return <div>Loading...</div>;
  }

  if (shopError) {
    return <div>{shopError}</div>;
  }

  if (!shop) {
    return <div>Bạn chưa có shop. Hãy tạo shop trước khi quản lý sản phẩm.</div>;
  }

  if (productsError) {
    return <div>{productsError}</div>;
  }

  if (!products || products.length === 0) {
    return <div>Chưa có sản phẩm.</div>;
  }

  return <AllProductsPagePanel products={products} shopId={shop.id} />;
}
