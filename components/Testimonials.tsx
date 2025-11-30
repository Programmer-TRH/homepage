export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Client - London",
      text: "I was nervous about selling my grandmother's jewelry, but the team made the process so easy. They were professional, offered the highest rate, and I walked out with cash highly recommended!",
      initials: "SJ",
      color: "bg-red-500",
    },
    {
      name: "Michael Davies",
      location: "Client - Manchester",
      text: "Their gold buyers in the UK compared prices from several places and these guys offered the highest rate. The process was quick, transparent, and completely hassle-free.",
      initials: "MD",
      color: "bg-yellow-500",
    },
    {
      name: "Emma Wilson",
      location: "Client - Birmingham",
      text: "Excellent service from start to finish. They explained everything clearly, gave me a fair valuation, and paid immediately. I wouldn't go anywhere else to sell my gold.",
      initials: "EW",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="bg-[#0f1419] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          What Say Happy Client
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Hear from our satisfied customers who trusted us with their precious
          metals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] rounded-lg p-6 border border-[#2d3748]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
