"use client";

import { useState, useMemo, useCallback } from "react";
import type {
  ClassificationGroup,
  VariationRow,
  FirstColSpanInfo,
} from "../_types";
import { generateCartesianProduct, validateSalesInfo } from "../_utils/index";

const MAX_OPTION_IMAGE_SIZE_MB = 5;
const MAX_OPTION_IMAGE_BYTES = MAX_OPTION_IMAGE_SIZE_MB * 1024 * 1024;

export function useSalesInfo() {
  const [classifications, setClassifications] = useState<ClassificationGroup[]>([]);
  const [variationValues, setVariationValues] = useState<
    Record<string, { price: string; stock: string }>
  >({});
  const [optionDrafts, setOptionDrafts] = useState<Record<string, string>>({});
  const [firstOptionImages, setFirstOptionImages] = useState<
    Record<string, { file: File; previewUrl: string }>
  >({});

  const classificationsWithOptions = useMemo(
    () => classifications.filter((c) => c.options.length > 0),
    [classifications],
  );

  const cartesianProduct = useMemo(
    () =>
      generateCartesianProduct(
        classificationsWithOptions.map((c) => c.options),
      ),
    [classificationsWithOptions],
  );

  const variationRows: (VariationRow)[] = useMemo(() => {
    if (cartesianProduct.length === 0) return [null];
    return cartesianProduct.map((labels) => ({
      key: labels.join("|"),
      labels,
    }));
  }, [cartesianProduct]);

  const firstColSpanInfo: FirstColSpanInfo = useMemo(() => {
    if (classificationsWithOptions.length === 0) return null;
    const firstOptions = classificationsWithOptions[0].options;
    const rowSpan = cartesianProduct.length / firstOptions.length;
    return { rowSpan, options: firstOptions };
  }, [classificationsWithOptions, cartesianProduct]);

  const [salesInfoErrors, setSalesInfoErrors] = useState<string[]>([]);

  const validate = useCallback(() => {
    const { valid, errors } = validateSalesInfo(
      classifications,
      variationRows,
      variationValues,
    );
    setSalesInfoErrors(errors);
    return valid;
  }, [classifications, variationRows, variationValues]);

  const addClassification = useCallback(() => {
    setClassifications((prev) => [
      ...prev,
      { id: String(Date.now()), name: "", options: [] },
    ]);
  }, []);

  const removeClassification = useCallback((id: string) => {
    setClassifications((prev) => prev.filter((c) => c.id !== id));
    setVariationValues((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(id)) delete next[key];
      });
      return next;
    });
    setOptionDrafts((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const updateClassificationName = useCallback((id: string, name: string) => {
    setClassifications((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name } : c)),
    );
  }, []);

  const addOption = useCallback((clsId: string, option: string) => {
    const trimmed = option.trim();
    if (!trimmed) return;
    setClassifications((prev) =>
      prev.map((c) => {
        if (c.id !== clsId) return c;
        if (c.options.includes(trimmed)) return c;
        return { ...c, options: [...c.options, trimmed] };
      }),
    );
    setOptionDrafts((prev) => ({ ...prev, [clsId]: "" }));
  }, []);

  const removeOption = useCallback((clsId: string, option: string) => {
    setClassifications((prev) =>
      prev.map((c) => {
        if (c.id !== clsId) return c;
        return { ...c, options: c.options.filter((o) => o !== option) };
      }),
    );
    setVariationValues((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.includes(option)) delete next[key];
      });
      return next;
    });
    setFirstOptionImages((prev) => {
      const next = { ...prev };
      if (next[option]?.previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(next[option].previewUrl);
      }
      delete next[option];
      return next;
    });
  }, []);

  const updateVariationValue = useCallback(
    (key: string, field: "price" | "stock", value: string) => {
      setVariationValues((prev) => ({
        ...prev,
        [key]: {
          ...(prev[key] ?? { price: "", stock: "" }),
          [field]: value,
        },
      }));
    },
    [],
  );

  const handleFirstOptionImageUpload = useCallback(
    (option: string, e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file?.type.startsWith("image/")) return;
      if (file.size > MAX_OPTION_IMAGE_BYTES) return;
      setFirstOptionImages((prev) => {
        const old = prev[option];
        if (old?.previewUrl?.startsWith("blob:")) URL.revokeObjectURL(old.previewUrl);
        return {
          ...prev,
          [option]: { file, previewUrl: URL.createObjectURL(file) },
        };
      });
      e.target.value = "";
    },
    [],
  );

  const removeFirstOptionImage = useCallback((option: string) => {
    setFirstOptionImages((prev) => {
      const item = prev[option];
      if (item?.previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(item.previewUrl);
      }
      const next = { ...prev };
      delete next[option];
      return next;
    });
  }, []);

  const resetAfterSubmit = useCallback(() => {
    setClassifications([]);
    setVariationValues({});
    setOptionDrafts({});
    setSalesInfoErrors([]);
    Object.values(firstOptionImages).forEach((item) => {
      if (item.previewUrl.startsWith("blob:")) URL.revokeObjectURL(item.previewUrl);
    });
    setFirstOptionImages({});
  }, [firstOptionImages]);

  return {
    classifications,
    setClassifications,
    classificationsWithOptions,
    variationRows,
    firstColSpanInfo,
    variationValues,
    setVariationValues,
    optionDrafts,
    setOptionDrafts,
    firstOptionImages,
    salesInfoErrors,
    validate,
    addClassification,
    removeClassification,
    updateClassificationName,
    addOption,
    removeOption,
    updateVariationValue,
    handleFirstOptionImageUpload,
    removeFirstOptionImage,
    resetAfterSubmit,
  };
}
