"use client";

import type React from "react";

import { useState } from "react";
import { Upload } from "lucide-react";

export default function UploadDetails() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Upload your details here:
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-linear-to-br from-[#f5f5f5] to-[#efefef] rounded-3xl p-8 md:p-12 border-2 border-[#e5dcc8] shadow-lg"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 px-4 py-3">
              <input
                type="text"
                name="fullName"
                placeholder="Duncan"
                value={formData.fullName}
                onChange={handleInputChange}
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
              <Upload size={18} className="text-gray-400" />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="111-111-1111"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 outline-none text-gray-700 placeholder-gray-400 focus:border-[#fbbf24]"
            />
          </div>

          {/* Email */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 outline-none text-gray-700 placeholder-gray-400 focus:border-[#fbbf24]"
            />
          </div>

          {/* File Drop Area */}
          <div className="mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload size={32} className="mx-auto mb-3 text-gray-400" />
              <p className="text-gray-500 text-sm">Drop files here</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#c4a564] hover:bg-[#b39556] text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Save Profile
          </button>
        </form>
      </div>
    </section>
  );
}
