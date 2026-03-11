"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface LandRotateProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function LandRotate({
  children,
  delay = 0,
  duration = 1.2,
  className,
}: LandRotateProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          scale: 1.3,
          rotateX: 45,
          rotateZ: -10,
          y: -50,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateZ: 0,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div 
      ref={containerRef} 
      className={cn("opacity-0 perspective-1000", className)}
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}
