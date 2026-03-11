"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParticleBackground } from "@/components/hero/ParticleBackground";
import { Quote, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// ── COMPONENTS ────────────────────────────────────────────────────────────

function VideoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Quote */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 opacity-20 transform -rotate-12">
               <Quote className="h-32 w-32 text-orange-500 fill-orange-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-neutral-900 leading-tight mb-8">
                &quot;The flexibility of the Jocata GRID platform helped IndusInd Bank launch 
                multiple digital lending products quickly and at scale.&quot;
              </h3>
              <div className="flex items-center gap-4">
                <div className="h-14 w-1 flex-shrink-0 bg-orange-500 rounded-full" />
                <div>
                   <p className="text-xl font-extrabold text-neutral-900">Charu Mathur</p>
                   <p className="text-neutral-500 font-medium uppercase tracking-widest text-xs">
                     Chief Digital Officer, IndusInd Bank
                   </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Video Player Placeholder */}
          <div className="lg:w-1/2 w-full">
             <div className="group relative aspect-video w-full overflow-hidden rounded-[32px] bg-neutral-900 shadow-2xl ring-1 ring-black/5 cursor-pointer">
                <Image 
                  src="/images/mockups/video-success-story.png"
                  alt="Success Story Video"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                   </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/70 text-xs font-bold tracking-widest uppercase">
                   <span>Success Story</span>
                   <span>00:44</span>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CaseStudySection({ 
  title, 
  subtitle, 
  points, 
  image, 
  reverse = false 
}: { 
  title: string; 
  subtitle: string; 
  points: string[]; 
  image: string; 
  reverse?: boolean 
}) {
  return (
    <section className={`py-24 ${reverse ? 'bg-neutral-50' : 'bg-white'}`}>
      <Container>
        <div className={`flex flex-col lg:flex-row gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
           {/* Mockup */}
           <FadeIn className="lg:w-1/2 w-full" delay={0.2}>
              <div className="relative mx-auto aspect-[16/10] w-full max-w-[550px] rounded-2xl border-[12px] border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden ring-1 ring-black/10">
                <Image 
                  src={image} 
                  alt={title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative mx-auto h-2.5 w-[110%] -translate-x-[4.5%] rounded-b-xl border-t border-white/5 bg-gradient-to-b from-neutral-800 to-neutral-700 shadow-xl" />
           </FadeIn>

           {/* Content */}
           <FadeIn className="lg:w-1/2" delay={0.3}>
              <h3 className="text-2xl font-bold text-neutral-400 mb-2">{title}</h3>
              <h4 className="text-3xl font-extrabold text-neutral-900 mb-8 leading-tight">{subtitle}</h4>
              <ul className="space-y-4">
                 {points.map((p, i) => (
                   <li key={i} className="flex gap-4 group">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-sky-50 transition-colors">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                      </div>
                      <span className="text-neutral-600 leading-relaxed font-medium">{p}</span>
                   </li>
                 ))}
              </ul>
           </FadeIn>
        </div>
      </Container>
    </section>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />
        <ParticleBackground color="rgba(255, 255, 255, 0.4)" count={100} opacity={0.5} />
        
        <Container className="relative z-10 text-center">
           <FadeIn>
              <span className="inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-6">
                Impact at Scale
              </span>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6">
                Success <span className="text-sky-400">Stories</span>
              </h1>
              <p className="max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed">
                Empowering the world&apos;s leading financial institutions to redefine digital 
                lending and risk management through innovative tech solutions.
              </p>
           </FadeIn>
        </Container>
      </section>

      {/* ── VIDEO TESTIMONIAL ───────────────────────────────────────── */}
      <VideoSection />

      {/* ── CASE STUDIES ────────────────────────────────────────────── */}
      <CaseStudySection 
        title="Large Private Sector Bank"
        subtitle="Digital Lending Platform for Retail and SME"
        points={[
          "End-to-End Digital Customer Experience and Middleware platform to digitize the Personal & SME lending space.",
          "Single platform caters to multiple products powering significant loan book growth for the bank.",
          "Instant eligibility and disbursement of funds to customers via the platform.",
          "Multi-channel omnideployment across phone banking, website, internet banking and mobile banking.",
          "Integrated workflow, underwriting and record management platform."
        ]}
        image="/images/mockups/retail-lending-mockup.png"
        reverse={true}
      />

      <CaseStudySection 
        title="Leading Global Corporate Card Organisation"
        subtitle="Digital Corporate and SME On-Boarding"
        points={[
          "Transformation from a manual to a complete digital experience.",
          "Ecosystem platform for on-boarding, screening, under-writing corporates.",
          "85% reduction in time taken for acquiring corporate card customers.",
          "Seamless integration with alternate trusted data sources for real-time data aggregation and verification.",
          "Single Ecosystem platform for bank's Partners, Corporates and internal to bank teams to digitally on-board and underwrite corporate card customers."
        ]}
        image="/images/mockups/corporate-card-mockup.png"
      />

      <CaseStudySection 
        title="New-Age Digital Payment Bank"
        subtitle="AML Compliance"
        points={[
          "Artificial Intelligence and Machine Learning powered analytics platform to revamp and digitally transform AML Transaction Monitoring.",
          "Multi-system integration to allow for a 360 degree view of the customer and their transactions.",
          "On-demand data visualisations for efficient alert review significantly reducing operational TATs.",
          "Platform delivery at scale to handle over 5 Billion transactions in a year.",
          "Comprehensive configuration capability inherent to the platform empowering higher flexibility and stabilisation."
        ]}
        image="/images/mockups/aml-compliance-mockup.png"
        reverse={true}
      />

      {/* ── BOTTOM QUOTE SECTION ───────────────────────────────────── */}
      <section className="py-24 bg-[#f0f9fb] relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-sky-100/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-50/50 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Quote */}
            <div className="lg:w-3/5 space-y-10">
              <div className="relative">
                <Quote className="absolute -top-6 -left-8 h-12 w-12 text-orange-200 fill-orange-100" />
                <h3 className="text-xl md:text-2xl font-medium text-neutral-600 leading-relaxed italic relative z-10">
                  &quot;The flexibility of the Jocata GRID platform helped Tata Capital launch 
                  multiple digital lending products quickly and at scale.&quot;
                </h3>
              </div>
              
              <div className="flex items-center gap-6">
                 <div className="relative h-20 w-20 flex-shrink-0">
                    <div className="absolute inset-0 bg-sky-200 rounded-full animate-pulse opacity-20" />
                    <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-white shadow-lg bg-neutral-100 flex items-center justify-center">
                       {/* Placeholder for Mani Mulki's image - using initials/icon for now as per ref */}
                       <span className="text-2xl font-bold text-neutral-400">MM</span>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <p className="text-xl font-extrabold text-neutral-900">Mani Mulki</p>
                    <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">
                      Chief Information Officer, Tata Capital Limited
                    </p>
                 </div>
              </div>
            </div>

            {/* Right: Graphic */}
            <div className="lg:w-2/5 w-full flex justify-center lg:justify-end">
               <div className="relative w-full max-w-[400px] aspect-square">
                  <Image 
                    src="/images/illustrations/cheering-people.png" 
                    alt="Success Celebration" 
                    fill 
                    className="object-contain"
                  />
               </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
