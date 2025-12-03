"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader2 } from "lucide-react";
import { NewsPost } from "@/lib/types/blog-types";
import { NewsPostFormData } from "@/lib/schema/news-schema";
import { BlogEditor } from "@/components/forms/blog-form";
import { toast } from "sonner";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const postId = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${postId}`);
        if (!response.ok) throw new Error("Post not found");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        toast.error((error as Error).message);
        router.push("/admin");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId, router]);

  const handleSubmit = async (data: NewsPostFormData) => {
    if (!post) return;

    try {
      setIsSubmitting(true);
      const response = await fetch(`/api/blog/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update post");

      toast.success(
        data.published
          ? "Post published successfully!"
          : "Draft saved successfully!"
      );

      router.push("/admin");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/admin">
          <Button variant="ghost" className="gap-2 mb-8">
            <ChevronLeft size={20} />
            Back to Dashboard
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <p className="text-muted-foreground">Update your blog post</p>
        </div>

        {post && (
          <BlogEditor
            initialData={post}
            onSubmit={handleSubmit}
            isLoading={isSubmitting}
          />
        )}
      </div>
    </main>
  );
}
