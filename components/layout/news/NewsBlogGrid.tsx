import { Button } from "@/components/ui/button";
import { News } from "@/lib/data/News";
import Image from "next/image";
import Link from "next/link";

export default function NewsBlogGrid() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          Check out our latest market news:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {News.map((article, idx) => (
            <div
              key={idx}
              className="bg-[#1a1f2e] rounded-2xl overflow-hidden group hover:shadow-xl transition"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={720}
                height={480}
                className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {article.description}
                </p>
                <Button
                  variant={"ghost"}
                  className="text-[#fbbf24] font-semibold text-sm  transition"
                  asChild
                >
                  <Link href={`/news/${article.slug}`}>See More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
