import { Button } from "@/components/ui/button";
import { News } from "@/lib/data/News";
import Image from "next/image";
import Link from "next/link";

export default function LatestNews() {
  return (
    <section className="bg-white py-16 md:py-24" id="latest-news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {News.slice(0, 3).map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Image
                width={720}
                height={480}
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-[#fbbf24] text-sm font-semibold mb-2">
                  {article.createdAt}
                </p>
                <h3 className="text-lg font-bold text-black mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm">{article.description}</p>
                <Button asChild variant={"outline"} className="mt-6">
                  <Link href={`/news/${article.slug}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
