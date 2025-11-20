import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Crypto Trader",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    content:
      "CryptoEx has completely transformed my trading experience. The platform is fast, secure, and incredibly user-friendly!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Investor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    content:
      "I've tried many exchanges, but CryptoEx stands out with its excellent customer support and low fees.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    content:
      "The mobile app is outstanding! I can manage my portfolio on the go with ease and confidence.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            {`  What's Say Happy Client`}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            {` Don't just take our word for it - hear from our satisfied clients
            who have experienced the CryptoEx difference.`}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 sm:p-6 bg-card border-border">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 sm:mb-6 italic text-xs sm:text-base">
                {"{testimonial.content}"}
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-secondary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={1080}
                    height={720}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
