export default function QuoteHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617638924689-92201e641243?w=1200&h=600&fit=crop')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            We Trade
          </h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#fbbf24]">
              Gold & Silver
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            For Cash
          </h2>
          <p className="text-lg md:text-xl text-gray-100">
            Scroll down for an instant quote
          </p>
        </div>
      </div>
    </section>
  );
}
