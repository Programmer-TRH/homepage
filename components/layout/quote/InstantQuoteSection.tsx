"use client";

import { useEffect, useState } from "react";
import {
  goldBars,
  goldCoins,
  silverBars,
  silverCoins,
  QuoteItem,
} from "@/lib/data/QuoteItems";
import { getQuotePrices } from "@/actions/prices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Category {
  id: string;
  name: string;
  items: QuoteItem[];
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

const categories: Category[] = [
  { id: "1", name: "Sell Gold Coins", items: goldCoins },
  { id: "2", name: "Sell Gold Bars", items: goldBars },
  { id: "3", name: "Sell Silver Coins", items: silverCoins },
  { id: "4", name: "Sell Silver Bars", items: silverBars },
];

export default function InstantQuoteSection() {
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    getQuotePrices().then(setPrices);
  }, []);

  const handleQtyChange = (id: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.floor(value)),
    }));
  };

  const selectedItems = Object.entries(quantities)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const item = categories
        .flatMap((cat) => cat.items)
        .find((i) => i.id === id);

      if (!item) return null;

      const price = prices[id] ?? 0;

      return {
        id: item.id,
        name: item.name,
        quantity: qty,
        price,
      };
    })
    .filter((item) => item !== null);

  const totalPrice = Object.entries(quantities).reduce((sum, [id, qty]) => {
    const price = prices[id] ?? 0;
    return sum + price * qty;
  }, 0);

  return (
    <section className="bg-white text-gray-700 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Get an Instant Quote
        </h2>

        <div className="space-y-2 mb-8">
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
                <AccordionTrigger className="text-gray-700 font-medium text-lg hover:no-underline">
                  {item.step}
                </AccordionTrigger>
                <AccordionContent className="border-t text-base border-gray-200 p-4 bg-gray-50 text-gray-500">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <h3 className=" font-semibold text-[#c4a564] uppercase tracking-wide mb-4">
          COINS AND BARS
        </h3>

        <div className="space-y-2 mb-4">
          {categories.map((cat) => (
            <Accordion
              type="single"
              collapsible
              key={cat.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <AccordionItem
                value={cat.id}
                className="w-full px-4 hover:bg-gray-50 transition "
              >
                <AccordionTrigger className="text-gray-700 font-medium text-lg hover:no-underline">
                  {cat.name}
                </AccordionTrigger>
                <AccordionContent className="border-t text-base border-gray-200 p-4 bg-gray-50 text-gray-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.items.map((item) => {
                      const qty = quantities[item.id] ?? 0;
                      const price = prices[item.id] ?? 0;

                      return (
                        <div
                          key={item.id}
                          className="flex items-center justify-between border border-gray-200 rounded-lg bg-white p-3 shadow-sm"
                        >
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500">
                              £{price.toFixed(2)} per item
                            </div>
                          </div>
                          <Input
                            type="number"
                            min={0}
                            value={qty}
                            onChange={(e) =>
                              handleQtyChange(item.id, Number(e.target.value))
                            }
                            className="w-20 rounded border border-gray-200 px-2 py-1 text-sm text-right"
                            aria-label={`Quantity for ${item.name}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {selectedItems.length > 0 && (
          <div className="mt-10 border-t pt-6 text-right">
            <div className="mb-4 text-left">
              <h4 className="text-lg font-semibold mb-2 flex justify-between items-center">
                Selected Items:
                <button
                  type="button"
                  onClick={() => setQuantities({})}
                  className="ml-4 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Clear All
                </button>
              </h4>

              <div className="space-y-2">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-2"
                  >
                    <div className="flex flex-col">
                      <p className="font-medium text-base mb-0.75">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        £{item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        £{(item.price * item.quantity).toFixed(2)}
                      </span>
                      {/* Clear single item */}
                      <Button
                        variant={"ghost"}
                        type="button"
                        onClick={() =>
                          setQuantities((prev) => ({ ...prev, [item.id]: 0 }))
                        }
                        className="hover:bg-gray-300 "
                      >
                        <X />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-right mt-4">
              <span className="text-xl font-bold text-gray-800">
                Total: £{totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
