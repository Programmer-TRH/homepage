"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  goldBars,
  goldCoins,
  QuoteItem,
  silverBars,
  silverCoins,
} from "@/lib/data/QuoteItems";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  expanded: boolean;
  items: Array<{
    id: string;
    label: string;
  }>;
}

const faqs = [
  {
    id: 1,
    step: "Step.1 - Select What You're Selling",
    answer:
      "Choose one of the categories to begin Coins and Bars, Gold and Silver.",
  },
  {
    id: 2,
    step: "Step.2 - Enter Weights or Quantities",
    answer:
      "Use the input boxes to add the estimated weight (in ounces) for each item type. The selected items will appear in a table below this one. Don't worry if you don't know the exact weight – a rough estimate is fine.",
  },
  {
    id: 3,
    step: "Step.3 - Fill out the form above",
    answer:
      "Once you know your average rough price you can fill out your details in the above from to start your selling process.",
  },
];

export default function InstantQuoteSection() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Sell Gold Coins",
      expanded: false,
      items: goldCoins.map((i) => ({ id: i.id, label: i.name })),
    },
    {
      id: "2",
      name: "Sell Gold Bars",
      expanded: false,
      items: goldBars.map((i) => ({ id: i.id, label: i.name })),
    },
    {
      id: "3",
      name: "Sell Silver Coins",
      expanded: false,
      items: silverCoins.map((i) => ({ id: i.id, label: i.name })),
    },
    {
      id: "4",
      name: "Sell Silver Bars",
      expanded: false,
      items: silverBars.map((i) => ({ id: i.id, label: i.name })),
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<QuoteItem[]>([]);

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

  const handleRemoveAll = () => {
    setSelectedItems([]);
  };

  const handleAddItem = (itemId: string) => {
    const allItems = [...goldCoins, ...goldBars, ...silverCoins, ...silverBars];
    const item = allItems.find((i) => i.id === itemId);

    if (!item) return;

    setSelectedItems((prev) => {
      // Already exists? Increase quantity
      const exists = prev.find((p) => p.id === itemId);
      if (exists) {
        return prev.map((p) =>
          p.id === itemId ? { ...p, quantity: (p.quantity ?? 1) + 1 } : p
        );
      }

      // New item → quantity = 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQty = (id: string) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setSelectedItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, (item.quantity ?? 1) - 1) }
            : item
        )
        .filter((item) => item.quantity !== 0)
    );
  };

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Get an Instant Quote
        </h2>

        <div className="bg-linear-to-br from-[#f5f5f5] to-[#efefef] rounded-3xl p-8 md:p-12 border-2 border-[#e5dcc8] shadow-lg text-black">
          <div className="space-y-2 mb-4">
            {faqs.map((item) => (
              <Accordion
                key={item.id}
                type="single"
                collapsible
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <AccordionItem
                  value={item.step}
                  className="w-full px-4 hover:bg-gray-50 transition "
                >
                  <AccordionTrigger className="text-gray-700 font-medium text-base hover:no-underline">
                    {item.step}
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-gray-200 p-4 bg-gray-50 text-gray-500">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

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
                    <span className=" text-gray-700 font-medium">
                      {category.name}
                    </span>
                    {category.expanded ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </button>
                  {category.expanded && (
                    <div className="border-t border-gray-200 p-4 bg-gray-50 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleAddItem(item.id)}
                          className="px-3 py-1 bg-[#c4a564] text-white rounded-full text-sm hover:bg-[#b3944d]"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {selectedItems.length > 0 && (
            <div className="border-t-2 border-gray-300 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-gray-800">
                  Your Items
                </h4>
                <Button onClick={handleRemoveAll} variant="destructive">
                  Remove All
                </Button>
              </div>

              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      £{item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 bg-gray-400 hover:bg-gray-300 rounded"
                      >
                        -
                      </button>

                      <span className="w-6 text-center">{item.quantity}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 bg-gray-400 hover:bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>

                    <Button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-300">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-lg font-bold text-[#c4a564]">
                  £{totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
