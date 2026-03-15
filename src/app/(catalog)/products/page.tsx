"use client";

import { useProductsList } from "../_hooks/useProductsList";
import { AllProductsPagePanel } from "../_components/AllProductsPagePanel";
import { useMyShop } from "@/hooks/useMyShop";

export default function ProductsPage() {
  const { shop, loading: shopLoading, error: shopError } = useMyShop();
  const {
    products,
    loading: productsLoading,
    error: productsError,
    page,
    setPage,
    totalPages,
    tab,
    setTab,
    counts,
    search,
    minPrice,
    maxPrice,
    setSearch,
    setPriceRange,
    setCategoryFilter,
    sortField,
    sortDirection,
    setSort,
  } = useProductsList(shop?.id ?? 0);

  const isInitialLoading =
    shopLoading || (productsLoading && (!products || products.length === 0));

  if (isInitialLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col gap-4 px-4 py-4">
        <div className="h-7 w-48 rounded-md bg-[var(--muted)]/80 animate-pulse" />
        <div className="space-y-3 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-end gap-4">
            <div className="h-9 w-64 rounded-md bg-[var(--muted)]/80 animate-pulse" />
            <div className="h-9 w-28 rounded-md bg-[var(--muted)]/60 animate-pulse" />
            <div className="h-9 w-28 rounded-md bg-[var(--muted)]/60 animate-pulse" />
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
          <div className="border-b border-[var(--border)] bg-[var(--muted)]/80 px-6 py-4">
            <div className="h-4 w-40 rounded-md bg-[var(--muted)]/80 animate-pulse" />
          </div>
          <div className="divide-y divide-[var(--border)]/80">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="flex items-center gap-4 px-6 py-4 bg-[var(--muted)]/20 animate-pulse"
              >
                <div className="h-14 w-14 rounded-xl bg-[var(--muted)]/80" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/3 rounded-md bg-[var(--muted)]/80" />
                  <div className="h-3 w-1/4 rounded-md bg-[var(--muted)]/60" />
                </div>
                <div className="hidden h-8 w-24 rounded-full bg-[var(--muted)]/60 md:block" />
                <div className="hidden h-8 w-24 rounded-full bg-[var(--muted)]/60 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
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

  return (
    <AllProductsPagePanel
      products={products ?? []}
      shopId={shop.id}
      totalPages={totalPages}
      page={page}
      onPageChange={setPage}
      tab={tab}
      onTabChange={setTab}
      counts={counts}
      search={search}
      minPrice={minPrice}
      maxPrice={maxPrice}
      onSearchChange={setSearch}
      onPriceChange={setPriceRange}
      onCategoryChange={setCategoryFilter}
      sortField={sortField}
      sortDirection={sortDirection}
      onSortChange={setSort}
    />
  );
}
