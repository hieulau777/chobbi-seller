"use client";

import { useState, useCallback } from "react";
import apiClient from "@/lib/api-client";
import type { ReadProductAttributesDto } from "../_types";

export function useAttributes() {
  const [attributes, setAttributes] = useState<ReadProductAttributesDto[]>([]);
  const [loadingAttributes, setLoadingAttributes] = useState(false);
  const [attributesError, setAttributesError] = useState<string | null>(null);
  const [openAttributeId, setOpenAttributeId] = useState<number | null>(null);
  const [attributeSelections, setAttributeSelections] = useState<Record<number, number[]>>({});
  const [attributeCustomDrafts, setAttributeCustomDrafts] = useState<Record<number, string>>({});

  const loadAttributes = useCallback((categoryId: number) => {
    setLoadingAttributes(true);
    setAttributesError(null);
    apiClient
      .get<ReadProductAttributesDto[]>(`/category/${categoryId}/attributes`)
      .then((res) => setAttributes(res.data ?? []))
      .catch(() => setAttributesError("Không tải được thuộc tính."))
      .finally(() => setLoadingAttributes(false));
  }, []);

  const addCustomAttributeValue = useCallback(
    (attrId: number, value: string, tempId: number) => {
      const attr = attributes.find((a) => a.id === attrId);
      if (!attr) return;
      setAttributes((prev) =>
        prev.map((a) => {
          if (a.id !== attrId) return a;
          const values = [...(a.values ?? []), { id: tempId, value }];
          return { ...a, values };
        }),
      );
      setAttributeSelections((prev) => ({
        ...prev,
        [attrId]: [...(prev[attrId] ?? []), tempId],
      }));
    },
    [attributes],
  );

  return {
    attributes,
    setAttributes,
    loadingAttributes,
    attributesError,
    openAttributeId,
    setOpenAttributeId,
    attributeSelections,
    setAttributeSelections,
    attributeCustomDrafts,
    setAttributeCustomDrafts,
    loadAttributes,
    addCustomAttributeValue,
  };
}
