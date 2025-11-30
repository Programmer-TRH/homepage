export default function SpecialFeatures() {
  const features = [
    {
      title: "Industry Leaders",
      description:
        "We have been buying gold and silver for over 15 years, establishing ourselves as one of the UK's most trusted precious metal buyers.",
    },
    {
      title: "Best Market Rates",
      description:
        "Our prices are based on live market rates, ensuring you always receive a fair and competitive price for your precious metals.",
    },
    {
      title: "Secure & Confidential",
      description:
        "All transactions are conducted with the highest level of security and confidentiality. Your privacy is our priority.",
    },
    {
      title: "Instant Payment",
      description:
        "Walk in and walk out with cash in hand, or receive payment via bank transfer within 24 hours of valuation.",
    },
    {
      title: "No Hidden Fees",
      description:
        "What we quote is what you get. No deductions, no surprises, no hidden charges. Complete transparency guaranteed.",
    },
    {
      title: "Expert Appraisers",
      description:
        "Our certified experts have decades of combined experience in precious metals valuation and authentication.",
    },
  ];

  return (
    <section className="bg-[#0f1419] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          What&apos;s Great About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] rounded-lg p-6 border border-[#2d3748]"
            >
              <h3 className="text-lg font-bold text-[#fbbf24] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
