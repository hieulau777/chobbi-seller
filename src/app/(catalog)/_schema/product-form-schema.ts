import { z } from "zod";

export const productFormSchema = z.object({
  productName: z.string().min(1, "Vui lòng nhập tên sản phẩm"),
  productDescription: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export const defaultProductFormValues: ProductFormValues = {
  productName: "",
  productDescription: "",
};
