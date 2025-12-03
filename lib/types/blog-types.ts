export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image: string;
  featured: boolean;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNewsPostInput {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image: string;
  featured: boolean;
  published: boolean;
}

export interface UpdateNewsPostInput extends Partial<CreateNewsPostInput> {
  id: string;
}

export const BLOG_CATEGORIES = [
  "Technology",
  "Design",
  "Development",
  "Business",
  "Lifestyle",
  "Other",
];
