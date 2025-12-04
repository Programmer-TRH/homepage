import { z } from "zod";

export const NewsPostSchema = z.object({
  slug: z.string(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(300, "Description must be less than 300 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  image: z.url("Image must be a valid URL").or(z.literal("")),
});

export type NewsPostFormData = z.infer<typeof NewsPostSchema>;
