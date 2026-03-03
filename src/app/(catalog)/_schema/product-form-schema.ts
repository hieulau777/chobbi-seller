import { z } from "zod";

export const productFormSchema = z.object({
  productName: z.string().min(1, "Vui lòng nhập tên sản phẩm"),
  productDescription: z.string().optional(),
  weight: z.coerce
    .number({ required_error: "Trọng lượng sản phẩm là bắt buộc" })
    .min(0, "Trọng lượng phải >= 0 (gram)"),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export const defaultProductFormValues: ProductFormValues = {
  productName: "",
  productDescription: "",
  weight: 0,
};
