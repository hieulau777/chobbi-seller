"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { useMyShop } from "@/hooks/useMyShop";
import { SelectPromotionProductsModal } from "@/components/SelectPromotionProductsModal";

type ShopPromotionProductDto = {
  id: number;
  name: string;
  thumbnail: string | null;
  minPrice: number | null;
  totalStock: number;
};

export type ShopPromotionResponse = {
  id: number;
  shopId: number;
  name: string;
  startAt: string;
  endAt: string;
  active: boolean;
  products: ShopPromotionProductDto[];
};

function productThumbnailSrc(thumbnail: string | null): string | null {
  if (!thumbnail) return null;
  if (thumbnail.startsWith("http")) return thumbnail;
  return thumbnail.startsWith("/api/backend/") ? thumbnail : `/api/backend/${thumbnail}`;
}

function formatDatetime(value: string) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString("vi-VN", {
    hour12: false,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function toBackendDateTime(value: string) {
  if (!value) return null;
  return value.length === 16 ? `${value}:00` : value;
}

export default function ShopPromotionsPage() {
  const { shop, loading: shopLoading, error: shopError } = useMyShop();
  const queryClient = useQueryClient();

  const [expandedPromotionId, setExpandedPromotionId] = useState<number | null>(null);
  const [formName, setFormName] = useState("");
  const [formStartAt, setFormStartAt] = useState("");
  const [formEndAt, setFormEndAt] = useState("");
  const [selectedPromotion, setSelectedPromotion] = useState<ShopPromotionResponse | null>(null);

  const { data: promotions = [], isLoading, error } = useQuery<ShopPromotionResponse[]>({
    queryKey: ["shop-promotions"],
    queryFn: async () => {
      const res = await apiClient.get<ShopPromotionResponse[]>("/promotion/seller");
      return res.data ?? [];
    },
    enabled: !!shop,
  });

  const createPromotionMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        name: formName.trim(),
        startAt: toBackendDateTime(formStartAt),
        endAt: toBackendDateTime(formEndAt),
        productIds: [] as number[],
      };
      if (!payload.name || !payload.startAt || !payload.endAt) {
        throw new Error("Vui lòng nhập đầy đủ thông tin campaign");
      }
      await apiClient.post("/promotion/seller", payload);
    },
    onSuccess: () => {
      setFormName("");
      setFormStartAt("");
      setFormEndAt("");
      queryClient.invalidateQueries({ queryKey: ["shop-promotions"] });
    },
  });

  if (shopLoading || isLoading) {
    return <div className="p-4">Đang tải...</div>;
  }

  if (shopError) {
    return <div className="p-4 text-red-500">{shopError}</div>;
  }

  if (!shop) {
    return (
      <div className="p-4">
        Bạn chưa có shop. Hãy tạo shop trước khi cấu hình khuyến mãi.
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Không thể tải khuyến mãi của shop. Vui lòng thử lại.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-base font-semibold text-[var(--foreground)]">
          Khuyến mãi của shop
        </h1>
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
          Tạo campaign khuyến mãi mới
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="space-y-1.5 md:col-span-1">
            <label className="block text-xs font-medium text-[var(--muted-foreground)]">
              Tên campaign
            </label>
            <input
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
              placeholder="VD: Sale 8/3, Flash sale cuối tuần..."
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-[var(--muted-foreground)]">
              Bắt đầu
            </label>
            <input
              type="datetime-local"
              value={formStartAt}
              onChange={(e) => setFormStartAt(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-[var(--muted-foreground)]">
              Kết thúc
            </label>
            <div className="flex items-center gap-2">
              <input
                type="datetime-local"
                value={formEndAt}
                onChange={(e) => setFormEndAt(e.target.value)}
                className="w-full rounded-md border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
              />
              <button
                type="button"
                className="whitespace-nowrap rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => createPromotionMutation.mutate()}
                disabled={
                  createPromotionMutation.isPending ||
                  !formName.trim() ||
                  !formStartAt ||
                  !formEndAt
                }
              >
                {createPromotionMutation.isPending ? "Đang tạo..." : "Tạo campaign"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {promotions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--muted)]/20 p-6 text-sm text-[var(--muted-foreground)]">
          Chưa có campaign khuyến mãi nào.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[var(--muted)]/40 text-left text-xs font-semibold text-[var(--muted-foreground)] tracking-wide">
              <tr>
                <th className="px-4 py-3">Tên campaign</th>
                <th className="px-4 py-3">Thời gian</th>
                <th className="w-40 px-4 py-3 text-center">Trạng thái / thao tác</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map((promo) => (
                <Fragment key={promo.id}>
                  <tr className="border-t border-[var(--border)] hover:bg-[var(--muted)]/20">
                    <td className="px-4 py-3 align-middle">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedPromotionId((current) =>
                              current === promo.id ? null : promo.id,
                            )
                          }
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition hover:bg-[var(--muted)]/80 ${
                            expandedPromotionId === promo.id
                              ? "bg-[var(--primary)]/20 text-[var(--primary)]"
                              : "bg-[var(--muted)]/60 text-[var(--muted-foreground)]"
                          }`}
                          title={expandedPromotionId === promo.id ? "Thu gọn" : "Xem sản phẩm"}
                          aria-label={expandedPromotionId === promo.id ? "Thu gọn" : "Xem sản phẩm"}
                        >
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedPromotionId === promo.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div>
                          <div className="font-medium text-[var(--foreground)]">{promo.name}</div>
                          <div className="mt-0.5 text-xs text-[var(--muted-foreground)]">
                            {promo.products.length} sản phẩm
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-[var(--muted-foreground)] align-middle">
                      <div>Bắt đầu: {formatDatetime(promo.startAt)}</div>
                      <div>Kết thúc: {formatDatetime(promo.endAt)}</div>
                    </td>
                    <td className="px-4 py-3 text-center align-middle">
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-[11px] font-medium ${
                            promo.active
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                          }`}
                        >
                          {promo.active ? "Đang chạy" : "Không hoạt động"}
                        </span>
                        <button
                          type="button"
                          className="rounded-md border border-[var(--border)] px-3 py-1 text-[11px] font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
                          onClick={() => setSelectedPromotion(promo)}
                        >
                          Thêm sản phẩm
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedPromotionId === promo.id && (
                    <tr>
                      <td colSpan={3} className="bg-[var(--muted)]/15 p-0 align-top">
                        <div className="border-t border-[var(--border)]/60 px-5 py-4">
                          <div className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-inner">
                            {promo.products && promo.products.length > 0 ? (
                              <>
                                <div className="mb-3 flex items-center justify-between">
                                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                                    Sản phẩm trong campaign
                                  </h3>
                                </div>
                                <table className="min-w-full border-collapse text-sm">
                                  <thead>
                                    <tr className="border-b border-[var(--border)] text-left text-xs font-semibold text-[var(--muted-foreground)]">
                                      <th className="py-2 pr-2">Tên sản phẩm</th>
                                      <th className="w-28 py-2 pr-2 text-right">Giá</th>
                                      <th className="w-20 py-2 pr-2 text-right">Kho</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {promo.products.map((p) => (
                                      <tr
                                        key={p.id}
                                        className="border-b border-[var(--border)]/70 last:border-0 hover:bg-[var(--muted)]/20"
                                      >
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
                                                <span className="flex h-full w-full items-center justify-center text-xs text-[var(--muted-foreground)]">
                                                  —
                                                </span>
                                              )}
                                            </div>
                                            <span className="font-medium text-[var(--foreground)]">{p.name}</span>
                                          </div>
                                        </td>
                                        <td className="py-2 pr-2 text-right text-[var(--foreground)]">
                                          {p.minPrice != null
                                            ? p.minPrice.toLocaleString("vi-VN") + " ₫"
                                            : "—"}
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
                                Chưa có sản phẩm nào trong campaign này.
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

      <SelectPromotionProductsModal
        open={!!selectedPromotion}
        promotion={selectedPromotion}
        onClose={() => setSelectedPromotion(null)}
      />
    </div>
  );
}

