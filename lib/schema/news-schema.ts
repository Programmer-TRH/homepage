import { z } from "zod";

export const NewsPostSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters"),
  excerpt: z
    .string()
    .min(10, "Excerpt must be at least 10 characters")
    .max(300, "Excerpt must be less than 300 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.enum([
    "Technology",
    "Design",
    "Development",
    "Business",
    "Lifestyle",
    "Other",
  ]),
  author: z
    .string()
    .min(2, "Author name must be at least 2 characters")
    .max(100),
  image: z.url("Image must be a valid URL").or(z.literal("")),
  featured: z.boolean(),
  published: z.boolean(),
});

export type NewsPostFormData = z.infer<typeof NewsPostSchema>;
