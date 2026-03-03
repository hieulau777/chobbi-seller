export function formatPrice(value: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
}

/** In hoa chữ cái đầu mỗi phần, ví dụ "trắng / s" -> "Trắng / S". */
export function capitalizeVariationName(name: string | null | undefined): string {
  if (!name || !name.trim()) return "";
  return name
    .split(" / ")
    .map((part) =>
      part.trim() ? part.charAt(0).toUpperCase() + part.slice(1) : part
    )
    .join(" / ");
}

/** Trả về URL ảnh có thể truy cập được. img từ API là path (vd: products/2024/01/15/xxx.jpg). */
export function getImageUrl(img: string | null | undefined): string {
  if (!img || !img.trim()) return "/file.svg";
  if (img.startsWith("http://") || img.startsWith("https://")) return img;
  if (img.startsWith("/api/backend/static/")) return img;
  const path = img.startsWith("/") ? img.slice(1) : img;
  return `/api/backend/static/${path}`;
}
