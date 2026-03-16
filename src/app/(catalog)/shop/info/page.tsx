"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, User } from "lucide-react";
import { useMyShop } from "@/hooks/useMyShop";
import apiClient from "@/lib/api-client";
import { getMarketplaceBaseUrl } from "@/lib/marketplace-url";

function avatarImageSrc(path: string | null | undefined): string {
  if (!path) return "";
  return path.startsWith("/api/backend/static/") ? path : `/api/backend/static/${path}`;
}

export default function ShopInfoPage() {
  const { shop, loading, error, refetch } = useMyShop();
  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shop) setName(shop.name);
  }, [shop?.id]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setAvatarFile(null);
      setAvatarPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!shop) return;
    setSaving(true);
    setSaveError(null);
    setSaveSuccess(false);
    try {
      const form = new FormData();
      const nameToSend = name?.trim() || shop.name;
      if (nameToSend) form.append("name", nameToSend);
      if (avatarFile) form.append("avatar", avatarFile);

      await apiClient.patch("/shop/me", form);
      await refetch();
      setAvatarFile(null);
      setAvatarPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err: any) {
      setSaveError(
        err?.response?.data?.message ?? "Không thể cập nhật. Vui lòng thử lại."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-4">Đang tải...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!shop) {
    return (
      <div className="p-4">
        Bạn chưa có shop. Hãy tạo shop trước khi xem hồ sơ shop.
      </div>
    );
  }

  const displayAvatar = avatarPreview ?? (shop.avatar ? avatarImageSrc(shop.avatar) : null);

  const marketplaceShopUrl = `${getMarketplaceBaseUrl()}/shop/${shop.id}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--foreground)]">
            Hồ sơ shop
          </h1>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            Cập nhật tên và avatar shop.
          </p>
        </div>
        <Link
          href={marketplaceShopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-lg border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/30"
        >
          <ExternalLink className="h-4 w-4" />
          Xem shop trên marketplace
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm"
      >
        {saveError && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {saveError}
          </div>
        )}
        {saveSuccess && (
          <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
            Đã lưu thay đổi.
          </div>
        )}

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--muted)]">
              {displayAvatar ? (
                <Image
                  src={displayAvatar}
                  alt=""
                  fill
                  className="object-cover"
                  unoptimized={displayAvatar.startsWith("/api/backend")}
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-[var(--muted-foreground)]">
                  <User className="size-12" />
                </span>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="block w-full max-w-xs text-sm text-[var(--muted-foreground)] file:mr-2 file:rounded-lg file:border-0 file:bg-[var(--primary)] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white file:hover:opacity-90"
            />
          </div>

          <div>
            <label
              htmlFor="shop-name"
              className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
            >
              Tên shop
            </label>
            <input
              id="shop-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={shop.name}
              className="w-full max-w-md rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {saving ? "Đang lưu..." : "Lưu thay đổi"}
            </button>
          </div>
        </div>
      </form>

    </div>
  );
}
