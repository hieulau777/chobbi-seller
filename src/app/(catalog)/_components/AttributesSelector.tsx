"use client";

import type { ReadProductAttributesDto } from "../_types";

type AttributesSelectorProps = {
  attributes: ReadProductAttributesDto[];
  loadingAttributes: boolean;
  attributesError: string | null;
  openAttributeId: number | null;
  attributeSelections: Record<number, number[]>;
  attributeCustomDrafts: Record<number, string>;
  onToggleDropdown: (attrId: number) => void;
  onSelectValue: (attrId: number, valueId: number, isMultiple: boolean) => void;
  onClearSelection: (attrId: number) => void;
  onCustomDraftChange: (attrId: number, value: string) => void;
  onAddCustomValue: (attrId: number, draft: string) => void;
};

export function AttributesSelector({
  attributes,
  loadingAttributes,
  attributesError,
  openAttributeId,
  attributeSelections,
  attributeCustomDrafts,
  onToggleDropdown,
  onSelectValue,
  onClearSelection,
  onCustomDraftChange,
  onAddCustomValue,
}: AttributesSelectorProps) {
  if (loadingAttributes) {
    return (
      <p className="text-xs text-[var(--muted-foreground)]">
        Đang tải thuộc tính ngành hàng...
      </p>
    );
  }
  if (attributesError) {
    return <p className="text-xs text-red-600">{attributesError}</p>;
  }
  if (attributes.length === 0) return null;

  return (
    <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 p-3">
      <h2 className="text-sm font-semibold text-[var(--foreground)]">
        Thuộc tính ngành hàng
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {attributes.map((attr) => {
          const selectedIds = attributeSelections[attr.id] ?? [];
          const isDateType = attr.type === "DATE";
          const dateValueRaw =
            isDateType && selectedIds.length > 0 && attr.values
              ? (attr.values.find((v) => selectedIds.includes(v.id))?.value ??
                "")
              : "";
          const dateValue =
            dateValueRaw && dateValueRaw.length >= 10
              ? dateValueRaw.slice(0, 10)
              : dateValueRaw;
          const selectedLabels =
            !isDateType &&
            attr.values &&
            attr.values.length > 0 &&
            selectedIds.length
              ? attr.values
                  .filter((v) => selectedIds.includes(v.id))
                  .map((v) => v.value)
                  .join(", ")
              : "";
          const isDropdownOpen = openAttributeId === attr.id;

          const handleToggleDropdown = () => {
            if (!attr.values || attr.values.length === 0) return;
            onToggleDropdown(attr.id);
          };

          const handleSelectValue = (valueId: number) => {
            onSelectValue(attr.id, valueId, attr.isMultipleAllow);
          };

          const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const v = e.target.value;
            onClearSelection(attr.id);
            if (v) onAddCustomValue(attr.id, v);
          };

          return (
            <div key={attr.id} className="space-y-1 text-sm">
              <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                {attr.name}
                {attr.isRequired && (
                  <span className="text-red-600"> *</span>
                )}
              </label>

              <div className="space-y-1">
                {isDateType ? (
                  <div className="relative flex items-center gap-2">
                    <input
                      type="date"
                      value={dateValue}
                      onChange={handleDateChange}
                      max="9999-12-31"
                      className="w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm transition-colors duration-200 ease-out hover:border-[var(--primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                      aria-label={attr.name}
                    />
                    {dateValue && (
                      <button
                        type="button"
                        onClick={() => onClearSelection(attr.id)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                        aria-label={`Xóa chọn ${attr.name}`}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly={!!(attr.values && attr.values.length > 0)}
                        className="w-full cursor-pointer rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm transition-colors duration-200 ease-out hover:border-[var(--primary)]/60 hover:bg-[var(--muted)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                        placeholder={
                          attr.values && attr.values.length > 0
                            ? "Chọn giá trị"
                            : "Nhập giá trị thuộc tính"
                        }
                        value={
                          attr.values && attr.values.length > 0
                            ? selectedLabels
                            : ""
                        }
                        onClick={handleToggleDropdown}
                        onChange={() => {}}
                      />
                      {attr.values &&
                        attr.values.length > 0 &&
                        selectedIds.length > 0 && (
                          <button
                            type="button"
                            onClick={() => onClearSelection(attr.id)}
                            className="absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-sm text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                            aria-label={`Xóa chọn ${attr.name}`}
                          >
                            ×
                          </button>
                        )}
                    </div>
                    {isDropdownOpen && attr.values && attr.values.length > 0 && (
                      <div className="mt-1 max-h-48 w-full overflow-y-auto rounded-md border border-[var(--border)] bg-white text-xs shadow-lg transition-opacity duration-150 ease-out">
                        {attr.values.map((v) => {
                          const active = selectedIds.includes(v.id);
                          return (
                            <button
                              key={v.id}
                              type="button"
                              onClick={() => handleSelectValue(v.id)}
                              className={`flex w-full cursor-pointer items-center justify-between px-3 py-1.5 text-left transition-colors duration-150 ease-out ${
                                active
                                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                                  : "text-[var(--foreground)] hover:bg-[var(--muted)]/60"
                              }`}
                            >
                              <span className="truncate">{v.value}</span>
                            </button>
                          );
                        })}
                        {attr.isCustomAllow && attr.isMultipleAllow && (
                          <div className="mt-1 border-t border-[var(--border)] bg-[var(--muted)]/20 px-2 py-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                className="flex-1 rounded-md border border-[var(--input)] px-2 py-1 text-[11px] shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--ring)]"
                                placeholder="Nhập custom value"
                                value={attributeCustomDrafts[attr.id] ?? ""}
                                onChange={(e) =>
                                  onCustomDraftChange(attr.id, e.target.value)
                                }
                              />
                              <button
                                type="button"
                                className="cursor-pointer rounded-full bg-[var(--primary)] px-2 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-[var(--primary)]/90"
                                onClick={() => {
                                  const draft = (
                                    attributeCustomDrafts[attr.id] ?? ""
                                  ).trim();
                                  if (draft) onAddCustomValue(attr.id, draft);
                                }}
                              >
                                Thêm
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

