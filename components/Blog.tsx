import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    title: "Cryptocurrencies Have Made A Mess",
    excerpt:
      "Understanding the evolution and challenges of the cryptocurrency market in today's digital economy.",
    date: "Dec 15, 2024",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    category: "Market Analysis",
  },
  {
    title: "10 Helpful Useful Strategies",
    excerpt:
      "Expert tips and proven strategies to maximize your cryptocurrency trading profits and minimize risks.",
    date: "Dec 12, 2024",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&h=600&fit=crop",
    category: "Trading Tips",
  },
  {
    title: "Spotlight: A Thought Leader",
    excerpt:
      "Exclusive interview with industry leaders sharing insights on the future of blockchain technology.",
    date: "Dec 10, 2024",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    category: "Interviews",
  },
];

const Blog = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Latest Blog & Tips
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Stay updated with the latest news, insights, and expert tips from
            the world of cryptocurrency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:shadow-lg transition-all group"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 sm:px-3 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-base line-clamp-2">
                  {post.excerpt}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary text-xs sm:text-sm"
                >
                  Read More{" "}
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
