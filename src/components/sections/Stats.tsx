"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "@/lib/siteData";
import { Container } from "../layout/Container";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: string;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    const wrap = wrapRef.current;
    if (!el || !wrap) return;

    const target = parseFloat(value);
    let obj = { val: 0 };

    // Entrance animation for the whole stat card
    gsap.fromTo(
      wrap,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Count-up number animation
    const tween = gsap.to(obj, {
      val: target,
      duration: 2.2,
      delay: delay + 0.3,
      ease: "power2.out",
      paused: true,
      onUpdate() {
        el.textContent = Math.round(obj.val).toString();
      },
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            tween.play();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(wrap);

    return () => {
      observer.disconnect();
      tween.kill();
    };
  }, [value, delay]);

  return (
    <div
      ref={wrapRef}
      className="flex flex-col items-center justify-center text-center opacity-0"
    >
      <div className="flex items-baseline mb-3 gap-0.5">
        <span
          ref={numRef}
          className="text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl lg:text-7xl tabular-nums"
        >
          0
        </span>
        {suffix && (
          <span className="text-3xl font-bold text-sky-500 sm:text-4xl lg:text-5xl ml-0.5">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-neutral-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-24 border-y border-neutral-100 relative overflow-hidden bg-white">
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-56 rounded-full bg-sky-50 blur-[100px] opacity-70" />
      </div>

      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:divide-x divide-neutral-100">
          {siteData.stats.map((stat, i) => (
            <AnimatedCounter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.18}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
