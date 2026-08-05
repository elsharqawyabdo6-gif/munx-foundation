import {
  CtaSection,
  FaqSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  TrustedBySection,
  WhyUsSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <PortfolioSection />
      <WhyUsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
