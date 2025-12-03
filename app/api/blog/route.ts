import { posts } from "@/lib/data/News";
import { NewsPostSchema } from "@/lib/schema/news-schema";
import { NewsPost } from "@/lib/types/blog-types";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = NewsPostSchema.parse(body);

    const slug = validated.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newPost: NewsPost = {
      id: Date.now().toString(),
      ...validated,
      slug,
      publishedAt: validated.published ? new Date().toISOString() : "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    posts.push(newPost);
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request" },
      { status: 400 }
    );
  }
}
