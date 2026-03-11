"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Container } from "./Container";

interface PageHeroProps {
  title: string;
  subtitle: string;
  accent?: string;
  tag?: string;
}

export function PageHero({ title, subtitle, accent, tag }: PageHeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    // Register GSAP for more reliable context handling if needed
    // (Core gsap functions work without plugin registration, but useGSAP handles context)

    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      // Debug: Log when animation starts
      onStart: () => console.log("PageHero animation started")
    });

    // Set initial states safely - filter out nulls (like optional tagRef)
    const animTargets = [tagRef.current, subtitleRef.current].filter(Boolean);
    if (animTargets.length > 0) {
      gsap.set(animTargets, { opacity: 0, y: 30 });
    }
    
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 }); // Parent h1 stays visible
    }

    const titleWords = titleRef.current?.querySelectorAll(".hero-word");
    if (titleWords && titleWords.length > 0) {
      gsap.set(titleWords, { opacity: 0, y: 30 });
    }

    tl.to(container.current, {
      opacity: 1,
      duration: 0.5,
    });

    if (tagRef.current) {
      tl.fromTo(tagRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.2"
      );
    }

    if (titleWords && titleWords.length > 0) {
      tl.fromTo(titleWords,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power4.out" },
        "-=0.7"
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );
    }

    // Continuous Background animations
    gsap.to(".hero-decoration", {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".hero-blob", {
      x: "random(-60, 60)",
      y: "random(-60, 60)",
      duration: "random(8, 15)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 3,
        from: "random"
      }
    });

    gsap.to(".hero-pulse", {
      scale: 1.15,
      opacity: 0.4,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  const words = title.split(" ");

  return (
    <div ref={container} className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Blobs with subtle colors to show movement better */}
        <div className="hero-blob absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="hero-blob absolute -bottom-48 -right-24 h-[600px] w-[600px] rounded-full bg-indigo-100/30 blur-[100px]" />
        <div className="hero-blob absolute top-1/4 left-1/2 h-80 w-80 rounded-full bg-neutral-200/50 blur-[90px]" />
        
        {/* Decorative Pulsing Outlines */}
        <div className="hero-decoration hero-pulse absolute top-10 right-10 h-64 w-64 border border-blue-200/40 rounded-full" />
        <div className="hero-decoration absolute bottom-1/4 left-10 h-48 w-48 border border-indigo-100 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]" />
      </div>
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center flex flex-col gap-8">
          {tag && (
            <div className="flex justify-center">
              <span ref={tagRef} className="inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-bold text-neutral-900 uppercase tracking-widest">
                {tag}
              </span>
            </div>
          )}
          <h1 ref={titleRef} className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {words.map((word, i) => (
              <span key={i} className="hero-word inline-block mr-4">
                {word}
              </span>
            ))}
            {accent && (
              <span className="hero-word inline-block bg-gradient-to-r from-neutral-400 via-neutral-900 to-neutral-400 bg-clip-text text-transparent">
                {accent}
              </span>
            )}
          </h1>
          <p ref={subtitleRef} className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed font-medium px-4 sm:px-0">
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  );
}
