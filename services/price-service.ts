import { itemSpecs } from "@/lib/data/itemSpecs";
const TROY_OZ_TO_G = 31.1034768;

export async function fetchMetalApiPrices(): Promise<Record<string, number>> {
  const res = await fetch(
    `${process.env.METALS_API_URL}/latest?access_key=${process.env.METAL_API_KEY}&base=GBP&symbols=XAU,XAG`
  );
  const data = await res.json();

  if (!data.success) throw new Error("Failed to fetch metal prices");

  const priceMap: Record<string, number> = {};
  const markupFactor = 0.95; // 95% of spot for payout
  const skuMap: Record<string, number> = {};

  for (const [id, spec] of Object.entries(itemSpecs)) {
    // 1️⃣ SKU direct quote override
    if (spec.sku && skuMap[spec.sku] != null) {
      priceMap[id] = parseFloat(skuMap[spec.sku].toFixed(2));
      continue;
    }

    // 2️⃣ Spot price per gram
    let spotPerGram: number;
    if (spec.metal === "gold") {
      spotPerGram = data.rates.XAU / TROY_OZ_TO_G;
    } else if (spec.metal === "silver") {
      spotPerGram = data.rates.XAG / TROY_OZ_TO_G;
    } else {
      throw new Error(`Unknown metal for item ${id}`);
    }

    // 3️⃣ Convert weight to grams
    const weightInGrams =
      spec.unit === "g"
        ? spec.nominalWeight
        : spec.nominalWeight * TROY_OZ_TO_G;

    // 4️⃣ Pure metal weight
    const pureWeight = weightInGrams * spec.fineness;

    // 5️⃣ Apply markup factor for payout
    const finalPrice = pureWeight * spotPerGram * markupFactor;

    // 6️⃣ Round to 2 decimals
    priceMap[id] = parseFloat(finalPrice.toFixed(2));
  }

  return priceMap;
}

export type MetalPrice = {
  size: string;
  pricePerOunce: number;
};

export type MetalsResponse = {
  goldCoins: MetalPrice[];
  goldBars: MetalPrice[];
  silverCoins: MetalPrice[];
  silverBars: MetalPrice[];
};

export async function fetchMetalPrices(): Promise<MetalsResponse> {
  const res = await fetch(
    `${process.env.METALS_API_URL}/latest?access_key=${process.env.METAL_API_KEY}&base=GBP&symbols=XAU,XAG`
  );

  const data = await res.json();

  if (!data.success) throw new Error("Failed to fetch metal prices");

  const priceGoldPerOz = data.rates.XAU;
  const priceSilverPerOz = data.rates.XAG;

  return {
    goldCoins: [
      { size: "9ct", pricePerOunce: priceGoldPerOz * 0.375 },
      { size: "14ct", pricePerOunce: priceGoldPerOz * (14 / 24) },
      { size: "18ct", pricePerOunce: priceGoldPerOz * (18 / 24) },
    ],
    goldBars: [
      { size: "20ct", pricePerOunce: priceGoldPerOz * (20 / 24) },
      { size: "22ct", pricePerOunce: priceGoldPerOz * (22 / 24) },
      { size: "24ct", pricePerOunce: priceGoldPerOz },
    ],
    silverCoins: [
      { size: "925", pricePerOunce: priceSilverPerOz * 0.925 },
      { size: "999", pricePerOunce: priceSilverPerOz * 0.999 },
    ],
    silverBars: [
      { size: "950", pricePerOunce: priceSilverPerOz * 0.95 },
      { size: "999", pricePerOunce: priceSilverPerOz * 0.999 },
    ],
  };
}
