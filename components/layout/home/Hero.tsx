// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative w-full h-dvh overflow-hidden flex items-center bg-cover max-md:bg-center bg-top-right bg-no-repeat "
//       style={{
//         backgroundImage: "url('/image/Home Hero.png')",
//       }}
//     >
//       <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-transparent" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
//         <div className="max-w-2xl">
//           <h1 className="text-5xl md:text-6xl font-bold text-[#fbbf24] mb-4 leading-tight">
//             Sell Your Gold
//           </h1>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
//             For Instant Cash
//           </h2>
//           <p className="text-gray-300 mb-8 text-base md:text-lg max-w-xl">
//             Turn your gold into cash today, safe and fast with honest valuations
//             from trusted experts.
//           </p>

//           {/* CTA Buttons */}

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button
//               size="lg"
//               className=" text-black bg-linear-to-l from-(--gradient-from) to-(--gradient-to) rounded-full font-semibold"
//               asChild
//             >
//               <Link href="/quote">Get an instant price</Link>
//             </Button>
//             <Button
//               size="lg"
//               variant={"ghost"}
//               className="border border-white text-white rounded-full font-semibold hover:bg-secondary"
//               asChild
//             >
//               <Link href="#request">Drop off your Gold</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";

export default function Hero() {
  const { ref, show } = useReveal();

  return (
    <section
      id="hero"
      className="relative w-full h-dvh overflow-hidden flex items-center bg-cover bg-top-right bg-no-repeat max-md:bg-center"
      style={{ backgroundImage: "url('/image/Home Hero.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl">
          {/* Title */}
          <h1
            ref={ref}
            className={`reveal-base reveal-up text-5xl md:text-6xl font-bold text-[#fbbf24] mb-4 leading-tight ${
              show ? "reveal-show" : ""
            }`}
          >
            Sell Your Gold
          </h1>

          {/* Subtitle */}
          <h2
            ref={ref}
            className={`reveal-base reveal-left text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 ${
              show ? "reveal-show" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            For Instant Cash
          </h2>

          {/* Paragraph */}
          <p
            ref={ref}
            className={`reveal-base reveal-up text-gray-300 mb-8 text-base md:text-lg max-w-xl ${
              show ? "reveal-show" : ""
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Turn your gold into cash today, safe and fast with honest valuations
            from trusted experts.
          </p>

          {/* Buttons */}
          <div
            ref={ref}
            className={`reveal-base reveal-right flex flex-col sm:flex-row gap-4 ${
              show ? "reveal-show" : ""
            }`}
            style={{ transitionDelay: "0.35s" }}
          >
            <Button
              size="lg"
              className="text-black bg-linear-to-l from-(--gradient-from) to-(--gradient-to) rounded-full font-semibold"
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
