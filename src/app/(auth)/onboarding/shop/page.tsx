"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import apiClient from "@/lib/api-client";

type ShopResponse = {
  id: number;
  name: string;
  status: string;
};

export default function OnboardingShopPage() {
  const router = useRouter();
  const { status } = useSession();
  const [shop, setShop] = useState<ShopResponse | null>(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      router.replace("/login");
      return;
    }

    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await apiClient.get<ShopResponse>("/shop/me");
        if (cancelled) return;
        const data = res.data;
        if (data && data.id) {
          setShop(data);
          router.replace("/products");
        } else {
          setShop(null);
        }
      } catch (_e) {
        if (cancelled) return;
        // 404 hoặc lỗi khác coi như chưa có shop
        setShop(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Tên shop không được để trống.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const res = await apiClient.post<ShopResponse>("/shop", {
        name: name.trim(),
      });
      setShop(res.data);
      router.replace("/products");
    } catch (e: any) {
      const msg =
        e?.response?.data?.message ??
        "Không thể tạo shop. Vui lòng thử lại.";
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[var(--background)] px-4">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent" />
          <p className="text-sm text-[var(--muted-foreground)]">
            Đang chuẩn bị thông tin shop...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-4 py-8">
      <div className="w-full max-w-[420px] rounded-2xl border border-[var(--border)] bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
          Tạo shop đầu tiên của bạn
        </h1>
        <p className="mb-6 text-sm text-[var(--muted-foreground)]">
          Hoàn tất thông tin shop để bắt đầu đăng bán sản phẩm trên Chobbi.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="shopName"
              className="text-xs font-medium text-[var(--foreground)]"
            >
              Tên shop
            </label>
            <input
              id="shopName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Chobbi Official Store"
              className="block w-full rounded-md border border-[var(--input)] bg-[var(--muted)] px-3 py-2 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-1 focus:ring-offset-[var(--background)]"
            />
          </div>

          {error && (
            <p className="text-xs text-[var(--destructive)]">{error}</p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="mt-2 w-full rounded-lg bg-[var(--primary)] py-2.5 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Đang tạo shop..." : "Tạo shop"}
          </button>
        </form>
      </div>
    </div>
  );
}

