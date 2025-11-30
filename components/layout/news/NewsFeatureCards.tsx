export default function NewsFeatureCards() {
  const cards = [
    {
      icon: "📱",
      title: "Starting from the beginning?",
      subtitle: "Build a foundation",
      cta: "Learn →",
    },
    {
      icon: "💻",
      title: "Looking to sharpen your strategies?",
      subtitle: "Explore fresh takes on",
      cta: "Learn →",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1a1f2e] rounded-2xl p-8 md:p-10 text-white hover:shadow-lg transition group cursor-pointer"
              style={{
                backgroundImage:
                  idx === 0
                    ? "url(https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop)"
                    : "url(https://images.unsplash.com/photo-1460925895917-adf4ea918635?w=600&h=400&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 mb-6">• {card.subtitle}</p>
                <button className="text-[#fbbf24] font-semibold group-hover:text-white transition">
                  {card.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
