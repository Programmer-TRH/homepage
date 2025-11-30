export default function NewsHero() {
  return (
    <div className="relative w-full h-96 md:h-[500px] mt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&h=600&fit=crop)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
          News & Blogs
        </h1>
      </div>
    </div>
  );
}
