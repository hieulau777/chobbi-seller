"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";

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
  /** Giá trị ban đầu cho productName, productDescription (create = default, edit = từ API). */
  defaultValues?: Partial<ProductFormValues>;
  submitButtonLabel?: string;
  title?: string;
  /** Link "Quay lại" (vd: /product5 hoặc /products). */
  backHref?: string;
  backLabel?: string;
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
  backHref = "/product5",
  backLabel = "Quay lại danh sách",
}: ProductFormProps) {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      productName: defaultValues.productName ?? "",
      productDescription: defaultValues.productDescription ?? "",
    },
  });

  const handleConfirmCategorySelection = () => {
    if (!category.selectedLeaf) return;
    category.closeCategoryPopup();
    attributes.loadAttributes(category.selectedLeaf.id);
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

  const onSubmit = async (data: ProductFormValues) => {
    if (!salesInfo.validate()) return;
    if (!category.selectedLeaf) {
      setSubmitError("Vui lòng chọn ngành hàng.");
      return;
    }
    if (imageUpload.productImages.length === 0) {
      setSubmitError("Vui lòng thêm ít nhất 1 ảnh sản phẩm.");
      return;
    }

    setSubmitError(null);
    setSubmitLoading(true);

    try {
      const shopId = 1;
      const formData = prepareFormData({
        shopId,
        productId: productId ?? undefined,
        productName: data.productName.trim(),
        productDescription: (data.productDescription ?? "").trim(),
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
        ? `/api/product/update`
        : "/api/product/create";
      await axios.post(url, formData);

      if (productId) {
        window.location.assign(`/product/edit/${productId}`);
        return;
      } else {
        window.location.assign("/products");
        return;
      }
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
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen flex-col gap-4 px-4 py-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          {title && (
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              {title}
            </h1>
          )}
        </div>
        <Link
          href={backHref}
          className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5"
        >
          {backLabel}
        </Link>
      </header>

      <main className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm sm:p-6">
        <form className="space-y-5" onSubmit={rhfHandleSubmit(onSubmit)}>
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
              className="w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              placeholder="VD: Áo thun Zara form rộng"
            />
            {errors.productName && (
              <p className="text-sm text-red-600">{errors.productName.message}</p>
            )}
          </div>

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
          />

          <div className="space-y-2 pt-2">
            {submitError && (
              <p className="text-sm text-red-600">{submitError}</p>
            )}
            <button
              type="submit"
              disabled={submitLoading}
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitLoading
                ? "Đang lưu..."
                : submitButtonLabel ?? (productId ? "Lưu thay đổi" : "Lưu sản phẩm")}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
