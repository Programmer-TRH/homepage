import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { BlogEditorForm } from "@/components/forms/blog-form";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/blog/${id}`);
  const post = await response.json();

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

        {post && <BlogEditorForm initialData={post} postId={id} mode="edit" />}
      </div>
    </main>
  );
}
