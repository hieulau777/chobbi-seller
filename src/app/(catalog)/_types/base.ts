export type CategoryNode = {
  id: number;
  name: string;
  children?: CategoryNode[];
};

export type ReadProductAttributeValueDto = {
  id: number;
  value: string;
};

export type ReadProductAttributesDto = {
  id: number;
  name: string;
  isRequired: boolean;
  isMultipleAllow: boolean;
  isCustomAllow: boolean;
  /** Backend: TEXT | NUMBER | BOOLEAN | DATE */
  type?: string;
  values?: ReadProductAttributeValueDto[];
};

export type ClassificationGroup = {
  id: string;
  name: string;
  options: string[];
};

export type VariationRow = { key: string; labels: string[] } | null;

export type FirstColSpanInfo = {
  rowSpan: number;
  options: string[];
} | null;
