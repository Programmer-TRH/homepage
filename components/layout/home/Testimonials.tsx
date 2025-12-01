import { User2 } from "lucide-react";
import Image from "next/image";
import BuildingImage from "@/public/image/Home Hero.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Client - London",
      text: "I was nervous about selling my grandmother's jewelry, but the team made the process so easy. They were professional, offered the highest rate, and I walked out with cash highly recommended!",
      initials: "SJ",
      color: "bg-red-500",
    },
    {
      name: "Michael Davies",
      location: "Client - Manchester",
      text: "Best gold buyers in the UK! I compared prices and they offered the highest rate. Quick, transparent and hassle-free..",
      initials: "MD",
      color: "bg-yellow-500",
    },
    {
      name: "Emma Wilson",
      location: "Client - Birmingham",
      text: "Excellent service from start to finish. Clear explanation, fair valuation and instant payment. I’m glad I didn’t go anywhere else.",
      initials: "EW",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="bg-[#0f1419bf] py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={BuildingImage}
          alt="Background building image"
          fill
          className="object-cover w-full h-full opacity-30" // adjust opacity if you want
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          What Say Happy Client
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Hear what our clients have to say
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e9f] rounded-lg p-6 border border-[#2d3748]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}
                >
                  {/* <span className="text-white font-bold text-lg">
                    {testimonial.initials}
                  </span> */}
                  <User2 className="size-7 fill-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
