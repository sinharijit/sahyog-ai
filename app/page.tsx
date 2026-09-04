import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/layout/Navbar";
import HowItWorks from "@/components/landing/HowItWorks";
import About from "@/components/landing/About";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />\
        <About />
        <CTA />
      </main>

      <Footer />
    </>
  );
}