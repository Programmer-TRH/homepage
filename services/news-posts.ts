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
  const result = await db.collection("news-posts").insertOne(data);
  if (!result.insertedId) throw new Error("News post creation failed");
  return {
    message: "News post created successfully",
  };
}
