 "use client";

import type { ShopPromotionResponse } from "@/app/(catalog)/marketing/promotions/page";

export type SelectPromotionProductsModalProps = {
  open: boolean;
  onClose: () => void;
  promotion: ShopPromotionResponse | null;
};

export function SelectPromotionProductsModal({
  open,
  onClose,
  promotion,
}: SelectPromotionProductsModalProps) {
  if (!open || !promotion) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
      <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-xl bg-white px-6 py-5 text-center shadow-xl">
        <div className="text-sm font-medium text-[var(--foreground)]">
          Chobbi đang phát triển ạ ❤️
        </div>
        <button
          type="button"
          className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary)]/90"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

