"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "@/lib/api-client";
import { useMyShop } from "@/hooks/useMyShop";
import axios from "axios";
import Link from "next/link";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { DisabledOverlay } from "./DisabledOverlay";

const PUBLISH_CONFIRM_MESSAGE =
  "Xác nhận publish sản phẩm lên marketplace. Sau khi publish sản phẩm thì bạn chỉ có thể cập nhật mô tả sản phẩm, thuộc tính sản phẩm, hình ảnh sản phẩm, giá và tồn kho.";

import { ProductImagesUploader } from "./ProductImagesUploader";
import { CategorySelector } from "./CategorySelector";
import { AttributesSelector } from "./AttributesSelector";
import { SalesInfoSection } from "./SalesInfoSection";
import { prepareFormData } from "../_utils/prepareFormData";
import {
  productFormSchema,
  defaultProductFormValues,
  type ProductFormValues,
} from "../_schema/product-form-schema";
import type { UseCategoryTreeResult } from "../_hooks/useCategoryTree";
import { SHIPPING_METHODS, calcShippingFee } from "@/lib/shipping";
import { formatPrice } from "../_utils/index2";

type NotificationType = { type: "success"; message: string } | { type: "error"; message: string };

type UseAttributesReturn = ReturnType<typeof import("../_hooks/useAttributes").useAttributes>;
type UseSalesInfoReturn = ReturnType<typeof import("../_hooks/useSalesInfo").useSalesInfo>;
type UseImageUploadReturn = ReturnType<typeof import("../_hooks/useImageUpload").useImageUpload>;

export type ProductFormProps = {
  category: UseCategoryTreeResult;
  attributes: UseAttributesReturn;
  salesInfo: UseSalesInfoReturn;
  imageUpload: UseImageUploadReturn;
  /** Khi chỉnh sửa: truyền productId để gọi API update (payload sẽ có id). */
  productId?: number;
  /** Giá trị ban đầu cho productName, productDescription, status (create = default, edit = từ API). */
  defaultValues?: Partial<ProductFormValues & { status?: string }>;
  submitButtonLabel?: string;
  title?: string;
  /** Link "Quay lại" (vd: /products). */
  backHref?: string;
  backLabel?: string;
  /** Phần action bổ sung ở header (vd: nút \"Xem trên marketplace\"). */
  headerAction?: ReactNode;
  /** Action phụ dưới cùng form (vd: nút Xóa sản phẩm). */
  footerAction?: ReactNode;
};

