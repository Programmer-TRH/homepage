import { Card } from "@/components/ui/card";
import { Users, DollarSign, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Happy Users",
    value: "500K+",
    description: "Active traders worldwide",
  },
  {
    icon: DollarSign,
    label: "Trading Volume",
    value: "$2.5B",
    description: "Monthly transaction volume",
  },
  {
    icon: Globe,
    label: "Countries",
    value: "150+",
    description: "Global presence",
  },
  {
    icon: TrendingUp,
    label: "Daily Trades",
    value: "100K+",
    description: "Successful transactions",
  },
];

const Statistics = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Our 24 Hour Statistics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Real-time statistics showcasing our platform&apos;s performance and
            reach.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 md:p-8 bg-secondary border-border text-center hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                {stat.value}
              </h3>
              <p className="font-semibold mb-1 text-xs sm:text-sm md:text-base">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
