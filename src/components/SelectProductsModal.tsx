"use client";

import { useEffect, useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import apiClient from "@/lib/api-client";
import { useCategoryTree } from "@/app/(catalog)/_hooks/useCategoryTree";
import { CategorySelector } from "@/app/(catalog)/_components/CategorySelector";

type VariationDto = {
  name: string;
  price: number;
  quantity: number;
};

type ProductSellerDto = {
  id: number;
  img: string | null;
  name: string;
  status?: string;
  variations: VariationDto[];
};

function minPrice(variations: VariationDto[]): number | null {
  if (!variations?.length) return null;
  const prices = variations.map((v) => (v.price != null ? Number(v.price) : NaN)).filter((n) => !Number.isNaN(n));
  return prices.length ? Math.min(...prices) : null;
}

function totalStock(variations: VariationDto[]): number {
  if (!variations?.length) return 0;
  return variations.reduce((sum, v) => sum + (v.quantity ?? 0), 0);
}

function imageSrc(img: string | null): string | null {
  if (!img) return null;
  if (img.startsWith("http")) return img;
  return img.startsWith("/api/backend/") ? img : `/api/backend/${img}`;
}

function SelectAllCheckbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return (
    <input
      type="checkbox"
      ref={ref}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded border-[var(--border)]"
    />
  );
}

export type ShopCategoryUpdated = {
  id: number;
  name: string;
  products: {
    id: number;
    name: string;
    thumbnail: string | null;
    minPrice: number | null;
    totalStock: number;
  }[];
};

export type SelectProductsModalProps = {
  open: boolean;
  onClose: () => void;
  shopId: number;
  categoryId: number;
  categoryName: string;
  initialProductIds?: number[];
  onConfirm?: (updatedCategory: ShopCategoryUpdated) => void;
};

