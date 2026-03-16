"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";

export type ShopResponse = {
  id: number;
  name: string;
  avatar: string | null;
  status: string;
};

export function useMyShop() {
  const [shop, setShop] = useState<ShopResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const res = await apiClient.get<ShopResponse>("/shop/me");
      const data = res.data;
      if (data && data.id) {
        setShop(data);
      } else {
        setShop(null);
      }
    } catch (e: any) {
      const status = e?.response?.status;
      const msg =
        status === 404
          ? "Bạn chưa có shop."
          : e?.response?.data?.message ??
            "Không thể tải thông tin shop. Vui lòng thử lại.";
      setError(msg);
      setShop(null);
      setNotFound(status === 404);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { shop, loading, error, notFound, refetch };
}

