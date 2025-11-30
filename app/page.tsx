import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SpecialFeatures from "@/components/SpecialFeatures";
import Testimonials from "@/components/Testimonials";
import PricingTable from "@/components/PricingTable";
import Process from "@/components/Process";
import LatestNews from "@/components/LatestNews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingTable />
        <Process />
        <Contact />
        <FAQ />
        <Testimonials />
        <SpecialFeatures />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
