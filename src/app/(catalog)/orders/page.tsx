"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ClipboardList } from "lucide-react";
import apiClient from "@/lib/api-client";
import { formatPrice, getImageUrl } from "../_utils/index2";

type ShopOrderItemDto = {
  productName: string | null;
  productThumbnail: string | null;
  variationName: string | null;
  quantity: number;
  price: number;
};

type ShopOrderDto = {
  orderId: number;
  orderGroupCode: string | null;
  buyerEmail: string | null;
  shippingName: string | null;
  totalPrice: number;
  shippingCost?: number | null;
  createdAt: string;
  status?: string;
  items: ShopOrderItemDto[];
};

type StatusFilter = "PENDING" | "SHIPPED" | "CANCELED";

export default function OrdersPage() {
  const searchParams = useSearchParams();

  const rawStatus = searchParams.get("status");
  const statusFilter: StatusFilter =
    rawStatus === "SHIPPED" || rawStatus === "CANCELED"
      ? rawStatus
      : "PENDING";

  const [orders, setOrders] = useState<ShopOrderDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    let url = "/order/shop/orders";
    if (statusFilter !== "PENDING") {
      url += `?status=${statusFilter}`;
    }

    apiClient
      .get<ShopOrderDto[]>(url)
      .then((res) => {
        if (!cancelled) setOrders(res.data ?? []);
      })
      .catch(() => {
        if (!cancelled) setError("Không tải được danh sách đơn hàng.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [statusFilter]);

  const performShip = async (ids: number[]) => {
    if (ids.length === 0) return;
    await apiClient.post("/order/ship", ids);
    setOrders((prev) =>
      prev.map((o) => (ids.includes(o.orderId) ? { ...o, status: "SHIPPED" } : o))
    );
  };

  const performCancel = async (ids: number[]) => {
    if (ids.length === 0) return;
    await apiClient.post("/order/cancel", ids);
    setOrders((prev) =>
      prev.map((o) =>
        ids.includes(o.orderId) ? { ...o, status: "CANCELED" } : o
      )
    );
  };

  const handleShip = async (orderId: number) => {
    if (!window.confirm("Xác nhận giao hàng cho đơn này?")) return;
    try {
      setUpdatingId(orderId);
      await performShip([orderId]);
    } catch (e) {
      console.error("Ship order failed", e);
      alert("Không thể cập nhật trạng thái giao hàng. Vui lòng thử lại.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleCancel = async (orderId: number) => {
    if (!window.confirm("Bạn chắc chắn muốn hủy đơn hàng này?")) return;
    try {
      setUpdatingId(orderId);
      await performCancel([orderId]);
    } catch (e) {
      console.error("Cancel order failed", e);
      alert("Không thể hủy đơn hàng. Vui lòng thử lại.");
    } finally {
      setUpdatingId(null);
    }
  };

  const formatDate = (raw: string) => {
    try {
      const d = new Date(raw);
      return d.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return raw;
    }
  };

  const headerTitle = useMemo(() => {
    if (statusFilter === "SHIPPED") return "Đơn hàng đang giao";
    if (statusFilter === "CANCELED") return "Đơn hàng đã hủy";
    return "Đơn hàng cần xử lý";
  }, [statusFilter]);

  const isPendingTab = statusFilter === "PENDING";

  const toggleSelectOne = (orderId: number) => {
    setSelectedIds((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleSelectAll = () => {
    if (!isPendingTab) return;
    const pendingIds = orders
      .filter((o) => o.status === "PENDING")
      .map((o) => o.orderId);
    const allSelected =
      pendingIds.length > 0 &&
      pendingIds.every((id) => selectedIds.includes(id));
    setSelectedIds(allSelected ? [] : pendingIds);
  };

  const handleBulkShip = async () => {
    if (!isPendingTab || selectedIds.length === 0) return;
    if (
      !window.confirm(
        `Xác nhận giao hàng cho ${selectedIds.length} đơn đã chọn?`
      )
    )
      return;
    try {
      setUpdatingId(-1);
      await performShip(selectedIds);
      setSelectedIds([]);
    } catch (e) {
      console.error("Bulk ship orders failed", e);
      alert("Không thể giao hàng loạt. Vui lòng thử lại.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleBulkCancel = async () => {
    if (!isPendingTab || selectedIds.length === 0) return;
    if (
      !window.confirm(
        `Bạn chắc chắn muốn hủy ${selectedIds.length} đơn đã chọn?`
      )
    )
      return;
    try {
      setUpdatingId(-1);
      await performCancel(selectedIds);
      setSelectedIds([]);
    } catch (e) {
      console.error("Bulk cancel orders failed", e);
      alert("Không thể hủy đơn hàng loạt. Vui lòng thử lại.");
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {headerTitle}
          </h1>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            Đang tải...
          </p>
        </header>
        <div className="flex justify-center py-12">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-4xl">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {headerTitle}
          </h1>
        </header>
        <div className="mt-6 rounded-xl border border-[var(--destructive)]/30 bg-[var(--destructive)]/5 px-4 py-4 text-sm text-[var(--destructive)]">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
            <ClipboardList className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              {headerTitle}
            </h1>
            <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
              {orders.length} đơn hàng
            </p>
          </div>
        </div>

        {isPendingTab && (
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={toggleSelectAll}
              className="rounded-md border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:bg-[var(--muted)]"
            >
              {selectedIds.length > 0 ? "Bỏ chọn tất cả" : "Chọn tất cả"}
            </button>
            <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
              <span>Đã chọn:</span>
              <span className="font-semibold text-[var(--foreground)]">
                {selectedIds.length}
              </span>
            </div>
            <div className="ml-2 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleBulkShip}
                disabled={selectedIds.length === 0 || updatingId !== null}
                className="inline-flex items-center rounded-md bg-[var(--primary)] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Giao hàng
              </button>
              <button
                type="button"
                onClick={handleBulkCancel}
                disabled={selectedIds.length === 0 || updatingId !== null}
                className="inline-flex items-center rounded-md border border-[var(--destructive)] px-3 py-1.5 text-xs font-medium text-[var(--destructive)] transition hover:bg-[var(--destructive)]/5 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
              >
                Hủy đơn
              </button>
            </div>
          </div>
        )}
      </header>

      {orders.length === 0 ? (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 py-12 text-center text-sm text-[var(--muted-foreground)]">
          Chưa có đơn hàng nào.
        </div>
      ) : (
        <ul className="space-y-5">
          {orders.map((order) => (
            <li
              key={order.orderId}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm ring-1 ring-black/[0.03]"
            >
              <div className="border-b border-[var(--border)] bg-[var(--muted)]/20 px-5 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {isPendingTab && (
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30"
                        checked={selectedIds.includes(order.orderId)}
                        onChange={() => toggleSelectOne(order.orderId)}
                      />
                    )}
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-semibold tracking-tight text-[var(--foreground)]">
                        #{order.orderGroupCode ?? order.orderId}
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)]">
                        {formatDate(order.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {order.status && (
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide ${
                          order.status === "PENDING"
                            ? "bg-amber-100 text-amber-800"
                            : order.status === "SHIPPED"
                            ? "bg-sky-100 text-sky-800"
                            : order.status === "CANCELED"
                            ? "bg-rose-100 text-rose-800"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {order.status === "PENDING"
                          ? "Chờ xử lý"
                          : order.status === "SHIPPED"
                          ? "Đang giao"
                          : order.status === "CANCELED"
                          ? "Đã hủy"
                          : order.status}
                      </span>
                    )}
                    <span className="text-lg font-semibold tabular-nums text-[var(--primary)]">
                      {formatPrice(Number(order.totalPrice))}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-0.5 text-xs text-[var(--muted-foreground)]">
                  {order.buyerEmail && (
                    <span>Khách: {order.buyerEmail}</span>
                  )}
                  {order.shippingName && (
                    <span>Vận chuyển: {order.shippingName}</span>
                  )}
                  <span>Phí giao hàng: {formatPrice(Number(order.shippingCost ?? 0))}</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)] bg-[var(--muted)]/30">
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                        Sản phẩm
                      </th>
                      <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                        SL
                      </th>
                      <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                        Đơn giá
                      </th>
                      <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                        Thành tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, i) => (
                      <tr
                        key={`${order.orderId}-${i}`}
                        className="border-b border-[var(--border)]/60 transition-colors last:border-b-0 hover:bg-[var(--muted)]/10"
                      >
                        <td className="px-5 py-3.5 text-[var(--foreground)]">
                          <div className="flex items-center gap-4">
                            <span className="relative h-[4.25rem] w-[4.25rem] flex-shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--muted)] shadow-inner">
                              <img
                                src={getImageUrl(item.productThumbnail ?? undefined)}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            </span>
                            <div className="flex min-w-0 flex-col gap-1">
                              <span className="font-medium text-[var(--foreground)]">
                                {item.productName ?? "—"}
                              </span>
                              {item.variationName && (
                                <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                                  {item.variationName}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3.5 text-right tabular-nums font-medium">
                          {item.quantity}
                        </td>
                        <td className="px-5 py-3.5 text-right tabular-nums text-[var(--muted-foreground)]">
                          {formatPrice(Number(item.price))}
                        </td>
                        <td className="px-5 py-3.5 text-right font-semibold tabular-nums text-[var(--primary)]">
                          {formatPrice(Number(item.price) * item.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
