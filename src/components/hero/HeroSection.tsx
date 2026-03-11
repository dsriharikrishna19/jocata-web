"use client";

import { useRef } from "react";
import { Container } from "../layout/Container";
import { HeroTextAnimation } from "./HeroTextAnimation";
import { ParticleBackground } from "./ParticleBackground";
import { siteData } from "@/lib/siteData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function HeroSection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // CTA Button Delay Reveal
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: "power2.out" }
      );
    }
  });

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden pt-20">
      {/* Premium Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900" />
      
      {/* Glowing orbs */}
      <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />
      
      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* Particles */}
      <ParticleBackground color="rgba(255, 255, 255, 0.4)" count={120} opacity={0.5} />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')" }}
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <HeroTextAnimation
          headline={siteData.hero.headline}
          accentWord={siteData.hero.accentWord}
          subheadline={siteData.hero.subheadline}
          className="mb-10"
        />

        <div ref={ctaRef} className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/platform"
            className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 font-bold text-black transition-all hover:scale-105 hover:bg-neutral-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {siteData.hero.ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/contact"
            className="flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
          >
            Contact Sales
          </Link>
        </div>
      </Container>
    </section>
  );
}
