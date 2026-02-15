import type { ClassificationGroup, VariationRow } from "../types";

export function validateSalesInfo(
  classifications: ClassificationGroup[],
  variationRows: (VariationRow)[],
  variationValues: Record<string, { price: string; stock: string }>,
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (classifications.length === 0) {
    const v = variationValues["__default__"];
    if (!v?.price?.trim()) errors.push("Vui lòng nhập giá.");
    if (!v?.stock?.trim()) errors.push("Vui lòng nhập kho hàng.");
    return { valid: errors.length === 0, errors };
  }

  const hasEmptyName = classifications.some((c) => !c.name?.trim());
  if (hasEmptyName) errors.push("Tên phân loại không được để trống.");

  const hasEmptyOptions = classifications.some(
    (c) => !c.options?.length || c.options.every((o) => !o?.trim()),
  );
  if (hasEmptyOptions) errors.push("Mỗi phân loại cần ít nhất một tùy chọn.");

  for (const row of variationRows) {
    if (row === null) continue;
    const v = variationValues[row.key];
    if (!v?.price?.trim()) errors.push(`Thiếu giá cho tổ hợp: ${row.labels.join(" / ")}`);
    if (!v?.stock?.trim()) errors.push(`Thiếu kho hàng cho tổ hợp: ${row.labels.join(" / ")}`);
  }

  return { valid: errors.length === 0, errors };
}
