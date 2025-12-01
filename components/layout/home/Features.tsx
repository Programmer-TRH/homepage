import Image from "next/image";
import FeatureImage from "@/public/image/Feature Hero.png";
import SafetyIcon from "@/public/icon/Safety Exchange.png";
import SecurityIcon from "@/public/icon/Private Security.png";
import UseIcon from "@/public/icon/Easy to use.png";

export default function Features() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="">
        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8">
          {/* Left: Gold Products Image */}
          <div className="flex justify-center bg-[#140e07]">
            <Image
              width={720}
              height={480}
              src={FeatureImage}
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
              <div className="shrink-0 size-14 bg-[#2a2f3f] rounded-full flex items-center justify-center">
                <Image
                  src={SafetyIcon}
                  alt="Safety icon"
                  className="h-14 w-14"
                />
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
              <div className="shrink-0 size-14 bg-[#2a2f3f] rounded-full flex items-center justify-center">
                <Image
                  src={SecurityIcon}
                  alt="Safety icon"
                  className="h-14 w-14"
                />
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
              <div className="shrink-0 size-14 bg-[#2a2f3f] rounded-full flex items-center justify-center">
                <Image src={UseIcon} alt="Safety icon" className="h-14 w-14" />
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
