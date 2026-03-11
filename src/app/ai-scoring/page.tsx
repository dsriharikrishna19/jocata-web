"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParticleBackground } from "@/components/hero/ParticleBackground";
import { LandRotate } from "@/components/animations/LandRotate";
import { 
  Zap, 
  BrainCircuit, 
  ShieldAlert, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2,
  FileSearch,
  Activity,
  BarChart,
  UserPlus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ── COMPONENTS ────────────────────────────────────────────────────────────

function ScoreCard({ title, description, icon: Icon, delay = 0 }: any) {
  return (
    <LandRotate delay={delay} className="z-[2]">
      <div className="group relative w-64 rounded-2xl border border-neutral-100 bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-lg transition-transform group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-neutral-900 leading-tight">{title}</h3>
        <p className="text-xs text-neutral-500 leading-relaxed">{description}</p>
      </div>
    </LandRotate>
  );
}

function PlatformModule({ title, icon: Icon, delay = 0 }: any) {
  return (
    <FadeIn delay={delay}>
      <div className="group flex flex-col items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-lg transition-all group-hover:bg-sky-600">
          <Icon className="h-8 w-8" />
        </div>
        <span className="text-sm font-bold text-neutral-900">{title}</span>
      </div>
    </FadeIn>
  );
}

// ── PAGE COMPONENT ────────────────────────────────────────────────────────

export default function AIScoringPage() {
  const scoreCards = [
    {
      title: "Credit Underwriting",
      description: "Make informed decisions while underwriting credit applications.",
      icon: Zap,
    },
    {
      title: "Decisioning",
      description: "Make better policy decisions such as rolling out new products and upselling.",
      icon: BrainCircuit,
    },
    {
      title: "Continuous Monitoring",
      description: "Take precautionary measures by continuously monitoring at loan and portfolio levels.",
      icon: ShieldAlert,
    }
  ];

  const platformModules = [
    { title: "Sourcing", icon: UserPlus },
    { title: "Underwriting", icon: FileSearch },
    { title: "Monitoring", icon: Activity },
    { title: "Portfolio Analytics", icon: BarChart },
    { title: "Cross-sell & Upsell", icon: Zap },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-32">
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
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            
            {/* Left side: Content */}
            <FadeIn className="lg:w-1/2">
              <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4 border border-sky-500/20">
                Advanced AI Scoring
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight sm:text-5xl lg:text-6xl">
                Behavioural Scores to Power<br />
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Retail and MSME Lending
                </span>
              </h1>
              <p className="mt-8 text-neutral-400 text-lg leading-relaxed max-w-xl">
                Jocata SWARA harnesses AI/ML-based scoring & analytics for deep behavioural insights 
                on Retail individuals, Self-Employed individuals & MSMEs.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-8 py-4 font-bold text-neutral-900 transition-all hover:scale-105"
                >
                  Request Demo
                </Link>
                <div className="flex items-center gap-4 px-6 text-sm font-medium text-neutral-300">
                   <CheckCircle2 className="h-5 w-5 text-sky-400" />
                   Trusted by 20+ Banks
                </div>
              </div>
            </FadeIn>

            {/* Right side: Cards Triangle */}
            <div className="relative lg:w-1/2 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
               {/* Background Glow behind triangle */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px] pointer-events-none" />

               {/* Triangular Arrangement */}
               <div className="relative w-full h-[450px]">
                  {/* Top Center Card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <ScoreCard {...scoreCards[0]} delay={0.3} />
                  </div>
                  
                  {/* Bottom Left Card */}
                  <div className="absolute bottom-0 left-0 z-10 transition-transform hover:z-30">
                    <ScoreCard {...scoreCards[1]} delay={0.5} />
                  </div>
                  
                  {/* Bottom Right Card */}
                  <div className="absolute bottom-0 right-0 z-10 transition-transform hover:z-30">
                    <ScoreCard {...scoreCards[2]} delay={0.7} />
                  </div>
               </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── SWARA SECTION ───────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full text-black fill-current">
            <path d="M40,0 L0,0 L0,200 L200,200 L200,0 L160,0 C160,40 140,60 100,60 C60,60 40,40 40,0 Z" opacity=".2"/>
          </svg>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticleBackground color="rgba(14, 165, 233, 0.15)" count={25} opacity={1} shape="square" minSize={5} maxSize={15} />
        </div>

        <Container>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-neutral-900 mb-4 tracking-tighter">SWARA</h2>
            <p className="text-2xl font-bold text-neutral-800 mb-8 uppercase tracking-widest">
              Source, Watch and Risk Analyse
            </p>
            <p className="max-w-4xl mx-auto text-neutral-500 text-lg leading-relaxed">
              Jocata SWARA harnesses AI/ML-based scoring & analytics for deep behavioural insights on 
              Retail individuals, Self-Employed individuals & MSMEs.
            </p>
          </div>

          {/* Visualization Tree */}
          <div className="relative mx-auto mt-20 max-w-4xl px-4 py-8">
             <div className="flex justify-center mb-8">
                <div className="h-12 w-px bg-neutral-200" />
             </div>
             
             {/* Horizontal Beam */}
             <div className="relative">
                <div className="absolute left-1/4 right-1/4 top-0 h-0.5 bg-neutral-200" />
                <div className="absolute left-1/4 top-0 h-4 w-0.5 bg-neutral-200" />
                <div className="absolute right-1/4 top-0 h-4 w-0.5 bg-neutral-200" />
             </div>

             <div className="grid grid-cols-2 gap-8 pt-4">
                <FadeIn delay={0.2} className="flex flex-col items-center gap-4 text-center">
                   <h3 className="text-xl font-extrabold text-neutral-900 uppercase">SME DNA</h3>
                   <div className="w-px h-6 bg-neutral-100" />
                   <p className="text-sm font-medium text-neutral-500">GST-based Score<br/>(MSME Customers)</p>
                </FadeIn>
                <FadeIn delay={0.3} className="flex flex-col items-center gap-4 text-center">
                   <h3 className="text-xl font-extrabold text-neutral-900 uppercase">Retail Persona Score</h3>
                   <div className="w-px h-6 bg-neutral-100" />
                   <p className="text-sm font-medium text-neutral-500">Banking-based Score<br/>(Salaried & Non-salaried Customers)</p>
                </FadeIn>
             </div>
          </div>
        </Container>
      </section>

      {/* ── PLATFORM+ SECTION ───────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl mb-4">
              Adopt a &quot;Platform+&quot; Approach to Digital Lending
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Drive growth while managing risk with our scoring and analytics suite across the loan lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {platformModules.map((m, i) => (
              <PlatformModule key={m.title} {...m} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── FORM SECTION ────────────────────────────────────────────── */}
      <section id="contact-form" className="py-24 bg-white relative overflow-hidden">
        <Container>
           <div className="mx-auto max-w-4xl rounded-[40px] border border-neutral-100 bg-white p-8 sm:p-16 shadow-2xl relative z-10">
              <div className="mb-12 text-center">
                 <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Ready to elevate your lending?</h2>
                 <p className="mt-4 text-neutral-500">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              <form className="grid gap-6 sm:grid-cols-2">
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-4">Name*</label>
                    <input className="w-full rounded-2xl border-none bg-neutral-50 px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-sky-500 transition-all outline-none" placeholder="John Doe" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-4">Company*</label>
                    <input className="w-full rounded-2xl border-none bg-neutral-50 px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-sky-500 transition-all outline-none" placeholder="Fintech Solutions" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-4">Email*</label>
                    <input className="w-full rounded-2xl border-none bg-neutral-50 px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-sky-500 transition-all outline-none" placeholder="john@example.com" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-4">Designation*</label>
                    <input className="w-full rounded-2xl border-none bg-neutral-50 px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-sky-500 transition-all outline-none" placeholder="Risk Officer" />
                 </div>
                 <div className="sm:col-span-2 mt-4">
                    <button className="w-full rounded-2xl bg-neutral-900 py-5 text-lg font-bold text-white transition-all hover:bg-sky-600 hover:scale-[1.02] active:scale-95 shadow-lg">
                       Submit Request
                    </button>
                 </div>
              </form>
           </div>
        </Container>
      </section>

    </div>
  );
}
