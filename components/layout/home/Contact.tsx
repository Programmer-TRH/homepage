"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    goldBars: false,
    goldCoins: false,
    silverBars: false,
    silverCoins: false,
    fullName: "",
    email: "",
    phone: "",
    dropOff: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: unknown) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#0f1419] py-16 md:py-24" id="contact">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Looking to sell your gold for instant cash?
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Fill in the details below and we&apos;ll get back to you
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* What would you like to sell */}
          <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-[#fbbf24] font-semibold mb-4">
              What would you like to sell?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="goldBars"
                  checked={formData.goldBars}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-white text-sm">Gold Bars</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="goldCoins"
                  checked={formData.goldCoins}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-white text-sm">Gold Coins</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="silverBars"
                  checked={formData.silverBars}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-white text-sm">Silver Bars</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="silverCoins"
                  checked={formData.silverCoins}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-white text-sm">Silver Coins</span>
              </label>
            </div>
          </div>

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-[#2a2f3f] text-white px-6 py-3 rounded-lg border border-[#3d4250] placeholder-gray-500 focus:outline-none focus:border-[#fbbf24] transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#2a2f3f] text-white px-6 py-3 rounded-lg border border-[#3d4250] placeholder-gray-500 focus:outline-none focus:border-[#fbbf24] transition"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#2a2f3f] text-white px-6 py-3 rounded-lg border border-[#3d4250] placeholder-gray-500 focus:outline-none focus:border-[#fbbf24] transition"
          />

          {/* Drop off method */}
          <select
            name="dropOff"
            value={formData.dropOff}
            onChange={handleChange}
            className="w-full bg-[#2a2f3f] text-gray-400 px-6 py-3 rounded-lg border border-[#3d4250] focus:outline-none focus:border-[#fbbf24] transition"
          >
            <option>I would like to drop off</option>
            <option>In person</option>
            <option>By post</option>
            <option>Courier</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#fbbf24] text-black py-3 rounded-lg font-semibold hover:bg-[#f59e0b] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
