"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import apiClient from "@/lib/api-client";
import type { CategoryNode } from "../_types";
import { buildCategoryColumns, findCategoryPathById } from "../_utils/index";

export type UseCategoryTreeResult = {
  selectedLeaf: CategoryNode | null;
  selectedPathLabel: string;
  loadingCategories: boolean;
  categoryError: string | null;
  isCategoryOpen: boolean;
  categoryColumns: CategoryNode[][];
  categoryPath: CategoryNode[];
  openCategoryPopup: () => void;
  closeCategoryPopup: () => void;
  handleCategoryClick: (levelIndex: number, node: CategoryNode) => void;
  resetCategory: () => void;
};

export function useCategoryTree(
  initialSelectedCategoryId: number | null = null,
): UseCategoryTreeResult {
  const [categories, setCategories] = useState<CategoryNode[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const [categoryPath, setCategoryPath] = useState<CategoryNode[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    apiClient
      .get<CategoryNode[]>("/category/tree")
      .then((res) => setCategories(res.data ?? []))
      .catch(() => setCategoryError("Không tải được cây ngành hàng."))
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    if (!initialSelectedCategoryId || categories.length === 0) return;
    const path = findCategoryPathById(categories, initialSelectedCategoryId);
    if (path) setCategoryPath(path);
  }, [initialSelectedCategoryId, categories]);

  const selectedLeaf = categoryPath.length > 0 ? categoryPath[categoryPath.length - 1] : null;
  const selectedPathLabel = categoryPath.map((n) => n.name).join(" > ");

  const categoryColumns = useMemo(
    () => buildCategoryColumns(categories, categoryPath),
    [categories, categoryPath],
  );

  const openCategoryPopup = useCallback(() => setIsCategoryOpen(true), []);
  const closeCategoryPopup = useCallback(() => setIsCategoryOpen(false), []);

  const handleCategoryClick = useCallback((levelIndex: number, node: CategoryNode) => {
    setCategoryPath((prev) => {
      const next = prev.slice(0, levelIndex);
      next.push(node);
      return next;
    });
  }, []);

  const resetCategory = useCallback(() => {
    setCategoryPath([]);
  }, []);

  return {
    selectedLeaf,
    selectedPathLabel,
    loadingCategories,
    categoryError,
    isCategoryOpen,
    categoryColumns,
    categoryPath,
    openCategoryPopup,
    closeCategoryPopup,
    handleCategoryClick,
    resetCategory,
  };
}
