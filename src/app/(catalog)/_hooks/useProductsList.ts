"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import type { ReadProductSellerDto } from "../_types/product";

export function useProductsList(shopId: number) {
  const [products, setProducts] = useState<ReadProductSellerDto[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<ReadProductSellerDto[]>("/api/product/list", {
        params: { shopId },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [shopId]);

  return { products, loading, error };
}
