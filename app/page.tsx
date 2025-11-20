import AppDownload from "@/components/AppDownload";
import Blog from "@/components/Blog";
import CryptoTicker from "@/components/CryptoTicker";

import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Home";
import ProcessSteps from "@/components/ProcessSteps";
import SpecialFeatures from "@/components/SpecialFeatures";
import Statistics from "@/components/Statistics";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CryptoTicker />
        <Features />
        <AppDownload />
        <Team />
        <Testimonials />
        <SpecialFeatures />
        <ProcessSteps />
        <FAQ />
        <Statistics />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
