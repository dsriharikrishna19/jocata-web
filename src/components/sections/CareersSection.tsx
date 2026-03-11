"use client";

import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import { ScrollSection } from "../animations/ScrollSection";
import Link from "next/link";

export function CareersSection() {
  return (
    <ScrollSection className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Subtle background blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-64 rounded-full bg-sky-50 blur-[100px] opacity-60" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-light tracking-tight text-neutral-800 mb-3">
              Careers
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sky-500 font-medium mb-2">
              Excited about what we do and want to join our team?
            </p>
            <p className="text-neutral-800 font-bold text-lg mb-8">
              We are always looking for great talent!
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/careers#openings"
                className="inline-flex items-center justify-center border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-2.5 rounded hover:bg-neutral-50 transition-colors min-w-[130px]"
              >
                Openings
              </Link>
              <Link
                href="/careers#why-work-here"
                className="inline-flex items-center justify-center border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-2.5 rounded hover:bg-neutral-50 transition-colors min-w-[130px]"
              >
                Why Work Here
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </ScrollSection>
  );
}
