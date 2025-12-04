import db from "@/lib/db";
import { NewsPost } from "@/lib/types/news-types";

export async function getNewsPosts() {
  const posts = await db
    .collection("news-posts")
    .find({})
    .project({ _id: 0 })
    .toArray();
  return posts as NewsPost[];
}

export async function createNewsPost(data: NewsPost) {
  await db.collection("news-posts").insertOne(data);
  return { success: true };
}
