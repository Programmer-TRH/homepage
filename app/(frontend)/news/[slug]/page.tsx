import { posts } from "@/lib/data/News";
import Image from "next/image";

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
  const blog = posts.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <div
        className="prose prose-lg blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <Image
        src={blog.image}
        alt={blog.title}
        width={720}
        height={480}
        className="w-full max-h-80 mt-4"
      />
    </div>
  );
}
