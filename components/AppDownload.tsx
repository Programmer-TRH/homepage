import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import appDownloadIllustration from "@/public/app-download-illustration.png";
import Image from "next/image";

const AppDownload = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src={appDownloadIllustration}
              width={1080}
              height={720}
              alt="Download App Illustration"
              className="w-full h-auto max-w-sm mx-auto lg:max-w-full"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Download Crypto Exchange{" "}
              <span className="text-primary">Mobile App</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Take your crypto trading on the go. Download our mobile app and
              trade anytime, anywhere with ease.
            </p>

            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span className="text-sm sm:text-base">
                  Real-time market data and price alerts
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span className="text-sm sm:text-base">
                  Secure wallet with biometric authentication
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span className="text-sm sm:text-base">
                  Simple and intuitive user interface
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-12 sm:h-14 px-6 sm:px-8">
                <Apple className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-12 sm:h-14 px-6 sm:px-8">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
