"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Package,
  PlusCircle,
  ChevronDown,
  ClipboardList,
  Truck,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Settings,
  LogOut,
  Store,
  CreditCard,
  HelpCircle,
  FileText,
  Bell,
  Megaphone,
  Percent,
  Zap,
  TicketPercent,
  Palette,
} from "lucide-react";
import { useSellerNotificationRealtime } from "@/hooks/useSellerNotificationRealtime";
import { useMyShop } from "@/hooks/useMyShop";
import type { NotificationDto } from "@/types/notification";
import apiClient from "@/lib/api-client";
import { logout as clearBackendToken } from "@/lib/auth";

const TOAST_DURATION_MS = 6000;

export function SellerShell({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [realtimeToast, setRealtimeToast] = useState<NotificationDto | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const originalTitleRef = useRef<string | null>(null);
  const blinkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const { shop, loading: shopLoading, notFound: shopNotFound } = useMyShop();

  useEffect(() => {
    if (shopLoading) return;
    // Nếu chưa có shop (404 từ /shop/me hoặc không có dữ liệu),
    // bắt buộc chuyển sang luồng onboarding tạo shop.
    if (!shop || shopNotFound) {
      router.replace("/onboarding/shop");
    }
  }, [shop, shopLoading, shopNotFound, router]);

  const {
    data: notifications = [],
    isFetching: notificationsLoading,
    refetch: refetchNotifications,
  } = useQuery<NotificationDto[]>({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await apiClient.get<NotificationDto[]>("/notification/seller");
      return res.data ?? [];
    },
    staleTime: 30 * 1000,
  });

  const showToast = (dto: NotificationDto) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setRealtimeToast(dto);
    toastTimeoutRef.current = setTimeout(() => {
      setRealtimeToast(null);
      toastTimeoutRef.current = null;
    }, TOAST_DURATION_MS);
  };

  const handleRealtimeNotification = (dto: NotificationDto) => {
    if (dto.targetRole !== "SELLER") return;
    showToast(dto);
    queryClient.setQueryData<NotificationDto[] | undefined>(
      ["notifications"],
      (prev) => (prev ? [dto, ...prev] : [dto])
    );
  };

  useSellerNotificationRealtime(handleRealtimeNotification);

  useEffect(() => {
    if (typeof document !== "undefined" && !originalTitleRef.current) {
      originalTitleRef.current = document.title;
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const clearBlink = () => {
      if (blinkIntervalRef.current) {
        clearInterval(blinkIntervalRef.current);
        blinkIntervalRef.current = null;
      }
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
    };

    if (!realtimeToast) {
      clearBlink();
      return;
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        clearBlink();
      }
    };

    if (document.hidden) {
      const newTitle = "🔔 Bạn có thông báo mới";
      let showNew = true;
      blinkIntervalRef.current = setInterval(() => {
        document.title = showNew
          ? newTitle
          : originalTitleRef.current || document.title;
        showNew = !showNew;
      }, 1200);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearBlink();
    };
  }, [realtimeToast]);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const isProducts = pathname === "/products";
  const isCreate = pathname === "/product/create";
  const isOrders = pathname === "/orders";
  const isShopDecorator = pathname === "/shop/decorator";
  const isRevenue = pathname === "/revenue";
  const isGuide = pathname === "/guide";
  const isMarketingPromotions = pathname === "/marketing/promotions";
  const isMarketingFlashSale = pathname === "/marketing/flash-sale";
  const isMarketingCoupons = pathname === "/marketing/coupons";

  const statusParam = searchParams.get("status");

  const notificationsCount = notifications.length;

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[var(--background)]">
      {/* Real-time notification toast */}
      {realtimeToast && (
        <div
          className="fixed right-4 top-4 z-[100] flex max-w-sm items-start gap-3 rounded-lg border border-[var(--border)] bg-white p-4 shadow-lg ring-1 ring-black/5"
          role="alert"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]">
            <Bell className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-[var(--foreground)]">
              Đơn hàng mới
            </p>
            <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
              {realtimeToast.message}
            </p>
            {realtimeToast.orderId != null && (
              <Link
                href={`/orders?highlight=${realtimeToast.orderId}`}
                className="mt-2 inline-block text-sm font-medium text-[var(--primary)] hover:underline"
              >
                Xem đơn #{realtimeToast.orderId} →
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Header — cố định trên cùng */}
      <header
        className="flex-shrink-0 border-b border-white/15 text-white shadow-sm"
        style={{ background: "var(--header-bg)" }}
      >
        <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/products"
            className="flex items-center gap-3 rounded-lg transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo-white-7.png"
              alt="Chobbi Seller Center"
              width={180}
              height={50}
              className="h-10 w-auto sm:h-12"
            />
            <span className="hidden border-l border-white/30 pl-4 text-base font-semibold tracking-tight sm:inline md:text-lg">
              Kênh bán hàng
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Notification bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setNotificationsOpen((prev) => !prev);
                  refetchNotifications();
                }}
                className="relative flex items-center justify-center rounded-full bg-white/10 p-2.5 text-white shadow-sm ring-1 ring-white/20 transition hover:bg-white/20 hover:ring-white/30"
                aria-label="Thông báo"
              >
                <Bell className="size-5" />
                {notificationsCount > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold leading-none text-white shadow-md">
                    {notificationsCount > 9 ? "9+" : notificationsCount}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    aria-hidden
                    onClick={() => setNotificationsOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-20 mt-2 w-96 overflow-hidden rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] shadow-xl ring-1 ring-black/5">
                    <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)]/40 px-4 py-3">
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        Thông báo
                      </p>
                      {notificationsLoading && (
                        <span className="text-xs text-[var(--muted-foreground)]">
                          Đang tải...
                        </span>
                      )}
                    </div>
                    <div className="max-h-80 overflow-y-auto bg-white">
                      {notifications.length === 0 ? (
                        <div className="px-4 py-6 text-center text-sm text-[var(--muted-foreground)]">
                          Chưa có thông báo nào.
                        </div>
                      ) : (
                        <ul className="divide-y divide-[var(--border)]/70">
                          {notifications.map((n) => (
                            <li key={n.id} className="px-4 py-3 hover:bg-[var(--muted)]/20">
                              <div className="flex items-start gap-3">
                                <span className="mt-0.5 flex size-7 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                  <Bell className="size-4" />
                                </span>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-[var(--foreground)]">
                                    {n.message}
                                  </p>
                                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[var(--muted-foreground)]">
                                    {n.orderId != null && (
                                      <Link
                                        href={`/orders?highlight=${n.orderId}`}
                                        className="font-medium text-[var(--primary)] hover:underline"
                                      >
                                        Đơn #{n.orderId}
                                      </Link>
                                    )}
                                    <span>
                                      {new Date(n.createdAt).toLocaleString("vi-VN", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User menu */}
            <div className="relative">
            <button
              type="button"
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="flex items-center gap-2.5 rounded-full bg-white/15 py-1.5 pl-1.5 pr-3 shadow-sm ring-1 ring-white/20 transition hover:bg-white/25 hover:ring-white/30"
            >
              <span className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-white text-[var(--primary)] text-sm font-bold shadow-sm">
                {shop?.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={shop.avatar.startsWith("http") ? shop.avatar : `/api/backend/static/${shop.avatar}`}
                    alt={shop.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Store className="size-5" />
                )}
              </span>
              <span className="max-w-[120px] truncate text-sm font-medium sm:max-w-[160px]">
                {shop?.name ?? "Shop của bạn"}
              </span>
              <ChevronDown
                className={`size-4 text-white/80 transition-transform ${
                  userMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {userMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  aria-hidden
                  onClick={() => setUserMenuOpen(false)}
                />
                <div className="absolute right-0 top-full z-20 mt-2 w-72 overflow-hidden rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] shadow-xl ring-1 ring-black/5">
                  <div className="border-b border-[var(--border)] bg-[var(--muted)]/30 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] text-lg font-bold text-white shadow-inner">
                        {shop?.avatar ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={shop.avatar.startsWith("http") ? shop.avatar : `/api/backend/static/${shop.avatar}`}
                            alt={shop.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Store className="size-6" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-[var(--foreground)]">
                          {shop?.name ?? "Shop của bạn"}
                        </p>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Tài khoản seller
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                    >
                      <Settings className="size-4 text-[var(--muted-foreground)]" />
                      Thiết lập hồ sơ shop
                    </button>
                    <div className="my-1 h-px bg-[var(--border)]" />
                    <button
                      type="button"
                      className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-[var(--destructive)] transition-colors hover:bg-[var(--destructive)]/10"
                      onClick={async () => {
                        try {
                          await apiClient.post("/auth/logout");
                        } catch {
                          // ignore
                        } finally {
                          clearBackendToken();
                          await signOut({ callbackUrl: "/login" });
                        }
                      }}
                    >
                      <LogOut className="size-4" />
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      </header>

      {/* Body: sidebar + content, chiều cao = phần còn lại dưới header */}
      <div className="flex w-full flex-1 min-h-0 overflow-hidden gap-4 px-4 py-4 md:py-6">
        {/* Sidebar: hiện đại, scroll riêng trong cột */}
        <aside className="hidden w-72 flex-shrink-0 flex flex-col min-h-0 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm md:flex">
          <div className="min-h-0 flex-1 overflow-y-auto p-3 text-sm">
            {/* Hướng dẫn sử dụng */}
            <div className="mb-3">
              <Link
                href="/guide"
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  isGuide
                    ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                    : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                }`}
              >
                <HelpCircle className="size-4 text-[var(--muted-foreground)]" />
                <span>Hướng dẫn sử dụng</span>
              </Link>
            </div>

            {/* Quản lý sản phẩm */}
            <div className="mb-1">
              <button
                type="button"
                onClick={() => setOpenMenu((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
              >
                <span className="flex items-center gap-2.5">
                  <Package className="size-4 text-[var(--primary)]" />
                  Quản lý sản phẩm
                </span>
                <ChevronDown
                  className={`size-4 text-[var(--muted-foreground)] transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu && (
                <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l-2 border-[var(--border)] pl-3">
                  <Link
                    href="/products"
                    className={`rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
                      isProducts
                        ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                        : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Tất cả sản phẩm
                  </Link>
                  <Link
                    href="/product/create"
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
                      isCreate
                        ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                        : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <PlusCircle className="size-4" />
                    Thêm sản phẩm
                  </Link>
                </div>
              )}
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Quản lý đơn hàng */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Quản lý đơn hàng
              </p>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="/orders"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isOrders && !statusParam
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <ClipboardList className="size-4 text-[var(--muted-foreground)]" />
                  Đơn chờ xử lý
                </Link>
                <Link
                  href="/orders?status=SHIPPED"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isOrders && statusParam === "SHIPPED"
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <Truck className="size-4 text-[var(--muted-foreground)]" />
                  Đơn đang giao
                </Link>
                <Link
                  href="/orders?status=CANCELED"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isOrders && statusParam === "CANCELED"
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <CheckCircle className="size-4 text-[var(--muted-foreground)]" />
                  Đơn đã hủy
                </Link>
              </div>
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Quản lý shop */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Quản lý shop
              </p>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="/shop/info"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    pathname === "/shop/info"
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <Store className="size-4 text-[var(--muted-foreground)]" />
                  Hồ sơ shop
                </Link>
                <Link
                  href="/shop/decorator"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isShopDecorator
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <Palette className="size-4 text-[var(--muted-foreground)]" />
                  Trang trí shop
                </Link>
              </div>
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Kênh marketing */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Kênh marketing
              </p>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="/marketing/promotions"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isMarketingPromotions
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <Percent className="size-4 text-[var(--muted-foreground)]" />
                  <span>Khuyến mãi của shop</span>
                  <span className="ml-1 rounded-full bg-[var(--muted)] px-1 text-[7px] font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                    in&nbsp;progress
                  </span>
                </Link>
                <Link
                  href="/marketing/flash-sale"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isMarketingFlashSale
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <Zap className="size-4 text-[var(--muted-foreground)]" />
                  <span>Flash sale của shop</span>
                  <span className="ml-1 rounded-full bg-[var(--muted)] px-1 text-[7px] font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                    in&nbsp;progress
                  </span>
                </Link>
                <Link
                  href="/marketing/coupons"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isMarketingCoupons
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <TicketPercent className="size-4 text-[var(--muted-foreground)]" />
                  <span>Coupon của shop</span>
                  <span className="ml-1 rounded-full bg-[var(--muted)] px-1 text-[7px] font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                    in&nbsp;progress
                  </span>
                </Link>
              </div>
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Thống kê */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Thống kê
              </p>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="/revenue"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isRevenue
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <BarChart3 className="size-4 text-[var(--muted-foreground)]" />
                  <span>Doanh thu</span>
                  <span className="ml-1 rounded-full bg-[var(--muted)] px-1 text-[7px] font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                    in&nbsp;progress
                  </span>
                </Link>
              </div>
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Cài đặt */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Cài đặt
              </p>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="/payment"
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    pathname === "/payment"
                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <CreditCard className="size-4 text-[var(--muted-foreground)]" />
                  <span>Thanh toán</span>
                  <span className="ml-1 rounded-full bg-[var(--muted)] px-1 text-[7px] font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                    in&nbsp;progress
                  </span>
                </Link>
              </div>
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Trợ giúp */}
            <div className="flex flex-col gap-0.5">
              <button
                type="button"
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
              >
                <HelpCircle className="size-4 text-[var(--muted-foreground)]" />
                Trợ giúp
              </button>
              <button
                type="button"
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
              >
                <FileText className="size-4 text-[var(--muted-foreground)]" />
                Chính sách
              </button>
            </div>
          </div>
        </aside>

        {/* Dashboard: chiều cao cố định = body, scroll riêng trong cột */}
        <main className="flex-1 min-w-0 min-h-0 flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
