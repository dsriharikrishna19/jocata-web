"use client";

import { siteData } from "@/lib/siteData";
import { JobCard } from "@/components/cards/JobCard";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { HeroTextAnimation } from "@/components/hero/HeroTextAnimation";
import { ParticleBackground } from "@/components/hero/ParticleBackground";
import { 
  ArrowRight, 
  Coins, 
  TrendingUp, 
  Trophy, 
  Calendar, 
  Users2, 
  ShieldPlus 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SectionHeading({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-24 bg-sky-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* ── UPGRADED PREMIUM HERO SECTION ───────────────── */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
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

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <HeroTextAnimation
              headline="Join our mission to change"
              accentWord="FinTech"
              subheadline="It takes an entire team working hard together to change the industry. If you're smart, passionate, and eager to make a difference, your journey starts here."
              className="mb-12"
            />

            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-12 text-lg font-black text-black transition-all hover:scale-105 hover:bg-neutral-50 shadow-2xl shadow-sky-500/20"
              >
                <span className="relative z-10">View Openings</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-3 text-neutral-400 font-black uppercase tracking-widest text-[10px] bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
                A glimpse into life at Jocata
              </div>
            </div>
          </div>
          
          <FadeIn delay={0.8}>
            <div className="relative aspect-[16/7] w-full max-w-6xl mx-auto mt-24 group">
              <div className="absolute inset-0 bg-sky-500/10 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-[40px] overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm">
                <Image 
                  src="/images/careers/join-us.png" 
                  alt="Jocata Team Working" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── PERKS & LOCATION SECTIONS ───────────────── */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        {/* SECTION 2: PERKS */}
        <Container className="relative z-10 border-t border-neutral-50 pt-32 pb-32">
          <SectionHeading 
            title="Perks of Working at Jocata" 
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {siteData.perks.map((perk, i) => {
              const icons = [
                { icon: Coins, color: "from-orange-400 to-amber-500", bg: "bg-orange-50" },
                { icon: TrendingUp, color: "from-emerald-400 to-teal-500", bg: "bg-emerald-50" },
                { icon: Trophy, color: "from-yellow-400 to-orange-500", bg: "bg-yellow-50" },
                { icon: Calendar, color: "from-sky-400 to-blue-500", bg: "bg-sky-50" },
                { icon: Users2, color: "from-indigo-400 to-violet-500", bg: "bg-indigo-50" },
                { icon: ShieldPlus, color: "from-blue-400 to-cyan-500", bg: "bg-blue-50" },
              ];
              const PerkIcon = icons[i % icons.length].icon;
              const iconColor = icons[i % icons.length].color;
              const iconBg = icons[i % icons.length].bg;

              return (
                <FadeIn key={perk.title} delay={0.1 * i}>
                  <div className="group relative p-10 bg-white border border-neutral-100/60 rounded-[44px] hover:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${iconBg} opacity-20 group-hover:scale-150 transition-transform duration-700`} />
                    
                    <div className={`relative h-20 w-20 rounded-3xl ${iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm shadow-black/5`}>
                       <PerkIcon className={`h-10 w-10 opacity-80 group-hover:opacity-100 transition-opacity`} />
                    </div>

                    <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-sky-600 transition-colors tracking-tight">
                      {perk.title}
                    </h3>
                    <p className="text-neutral-500 font-medium leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>

        {/* SECTION 3: GREAT LOCATION */}
        <Container className="relative z-10 border-t border-neutral-50 pt-32 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <SectionHeading 
              title="Great Location" 
              subtitle="Hyderabad truly is a melting pot of cultures, innovation, and taste. From historical forts to high-tech hubs, find your perfect balance here."
              centered={true}
            />
            <p className="text-neutral-600 text-lg leading-relaxed font-medium mb-8">
              With its unique mix of traditional and cosmopolitan cultures... 
              it&apos;s no wonder Hyderabad is now the top choice for innovators.
            </p>
            <div className="flex items-center justify-center gap-3 text-sky-600 font-black uppercase tracking-widest text-xs py-3 px-6 rounded-full bg-sky-50 inline-flex border border-sky-100">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              Hyderabad Office HQ
            </div>
          </div>
          
          <FadeIn delay={0.2}>
            <div className="relative aspect-[21/10] w-full max-w-[1400px] mx-auto group">
              <div className="absolute inset-0 bg-neutral-900/5 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Image 
                src="/images/careers/hyderabad-map.png" 
                alt="Hyderabad Location Map" 
                fill 
                className="object-contain rounded-[40px] relative z-10 transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── CURRENT OPENINGS SECTION ────────────────────────────────── */}
      <section id="openings" className="py-24 bg-[#f2f2f2]">
        <Container>
          <SectionHeading 
            title="Current Openings" 
            subtitle="Explore our opportunities and join us in building adaptive financial technology." 
            centered={true}
          />
          <StaggerContainer className="mx-auto max-w-5xl flex flex-col gap-6 mt-16">
            {siteData.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="rounded-[48px] bg-neutral-900 p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-5xl font-black text-white relative z-10 mb-8">
              Don&apos;t see a fit?
            </h2>
            <p className="text-xl text-neutral-400 relative z-10 max-w-2xl mx-auto mb-12">
              We&apos;re always looking for exceptional talent. If you think you can make an impact, 
              send us your resume anyway.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-neutral-950 rounded-2xl font-black hover:scale-105 transition-all relative z-10"
            >
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
