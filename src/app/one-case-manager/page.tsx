"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParticleBackground } from "@/components/hero/ParticleBackground";
import { CaseManagerSlider } from "@/components/sections/CaseManagerSlider";
import { 
  ShieldCheck, 
  Users, 
  Zap, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  BarChart3,
  Network
} from "lucide-react";
import Link from "next/link";

function FeatureCard({ title, description, icon: Icon, delay = 0 }: any) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="group relative flex h-full flex-col p-8 rounded-3xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">{title}</h3>
        <p className="text-neutral-500 leading-relaxed text-sm">{description}</p>
        <div className="mt-8 flex items-center gap-2 text-sm font-bold text-neutral-900 opacity-0 transition-opacity group-hover:opacity-100">
          Learn more <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </FadeIn>
  );
}

export default function OneCaseManagerPage() {
  const features = [
    {
      title: "360° View of Customer Risk",
      description: "Consolidate cases and alerts from multiple vendor platforms to proactively identify & assess potential risk and implement preventive measures across the entire customer lifecycle.",
      icon: Search
    },
    {
      title: "Collaboration between Teams",
      description: "Facilitate seamless collaboration & information sharing within financial crime investigation teams through real-time communication, audit trails, and shared workspaces.",
      icon: Users
    },
    {
      title: "Intelligent Automation",
      description: "Classify & prioritize high volume of alerts with intelligent automation. Layering AI/ML-led data analytics helps reduce false positives and accelerates decision making.",
      icon: Zap
    }
  ];

  const highlights = [
    { icon: CheckCircle2, text: "Centralized Alerting" },
    { icon: Clock, text: "Real-time Monitoring" },
    { icon: BarChart3, text: "Advanced Analytics" },
    { icon: Network, text: "Unified Case View" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-32 min-h-[85vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900" />
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <ParticleBackground color="rgba(255, 255, 255, 0.4)" count={120} opacity={0.5} />

        <Container className="relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* Left: Text Content */}
            <FadeIn className="flex flex-col items-start gap-8">
              <div>
                <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4">
                  Case Management Solution
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight sm:text-5xl lg:text-6xl">
                  Simplify Investigations<br />
                  <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                    with One Case Manager
                  </span>
                </h1>
                <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
                  Unify alerts for AML, CFT, Fraud Risk Management, and Sanctions Screening onto a single, 
                  intelligent platform designed for speed and accuracy.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {highlights.map((h) => (
                  <div key={h.text} className="flex items-center gap-2 text-neutral-300">
                    <h.icon className="h-5 w-5 text-sky-400" />
                    <span className="text-sm font-medium">{h.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-neutral-900 transition-all hover:scale-105 active:scale-95"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
                >
                  Explore Platform
                </Link>
              </div>
            </FadeIn>

            {/* Right: Laptop Slider */}
            <FadeIn delay={0.2} className="relative">
              {/* Laptop Frame Effect */}
              <div className="relative mx-auto max-w-[550px]">
                {/* Glossy bezel shell */}
                <div className="aspect-[16/10] w-full rounded-2xl border-[12px] border-neutral-800 bg-neutral-900 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                  <CaseManagerSlider />
                </div>
                {/* Laptop Base */}
                <div className="relative mx-auto h-3 w-[110%] -translate-x-[4.5%] rounded-b-xl border-t border-white/10 bg-gradient-to-b from-neutral-800 to-neutral-700 shadow-xl" />
                <div className="relative mx-auto h-2 w-[20%] rounded-b-xl bg-neutral-800 opacity-50" />
              </div>
            </FadeIn>

          </div>
        </Container>
      </section>

      {/* ── FEATURES SECTION ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl mb-4">
              Powerful Capabilities for Modern Risk Teams
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Jocata One Case Manager builds a holistic view of customer risk by unifying fragmented 
              data sources and empowering investigators with AI-driven tools.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-neutral-950">
        {/* Adjusted gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950" />
        
        {/* Central glowing orbs for differentiation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
        
        {/* Dot-grid overlay with different opacity */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        {/* Particles */}
        <ParticleBackground color="rgba(139, 92, 246, 0.3)" count={80} opacity={0.4} />

        <Container className="relative z-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center group transition-all hover:bg-white/[0.07]">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              Ready to unify your<br />
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                risk management?
              </span>
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Join leading financial institutions already using Jocata One Case Manager to 
              slash investigation times and eliminate data silos once and for all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-neutral-900 transition-all hover:scale-105 active:scale-95"
              >
                Get Started Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
