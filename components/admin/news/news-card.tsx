import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { NewsPost } from "@/lib/types/blog-types";

interface BlogCardProps {
  post: NewsPost;
  variant?: "default" | "featured";
}

export function NewsCard({ post, variant = "default" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
          <div className="relative h-64 w-full bg-muted overflow-hidden">
            <Image
              src={
                post.image || "/placeholder.svg?height=256&width=512&query=blog"
              }
              alt={post.title}
              width={1080}
              height={720}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge>{post.category}</Badge>
            </div>
          </div>
          <div className="p-6 flex flex-col grow">
            <h2 className="text-2xl font-bold mb-2 text-balance line-clamp-2">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4 grow line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>{format(new Date(post.publishedAt), "MMM dd, yyyy")}</span>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer p-4">
        <div className="flex gap-4">
          <div className="relative h-32 w-40 shrink-0 bg-muted rounded-lg overflow-hidden">
            <Image
              width={1080}
              height={720}
              src={
                post.image || "/placeholder.svg?height=128&width=160&query=blog"
              }
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grow">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold line-clamp-2">{post.title}</h3>
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{post.author}</span>
              <span>{format(new Date(post.publishedAt), "MMM dd, yyyy")}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
