export type NewsPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export interface CreateNewsPostInput {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
}

export interface UpdateNewsPostInput extends Partial<CreateNewsPostInput> {
  id: string;
}
