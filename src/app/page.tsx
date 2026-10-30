import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { TechStack } from "@/components/sections/TechStack";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Ecosystem />
      <TechStack />
      <StatsBar />
      <Testimonials />
      <CTASection />
    </>
  );
}
