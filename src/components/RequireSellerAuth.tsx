"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

export function RequireSellerAuth() {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (status === "loading") return;

    const redirectToLogin = () => {
      const currentPath = pathname || "/";
      const currentQuery = searchParams.toString();
      const redirectTarget =
        currentPath + (currentQuery ? `?${currentQuery}` : "");

      const params = new URLSearchParams();
      if (
        redirectTarget &&
        currentPath !== "/login" &&
        currentPath !== "/register"
      ) {
        params.set("redirect", redirectTarget);
      }

      const query = params.toString();
      router.replace(query ? `/login?${query}` : "/login");
    };

    if (status !== "authenticated") {
      redirectToLogin();
      return;
    }

    const token = window.localStorage.getItem("token");
    if (!token) {
      redirectToLogin();
    }

  }, [status, router, pathname, searchParams]);

  return null;
}

