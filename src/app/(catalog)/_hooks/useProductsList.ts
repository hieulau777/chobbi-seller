"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";
import type {
  ProductListPageDto,
  ProductListTab,
  ProductSellerCountsDto,
  ReadProductSellerDto,
} from "../_types/product";

const DEFAULT_PAGE_SIZE = 10;

/** Danh sách sản phẩm shop của seller đang đăng nhập. Có phân trang (3/trang) + tab + bộ lọc. */
export function useProductsList(shopId: number) {
  const [products, setProducts] = useState<ReadProductSellerDto[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [tab, setTab] = useState<ProductListTab>("all");
  const [counts, setCounts] = useState<ProductSellerCountsDto | null>(null);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [sortField, setSortField] = useState<"name" | "price" | "stock" | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);

  useEffect(() => {
    if (!shopId) {
      setProducts(null);
      setCounts(null);
      setLoading(false);
      return;
    }
    apiClient
      .get<ProductSellerCountsDto>("/product/seller/counts")
      .then((res) => setCounts(res.data ?? null))
      .catch(() => setCounts(null));
  }, [shopId]);

  useEffect(() => {
    if (!shopId) return;
    setLoading(true);
    const params: Record<string, number | string> = {
      page,
      size: DEFAULT_PAGE_SIZE,
    };
    if (tab !== "all") params.status = tab;
    if (search.trim()) params.name = search.trim();
    const min = minPrice.trim() ? Number(minPrice.trim()) : NaN;
    const max = maxPrice.trim() ? Number(maxPrice.trim()) : NaN;
    if (!Number.isNaN(min)) params.minPrice = min;
    if (!Number.isNaN(max)) params.maxPrice = max;
    if (categoryId) params.categoryId = categoryId;
    if (sortField && sortDirection) {
      params.sortField = sortField;
      params.sortDir = sortDirection;
    }

    apiClient
      .get<ProductListPageDto>("/product/seller/list", { params })
      .then((res) => {
        const data = res.data;
        setProducts(data.content ?? []);
        setTotalPages(data.totalPages ?? 1);
        setTotalElements(data.totalElements ?? 0);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [shopId, page, tab, search, minPrice, maxPrice, categoryId, sortField, sortDirection]);

  const handleTabChange = (newTab: ProductListTab) => {
    setTab(newTab);
    setPage(0);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  const handlePriceChange = (min: string, max: string) => {
    setMinPrice(min);
    setMaxPrice(max);
    setPage(0);
  };

  const handleCategoryChange = (id: number | null) => {
    setCategoryId(id);
    setPage(0);
  };

  const handleSortChange = (
    field: "name" | "price" | "stock" | null,
    direction: "asc" | "desc" | null
  ) => {
    setSortField(field);
    setSortDirection(direction);
    setPage(0);
  };

  return {
    products,
    loading,
    error,
    page,
    setPage,
    totalPages,
    totalElements,
    tab,
    setTab: handleTabChange,
    counts,
    search,
    minPrice,
    maxPrice,
    setSearch: handleSearchChange,
    setPriceRange: handlePriceChange,
    setCategoryFilter: handleCategoryChange,
    sortField,
    sortDirection,
    setSort: handleSortChange,
  };
}
