import InstantQuoteSection from "@/components/layout/quote/InstantQuoteSection";
import QuoteHero from "@/components/layout/quote/QuoteHero";
import UploadDetailsForm from "@/components/forms/UploadDetailsForm";

export default function QuotePage() {
  return (
    <main>
      <QuoteHero />
      <UploadDetailsForm />
      <InstantQuoteSection />
    </main>
  );
}
