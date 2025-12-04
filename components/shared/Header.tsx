"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LOGO from "@/public/image/Logo White.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-(--header) z-50 border-b border-[#3d4250] font-gilory">
      <div className="max-w-7xl w-full px-2 md:px-4 h-28 mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={LOGO}
            alt="Logo"
            width={1440}
            height={1080}
            className="w-72 h-40"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white hover:text-[#fbbf24] transition text-sm"
          >
            Home
          </Link>
          <Link
            href="/news"
            className="text-white hover:text-[#fbbf24] transition text-sm"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#fbbf24] transition text-sm"
          >
            Contact
          </Link>
          <button>
            <Link
              href="/quote"
              className="bg-[#fbbf24] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#f59e0b] transition"
            >
              Sell Today
            </Link>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-(--header) border-t border-[#3d4250] px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block text-white hover:text-[#fbbf24] transition"
          >
            Home
          </Link>
          <Link
            href="/news"
            className="block text-white hover:text-[#fbbf24] transition"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-[#fbbf24] transition"
          >
            Contact
          </Link>
          <button>
            <Link
              href="/quote"
              className="w-full bg-[#fbbf24] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#f59e0b] transition"
            >
              Sell Today
            </Link>
          </button>
        </div>
      )}
    </header>
  );
}
