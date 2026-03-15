"use client";

import { ImagePlus, Plus, X } from "lucide-react";
import type {
  ClassificationGroup,
  VariationRow,
  FirstColSpanInfo,
} from "../_types";
import { DisabledOverlay } from "./DisabledOverlay";

type SalesInfoSectionProps = {
  classifications: ClassificationGroup[];
  classificationsWithOptions: ClassificationGroup[];
  variationRows: VariationRow[];
  firstColSpanInfo: FirstColSpanInfo;
  variationValues: Record<string, { price: string; stock: string }>;
  optionDrafts: Record<string, string>;
  firstOptionImages: Record<string, { file?: File | null; previewUrl: string }>;
  salesInfoErrors: string[];
  onAddClassification: () => void;
  onRemoveClassification: (id: string) => void;
  onUpdateClassificationName: (id: string, name: string) => void;
  onAddOption: (clsId: string, option: string) => void;
  onRemoveOption: (clsId: string, option: string) => void;
  onOptionDraftChange: (clsId: string, value: string) => void;
  onUpdateVariationValue: (
    key: string,
    field: "price" | "stock",
    value: string,
  ) => void;
  onFirstOptionImageUpload: (
    option: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onRemoveFirstOptionImage: (option: string) => void;
  /** Khi true: chỉ cho sửa giá và tồn kho; phần phân loại/tùy chọn/ảnh bị disable và mờ */
  editableOnlyPriceStock?: boolean;
};

export function SalesInfoSection({
  classifications,
  classificationsWithOptions,
  variationRows,
  firstColSpanInfo,
  variationValues,
  optionDrafts,
  firstOptionImages,
  salesInfoErrors,
  onAddClassification,
  onRemoveClassification,
  onUpdateClassificationName,
  onAddOption,
  onRemoveOption,
  onOptionDraftChange,
  onUpdateVariationValue,
  onFirstOptionImageUpload,
  onRemoveFirstOptionImage,
  editableOnlyPriceStock = false,
}: SalesInfoSectionProps) {
  return (
    <section className="space-y-5 rounded-xl border border-[var(--border)] bg-gradient-to-b from-[var(--muted)]/5 to-transparent p-5 shadow-sm">
      <div>
        <h2 className="text-base font-semibold text-[var(--foreground)]">
          Thông tin bán hàng
        </h2>
        <p className="mt-1 text-xs text-[var(--muted-foreground)]">
          Thêm tối đa 2 nhóm phân loại (VD: Màu sắc, Kích thước). Mỗi tổ hợp
          sẽ có Giá và Kho hàng riêng.
        </p>
      </div>

      <DisabledOverlay active={editableOnlyPriceStock}>
        <div className="space-y-4">
          {classifications.map((cls) => (
            <div
              key={cls.id}
              className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <input
                  type="text"
                  readOnly={editableOnlyPriceStock}
                  className="flex-1 rounded-lg border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                  placeholder="Tên phân loại (VD: Màu sắc)"
                  value={cls.name}
                  onChange={(e) =>
                    onUpdateClassificationName(cls.id, e.target.value)
                  }
                />
                {!editableOnlyPriceStock && (
                  <button
                    type="button"
                    onClick={() => onRemoveClassification(cls.id)}
                    className="rounded-full p-1.5 text-[var(--muted-foreground)] hover:bg-red-100 hover:text-red-600"
                    aria-label="Xóa phân loại"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cls.options.map((opt) => (
                  <span
                    key={opt}
                    className="inline-flex items-center gap-1 rounded-full bg-[var(--primary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--primary)]"
                  >
                    {opt}
                    {!editableOnlyPriceStock && (
                      <button
                        type="button"
                        onClick={() => onRemoveOption(cls.id, opt)}
                        className="rounded-full hover:bg-[var(--primary)]/20"
                        aria-label={`Xóa ${opt}`}
                      >
                        <X className="size-3" />
                      </button>
                    )}
                  </span>
                ))}
                {!editableOnlyPriceStock && (
                  <div className="inline-flex items-center gap-1">
                    <input
                      type="text"
                      className="w-24 rounded-lg border border-[var(--input)] px-2.5 py-1.5 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                      placeholder="Thêm tùy chọn"
                      value={optionDrafts[cls.id] ?? ""}
                      onChange={(e) =>
                        onOptionDraftChange(cls.id, e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          onAddOption(cls.id, (optionDrafts[cls.id] ?? "").trim());
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        onAddOption(cls.id, (optionDrafts[cls.id] ?? "").trim())
                      }
                      className="rounded-lg bg-[var(--primary)] px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[var(--primary)]/90"
                    >
                      Thêm
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {!editableOnlyPriceStock && classifications.length < 2 && (
            <button
              type="button"
              onClick={onAddClassification}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
            >
              <Plus className="size-4" />
              Thêm phân loại hàng
            </button>
          )}
        </div>
      </DisabledOverlay>

      {classificationsWithOptions.length === 0 ? (
        <div className="space-y-4 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Giá <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={0}
              step={1000}
              className="w-full rounded-lg border border-[var(--input)] bg-white px-3 py-2.5 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
              placeholder="VD: 100000"
              value={variationValues["__default__"]?.price ?? ""}
              onChange={(e) =>
                onUpdateVariationValue("__default__", "price", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Kho hàng <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={0}
              className="w-full rounded-lg border border-[var(--input)] bg-white px-3 py-2.5 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
              placeholder="VD: 10"
              value={variationValues["__default__"]?.stock ?? ""}
              onChange={(e) =>
                onUpdateVariationValue("__default__", "stock", e.target.value)
              }
            />
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-white shadow-sm">
          <table className="w-full min-w-[360px] text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--muted)]/30">
                {classificationsWithOptions.map((cls) => (
                  <th
                    key={cls.id}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]"
                  >
                    {cls.name || "Phân loại"}
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  Giá <span className="text-red-500">*</span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  Kho hàng <span className="text-red-500">*</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {variationRows.map((row, idx) => {
                const key = row === null ? "__default__" : row.key;
                const v =
                  variationValues[key] ?? {
                    price: "",
                    stock: "",
                  };
                const isFirstRowOfGroup =
                  firstColSpanInfo &&
                  row !== null &&
                  idx % firstColSpanInfo.rowSpan === 0;
                const firstOption =
                  firstColSpanInfo &&
                  row !== null &&
                  firstColSpanInfo.options[
                    Math.floor(idx / firstColSpanInfo.rowSpan)
                  ];
                return (
                  <tr
                    key={key}
                    className="border-b border-[var(--border)]/50 last:border-b-0 transition-colors hover:bg-[var(--muted)]/20"
                  >
                    {classificationsWithOptions.length > 0 && (
                      <>
                        {firstColSpanInfo && isFirstRowOfGroup && (
                          <td
                            rowSpan={firstColSpanInfo.rowSpan}
                            className="align-top px-4 py-3"
                          >
                            {firstOption && (
                              <DisabledOverlay active={editableOnlyPriceStock}>
                                <div className="flex flex-col gap-2 min-h-[80px]">
                                  <span className="font-medium">
                                    {firstOption}
                                  </span>
                                  <div className="flex flex-col gap-1">
                                    {firstOptionImages[firstOption] ? (
                                      <div className="relative inline-flex w-fit">
                                        <img
                                          src={
                                            firstOptionImages[firstOption]
                                              .previewUrl
                                          }
                                          alt={firstOption}
                                          className="h-14 w-14 rounded-lg border border-[var(--border)] object-cover shadow-sm"
                                        />
                                        {!editableOnlyPriceStock && (
                                          <button
                                            type="button"
                                            onClick={() =>
                                              onRemoveFirstOptionImage(firstOption)
                                            }
                                            className="absolute -right-1 -top-1 rounded-full bg-red-500 p-0.5 text-white transition-colors hover:bg-red-600"
                                            aria-label={`Xóa ảnh ${firstOption}`}
                                          >
                                            <X className="size-3" />
                                          </button>
                                        )}
                                      </div>
                                    ) : editableOnlyPriceStock ? (
                                      <span className="text-xs text-[var(--muted-foreground)]">—</span>
                                    ) : (
                                      <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-dashed border-[var(--border)] bg-[var(--muted)]/30 px-2.5 py-2 text-xs text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/50">
                                        <ImagePlus className="size-4" />
                                        Thêm ảnh
                                        <input
                                          type="file"
                                          accept="image/*"
                                          className="hidden"
                                          onChange={(e) =>
                                            onFirstOptionImageUpload(
                                              firstOption,
                                              e,
                                            )
                                          }
                                        />
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </DisabledOverlay>
                            )}
                          </td>
                        )}
                        {classificationsWithOptions
                          .slice(1)
                          .map((cls, i) => (
                            <td key={cls.id} className="px-4 py-3">
                              {row && row.labels[i + 1]}
                            </td>
                          ))}
                      </>
                    )}
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        min={0}
                        step={1000}
                        className="w-full max-w-[140px] rounded-lg border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                        placeholder="VD: 100000"
                        value={v.price}
                        onChange={(e) =>
                          onUpdateVariationValue(key, "price", e.target.value)
                        }
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        min={0}
                        className="w-full max-w-[100px] rounded-lg border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                        placeholder="VD: 10"
                        value={v.stock}
                        onChange={(e) =>
                          onUpdateVariationValue(key, "stock", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {salesInfoErrors.length > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50/80 p-3 text-xs text-red-700">
          {salesInfoErrors.map((err, i) => (
            <p key={i} className="leading-relaxed">
              {err}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

