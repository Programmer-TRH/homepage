"use server";

import {
  goldBars,
  goldCoins,
  QuoteItem,
  silverBars,
  silverCoins,
} from "@/lib/data/QuoteItems";
import { fetchMetalApiPrices } from "@/services/price-service";

export async function getQuotePrices(): Promise<Record<string, number>> {
  const metalData = await fetchMetalApiPrices();
  console.log("Metal Data:", metalData);
  const allItems: QuoteItem[] = [
    ...goldCoins,
    ...goldBars,
    ...silverCoins,
    ...silverBars,
  ];

  const priceMap: Record<string, number> = {};
  for (const item of allItems) {
    priceMap[item.id] = metalData[item.id] ?? 0;
  }

  return priceMap;
}
