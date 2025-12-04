export default function NewsHero() {
  return (
    <section
      className="relative w-full h-64 md:h-[80vh] mt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/view-ornamental-clock-london-city.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 h-full" />
      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center text-balance">
          News & Blogs
        </h1>
      </div>
    </section>
  );
}
