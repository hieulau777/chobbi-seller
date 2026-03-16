import { z } from "zod";

export const productFormSchema = z.object({
  productName: z
    .string()
    .min(1, "Vui lòng nhập tên sản phẩm")
    .max(120, "Tên sản phẩm tối đa 120 ký tự"),
  productDescription: z
    .string()
    .max(3000, "Mô tả sản phẩm tối đa 3000 ký tự")
    .optional(),
  weight: z.coerce
    .number()
    .min(0, "Trọng lượng phải >= 0 (gram)"),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export const defaultProductFormValues: ProductFormValues = {
  productName: "",
  productDescription: "",
  weight: 0,
};
