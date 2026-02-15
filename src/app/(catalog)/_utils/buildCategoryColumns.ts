import type { CategoryNode } from "../types";

export function buildCategoryColumns(
  categories: CategoryNode[],
  categoryPath: CategoryNode[],
): CategoryNode[][] {
  const columns: CategoryNode[][] = [];
  let currentLevel = categories;

  for (let i = 0; i <= categoryPath.length; i++) {
    columns.push(currentLevel);
    const selected = categoryPath[i];
    if (!selected || !selected.children?.length) break;
    currentLevel = selected.children;
  }

  return columns;
}
