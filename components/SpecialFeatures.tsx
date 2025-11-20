import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Lock,
  TrendingUp,
  Zap,
  Users,
  Award,
  CreditCard,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Trade on the go with our powerful mobile applications for iOS and Android.",
  },
  {
    icon: Lock,
    title: "Safe & Secure",
    description:
      "Your assets are protected with industry-leading security measures.",
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Access real-time charts and advanced trading tools.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Lightning-fast order execution for optimal trading performance.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 customer support from our team of crypto experts.",
  },
  {
    icon: Award,
    title: "Best Rates",
    description: "Get the most competitive rates in the cryptocurrency market.",
  },
  {
    icon: CreditCard,
    title: "Easy Deposits",
    description:
      "Multiple payment methods for convenient deposits and withdrawals.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Tracking",
    description: "Monitor your investments with detailed portfolio analytics.",
  },
];

const SpecialFeatures = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Our Special Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Discover what makes CryptoEx the preferred choice for cryptocurrency
            trading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
