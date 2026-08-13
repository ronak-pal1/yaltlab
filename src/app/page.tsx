import HeroSection from "@/components/sections/HeroSection";
import ProofSection from "@/components/sections/ProofSection";
import OfferSection from "@/components/sections/OfferSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingTeaserSection from "@/components/sections/PricingTeaserSection";
import FAQSection from "@/components/sections/FAQSection";
import CloseCTASection from "@/components/sections/CloseCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofSection />
      <OfferSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <PricingTeaserSection />
      <FAQSection />
      <CloseCTASection />
    </>
  );
}
