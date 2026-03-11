"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  parallaxOffset?: number;
}

export function ScrollSection({
  children,
  className,
  parallaxOffset = 0,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || parallaxOffset === 0) return;

    gsap.to(sectionRef.current, {
      y: parallaxOffset,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
