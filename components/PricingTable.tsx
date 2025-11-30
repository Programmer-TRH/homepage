export default function PricingTable() {
  const goldPrices = [
    { size: "9ct", price: "£31.48" },
    { size: "14ct", price: "£69.62" },
    { size: "18ct", price: "£83.35" },
    { size: "20ct", price: "£70.36" },
    { size: "22ct", price: "£77.38" },
    { size: "24ct", price: "£84.47" },
  ];

  const silverPrices = [
    { size: "925", price: "£0.58" },
    { size: "999", price: "£0.63" },
    { size: "950", price: "£30.73" },
    { size: "999", price: "£32.32" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-black">
              <tr>
                <th className="bg-[#d4a574] text-black font-bold py-4 px-2 sm:px-4 text-left text-xs sm:text-base">
                  GOLD
                </th>
                <th colSpan={5} className="bg-[#d4a574]" />
                <th className="bg-gray-500 text-white font-bold py-4 px-2 sm:px-4 text-left text-xs sm:text-base">
                  SILVER
                </th>
                <th colSpan={2} className="bg-gray-500" />
                <th className="bg-gray-400 text-white font-bold py-4 px-2 sm:px-4 text-left text-xs sm:text-base">
                  PLATINUM
                </th>
                <th className="bg-gray-400" />
              </tr>
              <tr>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  9ct
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  14ct
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  18ct
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  20ct
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  22ct
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  24ct
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  925
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  999
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  950
                </th>
                <th className="border border-gray-300 bg-gray-50 font-bold py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  999
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £31.48
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £69.62
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £83.35
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £70.36
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £77.38
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £84.47
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £0.58
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £0.63
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £30.73
                </td>
                <td className="border border-gray-300 py-3 px-2 sm:px-4 font-semibold text-xs sm:text-base">
                  £32.32
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Disclaimer and Price Link */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">
            These are today&apos;s prices per ounce.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#c49464] transition flex-wrap justify-center"
          >
            <span className="text-2xl">→</span>
            <span className="font-semibold">
              Get an instant price for your precious gold & silver
            </span>
            <span className="text-2xl">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
