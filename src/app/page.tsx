import { HeroSection } from "@/components/hero/HeroSection";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { GridStack } from "@/components/sections/GridStack";
import { Clients } from "@/components/sections/Clients";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CareersSection } from "@/components/sections/CareersSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero - Fintech Ecosystem of the Future */}
      <HeroSection />

      {/* 2. What We Do - Tab-based Business / Risk / Ops / Compliance */}
      <WhatWeDo />

      {/* 3. How We Do It - Jocata GRID 4-step process */}
      <GridStack />

      {/* 4. Stats - Key metrics */}
      <Stats />

      {/* 5. Our Clients - Marquee + Awards */}
      <Clients />

      {/* 6. Success Stories - Testimonials */}
      <Testimonials />

      {/* 7. Careers CTA */}
      <CareersSection />
    </div>
  );
}
