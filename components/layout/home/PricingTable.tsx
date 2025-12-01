export default function PricingTable() {
  const goldCoins = [
    { size: "9ct", price: "£31.48" },
    { size: "14ct", price: "£69.62" },
    { size: "18ct", price: "£83.35" },
  ];

  const goldBars = [
    { size: "20ct", price: "£70.36" },
    { size: "22ct", price: "£77.38" },
    { size: "24ct", price: "£84.47" },
  ];

  const silverCoins = [
    { size: "925", price: "£0.58" },
    { size: "999", price: "£0.63" },
  ];

  const silverBars = [
    { size: "950", price: "£30.73" },
    { size: "999", price: "£32.32" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GOLD COINS */}
          <div>
            <h3 className="bg-[#d4a574] text-black font-bold py-3 px-4 text-center text-sm sm:text-base rounded-t-md">
              GOLD COINS
            </h3>
            <table className="w-full border border-gray-300 text-background">
              <thead>
                <tr>
                  {goldCoins.map((item) => (
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
                  {goldCoins.map((item) => (
                    <td
                      key={item.size}
                      className="border border-gray-300 py-2 px-2 text-xs sm:text-base font-medium"
                    >
                      {item.price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* GOLD BARS */}
          <div>
            <h3 className="bg-[#d4a574] text-black font-bold py-3 px-4 text-center text-sm sm:text-base rounded-t-md">
              GOLD BARS
            </h3>
            <table className="w-full border border-gray-300 text-background">
              <thead>
                <tr>
                  {goldBars.map((item) => (
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
                  {goldBars.map((item) => (
                    <td
                      key={item.size}
                      className="border border-gray-300 py-2 px-2 text-xs sm:text-base font-medium"
                    >
                      {item.price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* SILVER COINS */}
          <div>
            <h3 className="bg-gray-500 text-white font-bold py-3 px-4 text-center text-sm sm:text-base rounded-t-md">
              SILVER COINS
            </h3>
            <table className="w-full border border-gray-300 text-background">
              <thead>
                <tr>
                  {silverCoins.map((item) => (
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
                  {silverCoins.map((item) => (
                    <td
                      key={item.size}
                      className="border border-gray-300 py-2 px-2 text-xs sm:text-base font-medium"
                    >
                      {item.price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* SILVER BARS */}
          <div>
            <h3 className="bg-gray-500 text-white font-bold py-3 px-4 text-center text-sm sm:text-base rounded-t-md">
              SILVER BARS
            </h3>
            <table className="w-full border border-gray-300 text-background">
              <thead>
                <tr>
                  {silverBars.map((item) => (
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
                  {silverBars.map((item) => (
                    <td
                      key={item.size}
                      className="border border-gray-300 py-2 px-2 text-xs sm:text-base font-medium"
                    >
                      {item.price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer and CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-4">
            These are today&apos;s prices per ounce.
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#c49464] transition  justify-center w-4/5"
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
