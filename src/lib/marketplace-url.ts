/**
 * URL gốc marketplace (client) — dùng cho link "Xem trên marketplace", "Xem shop".
 * Production: set NEXT_PUBLIC_CLIENT_URL (từ .env.prod CLIENT_URL) khi build.
 */
export function getMarketplaceBaseUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_CLIENT_URL ??
    process.env.NEXT_PUBLIC_CLIENT_BASE_URL ??
    "http://localhost:3000";
  return url.replace(/\/$/, "");
}
