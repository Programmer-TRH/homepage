"use client";

// import Image from "next/image";
// import FeatureImage from "@/public/image/Feature Hero.png";
// import SafetyIcon from "@/public/icon/Safety Exchange.png";
// import SecurityIcon from "@/public/icon/Private Security.png";
// import UseIcon from "@/public/icon/Easy to use.png";

// export default function Features() {
//   return (
//     <section className="relative py-16 md:py-24 bg-linear-to-l from-[#010007] from-48%  to-[#130e08] to-52%">
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//         {/* Left: Gold Products Image */}
//         <div className="flex justify-center">
//           <Image
//             width={720}
//             height={480}
//             src={FeatureImage}
//             alt="Gold and Silver Coins"
//             className="max-w-md w-full h-auto rounded-lg shadow-xl"
//           />
//         </div>

//         {/* Right: Features List */}
//         <div className="space-y-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
//             The Fastest, Safest Way to Sell Gold & Silver in the UK
//           </h2>

//           {/* Feature Item */}
//           {[
//             {
//               icon: SafetyIcon,
//               title: "Safe",
//               desc: "Your items are handled with care from the moment they arrive, and we follow strict checks to ensure every step of the process protects you.",
//             },
//             {
//               icon: SecurityIcon,
//               title: "Secure",
//               desc: "We use verified processes so you can sell with confidence, and your personal details are protected with strong security systems.",
//             },
//             {
//               icon: UseIcon,
//               title: "Fast & Easy",
//               desc: "Our simple process makes selling your gold straightforward, and we pay you fast so you can enjoy your money without delay.",
//             },
//           ].map(({ icon, title, desc }, i) => (
//             <div key={i} className="flex gap-6 items-start">
//               <div className="shrink-0 size-14 bg-[#2a2f3f] rounded-full flex items-center justify-center">
//                 <Image src={icon} alt={`${title} icon`} className="h-10 w-10" />
//               </div>
//               <div>
//                 <h3 className="text-lg md:text-xl font-bold text-white mb-2">
//                   {title}
//                 </h3>
//                 <p className="text-gray-400 text-sm md:text-base">{desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import FeatureImage from "@/public/image/Feature Hero.png";
import SafetyIcon from "@/public/icon/Safety Exchange.png";
import SecurityIcon from "@/public/icon/Private Security.png";
import UseIcon from "@/public/icon/Easy to use.png";
import { useReveal } from "@/hooks/use-reveal";

export default function Features() {
  // Section & item animations
  const { ref, show } = useReveal();
  const items = [useReveal(), useReveal(), useReveal()];

  const features = [
    {
      icon: SafetyIcon,
      title: "Safe",
      desc: "Your items are handled with care from the moment they arrive, and we follow strict checks to ensure every step of the process protects you.",
    },
    {
      icon: SecurityIcon,
      title: "Secure",
      desc: "We use verified processes so you can sell with confidence, and your personal details are protected with strong security systems.",
    },
    {
      icon: UseIcon,
      title: "Fast & Easy",
      desc: "Our simple process makes selling your gold straightforward, and we pay you fast so you can enjoy your money without delay.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-linear-to-t from-[#010007] from-52% to-[#130e08] to-55% sm:bg-linear-to-l sm:from-[#010007] sm:from-48% sm:to-[#130e08] sm:to-52%"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 sm:gap-12 items-center">
        {/* Left Image */}
        <div
          className={`flex justify-center py-20 reveal-base reveal-up ${
            show ? "reveal-show" : ""
          }`}
        >
          <Image
            width={720}
            height={480}
            src={FeatureImage}
            alt="Gold and Silver Coins"
            className="max-w-md w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-10 max-sm:pt-32 max-sm:py-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-white leading-tight reveal-base reveal-up ${
              show ? "reveal-show" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            The Fastest, Safest Way to Sell Gold & Silver in the UK
          </h2>

          {/* Features Items */}
          {features.map(({ icon, title, desc }, index) => {
            const item = items[index];
            return (
              <div
                key={index}
                ref={item.ref}
                className={`flex gap-6 items-start reveal-base reveal-up ${
                  item.show ? "reveal-show" : ""
                }`}
                style={{ transitionDelay: `${0.15 + index * 0.12}s` }}
              >
                <div className="shrink-0 size-14 bg-[#2a2f3f] rounded-full flex items-center justify-center">
                  <Image src={icon} alt={title} className="h-10 w-10" />
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
