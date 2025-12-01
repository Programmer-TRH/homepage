"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
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

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Everything you need to know about selling your gold
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition"
              >
                <span className="text-left font-semibold text-black">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#fbbf24] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
