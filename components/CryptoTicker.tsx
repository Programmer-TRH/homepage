import { TrendingUp, TrendingDown } from "lucide-react";

const cryptoData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "43,180.80",
    change: "+2.5%",
    trend: "up",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "2,280.50",
    change: "+1.8%",
    trend: "up",
  },
  {
    symbol: "BNB",
    name: "Binance",
    price: "315.20",
    change: "-0.5%",
    trend: "down",
  },
];

const CryptoTicker = () => {
  return (
    <section className="py-6 sm:py-8 px-3 sm:px-4 border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {cryptoData.map((crypto) => (
            <div
              key={crypto.symbol}
              className="flex items-center justify-between p-3 sm:p-4 bg-card rounded-lg border border-border"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xs sm:text-sm">
                    {crypto.symbol}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {crypto.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {crypto.symbol}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">
                  ${crypto.price}
                </p>
                <div
                  className={`flex items-center gap-1 text-xs sm:text-sm ${
                    crypto.trend === "up" ? "text-chart-2" : "text-destructive"
                  }`}
                >
                  {crypto.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                  <span>{crypto.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoTicker;
