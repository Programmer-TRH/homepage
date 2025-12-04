export default function QuoteHero() {
  return (
    <section
      className="relative w-full h-96 md:h-[80vh] mt-26 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/view-ornamental-clock-london-city.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 h-full" />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            We Trade
          </h1>
          <div className="flex items-baseline gap-3 mb-2 md:mb-6">
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#fbbf24]">
              Gold & Silver
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-6">
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
