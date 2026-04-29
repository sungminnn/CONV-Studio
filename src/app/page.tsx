import { FloatingKakaoButton } from "@/components/layout/floating-kakao-button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodSection } from "@/components/sections/method-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ResultsSection } from "@/components/sections/results-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustSection } from "@/components/sections/trust-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <ServicesSection />
        <TrustSection />
        <ResultsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <FloatingKakaoButton />
    </div>
  );
}
