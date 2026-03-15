"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import apiClient from "@/lib/api-client";
import { useMyShop } from "@/hooks/useMyShop";

import { ProductForm } from "../../../_components/ProductForm";
import { useCategoryTree } from "../../../_hooks/useCategoryTree";
import { useAttributes } from "../../../_hooks/useAttributes";
import { useSalesInfo } from "../../../_hooks/useSalesInfo";
import { useImageUpload } from "../../../_hooks/useImageUpload";
import { mapProductToFormData } from "../../../_utils/index";
import { getImageUrl } from "../../../_utils/index2";
import type { ProductDetailResponse } from "../../../_types";

function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-|-$/g, "") || "san-pham"
  );
}

const MARKETPLACE_BASE_URL =
  process.env.NEXT_PUBLIC_CLIENT_BASE_URL ?? "http://localhost:3000";

export default function EditProductPage() {
  const params = useParams<{ productId: string }>();
  const productId = Number(params?.productId);

  const { shop } = useMyShop();

  const [initialFormValues, setInitialFormValues] = useState<
    {
      productName: string;
      productDescription: string;
      weight: number;
      status?: string;
    } | null
  >(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    number | null
  >(null);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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
        const res = await apiClient.get<ProductDetailResponse>(
          `/product/${productId}`,
        );
        const data = res.data;
        const mapped = mapProductToFormData(data);

        setInitialFormValues({
          productName: mapped.name,
          productDescription: mapped.description ?? "",
          weight: mapped.weight ?? 0,
          status: data.status ?? "DRAFT",
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
        // Pre-fill option-level images (only for first tier with images)
        if (Object.keys(mapped.firstOptionImages).length > 0) {
          salesInfo.setFirstOptionImages(
            Object.fromEntries(
              Object.entries(mapped.firstOptionImages).map(([optName, url]) => [
                optName,
                { file: null, previewUrl: getImageUrl(url) },
              ]),
            ),
          );
        }
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

  const slug = slugify(initialFormValues.productName);
  const marketplaceHref =
    shop?.id != null
      ? `${MARKETPLACE_BASE_URL}/${slug}.${shop.id}.${productId}`
      : null;

  return (
    <>
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
        headerAction={
          marketplaceHref ? (
            <Link
              href={marketplaceHref}
              target="_blank"
              className="rounded-full bg-[var(--primary)] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-[var(--primary)]/90"
            >
              Xem trên marketplace
            </Link>
          ) : undefined
        }
        footerAction={
          <button
            type="button"
            disabled={deleting}
            onClick={() => setShowDeleteConfirm(true)}
            className="rounded-full bg-red-50 px-4 py-2 text-xs font-medium text-red-600 shadow-sm transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {deleting ? "Đang xóa..." : "Xóa sản phẩm"}
          </button>
        }
      />

      {showDeleteConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-confirm-title"
        >
          <div className="max-w-md rounded-xl border border-[var(--border)] bg-white p-5 shadow-xl">
            <h2
              id="delete-confirm-title"
              className="text-lg font-semibold text-[var(--foreground)]"
            >
              Xác nhận xóa sản phẩm
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Sản phẩm sẽ bị ẩn khỏi marketplace và không thể đặt hàng mới, nhưng các
              đơn hàng đã tạo trước đó vẫn giữ nguyên. Bạn có chắc chắn muốn xóa?
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
              >
                Hủy
              </button>
              <button
                type="button"
                disabled={deleting}
                onClick={async () => {
                  setDeleting(true);
                  try {
                    await apiClient.delete("/product/seller", {
                      data: [productId],
                    });
                    window.location.assign("/products");
                  } finally {
                    setDeleting(false);
                  }
                }}
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deleting ? "Đang xóa..." : "Xác nhận xóa"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
