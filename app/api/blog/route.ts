import { posts } from "@/lib/data/News";
import { NewsPostSchema } from "@/lib/schema/news-schema";
import { NewsPost } from "@/lib/types/news-types";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = NewsPostSchema.parse(body);

    const newPost: NewsPost = {
      id: Date.now().toString(),
      ...validated,
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
