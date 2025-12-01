import Image from "next/image";
import HeroImage from "@/public/image/Home Hero.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full h-dvh overflow-hidden flex items-center"
      id="hero"
    >
      <Image
        src={HeroImage}
        alt="Home Hero Image"
        width={1080}
        height={720}
        className="absolute inset-0 bg-cover bg-center size-full opacity-80"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#fbbf24] mb-4 leading-tight">
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
            <Button
              size="lg"
              className=" text-black bg-linear-to-l from-(--gradient-from) to-(--gradient-to) rounded-full font-semibold"
              asChild
            >
              <Link href="/quote">Get an instant price</Link>
            </Button>
            <Button
              size="lg"
              variant={"ghost"}
              className="border border-white text-white rounded-full font-semibold hover:bg-secondary"
              asChild
            >
              <Link href="#request">Drop off your Gold</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
