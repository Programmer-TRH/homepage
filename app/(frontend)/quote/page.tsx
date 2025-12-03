import InstantQuoteSection from "@/components/layout/quote/InstantQuoteSection";
import QuoteHero from "@/components/layout/quote/QuoteHero";
import UploadDetails from "@/components/layout/quote/UploadDetails";

export default function QuotePage() {
  return (
    <main>
      <QuoteHero />
      <UploadDetails />
      <InstantQuoteSection />
    </main>
  );
}
