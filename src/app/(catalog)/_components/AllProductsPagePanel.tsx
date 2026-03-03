"use client";

import Image from "next/image";
import Link from "next/link";
import type { AllProductsPagePanelProps } from "../_types/product";
import { capitalizeVariationName, formatPrice, getImageUrl } from "../_utils/index2";

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

const MARKETPLACE_BASE_URL =
  process.env.NEXT_PUBLIC_CLIENT_BASE_URL ?? "http://localhost:3000";

export function AllProductsPagePanel({ products, shopId }: AllProductsPagePanelProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Tất cả sản phẩm
        </h1>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Danh sách sản phẩm của shop.
        </p>
      </header>

      <section className="space-y-4">
        {products.map((p) => {
          const slug = slugify(p.name);
          const marketplaceHref = `${MARKETPLACE_BASE_URL}/${slug}.${shopId}.${p.id}`;

          return (
            <article
              key={p.id}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-start gap-4 border-b border-[var(--border)] bg-[var(--muted)]/40 p-4 sm:flex-nowrap">
                <Link
                  href={`/product/edit/${p.id}`}
                  className="group relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-inner"
                >
                  <Image
                    src={getImageUrl(p.img)}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform group-hover:scale-105"
                    unoptimized
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/product/edit/${p.id}`}
                    className="line-clamp-2 text-base font-semibold text-[var(--foreground)] hover:underline"
                  >
                    {p.name}
                  </Link>
                  <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                    {p.variations?.length ?? 0} phân loại
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-2">
                  <Link
                    href={`/product/edit/${p.id}`}
                    className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5"
                  >
                    Xem chi tiết
                  </Link>
                  <Link
                    href={marketplaceHref}
                    target="_blank"
                    className="rounded-full bg-[var(--primary)] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-[var(--primary)]/90"
                  >
                    Xem trên marketplace
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)] bg-[var(--muted)]/60">
                      <th className="px-4 py-2.5 text-left font-medium text-[var(--foreground)]">
                        Biến thể
                      </th>
                      <th className="px-4 py-2.5 text-right font-medium text-[var(--foreground)]">
                        Giá
                      </th>
                      <th className="px-4 py-2.5 text-right font-medium text-[var(--foreground)]">
                        Tồn kho
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(p.variations ?? []).map((v, i) => (
                      <tr
                        key={`${v.name}-${i}`}
                        className={`border-b border-[var(--border)]/80 last:border-b-0 ${
                          i % 2 === 1 ? "bg-[var(--muted)]/20" : ""
                        }`}
                      >
                        <td className="px-4 py-2.5 text-[var(--foreground)]">
                          {capitalizeVariationName(v.name)}
                        </td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-[var(--foreground)]">
                          {formatPrice(v.price)}
                        </td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-[var(--muted-foreground)]">
                          {v.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
