import { NewsPostSchema } from "@/lib/schema/news-schema";
import { NextResponse } from "next/server";

// Reference to in-memory posts
let posts: any[] = [];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await Promise.resolve(params);

  // Fetch fresh data
  const response = await fetch(`${request.url.split("/api")[0]}/api/blog`);
  const result = await response.json();
  console.log("Result:", result);
  posts = result;

  const post = posts.find((p) => p.id === id);
  console.log("Post:", post);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);
    const body = await request.json();
    const validated = NewsPostSchema.parse(body);

    // Fetch fresh data
    const response = await fetch(`${request.url.split("/api")[0]}/api/blog`);
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
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await Promise.resolve(params);

  // Fetch fresh data
  const response = await fetch(`${request.url.split("/api")[0]}/api/blog`);
  const result = await response.json();
  console.log("Result:", result);
  posts = result;

  const postIndex = posts.findIndex((p) => p.id === id);
  if (postIndex === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  posts.splice(postIndex, 1);
  console.log("After delete:", posts);
  return NextResponse.json({ success: true });
}
