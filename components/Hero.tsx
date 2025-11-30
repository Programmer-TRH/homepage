export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] mt-15 md:mt-17 overflow-hidden flex items-center">
      {/* Background Image - Cityscape */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1400&h=900&fit=crop)",
          opacity: 0.8,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#fbbf24] mb-4 leading-tight">
            Sell Your Gold
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            For Instant Cash
          </h2>
          <p className="text-gray-300 mb-8 text-base md:text-lg max-w-xl">
            Turn your gold into cash today, safe and fast with honest valuations
            from trusted experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#fbbf24] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#f59e0b] transition inline-flex items-center justify-center">
              Get a quote online
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition inline-flex items-center justify-center">
              Drop off your Gold
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
