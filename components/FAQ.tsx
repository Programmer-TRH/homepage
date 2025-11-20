import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do we use the Euro exchange?",
    answer:
      "We use the Euro exchange to provide our European customers with seamless trading experiences and reduced conversion fees. This helps maintain competitive rates and faster transactions.",
  },
  {
    question: "Why is trading in Bitcoin safe?",
    answer:
      "Bitcoin trading is safe on our platform because we use bank-level encryption, cold storage for the majority of funds, and implement strict security protocols including two-factor authentication and withdrawal confirmations.",
  },
  {
    question: "Do I need to submit documents?",
    answer:
      "Basic trading requires minimal documentation. However, for higher trading limits and enhanced features, we may request identity verification documents in compliance with regulatory requirements.",
  },
  {
    question: "What is the charge amount?",
    answer:
      "Our platform charges competitive fees starting from 0.1% per transaction. The exact fee depends on your trading volume, account tier, and payment method. Check our fee schedule for detailed information.",
  },
  {
    question: "How do we handle the currency exchange?",
    answer:
      "Currency exchanges are handled through our automated system that connects to multiple liquidity providers, ensuring you get the best rates available in real-time with minimal slippage.",
  },
  {
    question: "How do we do the rate of the exchange?",
    answer:
      "Our exchange rates are determined by real-time market data from multiple sources, ensuring fair and competitive pricing. Rates are updated every second to reflect current market conditions.",
  },
];

const FAQ = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            {" "}
            What&apos;s Know About Us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base px-4">
            Find answers to commonly asked questions about our platform and
            services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-4 sm:px-6"
            >
              <AccordionTrigger className="hover:no-underline py-3 sm:py-4">
                <span className="text-left font-semibold text-sm sm:text-base">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
