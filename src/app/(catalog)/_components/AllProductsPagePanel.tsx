"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { AllProductsPagePanelProps, ProductListTab } from "../_types/product";
import { capitalizeVariationName, formatPrice, getImageUrl } from "../_utils/index2";
import { useCategoryTree } from "../_hooks/useCategoryTree";
import { CategorySelector } from "./CategorySelector";
import { getMarketplaceBaseUrl } from "@/lib/marketplace-url";

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

const TABS: { key: ProductListTab; label: string; showCount: boolean }[] = [
  { key: "all", label: "Tất cả", showCount: false },
  { key: "ACTIVE", label: "Đang hoạt động", showCount: true },
  { key: "DRAFT", label: "Chưa được đăng", showCount: true },
];

export function AllProductsPagePanel(props: AllProductsPagePanelProps) {
  const {
    products,
    shopId,
    totalPages,
    page,
    onPageChange,
    tab,
    onTabChange,
    counts,
    search,
    minPrice,
    maxPrice,
    onSearchChange,
    onPriceChange,
    onCategoryChange,
  } = props;
  const [localSearch, setLocalSearch] = useState(search);
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  const [localCategoryId, setLocalCategoryId] = useState<number | null>(null);
  const categoryFilter = useCategoryTree(null);

  const toggleSort = (field: "name" | "price" | "stock") => {
    props.onSortChange(
      field,
      props.sortField === field
        ? props.sortDirection === "asc"
          ? "desc"
          : props.sortDirection === "desc"
            ? null
            : "asc"
        : "asc"
    );
  };

  const renderSortIndicator = (field: "name" | "price" | "stock") => {
    if (props.sortField !== field || !props.sortDirection)
      return (
        <span className="ml-1 text-[14px] leading-none text-[var(--muted-foreground)]">
          ↕
        </span>
      );
    if (props.sortDirection === "asc") {
      return (
        <span className="ml-1 text-[14px] leading-none text-[var(--primary)]">
          ↑
        </span>
      );
    }
    return (
      <span className="ml-1 text-[14px] leading-none text-[var(--primary)]">
        ↓
      </span>
    );
  };

  return (
    <div className="flex min-h-screen flex-col gap-4 px-2 py-2">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Tất cả sản phẩm
        </h1>
      </header>

      <nav className="flex gap-1 border-b border-[var(--border)]" role="tablist">
        {TABS.map(({ key, label, showCount }) => {
          const count = counts && showCount ? (key === "ACTIVE" ? counts.active : counts.draft) : null;
          const isActive = tab === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onTabChange(key)}
              className={`rounded-t-lg border border-b-0 px-4 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "border-[var(--primary)] border-b-white bg-[var(--primary)]/10 text-[var(--primary)] shadow-sm"
                  : "border-transparent bg-transparent text-[var(--muted-foreground)] hover:bg-[var(--muted)]/50 hover:text-[var(--foreground)]"
              }`}
            >
              {label}
              {showCount && count !== null && (
                <span className="ml-1.5 text-[var(--muted-foreground)]">({count})</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bộ lọc: tên, giá, ngành hàng */}
      <section className="space-y-3 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-end gap-4">
          <div className="w-full md:w-1/2 lg:w-1/3 min-w-[200px] space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
              Tìm theo tên
            </label>
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              placeholder="Nhập tên sản phẩm..."
            />
          </div>

          <div className="flex flex-wrap items-end gap-2">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                Giá từ
              </label>
              <input
                type="number"
                min={0}
                value={localMinPrice}
                onChange={(e) => setLocalMinPrice(e.target.value)}
                className="w-28 rounded-md border border-[var(--input)] px-2 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Min"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                Đến
              </label>
              <input
                type="number"
                min={0}
                value={localMaxPrice}
                onChange={(e) => setLocalMaxPrice(e.target.value)}
                className="w-28 rounded-md border border-[var(--input)] px-2 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Max"
              />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => {
                onSearchChange(localSearch);
                onPriceChange(localMinPrice, localMaxPrice);
                onCategoryChange(localCategoryId ?? null);
              }}
              className="rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[var(--primary)]/90"
            >
              Tìm kiếm
            </button>
            <button
              type="button"
              onClick={() => {
                setLocalSearch("");
                setLocalMinPrice("");
                setLocalMaxPrice("");
                setLocalCategoryId(null);
                onSearchChange("");
                onPriceChange("", "");
                onCategoryChange(null);
                categoryFilter.resetCategory();
              }}
              className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--muted-foreground)] shadow-sm transition hover:bg-[var(--muted)]"
            >
              Reset
            </button>
          </div>
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
      </section>

      <section className="space-y-4 pb-6">
        {products.length === 0 ? (
          <p className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 px-4 py-8 text-center text-sm text-[var(--muted-foreground)]">
            Chưa có sản phẩm trong tab này.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-lg">
            <table className="min-w-full border-collapse text-[14px] md:text-[15px] lg:text-[16px]">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--muted)]/80">
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-[var(--muted-foreground)]">
                    Sản phẩm
                  </th>
                  <th className="px-5 py-4 text-left text-[13px] font-semibold text-[var(--muted-foreground)]">
                    Trạng thái
                  </th>
                  <th className="px-5 py-4 text-right text-[13px] font-semibold text-[var(--muted-foreground)]">
                    <button
                      type="button"
                      onClick={() => toggleSort("price")}
                      className="inline-flex items-center gap-1 cursor-pointer select-none"
                    >
                      <span>Giá</span>
                      {renderSortIndicator("price")}
                    </button>
                  </th>
                  <th className="px-5 py-4 text-right text-[13px] font-semibold text-[var(--muted-foreground)]">
                    <button
                      type="button"
                      onClick={() => toggleSort("stock")}
                      className="inline-flex items-center gap-1 cursor-pointer select-none"
                    >
                      <span>Tồn kho</span>
                      {renderSortIndicator("stock")}
                    </button>
                  </th>
                  <th className="px-5 py-4 text-center text-[13px] font-semibold text-[var(--muted-foreground)]">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, index) => {
                  const slug = slugify(p.name);
                  const marketplaceHref = `${getMarketplaceBaseUrl()}/${slug}.${shopId}.${p.id}`;
                  const isActiveProduct = p.status === "ACTIVE";

                  const variations = p.variations ?? [];
                  const prices = variations
                    .map((v) => Number(v.price))
                    .filter((n) => !Number.isNaN(n));
                  const minPriceValue =
                    prices.length > 0 ? Math.min(...prices) : null;
                  const maxPriceValue =
                    prices.length > 0 ? Math.max(...prices) : null;
                  const totalStock = variations.reduce(
                    (sum, v) => sum + (v.quantity ?? 0),
                    0
                  );

                  const rowBg =
                    index % 2 === 1 ? "bg-[var(--muted)]/20" : "bg-white";

                  return (
                    <Fragment key={p.id}>
                      <tr
                        className={`${rowBg} border-b border-[var(--border)]/80 hover:bg-[var(--muted)]/20 transition-colors`}
                      >
                        <td className="px-6 py-4 align-top">
                          <div className="flex items-start gap-4">
                            <Link
                              href={`/product/edit/${p.id}`}
                              className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-inner"
                            >
                              <Image
                                src={getImageUrl(p.img)}
                                alt={p.name}
                                fill
                                sizes="56px"
                                className="object-cover transition-transform group-hover:scale-105"
                                unoptimized
                              />
                            </Link>
                            <div className="min-w-0 max-w-[150px]">
                              <Link
                                href={`/product/edit/${p.id}`}
                                className="line-clamp-1 text-[13px] font-semibold text-[var(--foreground)] hover:underline"
                              >
                                {p.name}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 align-top">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                              isActiveProduct
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-neutral-100 text-neutral-500"
                            }`}
                          >
                            {isActiveProduct ? "Đang hoạt động" : "Đang ẩn"}
                          </span>
                        </td>
                        <td className="px-5 py-4 align-top text-right tabular-nums text-[var(--foreground)]">
                          {minPriceValue == null ? (
                            <span className="text-xs text-[var(--muted-foreground)]">
                              Chưa có giá
                            </span>
                          ) : maxPriceValue != null &&
                            maxPriceValue > minPriceValue ? (
                            <span className="whitespace-nowrap">
                              {formatPrice(minPriceValue)}{" "}
                              <span className="mx-1 text-[var(--muted-foreground)]">
                                -
                              </span>
                              {formatPrice(maxPriceValue)}
                            </span>
                          ) : (
                            <span className="whitespace-nowrap">
                              {formatPrice(minPriceValue)}
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4 align-top text-right tabular-nums text-[var(--foreground)]">
                          {totalStock}
                        </td>
                        <td className="px-5 py-4 align-top">
                          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
                            <Link
                              href={`/product/edit/${p.id}`}
                              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5"
                            >
                              Chỉnh sửa
                            </Link>
                            {isActiveProduct ? (
                              <Link
                                href={marketplaceHref}
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-[var(--primary)]/90"
                              >
                                Xem trên marketplace
                              </Link>
                            ) : (
                              <button
                                type="button"
                                disabled
                                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-medium text-white shadow-sm opacity-40 cursor-not-allowed"
                              >
                                Xem trên marketplace
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                      {variations.length > 1 &&
                        variations.map((v, i) => (
                          <tr
                            key={`${p.id}-var-row-${i}`}
                            className="border-b border-[var(--border)]/60 last:border-b-0 bg-[var(--muted)]/10"
                          >
                            <td className="px-6 py-1.5 align-top">
                              <div className="flex items-start gap-3">
                                {/* Spacer khớp với avatar 16x16 ở hàng sản phẩm */}
                                <div className="h-0 w-16 shrink-0" />
                                <div className="min-w-0 text-[13px] text-[var(--muted-foreground)]">
                                  <span className="line-clamp-1">
                                    {capitalizeVariationName(v.name)}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-1 align-top" />
                            <td className="px-5 py-1.5 align-top text-right tabular-nums text-[var(--foreground)]">
                              {formatPrice(v.price)}
                            </td>
                            <td className="px-5 py-1.5 align-top text-right tabular-nums text-[var(--muted-foreground)]">
                              {v.quantity}
                            </td>
                            <td className="px-5 py-1.5 align-top" />
                          </tr>
                        ))}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] bg-[var(--muted)]/20 px-6 py-4">
                <span className="text-sm text-[var(--muted-foreground)]">
                  Trang <span className="font-semibold text-[var(--foreground)]">{page + 1}</span> /{" "}
                  <span className="font-semibold text-[var(--foreground)]">{totalPages}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onPageChange(page - 1)}
                    disabled={page <= 0}
                    className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:bg-[var(--muted)] disabled:pointer-events-none disabled:opacity-50"
                  >
                    Trước
                  </button>
                  <button
                    type="button"
                    onClick={() => onPageChange(page + 1)}
                    disabled={page >= totalPages - 1}
                    className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:bg-[var(--muted)] disabled:pointer-events-none disabled:opacity-50"
                  >
                    Sau
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