export function ProductForm({
  category,
  attributes,
  salesInfo,
  imageUpload,
  productId,
  defaultValues = defaultProductFormValues,
  submitButtonLabel,
  title,
  backHref = "/products",
  backLabel = "Quay lại danh sách",
  headerAction,
  footerAction,
}: ProductFormProps) {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [notification, setNotification] = useState<NotificationType | null>(null);
  const [showPublishConfirm, setShowPublishConfirm] = useState(false);
  const [pendingPublishData, setPendingPublishData] = useState<ProductFormValues | null>(null);
  const [categoryRequiredError, setCategoryRequiredError] = useState(false);
  const [imagesRequiredError, setImagesRequiredError] = useState(false);

  const productStatus = (defaultValues?.status ?? "DRAFT").toUpperCase();
  const isActiveProduct = Boolean(productId && productStatus === "ACTIVE");

  const { shop, loading: shopLoading, error: shopError } = useMyShop();

  useEffect(() => {
    if (!notification) return;
    const t = notification.type === "success" ? 2000 : 5000;
    const id = setTimeout(() => setNotification(null), t);
    return () => clearTimeout(id);
  }, [notification]);

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema) as Resolver<ProductFormValues>,
    defaultValues: {
      productName: defaultValues.productName ?? "",
      productDescription: defaultValues.productDescription ?? "",
      weight: defaultValues.weight ?? 0,
    },
  });

  const nameValue = watch("productName") ?? "";
  const descriptionValue = watch("productDescription") ?? "";

  const weightGram = Number(watch("weight")) || 0;
  const shippingMethods = SHIPPING_METHODS;

  const [debouncedWeight, setDebouncedWeight] = useState(weightGram);
  const [shippingFeeUpdating, setShippingFeeUpdating] = useState(false);

  useEffect(() => {
    if (weightGram === debouncedWeight) return;
    setShippingFeeUpdating(true);
    const t = setTimeout(() => {
      setDebouncedWeight(weightGram);
      setShippingFeeUpdating(false);
    }, 500);
    return () => clearTimeout(t);
  }, [weightGram, debouncedWeight]);

  const handleConfirmCategorySelection = () => {
    if (!category.selectedLeaf) return;
    category.closeCategoryPopup();
    attributes.loadAttributes(category.selectedLeaf.id);
    setCategoryRequiredError(false);
  };

  const handleToggleAttributeDropdown = (attrId: number) => {
    attributes.setOpenAttributeId((prev: number | null) =>
      prev === attrId ? null : attrId,
    );
  };

  const handleSelectAttributeValue = (
    attrId: number,
    valueId: number,
    isMultiple: boolean,
  ) => {
    attributes.setAttributeSelections((prev) => {
      const current = prev[attrId] ?? [];
      if (isMultiple) {
        const exists = current.includes(valueId);
        const next = exists
          ? current.filter((id) => id !== valueId)
          : [...current, valueId];
        return { ...prev, [attrId]: next };
      }
      return { ...prev, [attrId]: [valueId] };
    });
    if (!isMultiple) {
      attributes.setOpenAttributeId(null);
    }
  };

  const handleClearAttributeSelection = (attrId: number) => {
    attributes.setAttributeSelections((prev) => ({
      ...prev,
      [attrId]: [],
    }));
    attributes.setOpenAttributeId(null);
  };

  const handleAddCustomAttributeValue = (attrId: number, draft: string) => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    const tempId = -Date.now();
    attributes.addCustomAttributeValue(attrId, trimmed, tempId);
  };

  const submitWithStatus = async (data: ProductFormValues, status: "ACTIVE" | "DRAFT") => {
    if (shopLoading) return;
    if (!shop) {
      setSubmitError(
        shopError ?? "Bạn chưa có shop. Hãy tạo shop trước khi tạo sản phẩm."
      );
      return;
    }
    if (!salesInfo.validate()) return;

    setSubmitError(null);
    setCategoryRequiredError(false);
    setImagesRequiredError(false);
    imageUpload.setProductImagesError(null);

    if (!category.selectedLeaf) {
      setSubmitError("Vui lòng chọn ngành hàng.");
      setCategoryRequiredError(true);
      return;
    }
    if (imageUpload.productImages.length === 0) {
      const msg = "Vui lòng thêm ít nhất 1 ảnh sản phẩm (thumbnail).";
      setSubmitError(msg);
      setImagesRequiredError(true);
      imageUpload.setProductImagesError(msg);
      return;
    }

    setSubmitLoading(true);
    setShowPublishConfirm(false);

    try {
      const shopId = shop.id;
      const formData = prepareFormData({
        shopId,
        productId: productId ?? undefined,
        status,
        productName: data.productName.trim(),
        productDescription: (data.productDescription ?? "").trim(),
        weight: Number(data.weight) >= 0 ? Number(data.weight) : 0,
        selectedLeaf: category.selectedLeaf,
        productImages: imageUpload.productImages,
        attributes: attributes.attributes,
        attributeSelections: attributes.attributeSelections,
        classificationsWithOptions: salesInfo.classificationsWithOptions,
        variationRows: salesInfo.variationRows,
        variationValues: salesInfo.variationValues,
        firstOptionImages: salesInfo.firstOptionImages,
      });

      const url = productId
        ? "/product/update"
        : "/product/create";
      await apiClient.post(url, formData);

      const successMsg =
        status === "ACTIVE"
          ? productId
            ? "Đã cập nhật sản phẩm thành công."
            : "Đã publish sản phẩm lên marketplace."
          : productId
            ? "Đã lưu bản nháp thành công."
            : "Đã tạo sản phẩm (bản nháp) thành công.";
      setNotification({ type: "success", message: successMsg });
      // Sau khi tạo mới hoặc publish/cập nhật sản phẩm, đưa user về trang Tất cả sản phẩm
      if (status === "ACTIVE" || !productId) {
        setTimeout(() => {
          window.location.assign("/products");
        }, 1500);
      } else if (productId) {
        // Trường hợp chỉ lưu nháp cho sản phẩm đã tồn tại thì giữ behavior cũ: về lại trang edit
        const redirectTo = `/product/edit/${productId}`;
        setTimeout(() => {
          window.location.assign(redirectTo);
        }, 1500);
      }
      return;
    } catch (err: unknown) {
      const msg =
        axios.isAxiosError(err) && err.response?.data
          ? String(err.response.data)
          : err instanceof Error
            ? err.message
            : productId
              ? "Không thể cập nhật sản phẩm. Vui lòng thử lại."
              : "Không thể tạo sản phẩm. Vui lòng thử lại.";
      setSubmitError(msg);
      setNotification({ type: "error", message: msg });
    } finally {
      setSubmitLoading(false);
    }
  };

  const onSubmit = (data: ProductFormValues) => {
    if (isActiveProduct) {
      submitWithStatus(data, "ACTIVE");
    } else {
      submitWithStatus(data, "DRAFT");
    }
  };

  const handlePublishClick = (data: ProductFormValues) => {
    setPendingPublishData(data);
    setShowPublishConfirm(true);
  };

  const handlePublishConfirm = async () => {
    if (!pendingPublishData || !productId) {
      setShowPublishConfirm(false);
      setPendingPublishData(null);
      return;
    }
    try {
      setSubmitLoading(true);
      // Chỉ publish (update status) – không động vào nội dung/ảnh
      await apiClient.patch("/product/seller/status", {
        productId,
        status: "ACTIVE",
      });
      setNotification({
        type: "success",
        message: "Đã publish sản phẩm lên marketplace.",
      });
      setTimeout(() => {
        window.location.assign("/products");
      }, 1500);
    } catch (err: unknown) {
      const msg =
        axios.isAxiosError(err) && err.response?.data
          ? String(err.response.data)
          : err instanceof Error
            ? err.message
            : "Không thể publish sản phẩm. Vui lòng thử lại.";
      setSubmitError(msg);
      setNotification({ type: "error", message: msg });
    } finally {
      setShowPublishConfirm(false);
      setPendingPublishData(null);
      setSubmitLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen flex-col gap-4 px-4 py-6">
      {notification && (
        <div
          role="alert"
          className="toast-enter fixed bottom-6 right-6 z-50 flex min-w-[340px] max-w-[400px] items-center gap-4 rounded-2xl px-4 py-4 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.25)]"
          style={{
            backgroundColor: "white",
            borderLeft: `4px solid ${notification.type === "success" ? "var(--primary)" : "var(--destructive)"}`,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            style={{
              backgroundColor: notification.type === "success" ? "color-mix(in srgb, var(--primary) 15%, white)" : "color-mix(in srgb, var(--destructive) 15%, white)",
            }}
          >
            {notification.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-[var(--primary)]" strokeWidth={2.5} />
            ) : (
              <AlertCircle className="h-5 w-5 text-[var(--destructive)]" strokeWidth={2.5} />
            )}
          </span>
          <p className="min-w-0 flex-1 text-sm font-medium leading-snug text-[var(--foreground)]">
            {notification.message}
          </p>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="shrink-0 rounded-full p-1.5 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            aria-label="Đóng"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      <header className="flex items-center justify-between gap-4">
        <div>
          {title && (
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              {title}
            </h1>
          )}
        </div>
        <div className="flex items-center gap-2">
          {headerAction}
          <Link
            href={backHref}
            className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5"
          >
            {backLabel}
          </Link>
        </div>
      </header>

      <main className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm sm:p-6">
        <form
          className="space-y-5"
          onSubmit={rhfHandleSubmit(onSubmit)}
        >
          <ProductImagesUploader
            productImages={imageUpload.productImages}
            productImagesError={imageUpload.productImagesError}
            productImagesDragIndex={imageUpload.productImagesDragIndex}
            maxProductImages={imageUpload.MAX_PRODUCT_IMAGES}
            onUpload={imageUpload.handleProductImageUpload}
            onRemove={imageUpload.removeProductImage}
            onReorder={imageUpload.reorderProductImages}
            onDragIndexChange={imageUpload.setProductImagesDragIndex}
          />

          <DisabledOverlay active={isActiveProduct}>
            <div className="space-y-1.5">
              <label
                htmlFor="productName"
                className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]"
              >
                Tên sản phẩm
              </label>
              <input
                id="productName"
                type="text"
                {...register("productName")}
                readOnly={isActiveProduct}
                className="w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="VD: Áo thun Zara form rộng"
              />
              {errors.productName && (
                <p className="text-sm text-red-600">{errors.productName.message}</p>
              )}
              <p className="text-[11px] text-[var(--muted-foreground)] text-right">
                {nameValue.length}/120
              </p>
            </div>
          </DisabledOverlay>

          <DisabledOverlay active={isActiveProduct}>
            <CategorySelector
              selectedLeaf={category.selectedLeaf}
              selectedPathLabel={category.selectedPathLabel}
              loadingCategories={category.loadingCategories}
              categoryError={category.categoryError}
              isCategoryOpen={category.isCategoryOpen}
              categoryColumns={category.categoryColumns}
              categoryPath={category.categoryPath}
              onOpenPopup={category.openCategoryPopup}
              onClosePopup={category.closeCategoryPopup}
              onCategoryClick={category.handleCategoryClick}
              onConfirmSelection={handleConfirmCategorySelection}
            />
          </DisabledOverlay>
          {categoryRequiredError && !category.selectedLeaf && (
            <p className="mt-1 text-xs text-red-600">
              Vui lòng chọn ngành hàng.
            </p>
          )}

          <AttributesSelector
            attributes={attributes.attributes}
            loadingAttributes={attributes.loadingAttributes}
            attributesError={attributes.attributesError}
            openAttributeId={attributes.openAttributeId}
            attributeSelections={attributes.attributeSelections}
            attributeCustomDrafts={attributes.attributeCustomDrafts}
            onToggleDropdown={handleToggleAttributeDropdown}
            onSelectValue={handleSelectAttributeValue}
            onClearSelection={handleClearAttributeSelection}
            onCustomDraftChange={(attrId, value) =>
              attributes.setAttributeCustomDrafts((prev) => ({
                ...prev,
                [attrId]: value,
              }))
            }
            onAddCustomValue={handleAddCustomAttributeValue}
          />

          <div className="space-y-1.5">
            <label
              htmlFor="productDescription"
              className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]"
            >
              Mô tả
            </label>
            <textarea
              id="productDescription"
              {...register("productDescription")}
              className="min-h-[100px] w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              placeholder="Mô tả chi tiết sản phẩm..."
            />
            {errors.productDescription && (
              <p className="text-sm text-red-600">
                {errors.productDescription.message}
              </p>
            )}
            <p className="text-[11px] text-[var(--muted-foreground)] text-right">
              {(descriptionValue ?? "").length}/3000
            </p>
          </div>

          <SalesInfoSection
            classifications={salesInfo.classifications}
            classificationsWithOptions={salesInfo.classificationsWithOptions}
            variationRows={salesInfo.variationRows}
            firstColSpanInfo={salesInfo.firstColSpanInfo}
            variationValues={salesInfo.variationValues}
            optionDrafts={salesInfo.optionDrafts}
            firstOptionImages={salesInfo.firstOptionImages}
            salesInfoErrors={salesInfo.salesInfoErrors}
            onAddClassification={salesInfo.addClassification}
            onRemoveClassification={salesInfo.removeClassification}
            onUpdateClassificationName={salesInfo.updateClassificationName}
            onAddOption={salesInfo.addOption}
            onRemoveOption={salesInfo.removeOption}
            onOptionDraftChange={(clsId, value) =>
              salesInfo.setOptionDrafts((prev) => ({ ...prev, [clsId]: value }))
            }
            onUpdateVariationValue={salesInfo.updateVariationValue}
            onFirstOptionImageUpload={salesInfo.handleFirstOptionImageUpload}
            onRemoveFirstOptionImage={salesInfo.removeFirstOptionImage}
            editableOnlyPriceStock={isActiveProduct}
          />

          <DisabledOverlay active={isActiveProduct}>
            <div className="space-y-1.5">
              <label
                htmlFor="weight"
                className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]"
              >
                Trọng lượng (gram)
              </label>
              <input
                id="weight"
                type="number"
                min={0}
                step={1}
                {...register("weight")}
                className="w-24 rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="0"
              />
              {errors.weight && (
                <p className="text-sm text-red-600">{errors.weight.message}</p>
              )}
            </div>
          </DisabledOverlay>

          <DisabledOverlay active={isActiveProduct}>
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm">
              <div className="border-b border-[var(--border)] bg-[var(--muted)]/50 px-4 py-3">
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  Phương thức giao hàng
                </h3>
                <p className="mt-0.5 text-xs text-[var(--muted-foreground)]">
                  Ước tính phí theo trọng lượng sản phẩm
                </p>
              </div>
              <div className="p-3">
                <ul
                  className={`space-y-2 transition-opacity duration-200 ${
                    shippingFeeUpdating ? "opacity-50" : "opacity-100"
                  }`}
                >
                  {shippingMethods.map((m) => {
                    const fee = calcShippingFee(
                      debouncedWeight,
                      m.baseWeight,
                      m.baseFee,
                      m.weightStep,
                      m.extraFeePerStep,
                    );
                    return (
                      <li
                        key={m.id}
                        className="flex items-center justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 px-3 py-2.5 transition-colors hover:bg-[var(--muted)]/50"
                      >
                        <span className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                          <span
                            className="h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]"
                            aria-hidden
                          />
                          {m.name}
                        </span>
                        <span
                          className={`shrink-0 rounded-md bg-white px-2.5 py-1 tabular-nums text-[var(--primary)] shadow-sm ring-1 ring-[var(--border)] transition-[font-weight] duration-200 ${
                            shippingFeeUpdating ? "text-sm font-medium" : "text-sm font-bold"
                          }`}
                        >
                          {formatPrice(fee)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </DisabledOverlay>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              {isActiveProduct ? (
                <button
                  type="submit"
                  disabled={submitLoading}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitLoading ? "Đang lưu..." : submitButtonLabel ?? "Lưu thay đổi"}
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    disabled={submitLoading}
                    onClick={rhfHandleSubmit((data) => submitWithStatus(data, "DRAFT"))}
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm transition hover:bg-[var(--muted)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitLoading ? "Đang lưu..." : "Lưu (draft)"}
                  </button>
                  <button
                    type="button"
                    disabled={submitLoading}
                    onClick={rhfHandleSubmit(handlePublishClick)}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitLoading ? "Đang xử lý..." : "Publish sản phẩm lên marketplace"}
                  </button>
                </>
              )}
            </div>

            {/* Slot cho nút phụ ở footer form, vd: Xóa sản phẩm */}
            {footerAction && (
              <div className="flex flex-wrap items-center gap-2">
                {footerAction}
              </div>
            )}
          </div>
        </form>

        {showPublishConfirm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="publish-confirm-title"
          >
            <div className="max-w-md rounded-xl border border-[var(--border)] bg-white p-5 shadow-xl">
              <h2 id="publish-confirm-title" className="text-lg font-semibold text-[var(--foreground)]">
                Xác nhận publish sản phẩm
              </h2>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {PUBLISH_CONFIRM_MESSAGE}
              </p>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPublishConfirm(false);
                    setPendingPublishData(null);
                  }}
                  className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={handlePublishConfirm}
                  className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary)]/90"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
