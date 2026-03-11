import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { OrbitalDiagram } from "@/components/platform/OrbitalDiagram";
import { ParticleBackground } from "@/components/hero/ParticleBackground";
import { Grid2x2, Maximize2, ArrowLeftRight, Lock } from "lucide-react";

const FEATURES = [
  { icon: Grid2x2, label: "Modular" },
  { icon: Maximize2, label: "Scalable" },
  { icon: ArrowLeftRight, label: "Flexible" },
  { icon: Lock, label: "Secure" },
];
import { GridPipeline } from "@/components/platform/GridPipeline";
import { CapabilityCards } from "@/components/platform/CapabilityCards";
import { AIWorkflow } from "@/components/platform/AIWorkflow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollSection } from "@/components/animations/ScrollSection";
import { StaggerContainer } from "@/components/animations/StaggerContainer";

export default function PlatformPage() {
  return (
    <div className="w-full">
      <PageHero
        title="One Platform,"
        accent="Multiple Apps"
        subtitle="Jocata GRID™ is a sophisticated enterprise ecosystem technology platform providing an integrated real-time view of business, risk, operations and compliance."
      />

      {/* ── 1. One Platform, Multiple Apps ─────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Text side */}
            <FadeIn>
              <h2 className="text-3xl font-light text-neutral-800 mb-6 tracking-tight">
                One Platform, <span className="font-bold">Multiple Apps</span>
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Jocata GRID is a sophisticated enterprise ecosystem technology platform that strives
                to provide an integrated real-time view of business, risk, operations and compliance.
                It is designed as a multi-layered stack of technology capabilities that help financial
                institutions in their digital transformation initiatives, with each layer solving a
                specific challenge.
              </p>
              <p className="text-sm leading-relaxed mb-8 text-sky-500">
                The GRID plugs into your backend systems through a secure interface, and brings you
                the benefits of Jocata's cutting-edge software while substantially reducing upfront
                costs for training, setup, and infrastructure.
              </p>

              {/* Feature icons */}
              <StaggerContainer className="flex flex-wrap gap-6" staggerDelay={0.15}>
                {FEATURES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all hover:scale-110 hover:border-sky-200 hover:bg-sky-50">
                      <Icon className="h-5 w-5 text-neutral-600" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-600">{label}</span>
                  </div>
                ))}
              </StaggerContainer>
            </FadeIn>

            {/* Orbital diagram */}
            <FadeIn delay={0.2}>
              <OrbitalDiagram />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── 2. What Is Jocata GRID? ────────────────────────────────── */}
      <section className="py-20 bg-neutral-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-800 tracking-tight">
              What Is <span className="font-bold">Jocata GRID?</span>
            </h2>
            <p className="mt-3 text-sm text-neutral-500 max-w-xl mx-auto">
              A modular pipeline that aggregates, processes, analyzes and presents data across all
              your business verticals — plug-and-play, scalable, and customizable to your exact needs.
            </p>
          </FadeIn>
          <GridPipeline />
        </Container>
      </section>

      {/* ── 3. What Can the Platform Do for You? ───────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-800 tracking-tight">
              What Can the Platform <span className="font-bold">Do for You?</span>
            </h2>
            <p className="mt-3 text-sm text-neutral-500 max-w-2xl mx-auto">
              Here's how our solutions built using Jocata GRID can help you with digital
              transformation initiatives across several or all of your verticals.
            </p>
          </FadeIn>
          <CapabilityCards />
        </Container>
      </section>

      {/* ── 4. How Jocata's AI Can Help You ────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#fffbf0" }}>
        <Container>
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-light text-neutral-800 tracking-tight mb-6">
              How Jocata's AI Can <span className="font-bold">Help You</span>
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 text-sm text-neutral-600 leading-relaxed">
              <p>
                We understand the importance of speed, accuracy, and cost efficiency in various aspects
                of banking. We harness the power of AI to help financial institutions improve customer
                experience, increase process efficiency and fight financial crime.
              </p>
              <p>
                Our platform includes an <strong>AI Ensemble</strong> that iteratively learns to
                identify complex patterns of anomalous behaviour by analysing huge amounts of data in
                real time. Currently our model reduces false positives by over <strong>75%</strong>.
              </p>
            </div>
          </FadeIn>
          <AIWorkflow />
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900" />
        {/* Glowing orbs */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />
        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Particles - moved after background layers */}
        <ParticleBackground color="rgba(255, 255, 255, 0.4)" count={150} opacity={0.5} />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left: headline + stats */}
            <div className="flex flex-col gap-8">
              <div>
                <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4">
                  Get Started
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight text-white leading-tight sm:text-5xl">
                  Ready to Transform<br />
                  <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                    Your Operations?
                  </span>
                </h2>
                <p className="mt-4 text-neutral-400 text-base leading-relaxed max-w-md">
                  Tell us what you need and we'll make it work. The GRID is modular, scalable, and
                  fully customizable to your requirements — right out of the box.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { val: "5B+",  label: "Transactions / yr" },
                  { val: "75%",  label: "Fewer false positives" },
                  { val: "14+",  label: "Years of innovation" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                    <span className="text-xl font-extrabold text-white">{s.val}</span>
                    <span className="text-xs text-neutral-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: glass card */}
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-white">Let's Talk</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Whether you need digital lending, compliance monitoring, AI-powered risk scoring, or
                full platform deployment — our team is ready.
              </p>
              <ul className="flex flex-col gap-2 my-2">
                {[
                  "Modular deployment, no big-bang migration",
                  "Integrates with your existing stack",
                  "Hands-on onboarding & support",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-sky-400 hover:scale-105 active:scale-95"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
