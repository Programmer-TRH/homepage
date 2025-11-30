export default function ContactHero() {
  return (
    <section className="relative h-64 md:h-80 mt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=400&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center text-balance">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
