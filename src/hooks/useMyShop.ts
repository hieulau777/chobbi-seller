"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";

type ShopResponse = {
  id: number;
  name: string;
  status: string;
};

export function useMyShop() {
  const [shop, setShop] = useState<ShopResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await apiClient.get<ShopResponse>("/shop/me");
        if (cancelled) return;
        const data = res.data;
        if (data && data.id) {
          setShop(data);
        } else {
          setShop(null);
        }
      } catch (e: any) {
        if (cancelled) return;
        const msg =
          e?.response?.status === 404
            ? "Bạn chưa có shop."
            : e?.response?.data?.message ??
              "Không thể tải thông tin shop. Vui lòng thử lại.";
        setError(msg);
        setShop(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { shop, loading, error };
}

