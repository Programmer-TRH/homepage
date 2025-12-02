import Link from "next/link";
import LOGO from "@/public/image/Logo White.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f1419] text-gray-400 py-12 border-t border-[#2d3748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 max-md:place-items-center gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              CONTACT
            </h4>
            <p className="text-sm mb-2">Old Town Hall,</p>
            <p className="text-sm mb-2">30 Tweedy Rd,</p>
            <p className="text-sm mb-4">Bromley BR1 3FE</p>
            <p className="text-sm mb-2 font-semibold">0208 080 2848</p>
            <p className="text-sm mb-2 font-semibold">
              info@webuygoldnow.co.uk
            </p>
          </div>

          {/* Logo and Description */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image
                src={LOGO}
                alt="Logo"
                width={1080}
                height={720}
                className="w-44 h-20"
              />
            </div>
            <p className="text-xs text-gray-500 text-center">
              Your trusted gold buyers since 2020
            </p>
          </div>

          {/* Links */}
          <div className="md:ml-auto md:text-right">
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
