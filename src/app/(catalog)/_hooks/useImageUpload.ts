"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const MAX_PRODUCT_IMAGES = 9;
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export type ProductImageItem = {
  file?: File | null;
  previewUrl: string;
  existingId?: number;
};

function isBlobUrl(url: string) {
  return url.startsWith("blob:");
}

export function useImageUpload() {
  const [productImages, setProductImages] = useState<ProductImageItem[]>([]);
  const [productImagesDragIndex, setProductImagesDragIndex] = useState<
    number | null
  >(null);
  const [productImagesError, setProductImagesError] = useState<string | null>(
    null,
  );
  const productImagesRef = useRef(productImages);
  productImagesRef.current = productImages;

  const handleProductImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files?.length) return;
      setProductImagesError(null);
      const toAdd: ProductImageItem[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith("image/")) continue;
        if (file.size > MAX_FILE_SIZE_BYTES) {
          setProductImagesError(`Ảnh "${file.name}" vượt quá 10MB.`);
          continue;
        }
        toAdd.push({ file, previewUrl: URL.createObjectURL(file) });
      }
      setProductImages((prev) => {
        const combined = [...prev, ...toAdd];
        if (combined.length <= MAX_PRODUCT_IMAGES) return combined;
        const kept = combined.slice(0, MAX_PRODUCT_IMAGES);
        combined.slice(MAX_PRODUCT_IMAGES).forEach((item) => {
          if (item.file && item.previewUrl && isBlobUrl(item.previewUrl)) {
            URL.revokeObjectURL(item.previewUrl);
          }
        });
        return kept;
      });
      e.target.value = "";
    },
    [],
  );

  const removeProductImage = useCallback((index: number) => {
    setProductImages((prev) => {
      const item = prev[index];
      if (item?.file && item?.previewUrl && isBlobUrl(item.previewUrl)) {
        URL.revokeObjectURL(item.previewUrl);
      }
      return prev.filter((_, i) => i !== index);
    });
  }, []);

  const reorderProductImages = useCallback(
    (fromIndex: number, toIndex: number) => {
      if (fromIndex === toIndex) return;
      setProductImages((prev) => {
        const arr = [...prev];
        const [removed] = arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, removed);
        return arr;
      });
      setProductImagesDragIndex(null);
    },
    [],
  );

  useEffect(() => {
    return () => {
      productImagesRef.current.forEach((item) => {
        if (item.previewUrl && isBlobUrl(item.previewUrl)) {
          URL.revokeObjectURL(item.previewUrl);
        }
      });
    };
  }, []);

  const clearProductImages = useCallback(() => setProductImages([]), []);

  return {
    productImages,
    setProductImages,
    productImagesError,
    productImagesDragIndex,
    setProductImagesDragIndex,
    handleProductImageUpload,
    removeProductImage,
    reorderProductImages,
    clearProductImages,
    MAX_PRODUCT_IMAGES,
  };
}
