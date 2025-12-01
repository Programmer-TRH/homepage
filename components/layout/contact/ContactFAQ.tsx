"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How does the valuation work?",
    answer:
      "We assess your items based on the current market spot price, purity, weight and the condition or rarity of the piece. Once evaluated, we provide a clear and transparent quote so you know exactly what your item is worth.",
  },
  {
    question: "How do I sell gold or silver?",
    answer:
      "Simply contact us with details or photos of your items and we’ll guide you through the quick valuation process. You can then post your items or arrange collection if available in your area.",
  },
  {
    question: "Do you pay based on live prices?",
    answer:
      "Our valuations are calculated using live market spot prices, with rates adjusted depending on the item type. Loose coins may be valued slightly below spot, while bars or rarer pieces may receive a higher percentage depending on condition and collectability.",
  },
  {
    question: "Do I need an appointment or can I collect?",
    answer:
      "You don’t always need an appointment, and collection is available in some locations. We’ll confirm the best option once we speak with you.",
  },
  {
    question: "How fast do I get a quote?",
    answer:
      "We aim to return quotes within one hour during weekday working hours.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Payment is issued immediately once your items are received and the valuation is confirmed.",
  },
  {
    question: "Is posting my items safe?",
    answer:
      "Yes, we provide guidance on secure packaging and use insured delivery services. We notify you as soon as your parcel arrives.",
  },
  {
    question: "Do you buy broken or damaged pieces?",
    answer:
      "Yes, we buy gold and silver in any condition. Value is mainly determined by weight and purity, so condition does not prevent a sale.",
  },
];

export default function ContactFAQ() {
  const [expandedIndex, setExpandedIndex] = useState(1);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#0f1419] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          FAQ&apos;s
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-[#2d3748]">
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full py-6 flex items-center justify-between hover:text-[#fbbf24] transition text-left"
              >
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#fbbf24] shrink-0 transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
