"use server";

import { getNewsPosts } from "@/services/news-posts";

export async function getNewsPostsAction() {
  const posts = await getNewsPosts();
  return posts;
}
