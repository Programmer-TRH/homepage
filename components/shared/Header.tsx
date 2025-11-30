"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#2a2f3f] z-50 border-b border-[#3d4250]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
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
              className="bg-[#fbbf24] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#f59e0b] transition text-sm"
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
        <div className="md:hidden bg-[#2a2f3f] border-t border-[#3d4250] px-4 py-4 space-y-4">
          <Link
            href="#"
            className="block text-white hover:text-[#fbbf24] transition"
          >
            Home
          </Link>
          <Link
            href="#latest-news"
            className="block text-white hover:text-[#fbbf24] transition"
          >
            News
          </Link>
          <Link
            href="#contact"
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
