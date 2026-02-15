"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";

import { ProductForm } from "../../../_components/ProductForm";
import { useCategoryTree } from "../../../_hooks/useCategoryTree";
import { useAttributes } from "../../../_hooks/useAttributes";
import { useSalesInfo } from "../../../_hooks/useSalesInfo";
import { useImageUpload } from "../../../_hooks/useImageUpload";
import { mapProductToFormData } from "../../../_utils/index";
import { getImageUrl } from "../../../_utils/index2";
import type { ProductDetailResponse } from "../../../_types";

export default function EditProductPage() {
  const params = useParams<{ productId: string }>();
  const productId = Number(params?.productId);

  const [initialFormValues, setInitialFormValues] = useState<
    { productName: string; productDescription: string } | null
  >(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    number | null
  >(null);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const category = useCategoryTree(selectedCategoryId);
  const attributes = useAttributes();
  const salesInfo = useSalesInfo();
  const imageUpload = useImageUpload();

  const { setAttributes, setAttributeSelections } = attributes;
  const { setClassifications, setVariationValues } = salesInfo;
  const { setProductImages } = imageUpload;

  useEffect(() => {
    if (!productId) return;
    const loadProduct = async () => {
      try {
        setLoadingProduct(true);
        const res = await axios.get<ProductDetailResponse>(
          `/api/product/${productId}`,
        );
        const data = res.data;
        const mapped = mapProductToFormData(data);

        setInitialFormValues({
          productName: mapped.name,
          productDescription: mapped.description ?? "",
        });
        setSelectedCategoryId(mapped.selectedCategoryId);
        setAttributes(data.attributes ?? []);
        setAttributeSelections(mapped.attributeSelections);
        setClassifications(mapped.classifications);
        setVariationValues(mapped.variationValues);
        const sortedImages = [...(data.images ?? [])].sort(
          (a, b) => (a.sort ?? 0) - (b.sort ?? 0),
        );
        setProductImages(
          sortedImages.map((img) => ({
            previewUrl: getImageUrl(img.url),
            existingId: img.id,
          })),
        );
        setLoadError(null);
      } catch (error) {
        console.error("Failed to load product", error);
        setLoadError("Không tải được dữ liệu sản phẩm.");
      } finally {
        setLoadingProduct(false);
      }
    };
    loadProduct();
  }, [
    productId,
    setAttributes,
    setAttributeSelections,
    setClassifications,
    setVariationValues,
    setProductImages,
  ]);

  if (!productId || loadError) {
    return (
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-3 bg-[var(--background)] px-4 py-6 text-center">
        <p className="text-lg font-semibold text-[var(--foreground)]">
          {loadError ?? "Không tìm thấy sản phẩm"}
        </p>
        <Link
          href="/product5"
          className="text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline"
        >
          Quay lại danh sách sản phẩm
        </Link>
      </div>
    );
  }

  if (loadingProduct || !initialFormValues) {
    return (
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-3 bg-[var(--background)] px-4 py-6 text-center">
        <p className="text-sm text-[var(--muted-foreground)]">
          Đang tải dữ liệu sản phẩm...
        </p>
      </div>
    );
  }

  return (
    <ProductForm
      category={category}
      attributes={attributes}
      salesInfo={salesInfo}
      imageUpload={imageUpload}
      productId={productId}
      defaultValues={initialFormValues}
      title="Chỉnh sửa sản phẩm"
      submitButtonLabel="Lưu thay đổi"
      backHref="/product5"
      backLabel="Quay lại danh sách"
    />
  );
}
