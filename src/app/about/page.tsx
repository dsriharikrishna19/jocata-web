"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteData } from "@/lib/siteData";
import { ParticleBackground } from "@/components/hero/ParticleBackground";
import { 
  Linkedin, 
  Quote, 
  Coins, 
  Globe, 
  Users, 
  Building2, 
  Handshake 
} from "lucide-react";
import Image from "next/image";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// ── COMPONENTS ────────────────────────────────────────────────────────────

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) return;
    
    const numericValue = parseInt(numericMatch[0], 10);
    const suffix = value.replace(/\d+/, '');

    if (isInView && ref.current) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  const hasNumber = /\d+/.test(value);
  if (!hasNumber) return <span>{value}</span>;

  const suffix = value.replace(/\d+/, '');
  return <span ref={ref}>0{suffix}</span>;
}

const iconMap: Record<string, any> = {
  Coins,
  Globe,
  Users,
  Building2,
  Handshake
};

function SectionHeading({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
       <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">{title}</h2>
       {subtitle && <p className="text-lg text-neutral-500 max-w-2xl mx-auto">{subtitle}</p>}
       <div className={`h-1.5 w-20 bg-sky-500 rounded-full mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ── VISION SECTION (HERO) ───────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-neutral-950 py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground color="rgba(56, 189, 248, 0.2)" count={120} opacity={0.4} />
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.15),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <Container className="relative z-10 text-center">
           <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-10 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-200">Established 2011</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Transforming</span> the future of <br className="hidden md:block" />
                <span className="italic font-serif serif-italic">&quot;Adaptive Financial Technology&quot;</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto leading-relaxed font-medium">
                We create a digital ecosystem of technologies that deliver adaptive solutions 
                for financial institutions at high velocity and scale, driving business growth 
                and regulatory compliance.
              </p>
              
              <div className="mt-16 flex flex-col items-center">
                 <div className="h-16 w-[1px] bg-gradient-to-b from-sky-500 to-transparent" />
              </div>
           </FadeIn>
        </Container>
      </section>

      {/* ── WHO WE ARE SECTION ──────────────────────────────────────── */}
      <section className="py-24 bg-[#eef5f6] overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Content */}
            <FadeIn className="lg:w-1/2" delay={0.2}>
              <h2 className="text-[2.75rem] font-light text-neutral-600 mb-10 tracking-tight">Who We Are</h2>
              
              <div className="text-[1.1rem] text-neutral-600 leading-[1.8]">
                <p>
                  Our name Jocata and our logo of birds flying in a V are inspired by the
                  scientific name of a bird. Just as this formation helps birds save energy
                  and reduce fatigue over long distances and through ever-changing
                  environments, we aspire to help financial institutions run more
                  smoothly by reducing overhead, automating processes and ensuring
                  compliance with increasingly demanding consumer needs and
                  complicated regulatory requirements.
                </p>
              </div>
            </FadeIn>

            {/* Right: Illustration */}
            <FadeIn className="lg:w-1/2 w-full" delay={0.4}>
               <div className="relative w-full aspect-[4/3] flex items-center justify-center max-w-[550px] mx-auto min-h-[350px]">
                  {/* Ground Shadow */}
                  <div className="absolute bottom-[2%] left-[25%] w-[65%] h-3 bg-sky-900/15 rounded-[100%] blur-[3px]" />
                  
                  {/* Left Cloud */}
                  <svg className="absolute left-[3%] bottom-[18%] w-[45%] text-white opacity-100 drop-shadow-sm" viewBox="0 0 200 100" fill="currentColor">
                    <path d="M50 80 C20 80 10 60 10 45 C10 30 25 25 40 25 C45 10 65 5 80 15 C95 5 125 10 130 35 C145 35 160 45 160 60 C160 80 140 80 125 80 L50 80 Z" />
                  </svg>
                  
                  {/* Top Right Cloud */}
                  <svg className="absolute right-[12%] top-[12%] w-[35%] text-white opacity-100 drop-shadow-sm" viewBox="0 0 200 100" fill="currentColor">
                    <path d="M60 70 C30 70 20 50 20 35 C20 20 35 15 50 15 C55 0 75 -5 90 5 C105 -5 135 0 140 25 C155 25 170 35 170 50 C170 70 150 70 135 70 L60 70 Z" />
                  </svg>

                  {/* Birds V Formation Container */}
                  <div className="absolute inset-0">
                    {/* Lead Bird (Red Arrowhead) */}
                    <svg className="absolute w-[14%] right-[10%] top-[48%] -translate-y-1/2 drop-shadow-md" viewBox="0 0 100 100" fill="none">
                      <path d="M15 15L90 50L15 85L30 50L15 15Z" fill="#9c2020"/>
                    </svg>

                    {/* Top Trailing Birds (Dark Red/Black) */}
                    <svg className="absolute w-[6.5%] right-[25%] top-[37%] drop-shadow-sm" viewBox="0 0 100 100" fill="none">
                      <path d="M95 50 C 70 30 50 10 20 10 C 40 30 45 40 45 45 L 10 45 L 10 55 L 45 55 C 45 60 40 70 20 90 C 50 90 70 70 95 50 Z" fill="#3a1010"/>
                    </svg>
                    <svg className="absolute w-[6%] right-[35%] top-[25%] drop-shadow-sm" viewBox="0 0 100 100" fill="none">
                      <path d="M95 50 C 70 30 50 10 20 10 C 40 30 45 40 45 45 L 10 45 L 10 55 L 45 55 C 45 60 40 70 20 90 C 50 90 70 70 95 50 Z" fill="#3a1010"/>
                    </svg>
                    <svg className="absolute w-[5.5%] right-[45%] top-[12%] drop-shadow-sm" viewBox="0 0 100 100" fill="none">
                      <path d="M95 50 C 70 30 50 10 20 10 C 40 30 45 40 45 45 L 10 45 L 10 55 L 45 55 C 45 60 40 70 20 90 C 50 90 70 70 95 50 Z" fill="#3a1010"/>
                    </svg>

                    {/* Bottom Trailing Birds */}
                    <svg className="absolute w-[6.5%] right-[25%] bottom-[37%] drop-shadow-sm" viewBox="0 0 100 100" fill="none">
                      <path d="M95 50 C 70 30 50 10 20 10 C 40 30 45 40 45 45 L 10 45 L 10 55 L 45 55 C 45 60 40 70 20 90 C 50 90 70 70 95 50 Z" fill="#3a1010"/>
                    </svg>
                    <svg className="absolute w-[6%] right-[35%] bottom-[25%] drop-shadow-sm" viewBox="0 0 100 100" fill="none">
                      <path d="M95 50 C 70 30 50 10 20 10 C 40 30 45 40 45 45 L 10 45 L 10 55 L 45 55 C 45 60 40 70 20 90 C 50 90 70 70 95 50 Z" fill="#3a1010"/>
                    </svg>
                    <svg className="absolute w-[5.5%] right-[45%] bottom-[12%] drop-shadow-sm" viewBox="0 0 100 100" fill="none">
                      <path d="M95 50 C 70 30 50 10 20 10 C 40 30 45 40 45 45 L 10 45 L 10 55 L 45 55 C 45 60 40 70 20 90 C 50 90 70 70 95 50 Z" fill="#3a1010"/>
                    </svg>
                  </div>
               </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── STATS SECTION ───────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100 relative overflow-hidden">
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
           <ParticleBackground color="rgba(14, 165, 233, 0.15)" count={25} opacity={1} shape="square" minSize={20} maxSize={80} />
        </div> */}
        <Container className="relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Years", value: "14" },
                { label: "Team", value: "650+" },
                { label: "Clients", value: "50+" },
                { label: "Countries", value: "6" }
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center">
                   <div className="h-32 w-32 rounded-full border-2 border-neutral-200 bg-white shadow-xl flex flex-col items-center justify-center transition-transform hover:scale-105 hover:border-sky-300">
                      <span className="text-3xl font-extrabold text-neutral-900">
                        <AnimatedNumber value={stat.value} />
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-tighter text-neutral-400 mt-1">{stat.label}</span>
                   </div>
                </FadeIn>
              ))}
           </div>
        </Container>
      </section>

      {/* ── OUR TEAM SECTION ────────────────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-50/50 blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-[120px] -ml-64 -mb-64 pointer-events-none" />

        <Container className="relative z-10">
           <div className="flex flex-col items-center text-center mb-20">
              <SectionHeading title="Our Leadership" centered={true} />
              <p className="max-w-2xl text-neutral-500 font-medium -mt-10">
                Driven by a vision to empower financial institutions with adaptive technology, 
                our leadership team combines decades of industry expertise with cutting-edge innovation.
              </p>
           </div>

           {/* Hierarchical Layout */}
           <div className="flex flex-col gap-24">
              
              {/* Level 1: MD & CEO */}
              <div className="flex flex-col items-center">
                 {siteData.team.filter(m => m.role === "MD & CEO").map((member) => (
                    <FadeIn key={member.name} className="w-full max-w-sm">
                       <div className="group relative flex flex-col items-center p-10 rounded-[48px] bg-white border border-neutral-100 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3">
                          {/* Glowing background behind headshot */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-sky-400/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-400/20 transition-colors duration-700" />
                          
                          <div className="relative mb-8 h-56 w-56 rounded-[40px] overflow-hidden shadow-2xl ring-8 ring-white transition-all duration-700 group-hover:scale-105 group-hover:rotate-3">
                             {member.image ? (
                                <img 
                                  src={member.image} 
                                  alt={member.name} 
                                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                             ) : (
                                <div className="h-full w-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                                   <span className="text-6xl font-black text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                             )}
                          </div>
                          <div className="text-center relative z-10">
                             <h3 className="text-3xl font-black text-neutral-900 tracking-tight">{member.name}</h3>
                             <p className="text-base font-bold text-sky-600 uppercase tracking-[0.2em] mt-2">{member.role}</p>
                             
                             {member.linkedin && (
                                <a 
                                  href={member.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-2xl transition-all hover:scale-110 hover:bg-sky-600 active:scale-95"
                                >
                                   <Linkedin className="h-5 w-5 fill-current" />
                                </a>
                             )}
                          </div>
                       </div>
                    </FadeIn>
                 ))}
                 
                 {/* Connecting line */}
                 <div className="mt-16 h-16 w-px bg-gradient-to-b from-neutral-200 to-transparent" />
              </div>

              {/* Level 2: Board & Directors */}
              <div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                   {siteData.team.filter(m => m.role !== "MD & CEO").map((member, i) => (
                      <FadeIn key={member.name} delay={0.2 + (i * 0.1)} className="h-full">
                         <div className="group relative flex flex-col items-center p-8 h-full rounded-[40px] bg-white border border-neutral-50 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                            <div className="relative mb-6 h-36 w-36 rounded-[32px] overflow-hidden shadow-xl ring-4 ring-white transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3">
                               {member.image ? (
                                  <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                               ) : (
                                  <div className="h-full w-full bg-neutral-100 flex items-center justify-center">
                                     <span className="text-3xl font-bold text-neutral-300">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                     </span>
                                  </div>
                               )}
                            </div>
                            <div className="text-center flex flex-col h-full relative z-10 w-full">
                               <h3 className="text-lg font-black text-neutral-900 tracking-tight leading-tight">{member.name}</h3>
                               <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-3 mb-6">{member.role}</p>
                               
                               {member.linkedin && (
                                  <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-auto mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 transition-all hover:scale-110 hover:bg-sky-50 hover:text-sky-600 border border-neutral-100"
                                  >
                                     <Linkedin className="h-4 w-4 fill-current" />
                                  </a>
                               )}
                            </div>
                         </div>
                      </FadeIn>
                   ))}
                </div>
              </div>

           </div>
        </Container>
      </section>

      {/* ── OUR JOURNEY SECTION ─────────────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <Container>
           <SectionHeading 
             title="Our Journey" 
             subtitle="A decade and a half of innovation, growth, and industry transformation." 
             centered={true} 
           />
           
           <div className="relative mt-24 px-4 ">
              {/* The Sinusoidal SVG Path */}
              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20 hidden md:block">
                 <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
                    <path 
                      d="M0,100 C150,100 150,20 300,20 C450,20 450,180 600,180 C750,180 750,20 900,20 C1050,20 1050,100 1200,100" 
                      stroke="url(#journey-gradient)" 
                      strokeWidth="4" 
                      strokeDasharray="12 12"
                    />
                    <defs>
                       <linearGradient id="journey-gradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2dd4bf" />
                          <stop offset="0.5" stopColor="#3b82f6" />
                          <stop offset="1" stopColor="#a855f7" />
                       </linearGradient>
                    </defs>
                 </svg>
              </div>

              <div className="grid gap-12 md:grid-cols-5 relative z-10">
                 {siteData.journey.map((m, i) => {
                    const colors = [
                      "text-teal-500 border-teal-200 bg-teal-50/50",
                      "text-sky-500 border-sky-200 bg-sky-50/50",
                      "text-blue-500 border-blue-200 bg-blue-50/50",
                      "text-indigo-500 border-indigo-200 bg-indigo-50/50",
                      "text-purple-500 border-purple-200 bg-purple-50/50",
                    ];
                    
                    // Stagger: Peak at 1 and 3, Valley at 0, 2, 4 (relative to midline)
                    const isUp = i % 2 !== 0;

                    return (
                      <FadeIn 
                        key={i} 
                        delay={i * 0.15} 
                        className={`flex flex-col items-center group ${isUp ? 'md:-translate-y-16' : 'md:translate-y-16'}`}
                      >
                         {/* Status Pills (at top) */}
                         <div className="flex flex-col gap-1 mb-4 items-center">
                            {m.details.map((d, di) => (
                               <span key={di} className="text-[8px] font-bold uppercase tracking-tight px-2 py-0.5 rounded-full border border-neutral-100 bg-white text-neutral-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                  {d}
                               </span>
                            ))}
                         </div>

                         {/* Node */}
                         <div className={`relative h-24 w-24 rounded-full border-2 ${colors[i % colors.length]} flex items-center justify-center mb-6 shadow-xl bg-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                            {(() => {
                               const Icon = iconMap[m.icon as keyof typeof iconMap] || Globe;
                               return <Icon className="h-10 w-10 opacity-80 transition-all group-hover:opacity-100" />;
                            })()}
                            
                            {/* Connector Dot */}
                            <div className={`absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-4 ${colors[i % colors.length].split(' ')[1]} shadow-sm ${isUp ? '-bottom-10' : '-top-10'} hidden md:block`} />
                         </div>

                         {/* Content */}
                         <div className="text-center">
                            <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">{m.date}</span>
                            <h4 className="text-sm font-extrabold text-neutral-900 mt-1 mb-2 group-hover:text-sky-600 transition-colors uppercase italic tracking-tight">{m.title}</h4>
                            <p className="text-[10px] text-neutral-500 font-medium leading-relaxed max-w-[120px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity">
                               {m.description}
                            </p>
                         </div>
                      </FadeIn>
                    );
                 })}
              </div>
           </div>
        </Container>
      </section>

      {/* ── WORKING HERE SECTION ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <Container>
           <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl font-extrabold text-neutral-900 mb-6 tracking-tight">Working Here</h2>
              <p className="text-lg text-neutral-500 max-w-3xl leading-relaxed italic">
                &quot;Even as Jocata has grown from a tiny startup in a one-room office to a leading 
                FinTech firm in an expansive ultramodern space, the one constant has been the 
                smart, talented and hardworking people...&quot;
              </p>
           </div>
           
           <FadeIn delay={0.2}>
              <div className="relative aspect-[16/8] w-full rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-black/5">
                 <Image 
                   src="/images/about/office-collage.png" 
                   alt="Working at Jocata" 
                   fill 
                   className="object-cover"
                 />
              </div>
           </FadeIn>
           
           <div className="mt-16 text-center">
              <p className="text-xl font-bold text-neutral-900 mb-6">Excited about what we do?</p>
              <p className="text-neutral-500 mb-8">We are always looking for great talent!</p>
              <button className="px-10 py-4 rounded-xl border-2 border-neutral-900 text-neutral-900 font-bold hover:bg-neutral-900 hover:text-white transition-all">
                Join Us
              </button>
           </div>
        </Container>
      </section>

      {/* ── OUR VALUES SECTION ──────────────────────────────────────── */}
      <section className="py-32 bg-[#f8fdff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <Container className="relative z-10">
           <SectionHeading title="Our Values" centered={true} />
           <FadeIn delay={0.3}>
              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-8">
                 {siteData.values.slice(0, 3).map((val, i) => (
                    <div key={i} className="rounded-3xl bg-white p-10 shadow-xl shadow-sky-900/5 ring-1 ring-black/5 flex flex-col gap-6 transition-all hover:-translate-y-2">
                       <div className="h-16 w-16 rounded-2xl bg-neutral-50 border border-neutral-100 relative overflow-hidden">
                          <Image src="/images/about/value-icons.png" alt={val.title} fill className="object-cover scale-[1.5]" />
                       </div>
                       <h3 className="text-xl font-bold text-neutral-900">{val.title}</h3>
                       <p className="text-sm text-neutral-600 leading-relaxed font-medium">{val.description}</p>
                    </div>
                 ))}
              </div>
              <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
                 {siteData.values.slice(3, 5).map((val, i) => (
                    <div key={i} className="rounded-3xl bg-white p-10 shadow-xl shadow-sky-900/5 ring-1 ring-black/5 flex flex-col gap-6 transition-all hover:-translate-y-2">
                       <div className="h-16 w-16 rounded-2xl bg-neutral-50 border border-neutral-100 relative overflow-hidden">
                          <Image src="/images/about/value-icons.png" alt={val.title} fill className="object-cover scale-[1.5] translate-x-1/2" />
                       </div>
                       <h3 className="text-xl font-bold text-neutral-900">{val.title}</h3>
                       <p className="text-sm text-neutral-600 leading-relaxed font-medium">{val.description}</p>
                    </div>
                 ))}
              </div>
           </FadeIn>
        </Container>
      </section>

    </div>
  );
}
