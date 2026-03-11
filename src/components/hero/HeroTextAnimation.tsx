"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface HeroTextAnimationProps {
  headline: string;
  accentWord: string;
  subheadline: string;
  className?: string;
}

export function HeroTextAnimation({
  headline,
  accentWord,
  subheadline,
  className,
}: HeroTextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Split the headline manually since we don't have SplitText club plugin
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word-span");
        
        tl.fromTo(
          words,
          {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }

      if (subRef.current) {
        tl.fromTo(
          subRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    },
    { scope: containerRef }
  );

  const headlineWords = headline.split(" ");

  return (
    <div ref={containerRef} className={cn("flex flex-col items-center text-center", className)}>
      <h1
        ref={headlineRef}
        className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white"
      >
        {headlineWords.map((word, i) => (
          <span key={i} className="word-span inline-block mr-3">
            {word}
          </span>
        ))}
        {accentWord && (
          <span className="word-span inline-block bg-gradient-to-r from-sky-400 via-violet-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            {accentWord}
          </span>
        )}
      </h1>
      <p ref={subRef} className="mx-auto max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl px-4 sm:px-0">
        {subheadline}
      </p>
    </div>
  );
}
