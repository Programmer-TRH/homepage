import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { NewsPost } from "@/lib/types/news-types";

interface BlogCardProps {
  post: NewsPost;
  variant?: "default" | "featured";
}

export function NewsCard({ post }: BlogCardProps) {
  return (
    <Link href={`/news/${post.slug}`}>
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
            <h3 className="text-lg font-bold line-clamp-2 mb-2">
              {post.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {post.description}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{format(new Date(post.createdAt), "MMM dd, yyyy")}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
