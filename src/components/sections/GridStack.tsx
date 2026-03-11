"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "@/lib/siteData";
import { Container } from "../layout/Container";
import { ScrollSection } from "../animations/ScrollSection";
import { FadeIn } from "../animations/FadeIn";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const STEP_COLORS = ["#f59e0b", "#0ea5e9", "#8b5cf6", "#10b981"];

const STEP_ICONS = [
  // Aggregation - box/data
  (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <rect x="16" y="24" width="32" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="3"/>
      <path d="M16 32 L32 20 L48 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <line x1="25" y1="44" x2="39" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="25" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Binary bits floating */}
      <text x="10" y="20" fontSize="7" fill="currentColor" opacity="0.5" fontFamily="monospace">101</text>
      <text x="44" y="18" fontSize="7" fill="currentColor" opacity="0.5" fontFamily="monospace">010</text>
    </svg>
  ),
  // Processing - filter/funnel
  (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M12 16 H52 L38 33 L38 52 L26 46 L26 33 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* flowing dots */}
      <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="32" cy="10" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="44" cy="12" r="3" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  // Analytics - magnifier / bar chart
  (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="28" cy="28" r="16" fill="none" stroke="currentColor" strokeWidth="3"/>
      <line x1="40" y1="40" x2="54" y2="54" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      {/* Mini bars inside */}
      <rect x="19" y="30" width="5" height="8" rx="1" fill="currentColor" opacity="0.7"/>
      <rect x="26" y="25" width="5" height="13" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="33" y="21" width="5" height="17" rx="1" fill="currentColor"/>
    </svg>
  ),
  // Presentation - monitor / dashboard
  (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <rect x="10" y="12" width="44" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="3"/>
      <line x1="32" y1="42" x2="32" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="22" y1="52" x2="42" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      {/* Screen content */}
      <rect x="16" y="18" width="12" height="10" rx="2" fill="currentColor" opacity="0.3"/>
      <rect x="32" y="18" width="16" height="4" rx="1" fill="currentColor" opacity="0.3"/>
      <rect x="32" y="25" width="10" height="3" rx="1" fill="currentColor" opacity="0.2"/>
    </svg>
  ),
];

export function GridStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!stepsRef.current) return;

      const steps = stepsRef.current.querySelectorAll(".grid-step");

      gsap.fromTo(
        steps,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.7,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the connector lines
      const lines = stepsRef.current.querySelectorAll(".connector-line");
      gsap.fromTo(
        lines,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          stagger: 0.25,
          duration: 0.5,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <ScrollSection className="relative py-24 overflow-hidden bg-neutral-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <Container>
        <div ref={containerRef} className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left: 4-Step Circular Process Visual */}
          <div ref={stepsRef} className="relative">
            {/* Connection lines grid */}
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Step circles */}
              {siteData.architecture.layers.map((layer, index) => (
                <div
                  key={layer.id}
                  className="grid-step group relative flex flex-col items-center gap-3 cursor-default"
                >
                  {/* Outer ring + numbered circle */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="absolute w-24 h-24 rounded-full opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"
                      style={{ backgroundColor: STEP_COLORS[index] }}
                    />
                    <div
                      className="relative z-10 flex w-20 h-20 items-center justify-center rounded-full border-4 bg-white transition-all duration-500 group-hover:scale-110 shadow-lg"
                      style={{ borderColor: STEP_COLORS[index] }}
                    >
                      <div style={{ color: STEP_COLORS[index] }}>
                        {STEP_ICONS[index]}
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full text-white text-xs font-bold shadow"
                      style={{ backgroundColor: STEP_COLORS[index] }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-sm text-neutral-800">{layer.title}</h4>
                    <p className="text-xs text-neutral-500 italic mt-0.5">{
                      ["Source your data digitally", "Process and transform data", "Extract AI-driven insights", "Present to your customers"][index]
                    }</p>
                  </div>
                </div>
              ))}

              {/* Connector lines (decorative, between steps) */}
              <div className="connector-line absolute top-10 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-neutral-300 origin-left hidden sm:block" style={{top:'38px', left:'calc(25% + 40px)', width:'calc(50% - 80px)'}}/>
              <div className="connector-line absolute bottom-20 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-neutral-300 origin-left hidden sm:block" style={{bottom:'56px', left:'calc(25% + 40px)', width:'calc(50% - 80px)'}}/>
            </div>

            {/* Center connector element */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-[9px] font-bold text-neutral-500 tracking-widest leading-tight">JOCATA</div>
                  <div className="text-[7px] font-semibold text-sky-500 tracking-widest">GRID™</div>
                </div>
              </div>
              {/* Connecting cross lines */}
              <div className="absolute w-px h-full bg-neutral-100 top-0 left-1/2"/>
              <div className="absolute h-px w-full bg-neutral-100 left-0 top-1/2"/>
            </div>

            {/* Source labels floating above - like the old design */}
            <div className="flex justify-center gap-6 mt-8 flex-wrap">
              {[
                { label: "Banks", icon: "🏦" },
                { label: "Social Media", icon: "📱" },
                { label: "Legal entities", icon: "⚖️" },
              ].map((src) => (
                <div
                  key={src.label}
                  className="flex flex-col items-center gap-1 text-xs text-neutral-500 bg-white border border-neutral-200 rounded-lg px-3 py-2 shadow-sm"
                >
                  <span className="text-base">{src.icon}</span>
                  <span className="font-medium">{src.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <FadeIn>
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-sky-600 uppercase">
                How It Works
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                {siteData.architecture.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-2 text-sm font-semibold text-neutral-800">
                Jocata GRID™, with its plug-and-play capabilities, builds a robust ecosystem across all your business verticals.
              </p>
              <p className="mb-8 text-sm text-neutral-500 leading-relaxed">
                From pulling in customer-related information from multiple sources like financial institutions, watchlists, statutory authorities, credit bureaus and social networks, to processing and analyzing it using the latest technologies, and finally, presenting it in the most convenient way to your customers and you — the GRID does it all.
              </p>
            </FadeIn>

            {/* 4 Capability labels in 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteData.architecture.layers.map((layer, i) => (
                <div key={layer.id} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5"
                    style={{ backgroundColor: STEP_COLORS[i] }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">{layer.title}</h4>
                    <p className="text-xs text-neutral-400 italic">
                      {["Do you need to source your data digitally?", "What do you want to do with your data?", "What insights do you need from your data?", "How do you want to view your data?"][i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              The GRID is a modular collection of products that can be used separately or together, and deployed on your servers or on the cloud. It is scalable, flexible and can be customized to suit your exact requirements.
            </p>

            <Link
              href="/platform"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 text-sm font-medium px-5 py-2.5 rounded hover:bg-neutral-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Container>

      {/* Bg decoration */}
      <div className="absolute -left-40 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-50 blur-[120px]" />
    </ScrollSection>
  );
}
