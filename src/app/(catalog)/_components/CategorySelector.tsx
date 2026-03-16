"use client";

import { Pencil } from "lucide-react";
import type { CategoryNode } from "../_types";

type CategorySelectorProps = {
  selectedLeaf: CategoryNode | null;
  selectedPathLabel: string;
  loadingCategories: boolean;
  categoryError: string | null;
  isCategoryOpen: boolean;
  categoryColumns: CategoryNode[][];
  categoryPath: CategoryNode[];
  onOpenPopup: () => void;
  onClosePopup: () => void;
  onCategoryClick: (levelIndex: number, node: CategoryNode) => void;
  onConfirmSelection: () => void;
};

export function CategorySelector({
  selectedLeaf,
  selectedPathLabel,
  loadingCategories,
  categoryError,
  isCategoryOpen,
  categoryColumns,
  categoryPath,
  onOpenPopup,
  onClosePopup,
  onCategoryClick,
  onConfirmSelection,
}: CategorySelectorProps) {
  return (
    <>
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
          Ngành hàng
        </label>
        <button
          type="button"
          onClick={onOpenPopup}
          className="flex w-full items-center justify-between rounded-md border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition hover:bg-[var(--muted)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
        >
          <span className="flex items-center gap-2">
            <Pencil className="size-4 text-[var(--muted-foreground)]" />
            <span
              className={
                selectedLeaf
                  ? "truncate text-[var(--foreground)]"
                  : "truncate text-[var(--muted-foreground)]"
              }
            >
              {selectedLeaf ? selectedPathLabel : "Chọn ngành hàng"}
            </span>
          </span>
        </button>
        {loadingCategories && (
          <p className="mt-1 text-[10px] text-[var(--muted-foreground)]">
            Đang tải cây ngành hàng...
          </p>
        )}
        {!loadingCategories && categoryError && (
          <p className="mt-1 text-[10px] text-red-600">{categoryError}</p>
        )}
      </div>

      {isCategoryOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-4">
          <div className="flex h-[440px] w-full max-w-2xl flex-col rounded-xl bg-white p-4 shadow-xl sm:p-6">
            <div className="flex flex-shrink-0 items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  Chọn ngành hàng
                </h2>
                <p className="mt-1 text-[13px] text-[var(--muted-foreground)]">
                  Chọn lần lượt từ danh mục cha đến khi tới ngành hàng chi tiết
                  (leaf).
                </p>
              </div>
              <button
                type="button"
                onClick={onClosePopup}
                className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)]"
              >
                Đóng
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-hidden">
              {loadingCategories ? (
                <p className="text-sm text-[var(--muted-foreground)]">
                  Đang tải cây ngành hàng...
                </p>
              ) : categoryError ? (
                <p className="text-sm text-red-600">{categoryError}</p>
              ) : (
                <div className="flex h-full w-full max-w-full gap-3 overflow-x-auto">
                  {categoryColumns.map((col, levelIndex) => (
                    <div
                      key={levelIndex}
                      className="flex min-w-[170px] max-w-[190px] flex-col rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 p-2 text-sm"
                    >
                      <div className="h-[320px] min-h-0 space-y-1 overflow-y-auto pr-1">
                        {col.map((node) => {
                          const isActive =
                            categoryPath[levelIndex]?.id === node.id;
                          const isLeaf =
                            !node.children || node.children.length === 0;
                          return (
                            <button
                              key={node.id}
                              type="button"
                              onClick={() =>
                                onCategoryClick(levelIndex, node)
                              }
                              className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition-colors ${
                                isActive
                                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                                  : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                              }`}
                            >
                              <span
                                className={
                                  levelIndex === 0
                                    ? "truncate font-semibold"
                                    : "truncate"
                                }
                              >
                                {node.name}
                              </span>
                              {isLeaf && (
                                <span className="ml-1 text-[10px] text-[var(--muted-foreground)]">
                                  leaf
                                </span>
                              )}
                            </button>
                          );
                        })}
                        {col.length === 0 && (
                          <p className="px-1 py-1 text-[10px] text-[var(--muted-foreground)]">
                            Không có dữ liệu.
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-shrink-0 items-center justify-between gap-2">
              <p className="truncate text-[11px] text-[var(--muted-foreground)]">
                {selectedLeaf
                  ? `Đã chọn: ${selectedPathLabel}`
                  : "Chưa chọn ngành hàng."}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClosePopup}
                  className="rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)]"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  disabled={!selectedLeaf}
                  onClick={onConfirmSelection}
                  className="rounded-full bg-[var(--primary)] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition enabled:hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]"
                >
                  Chọn ngành hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

