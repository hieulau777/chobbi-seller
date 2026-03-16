"use client";

import { ProductForm } from "../../_components/ProductForm";
import { useCategoryTree } from "../../_hooks/useCategoryTree";
import { useAttributes } from "../../_hooks/useAttributes";
import { useSalesInfo } from "../../_hooks/useSalesInfo";
import { useImageUpload } from "../../_hooks/useImageUpload";

export default function NewProductPage() {
  const category = useCategoryTree(null);
  const attributes = useAttributes();
  const salesInfo = useSalesInfo();
  const imageUpload = useImageUpload();

  return (
    <ProductForm
      category={category}
      attributes={attributes}
      salesInfo={salesInfo}
      imageUpload={imageUpload}
      title="Thêm sản phẩm mới"
      submitButtonLabel="Lưu sản phẩm"
      backHref="/products"
      backLabel="Quay lại danh sách"
    />
  );
}
