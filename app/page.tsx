

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Services from "@/components/Services";
import GrantSection from "@/components/GrantSection";
import CallbackForm from "@/components/CallbackForm";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";


import CoverageMap from "@/components/CoverageMap";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <SocialProofBar />
        <Services />
        <GrantSection />
        <CallbackForm />
        <HowItWorks />
        <Reviews />
        <CoverageMap />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}