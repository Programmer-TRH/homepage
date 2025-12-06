import ContactFAQ from "@/components/layout/contact/ContactFAQ";
import ContactHero from "@/components/layout/contact/ContactHero";
import ContactSection from "@/components/layout/contact/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactSection />
      <ContactFAQ />
    </main>
  );
}
