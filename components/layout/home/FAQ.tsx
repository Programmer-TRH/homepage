"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I know I'm getting a fair price?",
      answer:
        "Our prices are based on live market rates and are always competitive. We use certified scales and have expert appraisers on staff.",
    },
    {
      question: "What types of gold do you accept?",
      answer:
        "We accept all types of gold including bars, coins, jewelry, and collectibles in any condition.",
    },
    {
      question: "How quickly will I get paid?",
      answer:
        "You can receive payment immediately in cash, or via bank transfer within 24 hours of valuation.",
    },
    {
      question: "Is the process secure?",
      answer:
        "Yes, we maintain the highest security standards and all transactions are fully confidential.",
    },
    {
      question: "Do I need identification?",
      answer:
        "For transactions over £15,000, we require valid identification as per UK regulations. No ID needed for smaller amounts.",
    },
    {
      question: "Can I change my mind after selling?",
      answer:
        "We allow a 48-hour cooling-off period for all transactions, giving you time to reconsider.",
    },
    {
      question: "What payment methods do you offer?",
      answer:
        "We offer cash payments, bank transfers, and cheques depending on your preference and transaction amount.",
    },
    {
      question: "Do you buy damaged or broken gold jewelry?",
      answer:
        "Yes, we buy all gold including damaged, broken, or worn jewelry. We pay by weight regardless of condition.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Everything you need to know about selling your gold
        </p>

        <div className="space-y-4">
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
