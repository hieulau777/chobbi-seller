"use client";

import { useSession } from "next-auth/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const API_BACKEND = "/api/backend";

/**
 * Sau khi user bấm "Đăng nhập bằng Google" và redirect về /login?fromAuth=1:
 * gọi backend POST /auth/google/seller (qua proxy /api/backend) → lưu DB, trả JWT → lưu localStorage, redirect /products.
 */
export function AlertTokenAfterAuth() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const done = useRef(false);

  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.email || done.current)
      return;
    if (
      searchParams.get("fromAuth") !== "1" ||
      (pathname !== "/login" && pathname !== "/register")
    )
      return;

    const providerAccountId = (session as { providerAccountId?: string })
      ?.providerAccountId;
    if (!providerAccountId) return;

    done.current = true;

    (async () => {
      const url = `${API_BACKEND}/auth/google/seller`;
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: session.user!.email!,
            name: session.user!.name ?? undefined,
            provider: "GOOGLE",
            providerAccountId,
          }),
        });
        const text = await res.text();
        let data: {
          token?: string;
          accountId?: number;
          roles?: string[];
          hasShop?: boolean;
          message?: string;
        } = {};
        try {
          data = text ? (JSON.parse(text) as typeof data) : {};
        } catch {
          data = { message: text || res.statusText };
        }
        if (res.ok && data.token) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("token", data.token!);
          }
          if (data.hasShop) {
            router.replace("/products");
          } else {
            router.replace("/onboarding/shop");
          }
        } else {
          console.error("[AlertTokenAfterAuth] Backend response:", res.status, data);
          alert(
            `Backend lỗi ${res.status}: ${data.message ?? JSON.stringify(data)}`
          );
          window.history.replaceState(null, "", "/login");
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("[AlertTokenAfterAuth] Fetch failed:", url, e);
        alert(
          `Gọi backend thất bại. Kiểm tra:\n1. Backend đã chạy (port 9090)?\n2. Restart Next.js sau khi sửa next.config?\n\nLỗi: ${msg}`
        );
        window.history.replaceState(null, "", "/login");
      }
    })();
  }, [status, session, pathname, searchParams, router]);

  return null;
}