export function SelectProductsModal({
  open,
  onClose,
  shopId,
  categoryId,
  categoryName,
  initialProductIds = [],
  onConfirm,
}: SelectProductsModalProps) {
  const queryClient = useQueryClient();
  const [nameKeyword, setNameKeyword] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState<string>("");
  const [maxPriceFilter, setMaxPriceFilter] = useState<string>("");
  const [localCategoryId, setLocalCategoryId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(() => new Set(initialProductIds));
  const [appliedParams, setAppliedParams] = useState<Record<string, string | number>>({});
  const categoryFilter = useCategoryTree(null);

  const runSearch = () => {
    const p: Record<string, string | number> = {};
    if (nameKeyword.trim()) p.name = nameKeyword.trim();
    const min = minPriceFilter.trim() ? parseFloat(minPriceFilter) : NaN;
    const max = maxPriceFilter.trim() ? parseFloat(maxPriceFilter) : NaN;
    if (!Number.isNaN(min)) p.minPrice = min;
    if (!Number.isNaN(max)) p.maxPrice = max;
    if (localCategoryId != null) p.categoryId = localCategoryId;
    setAppliedParams(p);
  };

  const { data: products = [], isLoading } = useQuery<ProductSellerDto[]>({
    queryKey: ["product-seller-list", appliedParams],
    queryFn: async () => {
      const res = await apiClient.get<{ content: ProductSellerDto[] }>("/product/seller/list", {
        params: { ...appliedParams, page: 0, size: 10 },
      });
      return res.data?.content ?? [];
    },
    enabled: open && !!shopId,
  });

  const updateProductsMutation = useMutation({
    mutationFn: async (productIds: number[]) => {
      const res = await apiClient.put<ShopCategoryUpdated>(
        `/shop/categories/${categoryId}/products`,
        productIds
      );
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["shop-categories"] });
      onConfirm?.(data);
      onClose();
    },
  });

  useEffect(() => {
    if (open) {
      setSelectedIds(new Set(initialProductIds));
      setAppliedParams({});
      setNameKeyword("");
      setMinPriceFilter("");
      setMaxPriceFilter("");
      setLocalCategoryId(null);
      categoryFilter.resetCategory();
    }
  }, [open, categoryId, initialProductIds]);

  const allSelected = products.length > 0 && products.every((p) => selectedIds.has(p.id));
  const someSelected = products.some((p) => selectedIds.has(p.id));

  const toggleOne = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (allSelected) setSelectedIds(new Set());
    else setSelectedIds(new Set(products.map((p) => p.id)));
  };

  const handleConfirm = () => {
    updateProductsMutation.mutate(Array.from(selectedIds));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
      <div className="flex min-h-[85vh] max-h-[95vh] w-full max-w-4xl flex-col rounded-xl bg-white shadow-xl">
        <div className="flex-shrink-0 border-b border-[var(--border)] px-5 py-4">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Chọn sản phẩm cho danh mục &quot;{categoryName}&quot;
          </h2>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-5">
          <div className="flex flex-wrap items-end gap-2">
            <input
              type="text"
              value={nameKeyword}
              onChange={(e) => setNameKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runSearch()}
              placeholder="Tên sản phẩm"
              className="w-40 rounded-md border border-[var(--border)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />
            <input
              type="number"
              min={0}
              value={minPriceFilter}
              onChange={(e) => setMinPriceFilter(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runSearch()}
              placeholder="Giá min"
              className="w-24 rounded-md border border-[var(--border)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />
            <input
              type="number"
              min={0}
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runSearch()}
              placeholder="Giá max"
              className="w-24 rounded-md border border-[var(--border)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />
            <button
              type="button"
              onClick={runSearch}
              className="rounded-md bg-[var(--primary)] px-3 py-1.5 text-sm font-medium text-white hover:bg-[var(--primary)]/90"
            >
              Tìm kiếm
            </button>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 max-w-md">
            <CategorySelector
              selectedLeaf={categoryFilter.selectedLeaf}
              selectedPathLabel={categoryFilter.selectedPathLabel}
              loadingCategories={categoryFilter.loadingCategories}
              categoryError={categoryFilter.categoryError}
              isCategoryOpen={categoryFilter.isCategoryOpen}
              categoryColumns={categoryFilter.categoryColumns}
              categoryPath={categoryFilter.categoryPath}
              onOpenPopup={categoryFilter.openCategoryPopup}
              onClosePopup={categoryFilter.closeCategoryPopup}
              onCategoryClick={categoryFilter.handleCategoryClick}
              onConfirmSelection={() => {
                const id = categoryFilter.selectedLeaf?.id ?? null;
                setLocalCategoryId(id);
                categoryFilter.closeCategoryPopup();
              }}
            />
          </div>

          <div className="min-h-[320px] flex-1 overflow-y-auto rounded-lg border border-[var(--border)]">
            {isLoading ? (
              <div className="flex items-center justify-center py-12 text-sm text-[var(--muted-foreground)]">
                Đang tải sản phẩm...
              </div>
            ) : products.length === 0 ? (
              <div className="py-12 text-center text-sm text-[var(--muted-foreground)]">
                Không có sản phẩm nào phù hợp.
              </div>
            ) : (
              <table className="min-w-full border-collapse text-sm">
                <thead className="sticky top-0 bg-[var(--muted)]/50 text-left text-xs font-semibold text-[var(--muted-foreground)]">
                  <tr>
                    <th className="w-12 border-b border-[var(--border)] px-3 py-2">
                      <SelectAllCheckbox
                        checked={allSelected}
                        indeterminate={someSelected && !allSelected}
                        onChange={toggleAll}
                      />
                    </th>
                    <th className="border-b border-[var(--border)] px-3 py-2">Ảnh</th>
                    <th className="border-b border-[var(--border)] px-3 py-2">Tên sản phẩm</th>
                    <th className="border-b border-[var(--border)] px-3 py-2">Trạng thái</th>
                    <th className="border-b border-[var(--border)] px-3 py-2 text-right">Giá</th>
                    <th className="border-b border-[var(--border)] px-3 py-2 text-right">Tồn kho</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => {
                    const price = minPrice(p.variations);
                    const stock = totalStock(p.variations);
                    return (
                      <tr
                        key={p.id}
                        className="border-b border-[var(--border)]/70 hover:bg-[var(--muted)]/20"
                      >
                        <td className="px-3 py-2">
                          <input
                            type="checkbox"
                            checked={selectedIds.has(p.id)}
                            onChange={() => toggleOne(p.id)}
                            className="h-4 w-4 rounded border-[var(--border)]"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <div className="relative h-12 w-12 overflow-hidden rounded border border-[var(--border)] bg-[var(--muted)]/30">
                            {imageSrc(p.img) ? (
                              <Image
                                src={imageSrc(p.img)!}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="48px"
                                unoptimized={imageSrc(p.img)?.startsWith("/api/backend")}
                              />
                            ) : (
                              <span className="flex h-full w-full items-center justify-center text-xs text-[var(--muted-foreground)]">
                                —
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-2 font-medium text-[var(--foreground)]">{p.name}</td>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                              p.status === "ACTIVE"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-neutral-100 text-neutral-500"
                            }`}
                          >
                            {p.status === "ACTIVE" ? "Đang hoạt động" : "Đang ẩn"}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-right">
                          {price != null ? price.toLocaleString("vi-VN") + " ₫" : "—"}
                        </td>
                        <td className="px-3 py-2 text-right">{stock}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="flex flex-shrink-0 justify-end gap-2 border-t border-[var(--border)] px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={updateProductsMutation.isPending}
            className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary)]/90 disabled:opacity-70"
          >
            {updateProductsMutation.isPending ? "Đang lưu..." : "Xác nhận"}
          </button>
        </div>
      </div>
    </div>
  );
}
