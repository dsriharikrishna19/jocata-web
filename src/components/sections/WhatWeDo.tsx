"use client";

import { useState, useRef } from "react";
import { siteData } from "@/lib/siteData";
import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import { ScrollSection } from "../animations/ScrollSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const PILLAR_CONFIG = [
  {
    icon: "Briefcase",
    tab: "Business",
    accent: "#0ea5e9",
    illustration: (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full bg-sky-100 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-40 h-40">
            {/* Business growth chart illustration */}
            <rect x="20" y="100" width="25" height="70" fill="#94d8fb" rx="4" />
            <rect x="55" y="75" width="25" height="95" fill="#38bdf8" rx="4" />
            <rect x="90" y="50" width="25" height="120" fill="#0ea5e9" rx="4" />
            <rect x="125" y="25" width="25" height="145" fill="#0284c7" rx="4" />
            <polyline
              points="32,95 67,70 102,45 137,20"
              fill="none"
              stroke="#f97316"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="32" cy="95" r="5" fill="#f97316" />
            <circle cx="67" cy="70" r="5" fill="#f97316" />
            <circle cx="102" cy="45" r="5" fill="#f97316" />
            <circle cx="137" cy="18" r="8" fill="#f97316" />
            {/* Arrow on the growing line suggesting upward growth */}
            <polyline points="132,10 140,18 148,10" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    icon: "ShieldAlert",
    tab: "Risk",
    accent: "#8b5cf6",
    illustration: (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full bg-violet-100 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-40 h-40">
            {/* Shield with analytics */}
            <path d="M100 20 L160 45 L160 105 Q160 155 100 180 Q40 155 40 105 L40 45 Z" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="3"/>
            <path d="M100 40 L145 60 L145 108 Q145 143 100 162 Q55 143 55 108 L55 60 Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
            {/* Check / data lines inside */}
            <line x1="70" y1="100" x2="90" y2="120" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
            <line x1="90" y1="120" x2="130" y2="80" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    icon: "Settings",
    tab: "Operations",
    accent: "#10b981",
    illustration: (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-44 h-44">
            {/* Workflow engine - interconnected nodes */}
            <circle cx="100" cy="40" r="20" fill="#6ee7b7" stroke="#10b981" strokeWidth="2"/>
            <circle cx="50" cy="120" r="18" fill="#6ee7b7" stroke="#10b981" strokeWidth="2"/>
            <circle cx="150" cy="120" r="18" fill="#6ee7b7" stroke="#10b981" strokeWidth="2"/>
            <circle cx="100" cy="170" r="16" fill="#34d399" stroke="#059669" strokeWidth="2"/>
            <line x1="100" y1="60" x2="60" y2="104" stroke="#10b981" strokeWidth="2" strokeDasharray="5,3"/>
            <line x1="100" y1="60" x2="140" y2="104" stroke="#10b981" strokeWidth="2" strokeDasharray="5,3"/>
            <line x1="65" y1="133" x2="90" y2="155" stroke="#10b981" strokeWidth="2" strokeDasharray="5,3"/>
            <line x1="135" y1="133" x2="110" y2="155" stroke="#10b981" strokeWidth="2" strokeDasharray="5,3"/>
            {/* Labels */}
            <text x="100" y="44" textAnchor="middle" fontSize="9" fill="#065f46" fontWeight="600">START</text>
            <text x="50" y="124" textAnchor="middle" fontSize="8" fill="#065f46" fontWeight="600">PROC</text>
            <text x="150" y="124" textAnchor="middle" fontSize="8" fill="#065f46" fontWeight="600">RULE</text>
            <text x="100" y="174" textAnchor="middle" fontSize="8" fill="#065f46" fontWeight="600">END</text>
          </svg>
        </div>
      </div>
    ),
  },
  {
    icon: "Search",
    tab: "Compliance",
    accent: "#f59e0b",
    illustration: (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full bg-amber-100 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-40 h-40">
            {/* Magnifying glass over data */}
            <circle cx="85" cy="85" r="50" fill="none" stroke="#f59e0b" strokeWidth="6"/>
            <circle cx="85" cy="85" r="36" fill="#fef3c7"/>
            <line x1="122" y1="122" x2="160" y2="160" stroke="#d97706" strokeWidth="7" strokeLinecap="round"/>
            {/* Data lines inside magnifier */}
            <line x1="65" y1="75" x2="105" y2="75" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="65" y1="85" x2="100" y2="85" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="65" y1="95" x2="95" y2="95" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="55" cy="75" r="3" fill="#d97706"/>
            <circle cx="55" cy="85" r="3" fill="#d97706"/>
            <circle cx="55" cy="95" r="3" fill="#f59e0b"/>
          </svg>
        </div>
      </div>
    ),
  },
];

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  const activePillar = siteData.pillars.items[activeTab];
  const activeConfig = PILLAR_CONFIG[activeTab];
  const ActiveIcon = (Icons as any)[activeConfig.icon] || Icons.Zap;

  return (
    <ScrollSection className="relative py-24 overflow-hidden bg-white">
      {/* Subtle top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <Container>
        <div ref={sectionRef} className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div>
            <FadeIn>
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-sky-600 uppercase">
                Our Platform
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                {siteData.pillars.title}
              </h2>
              <p className="mb-8 text-base text-neutral-500 leading-relaxed">
                Our technology platform, Jocata GRID™, is a fast, adaptive digital ecosystem that handles millions of transactions per day, delivering solutions that drive business growth, streamline operations, provide risk-adjusted insights, and ensure regulatory compliance.
              </p>
            </FadeIn>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 border-b border-neutral-200">
              {PILLAR_CONFIG.map((config, i) => {
                const TabIcon = (Icons as any)[config.icon] || Icons.Zap;
                const isActive = activeTab === i;
                return (
                  <button
                    key={config.tab}
                    onClick={() => setActiveTab(i)}
                    className={`flex flex-col items-center gap-1 px-4 py-3 text-xs font-semibold transition-all duration-200 border-b-2 -mb-px ${
                      isActive
                        ? "border-sky-500 text-sky-600"
                        : "border-transparent text-neutral-400 hover:text-neutral-600 hover:border-neutral-300"
                    }`}
                  >
                    <TabIcon
                      className="h-5 w-5"
                      style={{ color: isActive ? activeConfig.accent : undefined }}
                    />
                    <span>{config.tab}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Content */}
            <div
              key={activeTab}
              ref={contentRef}
              className="animate-fadeIn"
              style={{ animationDuration: "0.3s" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${activeConfig.accent}20` }}
                >
                  <ActiveIcon className="h-5 w-5" style={{ color: activeConfig.accent }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{activePillar.title}</h3>
              </div>
              <p className="text-neutral-500 leading-relaxed mb-6">
                {activePillar.description}
              </p>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 text-sm font-medium px-5 py-2.5 rounded hover:bg-neutral-50 transition-colors"
              >
                Learn More
                <Icons.ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Animated Illustration */}
          <div className="flex items-center justify-center">
            <div
              key={`illus-${activeTab}`}
              className="relative w-72 h-72 flex items-center justify-center rounded-full transition-all duration-500"
              style={{ backgroundColor: `${activeConfig.accent}10` }}
            >
              {/* Rotating outer ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 animate-spin-slow"
                style={{ borderColor: activeConfig.accent }}
              />
              {/* Inner illustration */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                {activeConfig.illustration}
              </div>
              {/* Corner floating badges */}
              <div
                className="absolute -top-3 -right-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg"
                style={{ backgroundColor: activeConfig.accent }}
              >
                {activePillar.title}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Background subtle decoration */}
      <div
        className="absolute -right-40 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: activeConfig.accent }}
      />
    </ScrollSection>
  );
}
