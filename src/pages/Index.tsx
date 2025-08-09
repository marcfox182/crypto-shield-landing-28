import { HeroSection } from "@/components/sections/HeroSection";
import { AlertSection } from "@/components/sections/AlertSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { MentorshipSection } from "@/components/sections/MentorshipSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyBitcoinSection } from "@/components/sections/WhyBitcoinSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AlertSection />
      <ComparisonSection />
      <MentorshipSection />
      <OfferSection />
      <BonusSection />
      <AboutSection />
      <TestimonialsSection />
      <WhyBitcoinSection />
      <GuaranteeSection />
      <FooterSection />
    </div>
  );
};

export default Index;