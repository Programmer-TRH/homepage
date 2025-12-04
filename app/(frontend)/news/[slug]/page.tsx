import { Button } from "@/components/ui/button";
import { posts } from "@/lib/data/News";
import { format } from "date-fns";
import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = posts.find((b) => b.slug === slug);

  return {
    title: blog?.title || "Blog",
    description: blog?.content.slice(0, 160) || "",
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((b) => b.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen bg-background mt-16 sm:mt-20">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/news">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft size={20} />
            Back to News
          </Button>
        </Link>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="w-full h-2/5 bg-muted overflow-hidden">
          <Image
            width={1080}
            height={720}
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8 border-b border-border pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={16} />
            {format(new Date(post.createdAt), "MMMM dd, yyyy")}
          </div>
        </header>

        {/* Excerpt */}
        <p className="text-lg text-muted-foreground mb-8">{post.description}</p>

        {/* Body */}
        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      {/* Footer */}
      <div className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/news">
            <Button>Back to News</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
