import Image from "next/image";
import NewsHeroImage from "@/public/image/view-ornamental-clock-london-city.jpg";

export default function NewsHero() {
  return (
    <section className="relative w-full h-64 md:h-[70vh] mt-16 overflow-hidden">
      <Image
        src={NewsHeroImage}
        alt="Home Hero Image"
        width={720}
        height={720}
        className="absolute inset-0 size-full bg-bottom-right"
      />

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
