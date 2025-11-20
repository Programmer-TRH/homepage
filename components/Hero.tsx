import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp } from "lucide-react";
import heroIllustration from "@/public/hero-illustration.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              You Can Exchange <span className="text-primary">Coins</span> Here
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Trade cryptocurrencies with confidence. Fast, secure, and
              easy-to-use platform for all your crypto needs.
            </p>

            <Card className="p-4 sm:p-6 bg-card border-border">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <div className="flex-1">
                    <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">
                      You Pay
                    </label>
                    <div className="flex gap-2">
                      <Select defaultValue="btc">
                        <SelectTrigger className="w-24 sm:w-28 bg-secondary border-border text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="btc">BTC</SelectItem>
                          <SelectItem value="eth">ETH</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="bg-secondary border-border text-sm"
                        defaultValue="1.5"
                      />
                    </div>
                  </div>

                  <div className="flex sm:pt-6 justify-center sm:block">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full h-9 w-9"
                    >
                      <ArrowDownUp className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1">
                    <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">
                      You Get
                    </label>
                    <div className="flex gap-2">
                      <Select defaultValue="eth">
                        <SelectTrigger className="w-24 sm:w-28 bg-secondary border-border text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eth">ETH</SelectItem>
                          <SelectItem value="btc">BTC</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="bg-secondary border-border text-sm"
                        defaultValue="24.8"
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 sm:h-12 text-sm sm:text-base">
                  Start Exchange
                </Button>
              </div>
            </Card>
          </div>

          <div className="relative order-first lg:order-last">
            <Image
              src={heroIllustration}
              width={1080}
              height={720}
              alt="Cryptocurrency Exchange Illustration"
              className="w-full h-auto max-w-md mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
