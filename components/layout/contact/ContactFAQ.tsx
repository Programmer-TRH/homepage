"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How does the valuation work?",
    answer:
      "Vestibulum et Oise. Vivamus Laceret. Nullam Tincidunt Adipiscing Etiam. Phasellus Tempus. Proin Viverra Ligula Sit Amet Ultrices Semper Libero Sit Amet Quis...",
  },
  {
    question: "How do I buy gold or silver?",
    answer:
      "Our expert team will evaluate your gold or silver items and provide you with a competitive quote. Once you accept the offer, we can arrange payment through various methods.",
  },
  {
    question: "How do I pay based on live prices?",
    answer:
      "We base all our valuations on current live market prices, ensuring you get the best value for your precious metals.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "While appointments are not required, we recommend booking ahead to ensure minimal wait time during your visit.",
  },
  {
    question: "How fast do I get a quote?",
    answer:
      "Our valuation process is quick and efficient. Most quotes are provided within 24 hours of submission.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Payment is typically processed within 2-3 business days of accepting our offer.",
  },
  {
    question: "Is posting my items safe?",
    answer:
      "Yes, we use fully insured courier services to ensure your items are protected throughout the shipping process.",
  },
  {
    question: "Do you buy broken or damaged pieces?",
    answer:
      "Yes, we accept broken, damaged, and worn gold and silver jewelry in any condition.",
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
