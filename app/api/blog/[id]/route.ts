import { NewsPostSchema } from "@/lib/schema/news-schema";
import { NewsPost } from "@/lib/types/news-types";
import { NextRequest, NextResponse } from "next/server";

// Reference to in-memory posts
let posts: NewsPost[] = [];

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Fetch fresh data
  const baseUrl = req.nextUrl.origin;
  const response = await fetch(`${baseUrl}/api/blog`, { cache: "no-store" });
  const result = await response.json();
  posts = result;

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const validated = NewsPostSchema.parse(body);

    const baseUrl = req.nextUrl.origin;
    const response = await fetch(`${baseUrl}/api/blog`, { cache: "no-store" });
    posts = await response.json();

    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const updatedPost = {
      ...posts[postIndex],
      ...validated,
      updatedAt: new Date().toISOString(),
    };

    posts[postIndex] = updatedPost;

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const baseUrl = req.nextUrl.origin;
  const response = await fetch(`${baseUrl}/api/blog`, { cache: "no-store" });
  const result = await response.json();
  posts = result;

  const postIndex = posts.findIndex((p) => p.id === id);
  if (postIndex === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  posts.splice(postIndex, 1);

  return NextResponse.json({ success: true });
}
