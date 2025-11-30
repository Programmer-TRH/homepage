import Image from "next/image";

export default function LatestNews() {
  const news = [
    {
      date: "May 16, 2025",
      title: "Best Price When Selling Your Gold in 2025",
      description:
        "Discover updated market rates, how to sell safely, and where to get the best value for your gold items.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    },
    {
      date: "May 14, 2025",
      title: "Gold vs. Other Investments in 2025",
      description:
        "Compare gold's performance against stocks, property, and savings in the current economic climate.",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
    },
    {
      date: "May 10, 2025",
      title: "Why Gold Remains a Safe Investment",
      description:
        "Understanding the benefits of investing in precious metals during times of economic uncertainty.",
      image:
        "https://images.unsplash.com/photo-1453960889848-4b8e0d81d5ce?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="latest-news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
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
                  {article.date}
                </p>
                <h3 className="text-lg font-bold text-black mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
