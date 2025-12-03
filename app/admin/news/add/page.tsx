"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { NewsPostFormData } from "@/lib/schema/news-schema";
import { toast } from "sonner";
import { BlogEditor } from "@/components/forms/blog-form";

export default function EditorPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: NewsPostFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("Response:", response);
      if (!response.ok) throw new Error("Failed to create post");

      toast.success(
        data.published
          ? "Post published successfully!"
          : "Draft saved successfully!"
      );

      router.push("/admin");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

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
          <h1 className="text-3xl font-bold">Create New Post</h1>
          <p className="text-muted-foreground">
            Write and publish a new blog post
          </p>
        </div>

        <BlogEditor onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </main>
  );
}
