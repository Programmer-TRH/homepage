import Image from "next/image";
import Process1 from "@/public/icon/Contact Us.png";

export default function Process() {
  return (
    <section className="bg-black py-16 md:py-24">
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
          <div className="bg-[#1a1f2e] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mb-6">
              <Image src={Process1} alt="Process 1" className="w-20 h-20" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              Get in touch via phone, online form or visit our store
            </p>
            <div className="mt-8 text-[#fbbf24] text-3xl hidden md:block">
              →
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#1a1f2e] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">
              Get Valuation
            </h3>
            <p className="text-gray-400 text-sm">
              Our experts evaluate your gold at current market rates
            </p>
            <div className="mt-8 text-[#fbbf24] text-3xl hidden md:block">
              →
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1a1f2e] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
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
