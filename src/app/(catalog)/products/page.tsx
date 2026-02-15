"use client";

import { useProductsList } from "../_hooks/useProductsList";
import { AllProductsPagePanel } from "../_components/AllProductsPagePanel";

export default function ProductsPage() {
  const shopId = 1;
  const { products, loading, error } = useProductsList(shopId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!products || products.length === 0) {
    return <div>Chưa có sản phẩm.</div>;
  }

  return <AllProductsPagePanel products={products} />;
}
