import { fetchMetalPrices } from "@/services/price-service";

export default async function PricingTable() {
  const data = await fetchMetalPrices();
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <PriceTableSection title="GOLD COINS" items={data.goldCoins} />
          <PriceTableSection title="GOLD BARS" items={data.goldBars} />
          <PriceTableSection title="SILVER COINS" items={data.silverCoins} />
          <PriceTableSection title="SILVER BARS" items={data.silverBars} />
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-4">
            These are today&apos;s prices per ounce.
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#c49464] transition justify-center w-4/5"
          >
            <span className="text-xl">→</span>
            <span className="font-semibold text-sm">
              Get an instant price for your precious gold & silver
            </span>
            <span className="text-xl">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PriceTableSection({
  title,
  items,
}: {
  title: string;
  items: { size: string; pricePerOunce: number }[];
}) {
  return (
    <div>
      <h3
        className={`${
          title.includes("GOLD")
            ? "bg-linear-to-l from-[#ceb04e] to-[#c4a352]"
            : "bg-linear-to-l from-[#bdbdbd] to-[#a9a9a9]"
        } text-black font-bold py-3 px-4 text-center text-sm sm:text-base rounded-t-md`}
      >
        {title}
      </h3>
      <table className="w-full border border-gray-300 text-background">
        <thead>
          <tr>
            {items.map((item) => (
              <th
                key={item.size}
                className="bg-gray-50 border border-gray-300 py-2 px-2 text-xs sm:text-sm font-semibold text-left"
              >
                {item.size}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {items.map((item) => (
              <td
                key={item.size}
                className="border border-gray-300 py-2 px-2 text-xs sm:text-base font-medium"
              >
                £{item.pricePerOunce.toFixed(2)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
