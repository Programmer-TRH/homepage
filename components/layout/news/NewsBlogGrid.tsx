export default function NewsBlogGrid() {
  const articles = [
    {
      title: "Award-winningly easy to use",
      description:
        "Trade the world's markets on the Best Overall Trading Platform (Online Money Awards 2024) and Best Trading App 2023 (Good Money Guide).",
      cta: "Find out what's great about our platforms →",
      image:
        "url(https://images.unsplash.com/photo-1559163853-4b378d45ffe7?w=400&h=300&fit=crop)",
    },
    {
      title: "Your markets, your leverage",
      description:
        "Trade CFDs and spread bet on Germany 40, crude oil, natural gas, shares and thousands more, choosing the leverage that suits you.",
      cta: "Discover what you can trade →",
      image:
        "url(https://images.unsplash.com/photo-1526628652108-aa4b56e7ae4e?w=400&h=300&fit=crop)",
    },
    {
      title: "A trusted global broker",
      description:
        "Join 770,000 + traders around the world with us as their broker. Our clients love us so much, they've traded over $1tn in volume with us.",
      cta: "Find out more about us →",
      image:
        "url(https://images.unsplash.com/photo-1526628653108-4f66e18c1b27?w=400&h=300&fit=crop)",
    },
    {
      title: "Everything you need to trade",
      description:
        "Compare multiple markets on fast charts. More indicators than you can shake a candlestick at. In-platform tradable news, TradeView and MTFs. We're running out of room!",
      cta: "More ways we help you trade →",
      image:
        "url(https://images.unsplash.com/photo-1611974519896-f7a3d0b6f0d9?w=400&h=300&fit=crop)",
    },
    {
      title: "Clear, competitive fees",
      description:
        "Trade spreads from just 0.8 pips on EUR/USD (Germany 40, 0.5 commission, always – check the markets don't apply with our clear fee structure.",
      cta: "Check our fees →",
      image:
        "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop)",
    },
    {
      title: "Friendly UK support team",
      description:
        "Support doesn't sleep, so we're not doing it either. We've made sure we're available whenever you need it. Our expert team is on hand in English 24/7.",
      cta: "Get in touch →",
      image:
        "url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop)",
    },
    {
      title: "Trading essentials",
      description:
        "Access all the essentials in one guide with our definitive introduction to trading.",
      cta: "Trading essentials guide →",
      image:
        "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop)",
    },
    {
      title: "Risk management",
      description:
        "Ensure you understand all the risks involved before you place your first trade.",
      cta: "Risk-management guide →",
      image:
        "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop)",
    },
    {
      title: "Market guides",
      description:
        "Learn about the thousands of markets we offer, and how you can trade them.",
      cta: "Market guides →",
      image:
        "url(https://images.unsplash.com/photo-1535320903710-d993d3664390?w=400&h=300&fit=crop)",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          Check out our latest market news:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-[#1a1f2e] rounded-2xl overflow-hidden group hover:shadow-xl transition"
            >
              {/* Image */}
              <div
                className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition duration-300"
                style={{ backgroundImage: article.image }}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {article.description}
                </p>
                <button className="text-[#fbbf24] font-semibold text-sm hover:text-white transition">
                  {article.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
