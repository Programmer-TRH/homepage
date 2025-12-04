import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  const res = await fetch("https://www.kitco.com/market/");
  const html = await res.text();

  const $ = cheerio.load(html);

  const goldPrice = parseFloat($("#AU-bid").text().trim()) || 0;
  const silverPrice = parseFloat($("#AG-bid").text().trim()) || 0;

  return NextResponse.json({
    gold: goldPrice,
    silver: silverPrice,
  });
}
