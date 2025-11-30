"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface QuoteItem {
  id: string;
  name: string;
  price: number;
}

interface Category {
  id: string;
  name: string;
  expanded: boolean;
  items: Array<{
    id: string;
    label: string;
  }>;
}

export default function InstantQuoteSection() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Sell Gold Coins",
      expanded: false,
      items: [],
    },
    {
      id: "2",
      name: "Sell Gold Bars",
      expanded: false,
      items: [],
    },
    {
      id: "3",
      name: "Sell Silver Coins",
      expanded: false,
      items: [],
    },
    {
      id: "4",
      name: "Sell Silver Bars",
      expanded: false,
      items: [],
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<QuoteItem[]>([
    {
      id: "1",
      name: "GOLD - Gold Bar 1/10oz x1",
      price: 293.97,
    },
  ]);

  const toggleCategory = (id: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Get an Instant Quote
        </h2>

        <div className="bg-linear-to-br from-[#f5f5f5] to-[#efefef] rounded-3xl p-8 md:p-12 border-2 border-[#e5dcc8] shadow-lg">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-[#c4a564] uppercase tracking-wide mb-4">
              COINS AND BARS
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium">
                      {category.name}
                    </span>
                    {category.expanded ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </button>
                  {category.expanded && (
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                      <p className="text-gray-500 text-sm">
                        Select items to quote
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Items */}
          <div className="border-t-2 border-gray-300 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-gray-800">
                Your Items
              </h4>
              <button className="text-sm font-semibold text-red-500 hover:text-red-600 transition">
                Clear All
              </button>
            </div>

            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200"
              >
                <span className="text-gray-700 font-medium">{item.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-semibold">
                    £{item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-300">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-lg font-bold text-[#c4a564]">
                £{totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
