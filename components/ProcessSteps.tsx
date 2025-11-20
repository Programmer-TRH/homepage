import { Card } from "@/components/ui/card";
import { UserPlus, Wallet, ArrowRightLeft, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create An Account",
    description: "Sign up in minutes with just your email address.",
  },
  {
    icon: Wallet,
    number: "02",
    title: "Add Your Wallet",
    description: "Connect your wallet or create a new one instantly.",
  },
  {
    icon: ArrowRightLeft,
    number: "03",
    title: "Choose Crypto & Trade",
    description: "Select your preferred cryptocurrency and start trading.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Verify Your Account",
    description: "Complete verification to unlock all features.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            How To Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Get started with CryptoEx in four simple steps and begin your
            cryptocurrency trading journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 bg-card border-border text-center relative hover:shadow-lg transition-all"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="mt-6">
                <div className="text-4xl sm:text-5xl font-bold text-primary/20 mb-3 sm:mb-4">
                  {step.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
