import Image from "next/image";
import Process1 from "@/public/icon/Contact Us.png";
import Process2 from "@/public/icon/Valuation.png";
import Process3 from "@/public/icon/Accept offer.png";

export default function Process() {
  return (
    <section className="bg-[#100f14] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          How To Sell Your Gold
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Simple, secure process to get the best value for your gold
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-[#1b1a1f] rounded-lg p-8 flex flex-col items-center text-center relative">
            <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mb-6">
              <Image src={Process1} alt="Process 1" className="w-20 h-20" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              Get in touch via phone, online form or visit our store
            </p>
            <div className=" text-[#fbbf24] text-3xl font-bold hidden md:block absolute -translate-y-1/2 top-1/2 -right-7">
              →
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#1b1a1f] rounded-lg p-8 flex flex-col items-center text-center relative">
            <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mb-6">
              <Image src={Process2} alt="Process 2" className="w-20 h-20" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">
              Get Valuation
            </h3>
            <p className="text-gray-400 text-sm">
              Our experts evaluate your gold at current market rates
            </p>
            <div className=" text-[#fbbf24] text-3xl font-bold hidden md:block absolute -translate-y-1/2 top-1/2 -right-7">
              →
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1b1a1f] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mb-6">
              <Image src={Process3} alt="Process 3" className="w-20 h-20" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">Accept Offer</h3>
            <p className="text-gray-400 text-sm">
              Review our competitive offer and accept if satisfied
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
