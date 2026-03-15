"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";
import { PlayCircle, Database, AlertCircle } from "lucide-react";

type SellerUsageGuide = {
  title: string | null;
  content: string | null;
  youtubeUrl: string | null;
  seedButtonEnabled: boolean;
};

export default function SellerGuidePage() {
  const [guide, setGuide] = useState<SellerUsageGuide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    apiClient
      .get<SellerUsageGuide>("/guide/seller")
      .then((res) => {
        if (!cancelled) {
          setGuide(res.data ?? null);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Không tải được hướng dẫn sử dụng. Vui lòng thử lại sau.");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const toEmbedYoutubeUrl = (url: string | null): string => {
    if (!url) return "";
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtube.com") && u.searchParams.get("v")) {
        const id = u.searchParams.get("v");
        return `https://www.youtube.com/embed/${id}`;
      }
      if (u.hostname === "youtu.be") {
        const id = u.pathname.replace("/", "");
        return `https://www.youtube.com/embed/${id}`;
      }
      return url;
    } catch {
      return url ?? "";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header tổng quan + icon */}
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
          <PlayCircle className="h-5 w-5" />
        </span>
        <div>
          <h1 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
            Hướng dẫn sử dụng kênh bán hàng
          </h1>
          <p className="text-xs text-[var(--muted-foreground)] sm:text-sm">
            Xem nhanh nội dung hướng dẫn bạn đã cấu hình và seed nhanh bộ sản phẩm demo.
          </p>
        </div>
      </div>

      {/* Trạng thái load nội dung hướng dẫn từ chobbi-admin */}
      {loading && (
        <p className="text-sm text-[var(--muted-foreground)]">
          Đang tải nội dung hướng dẫn...
        </p>
      )}

      {!loading && error && (
        <div className="flex items-start gap-2 rounded-md border border-red-100 bg-red-50 px-3 py-2 text-xs text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      {/* Nội dung + seed + video lấy từ Mongo (chobbi-admin cấu hình) */}
      {!loading && !error && guide && (
        <div className="space-y-4">
          {guide.content && (
            <section className="space-y-2 rounded-lg border border-[var(--border)] bg-[var(--muted)]/10 px-4 py-3">
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                {guide.content}
              </p>
            </section>
          )}

          {/* Nút seed data — chỉ là nút, không khung ngoài */}
          {guide.seedButtonEnabled && (
            <SeedDemoButton />
          )}

          {guide.youtubeUrl && (
            <section className="space-y-2">
              <p className="text-xs font-medium text-[var(--muted-foreground)]">
                Video hướng dẫn
              </p>
              <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-black/90">
                <div className="aspect-video">
                  <iframe
                    title="Hướng dẫn sử dụng seller"
                    src={toEmbedYoutubeUrl(guide.youtubeUrl)}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

function SeedDemoButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const res = await apiClient.post<{
        success: boolean;
        message: string;
      }>("/guide/seller/seed-demo");
      if (res.data?.success) {
        setMessage(
          res.data.message ||
            "Đã seed sản phẩm demo thành công. Bạn có thể vào trang Tất cả sản phẩm để xem các sản phẩm đã được thêm."
        );
        setDisabled(true);
      } else {
        setError(res.data?.message || "Seed sản phẩm demo thất bại.");
        // Nếu backend báo đã seed rồi thì cũng disable nút
        if (
          res.data?.message &&
          res.data.message.includes("đã seed sản phẩm demo trước đó")
        ) {
          setDisabled(true);
        }
      }
    } catch {
      setError("Lỗi khi seed demo products. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading || disabled}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Database className="h-4 w-4" />
        <span>{loading ? "Đang seed dữ liệu..." : "Seed data sản phẩm demo"}</span>
      </button>
      {message && (
        <p className="text-[11px] text-emerald-700">
          {message}
        </p>
      )}
      {error && <p className="text-[11px] text-red-600">{error}</p>}
    </div>
  );
}


