export default function ContactHero() {
  return (
    <section
      className="relative w-full h-64 md:h-[80vh] mt-26 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/view-city-bridge-with-train-london.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center text-balance">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
