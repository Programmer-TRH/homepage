import { BrickWallShield, MousePointerClick, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          {/* Left: Gold Products Image */}
          <div className="flex justify-center">
            <Image
              width={720}
              height={480}
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop"
              alt="Gold and Silver Coins"
              className="max-w-md w-full h-auto"
            />
          </div>

          {/* Right: Features List */}
          <div className="space-y-8">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
              The Fastest, Safest Way to Sell Gold & Silver in the UK
            </h2>
            {/* Feature 1 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-12 h-12 bg-[#2a2f3f] rounded-full flex items-center justify-center">
                <ShieldCheck />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Safty Exchange
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Cursus Ultricorper Libentoseer Niom Eget Soa Bibendum Maximus
                  Tempus Telus Eget Condinentum Rhoncusfel Diam Semper Libero
                  Sit Amet Harpening
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-12 h-12 bg-[#2a2f3f] rounded-full flex items-center justify-center">
                <BrickWallShield />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Private Security
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Cursus Ultricorper Libentoseer Niom Eget Soa Bibendum Maximus
                  Tempus Telus Eget Condinentum Rhoncusfel Diam Semper Libero
                  Sit Amet Harpening
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-12 h-12 bg-[#2a2f3f] rounded-full flex items-center justify-center">
                <MousePointerClick />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Easy To Use
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Cursus Ultricorper Libentoseer Niom Eget Soa Bibendum Maximus
                  Tempus Telus Eget Condinentum Rhoncusfel Diam Semper Libero
                  Sit Amet Harpening
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
