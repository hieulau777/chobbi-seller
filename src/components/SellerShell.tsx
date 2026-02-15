"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

export function SellerShell({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();

  const isProducts = pathname === "/products" || pathname === "/";
  const isCreate = pathname === "/product/create";

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[var(--background)]">
      {/* Header — cố định trên cùng */}
      <header
        className="flex-shrink-0 border-b border-white/15 text-white shadow-sm"
        style={{ background: "var(--header-bg)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
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

          <div className="relative">
            <button
              type="button"
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="flex items-center gap-2.5 rounded-full bg-white/15 py-1.5 pl-1.5 pr-3 shadow-sm ring-1 ring-white/20 transition hover:bg-white/25 hover:ring-white/30"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-white text-[var(--primary)] text-sm font-bold shadow-sm">
                S
              </span>
              <span className="max-w-[100px] truncate text-sm font-medium sm:max-w-[120px]">
                Seller #1
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
                      <span className="flex size-12 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white shadow-inner">
                        S
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-[var(--foreground)]">
                          Seller #1
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
      </header>

      {/* Body: sidebar + content, chiều cao = phần còn lại dưới header */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 min-h-0 overflow-hidden gap-4 px-4 py-4 md:py-6">
        {/* Sidebar: hiện đại, scroll riêng trong cột */}
        <aside className="hidden w-64 flex-shrink-0 flex flex-col min-h-0 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm md:flex">
          <div className="min-h-0 flex-1 overflow-y-auto p-3 text-sm">
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

            {/* Đơn hàng */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Đơn hàng
              </p>
              <div className="flex flex-col gap-0.5">
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <ClipboardList className="size-4 text-[var(--muted-foreground)]" />
                  Đơn chờ xử lý
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <Truck className="size-4 text-[var(--muted-foreground)]" />
                  Đơn đang giao
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <CheckCircle className="size-4 text-[var(--muted-foreground)]" />
                  Đơn đã hoàn thành
                </button>
              </div>
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Thống kê */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Thống kê
              </p>
              <div className="flex flex-col gap-0.5">
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <BarChart3 className="size-4 text-[var(--muted-foreground)]" />
                  Doanh thu
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <TrendingUp className="size-4 text-[var(--muted-foreground)]" />
                  Sản phẩm bán chạy
                </button>
              </div>
            </div>

            <div className="my-3 h-px bg-[var(--border)]" />

            {/* Cài đặt */}
            <div className="mb-1">
              <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Cài đặt
              </p>
              <div className="flex flex-col gap-0.5">
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <Store className="size-4 text-[var(--muted-foreground)]" />
                  Hồ sơ shop
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <CreditCard className="size-4 text-[var(--muted-foreground)]" />
                  Thanh toán
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                >
                  <Truck className="size-4 text-[var(--muted-foreground)]" />
                  Vận chuyển
                </button>
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

