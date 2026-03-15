"use client";

import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { useMyShop } from "@/hooks/useMyShop";
import { SelectProductsModal, type ShopCategoryUpdated } from "@/components/SelectProductsModal";

type ShopCategoryProductDto = {
  id: number;
  name: string;
  thumbnail: string | null;
  minPrice: number | null;
  totalStock: number;
};

type ShopCategoryResponse = {
  id: number;
  name: string;
  sortOrder: number;
  isActive: boolean;
  shopId: number;
  products: ShopCategoryProductDto[];
};

async function fetchShopCategories() {
  const res = await apiClient.get<ShopCategoryResponse[]>("/shop/categories");
  return res.data ?? [];
}

type ShopBannerDto = {
  id: number;
  imagePath: string;
  sortOrder: number;
};

const MAX_BANNERS = 2;

function BannerTab({ shopId }: { shopId: number }) {
  const queryClient = useQueryClient();
  const [sortOrderMode, setSortOrderMode] = useState(false);
  const [orderedBannerIds, setOrderedBannerIds] = useState<number[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: banners = [], isLoading } = useQuery<ShopBannerDto[]>({
    queryKey: ["shop-banners"],
    queryFn: async () => {
      const res = await apiClient.get<ShopBannerDto[]>("/shop/banners");
      return res.data ?? [];
    },
    enabled: !!shopId,
  });

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const form = new FormData();
      form.append("file", file);
      const res = await apiClient.post<ShopBannerDto>("/shop/banners", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shop-banners"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (bannerId: number) => {
      await apiClient.delete(`/shop/banners/${bannerId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shop-banners"] });
    },
  });

  const updateOrderMutation = useMutation({
    mutationFn: async (bannerIds: number[]) => {
      const res = await apiClient.put<ShopBannerDto[]>("/shop/banners/order", bannerIds);
      return res.data ?? [];
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["shop-banners"], data);
      setSortOrderMode(false);
      setOrderedBannerIds([]);
    },
  });

  function bannerImageSrc(path: string) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    if (path.startsWith("/")) return path;
    return `/api/backend/static/${path}`;
  }

  function startSortOrderMode() {
    setOrderedBannerIds(banners.map((b) => b.id));
    setSortOrderMode(true);
  }

  function moveItem(fromIndex: number, toIndex: number) {
    if (fromIndex === toIndex) return;
    setOrderedBannerIds((prev) => {
      const next = [...prev];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  }

  function handleDragStart(e: React.DragEvent, index: number) {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  function handleDrop(e: React.DragEvent, toIndex: number) {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (Number.isNaN(fromIndex) || fromIndex === toIndex) return;
    moveItem(fromIndex, toIndex);
    setDraggedIndex(null);
  }
  function handleDragEnd() {
    setDraggedIndex(null);
  }

  if (isLoading) {
    return <div className="p-4 text-sm text-[var(--muted-foreground)]">Đang tải banner...</div>;
  }

  return (
    <div className="space-y-4">
      {sortOrderMode ? (
        <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm text-[var(--muted-foreground)]">
            Kéo thả để thay đổi thứ tự banner. Sau đó bấm Xác nhận để lưu.
          </p>
          <ul className="space-y-3">
            {orderedBannerIds.map((id, index) => {
              const banner = banners.find((b) => b.id === id);
              if (!banner) return null;
              return (
                <li
                  key={banner.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`flex cursor-grab items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 p-3 active:cursor-grabbing ${draggedIndex === index ? "opacity-60" : ""}`}
                >
                  <span className="text-[var(--muted-foreground)]" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                  </span>
                  <div className="relative h-16 w-28 overflow-hidden rounded border border-[var(--border)] bg-[var(--muted)]/30">
                    <Image
                      src={bannerImageSrc(banner.imagePath)}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="112px"
                      unoptimized={bannerImageSrc(banner.imagePath).startsWith("/api/backend")}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => { setSortOrderMode(false); setOrderedBannerIds([]); }}
              className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
            >
              Hủy
            </button>
            <button
              type="button"
              disabled={updateOrderMutation.isPending}
              onClick={() => updateOrderMutation.mutate(orderedBannerIds)}
              className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary)]/90 disabled:opacity-70"
            >
              {updateOrderMutation.isPending ? "Đang lưu..." : "Xác nhận"}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              type="button"
              onClick={startSortOrderMode}
              disabled={banners.length === 0}
              className="inline-flex items-center rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
            >
              Điều chỉnh thứ tự
            </button>
            <label className="inline-flex cursor-pointer items-center rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[var(--primary)]/90 has-[:disabled]:opacity-70">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                disabled={banners.length >= MAX_BANNERS || uploadMutation.isPending}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    uploadMutation.mutate(file);
                    e.target.value = "";
                  }
                }}
              />
              Upload banner
            </label>
          </div>
          <p className="text-xs text-[var(--muted-foreground)]">
            Tối đa {MAX_BANNERS} banner. Định dạng ảnh.
          </p>
          {banners.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--muted)]/20 p-8 text-center text-sm text-[var(--muted-foreground)]">
              Chưa có banner. Bấm &quot;Upload banner&quot; để thêm (tối đa {MAX_BANNERS}).
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {banners.map((banner) => (
                <div
                  key={banner.id}
                  className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-[var(--muted)]/30">
                    <Image
                      src={bannerImageSrc(banner.imagePath)}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      unoptimized={bannerImageSrc(banner.imagePath).startsWith("/api/backend")}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-3">
                    <p className="text-xs text-[var(--muted-foreground)]">Thứ tự: {banner.sortOrder + 1}</p>
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof window !== "undefined" && window.confirm("Xóa banner này?")) {
                          deleteMutation.mutate(banner.id);
                        }
                      }}
                      disabled={deleteMutation.isPending}
                      className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 disabled:opacity-50"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function ShopDecoratorPage() {
  const { shop, loading: shopLoading, error: shopError } = useMyShop();
  const queryClient = useQueryClient();

  const [activeTab, setActiveTab] = useState<"banner" | "category">("category");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [createError, setCreateError] = useState<string | null>(null);
  const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(null);
  const [selectedCategoryForProducts, setSelectedCategoryForProducts] = useState<{
    id: number;
    name: string;
    productIds: number[];
  } | null>(null);
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState("");
  const [selectedProductIdsByCategory, setSelectedProductIdsByCategory] = useState<Record<number, number[]>>({});
  const [sortOrderMode, setSortOrderMode] = useState(false);
  const [orderedCategoryIds, setOrderedCategoryIds] = useState<number[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  function productThumbnailSrc(thumbnail: string | null): string | null {
    if (!thumbnail) return null;
    if (thumbnail.startsWith("http")) return thumbnail;
    return thumbnail.startsWith("/api/backend/") ? thumbnail : `/api/backend/${thumbnail}`;
  }

  function handleProductsConfirm(updatedCategory: ShopCategoryUpdated) {
    queryClient.setQueryData<ShopCategoryResponse[]>(["shop-categories"], (old) =>
      old?.map((c) => (c.id === updatedCategory.id ? { ...c, products: updatedCategory.products } : c)) ?? []
    );
    setSelectedCategoryForProducts(null);
  }

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery<ShopCategoryResponse[]>({
    queryKey: ["shop-categories"],
    queryFn: fetchShopCategories,
    enabled: !!shop,
  });

  const createMutation = useMutation({
    mutationFn: async (name: string) => {
      await apiClient.post("/shop/categories", { name, productIds: [] });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shop-categories"] });
      setShowCreateModal(false);
      setNewCategoryName("");
      setCreateError(null);
    },
    onError: (err: any) => {
      const msg =
        err?.response?.data?.message ??
        "Không thể tạo danh mục. Vui lòng thử lại.";
      setCreateError(msg);
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async (payload: { id: number; isActive: boolean }) => {
      await apiClient.post("/shop/categories/status", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shop-categories"] });
    },
  });

  const updateNameMutation = useMutation({
    mutationFn: async ({ categoryId, name }: { categoryId: number; name: string }) => {
      const res = await apiClient.patch<ShopCategoryResponse>(`/shop/categories/${categoryId}`, { name });
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData<ShopCategoryResponse[]>(["shop-categories"], (old) =>
        old?.map((c) => (c.id === data.id ? { ...c, name: data.name } : c)) ?? []
      );
      setEditingCategoryId(null);
      setEditingName("");
    },
  });

  const removeProductsMutation = useMutation({
    mutationFn: async ({ categoryId, productIdsToKeep }: { categoryId: number; productIdsToKeep: number[] }) => {
      await apiClient.put(`/shop/categories/${categoryId}/products`, productIdsToKeep);
    },
    onSuccess: (_, { categoryId }) => {
      queryClient.invalidateQueries({ queryKey: ["shop-categories"] });
      setSelectedProductIdsByCategory((prev) => ({ ...prev, [categoryId]: [] }));
    },
  });

  function toggleExpand(catId: number) {
    setExpandedCategoryId((id) => (id === catId ? null : catId));
  }

  function getSelectedForCategory(catId: number): number[] {
    return selectedProductIdsByCategory[catId] ?? [];
  }

  function setSelectedForCategory(catId: number, ids: number[]) {
    setSelectedProductIdsByCategory((prev) => ({ ...prev, [catId]: ids }));
  }

  function toggleProductSelection(catId: number, productId: number) {
    const current = getSelectedForCategory(catId);
    const next = current.includes(productId)
      ? current.filter((id) => id !== productId)
      : [...current, productId];
    setSelectedForCategory(catId, next);
  }

  function toggleSelectAll(cat: ShopCategoryResponse) {
    const products = cat.products ?? [];
    const current = getSelectedForCategory(cat.id);
    const allSelected = products.length > 0 && current.length === products.length;
    setSelectedForCategory(cat.id, allSelected ? [] : products.map((p) => p.id));
  }

  function handleRemoveSelected(cat: ShopCategoryResponse) {
    const toRemove = getSelectedForCategory(cat.id);
    if (toRemove.length === 0) return;
    const productIdsToKeep = (cat.products ?? []).map((p) => p.id).filter((id) => !toRemove.includes(id));
    removeProductsMutation.mutate({ categoryId: cat.id, productIdsToKeep });
  }

  const updateOrderMutation = useMutation({
    mutationFn: async (categoryIds: number[]) => {
      const res = await apiClient.put<ShopCategoryResponse[]>("/shop/categories/order", categoryIds);
      return res.data ?? [];
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["shop-categories"], data);
      setSortOrderMode(false);
      setOrderedCategoryIds([]);
    },
  });

  function startSortOrderMode() {
    setOrderedCategoryIds(categories.map((c) => c.id));
    setSortOrderMode(true);
  }

  function moveItem(fromIndex: number, toIndex: number) {
    if (fromIndex === toIndex) return;
    setOrderedCategoryIds((prev) => {
      const next = [...prev];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  }

  function handleDragStart(e: React.DragEvent, index: number) {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function handleDrop(e: React.DragEvent, toIndex: number) {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (Number.isNaN(fromIndex) || fromIndex === toIndex) return;
    moveItem(fromIndex, toIndex);
    setDraggedIndex(null);
  }

  function handleDragEnd() {
    setDraggedIndex(null);
  }

  if (shopLoading || categoriesLoading) {
    return <div className="p-4">Đang tải...</div>;
  }

  if (shopError) {
    return <div className="p-4 text-red-500">{shopError}</div>;
  }

  if (!shop) {
    return (
      <div className="p-4">
        Bạn chưa có shop. Hãy tạo shop trước khi trang trí shop.
      </div>
    );
  }

  if (categoriesError) {
    return (
      <div className="p-4 text-red-500">
        Không thể tải danh mục shop. Vui lòng thử lại.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">
          Trang trí shop
        </h1>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Tùy chỉnh banner và danh mục hiển thị trên trang shop của bạn.
        </p>
      </div>

      {/* Tabs */}
      <nav
        className="flex gap-2 border-b border-[var(--border)] text-sm font-medium"
        role="tablist"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "banner"}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
            activeTab === "banner"
              ? "border-[var(--primary)] text-[var(--primary)]"
              : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--muted)]"
          }`}
          onClick={() => setActiveTab("banner")}
        >
          Banner của shop
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "category"}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
            activeTab === "category"
              ? "border-[var(--primary)] text-[var(--primary)]"
              : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--muted)]"
          }`}
          onClick={() => setActiveTab("category")}
        >
          Danh mục của shop
        </button>
      </nav>

      {/* Content */}
      {activeTab === "banner" && (
        <BannerTab shopId={shop?.id ?? 0} />
      )}

      {activeTab === "category" && (
        <div className="space-y-4">
          {sortOrderMode ? (
            <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm text-[var(--muted-foreground)]">
                Kéo thả để thay đổi thứ tự danh mục. Sau đó bấm Xác nhận để lưu.
              </p>
              <ul className="space-y-2">
                {orderedCategoryIds.map((id, index) => {
                  const cat = categories.find((c) => c.id === id);
                  if (!cat) return null;
                  return (
                    <li
                      key={cat.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragEnd={handleDragEnd}
                      className={`flex cursor-grab items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 px-4 py-3 active:cursor-grabbing ${
                        draggedIndex === index ? "opacity-60" : ""
                      }`}
                    >
                      <span className="text-[var(--muted-foreground)]" aria-hidden>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                        </svg>
                      </span>
                      <span className="font-medium text-[var(--foreground)]">{cat.name}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSortOrderMode(false);
                    setOrderedCategoryIds([]);
                  }}
                  className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  disabled={updateOrderMutation.isPending}
                  onClick={() => updateOrderMutation.mutate(orderedCategoryIds)}
                  className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary)]/90 disabled:opacity-70"
                >
                  {updateOrderMutation.isPending ? "Đang lưu..." : "Xác nhận"}
                </button>
              </div>
            </div>
          ) : (
            <>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
              onClick={startSortOrderMode}
              disabled={categories.length === 0}
            >
              Điều chỉnh thứ tự
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[var(--primary)]/90"
              onClick={() => {
                setShowCreateModal(true);
                setCreateError(null);
              }}
            >
              + Thêm danh mục
            </button>
          </div>

          {categories.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--muted)]/20 p-6 text-sm text-[var(--muted-foreground)]">
              Chưa có danh mục nào. Hãy bấm &quot;Thêm danh mục&quot; để tạo
              mới.
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-[var(--muted)]/40 text-left text-xs font-semibold text-[var(--muted-foreground)] tracking-wide">
                  <tr>
                    <th className="px-4 py-3">Tên danh mục</th>
                    <th className="w-32 px-4 py-3 text-center">Sản phẩm</th>
                    <th className="w-32 px-4 py-3 text-center">Bật / tắt</th>
                    <th className="w-40 px-4 py-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => (
                    <Fragment key={cat.id}>
                      <tr className="border-t border-[var(--border)] hover:bg-[var(--muted)]/20">
                        <td className="px-4 py-3 align-middle">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => toggleExpand(cat.id)}
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition hover:bg-[var(--muted)]/80 ${
                                expandedCategoryId === cat.id
                                  ? "bg-[var(--primary)]/20 text-[var(--primary)]"
                                  : "bg-[var(--muted)]/60 text-[var(--muted-foreground)]"
                              }`}
                              title={expandedCategoryId === cat.id ? "Thu gọn" : "Xem sản phẩm"}
                              aria-label={expandedCategoryId === cat.id ? "Thu gọn" : "Xem sản phẩm"}
                            >
                              <svg
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  expandedCategoryId === cat.id ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {editingCategoryId === cat.id ? (
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  value={editingName}
                                  onChange={(e) => setEditingName(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Escape") {
                                      setEditingCategoryId(null);
                                      setEditingName("");
                                    }
                                  }}
                                  autoFocus
                                  className="max-w-[200px] rounded border border-[var(--border)] px-2 py-1 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                                />
                                <button
                                  type="button"
                                  disabled={!editingName.trim() || updateNameMutation.isPending}
                                  onClick={() => {
                                    if (editingName.trim()) {
                                      updateNameMutation.mutate({ categoryId: cat.id, name: editingName.trim() });
                                    }
                                  }}
                                  className="rounded bg-[var(--primary)] px-2.5 py-1 text-xs font-medium text-white hover:bg-[var(--primary)]/90 disabled:opacity-50"
                                >
                                  Xác nhận
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingCategoryId(null);
                                    setEditingName("");
                                  }}
                                  className="rounded border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
                                >
                                  Hủy
                                </button>
                              </div>
                            ) : (
                              <>
                                <span className="text-sm font-medium text-[var(--foreground)]">
                                  {cat.name}
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEditingCategoryId(cat.id);
                                    setEditingName(cat.name);
                                  }}
                                  className="rounded p-1 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                                  title="Sửa tên danh mục"
                                  aria-label="Sửa tên danh mục"
                                >
                                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </button>
                              </>
                            )}
                            <span className="text-xs text-[var(--muted-foreground)]">
                              {expandedCategoryId === cat.id ? "Thu gọn" : "Xem sản phẩm"}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center align-middle text-sm text-[var(--foreground)]">
                          {cat.products?.length ?? 0}
                        </td>
                        <td className="px-4 py-3 text-center align-middle">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMutation.mutate({
                                id: cat.id,
                                isActive: !cat.isActive,
                              });
                            }}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full border px-1 transition-colors ${
                              cat.isActive
                                ? "bg-[var(--primary)] border-[var(--primary)]"
                                : "bg-[var(--muted-foreground)]/25 border-[var(--border)]"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                                cat.isActive ? "translate-x-5" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </td>
                        <td className="px-4 py-3 text-right align-middle">
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategoryForProducts({
                                id: cat.id,
                                name: cat.name,
                                productIds: cat.products?.map((p) => p.id) ?? [],
                              });
                            }}
                          >
                            Thêm sản phẩm
                          </button>
                        </td>
                      </tr>
                      {expandedCategoryId === cat.id && (
                        <tr key={`${cat.id}-products`}>
                          <td colSpan={4} className="bg-[var(--muted)]/15 p-0 align-top">
                            <div className="border-t border-[var(--border)]/60 px-5 py-4">
                              <div className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-inner">
                                {cat.products && cat.products.length > 0 ? (
                                  <>
                                    <div className="mb-3 flex items-center justify-between">
                                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                                        Sản phẩm trong danh mục
                                      </h3>
                                      <button
                                        type="button"
                                        disabled={
                                          getSelectedForCategory(cat.id).length === 0 ||
                                          removeProductsMutation.isPending
                                        }
                                        onClick={() => handleRemoveSelected(cat)}
                                        className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                                      >
                                        Xóa sản phẩm chọn
                                      </button>
                                    </div>
                                    <table className="min-w-full border-collapse text-sm">
                                      <thead>
                                        <tr className="border-b border-[var(--border)] text-left text-xs font-semibold text-[var(--muted-foreground)]">
                                          <th className="w-10 py-2 pr-2">
                                            <input
                                              type="checkbox"
                                              checked={
                                                cat.products.length > 0 &&
                                                getSelectedForCategory(cat.id).length === cat.products.length
                                              }
                                              onChange={() => toggleSelectAll(cat)}
                                              className="h-4 w-4 rounded border-[var(--border)]"
                                            />
                                          </th>
                                          <th className="py-2 pr-2">Tên sản phẩm</th>
                                          <th className="w-28 py-2 pr-2 text-right">Giá</th>
                                          <th className="w-20 py-2 pr-2 text-right">Kho</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {cat.products.map((p) => (
                                          <tr
                                            key={p.id}
                                            className="border-b border-[var(--border)]/70 last:border-0 hover:bg-[var(--muted)]/20"
                                          >
                                            <td className="py-2 pr-2 align-middle">
                                              <input
                                                type="checkbox"
                                                checked={getSelectedForCategory(cat.id).includes(p.id)}
                                                onChange={() => toggleProductSelection(cat.id, p.id)}
                                                className="h-4 w-4 rounded border-[var(--border)]"
                                              />
                                            </td>
                                            <td className="py-2 pr-2 align-middle">
                                              <div className="flex items-center gap-2">
                                                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded border border-[var(--border)] bg-[var(--muted)]/30">
                                                  {productThumbnailSrc(p.thumbnail) ? (
                                                    <Image
                                                      src={productThumbnailSrc(p.thumbnail)!}
                                                      alt=""
                                                      fill
                                                      className="object-cover"
                                                      sizes="36px"
                                                      unoptimized={productThumbnailSrc(p.thumbnail)?.startsWith("/api/backend")}
                                                    />
                                                  ) : (
                                                    <span className="flex h-full w-full items-center justify-center text-xs text-[var(--muted-foreground)]">—</span>
                                                  )}
                                                </div>
                                                <span className="font-medium text-[var(--foreground)]">{p.name}</span>
                                              </div>
                                            </td>
                                            <td className="py-2 pr-2 text-right text-[var(--foreground)]">
                                              {p.minPrice != null ? p.minPrice.toLocaleString("vi-VN") + " ₫" : "—"}
                                            </td>
                                            <td className="py-2 pr-2 text-right text-[var(--foreground)]">
                                              {p.totalStock ?? 0}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </>
                                ) : (
                                  <p className="rounded-lg bg-[var(--muted)]/30 py-4 text-center text-sm text-[var(--muted-foreground)]">
                                    Chưa có sản phẩm nào. Bấm &quot;Thêm sản phẩm&quot; để thêm.
                                  </p>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
            </>
          )}
        </div>
      )}

      {/* Modal thêm danh mục */}
      {showCreateModal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg">
            <h2 className="mb-3 text-base font-semibold text-[var(--foreground)]">
              Thêm danh mục shop
            </h2>
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-[var(--muted-foreground)]">
                  Tên danh mục
                </label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full rounded-md border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                  placeholder="Nhập tên danh mục"
                />
              </div>
              {createError && (
                <div className="text-xs text-red-500">{createError}</div>
              )}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--foreground)] hover:bg-[var(--muted)]"
                onClick={() => {
                  setShowCreateModal(false);
                  setNewCategoryName("");
                  setCreateError(null);
                }}
              >
                Hủy
              </button>
              <button
                type="button"
                className="rounded-md bg-[var(--primary)] px-3 py-1.5 text-sm font-medium text-white hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={!newCategoryName.trim() || createMutation.isPending}
                onClick={() => {
                  if (!newCategoryName.trim()) return;
                  createMutation.mutate(newCategoryName.trim());
                }}
              >
                Thêm danh mục
              </button>
            </div>
          </div>
        </div>
      )}

      <SelectProductsModal
        open={!!selectedCategoryForProducts}
        onClose={() => setSelectedCategoryForProducts(null)}
        shopId={shop?.id ?? 0}
        categoryId={selectedCategoryForProducts?.id ?? 0}
        categoryName={selectedCategoryForProducts?.name ?? ""}
        initialProductIds={selectedCategoryForProducts?.productIds ?? []}
        onConfirm={handleProductsConfirm}
      />
    </div>
  );
}

