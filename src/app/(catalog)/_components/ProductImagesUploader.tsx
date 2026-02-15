"use client";

import { ImagePlus, X } from "lucide-react";
import type { ProductImageItem } from "../_hooks/useImageUpload";

type ProductImagesUploaderProps = {
  productImages: ProductImageItem[];
  productImagesError: string | null;
  productImagesDragIndex: number | null;
  maxProductImages: number;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (index: number) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
  onDragIndexChange: (index: number | null) => void;
};

export function ProductImagesUploader({
  productImages,
  productImagesError,
  productImagesDragIndex,
  maxProductImages,
  onUpload,
  onRemove,
  onReorder,
  onDragIndexChange,
}: ProductImagesUploaderProps) {
  return (
    <div className="">
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
          Ảnh sản phẩm
        </label>
        <span className="text-sm text-[var(--muted-foreground)]">
          Đã upload {productImages.length}/{maxProductImages} ảnh.
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {productImages.map((item, index) => (
          <div
            key={item.existingId ?? item.previewUrl}
            draggable
            onDragStart={() => onDragIndexChange(index)}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.add("ring-2", "ring-[var(--primary)]");
            }}
            onDragLeave={(e) => {
              e.currentTarget.classList.remove(
                "ring-2",
                "ring-[var(--primary)]",
              );
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove(
                "ring-2",
                "ring-[var(--primary)]",
              );
              if (productImagesDragIndex !== null) {
                onReorder(productImagesDragIndex, index);
              }
            }}
            onDragEnd={() => onDragIndexChange(null)}
            className={`group relative aspect-square w-20 flex-shrink-0 cursor-grab overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm transition-all active:cursor-grabbing sm:w-24 ${
              productImagesDragIndex === index ? "opacity-60" : ""
            }`}
          >
            <img
              src={item.previewUrl}
              alt={`Ảnh ${index + 1}`}
              className="h-full w-full object-cover"
              draggable={false}
            />
            <span className="absolute left-1 top-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
              {index + 1}
            </span>
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-600"
              aria-label={`Xóa ảnh ${index + 1}`}
            >
              <X className="size-3" />
            </button>
          </div>
        ))}
        {productImages.length < maxProductImages && (
          <label className="flex aspect-square w-20 flex-shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-[var(--border)] bg-white transition-colors hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/10 sm:w-24">
            <ImagePlus className="size-6 text-[var(--muted-foreground)] sm:size-8" />
            <span className="text-[10px] text-[var(--muted-foreground)]">
              Thêm
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={onUpload}
            />
          </label>
        )}
      </div>

      {productImages.length > 0 && (
        <div className="mt-3 flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
            Thumbnail
          </span>
          <div className="inline-block overflow-hidden">
            <img
              src={productImages[0].previewUrl}
              alt="Thumbnail"
              className="h-20 w-20 object-cover sm:h-24 sm:w-24"
            />
          </div>
        </div>
      )}
      {productImagesError && (
        <p className="text-xs text-red-600">{productImagesError}</p>
      )}
    </div>
  );
}

