import FAQ from "@/components/layout/home/FAQ";
import Features from "@/components/layout/home/Features";
import Hero from "@/components/layout/home/Hero";
import SpecialFeatures from "@/components/layout/home/SpecialFeatures";
import Testimonials from "@/components/layout/home/Testimonials";
import PricingTable from "@/components/layout/home/PricingTable";
import Process from "@/components/layout/home/Process";
import LatestNews from "@/components/layout/home/LatestNews";
import Contact from "@/components/layout/home/Contact";

export default function Home() {
  return (
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
  );
}
