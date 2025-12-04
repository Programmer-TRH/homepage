import * as cheerio from "cheerio";

export async function getScrapPrices() {
  const res = await fetch("https://www.webuyanygold.com/");
  const html = await res.text();
  console.log("HTML:", html);
  const $ = cheerio.load(html);

  function extractPrice(label: string) {
    const row = $("tr:contains('" + label + "')");
    return row.find("td").eq(1).text().trim(); // includes £
  }

  return {
    goldBars: [
      { size: "9ct", price: extractPrice("9ct") },
      { size: "14ct", price: extractPrice("14ct") },
      { size: "18ct", price: extractPrice("18ct") },
      { size: "20ct", price: extractPrice("20ct") },
      { size: "22ct", price: extractPrice("22ct") },
      { size: "24ct", price: extractPrice("24ct") },
    ],
    silverBars: [
      { size: "925", price: extractPrice("925") },
      { size: "999", price: extractPrice("999") },
    ],
  };
}
