import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f1419] text-gray-400 py-12 border-t border-[#2d3748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              CONTACT
            </h4>
            <p className="text-sm mb-2">Gold Town Ltd,</p>
            <p className="text-sm mb-2">25 Temple Rd,</p>
            <p className="text-sm mb-4">London, SW7 2NS</p>
            <p className="text-sm mb-2 font-semibold">0333 903 2040</p>
            <p className="text-sm flex items-center gap-2">
              <span>📧</span>
              <a
                href="mailto:info@webuygoldnow.co.uk"
                className="hover:text-[#fbbf24] transition"
              >
                info@webuygoldnow.co.uk
              </a>
            </p>
          </div>

          {/* Logo and Description */}
          <div className="flex flex-col gap-2 items-center justify-start md:justify-center">
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <div className="bg-white px-3 py-1 rounded-l-md text-sm font-bold">
                  <span className="text-black">WE BUY</span>
                </div>
                <div className="bg-[#fbbf24] px-2 py-1 text-sm font-bold text-black">
                  GOLD
                </div>
                <div className="bg-white px-3 py-1 rounded-r-md text-sm font-bold">
                  <span className="text-black">NOW</span>
                </div>
              </div>
              <div className="text-[10px] text-gray-400 text-center">
                - CASH & COINS FOR CASH -
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Your trusted gold buyers since 2010
            </p>
          </div>

          {/* Links */}
          <div className="ml-auto text-right">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              LINKS
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#fbbf24] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-[#fbbf24] transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-[#fbbf24] transition">
                  Sell Today
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-[#fbbf24] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d3748] pt-8 text-center text-xs text-gray-500">
          <p>&copy; 2025 We Buy Gold Now. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
