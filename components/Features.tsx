import { Shield, Headphones, Clock } from "lucide-react";
import featuresIllustration from "@/public/features-illustration.png";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description:
      "Your assets are protected with bank-level security and encryption.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert team is available round the clock to assist you.",
  },
  {
    icon: Clock,
    title: "Fast & Easy",
    description:
      "Quick transactions with an intuitive interface for seamless trading.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Awesome Features For{" "}
            <span className="text-primary">Crypto Exchange</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Experience the best in class cryptocurrency trading with our
            advanced features designed for both beginners and professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative order-first lg:order-last">
            <Image
              src={featuresIllustration}
              width={1080}
              height={720}
              alt="Features Illustration"
              className="w-full h-auto max-w-sm mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
