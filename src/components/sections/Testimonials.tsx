"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "@/lib/siteData";
import { Container } from "../layout/Container";
import { ScrollSection } from "../animations/ScrollSection";
import { FadeIn } from "../animations/FadeIn";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll(".testimonial-card");
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <ScrollSection className="py-32 bg-background">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Success Stories
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-neutral-500">
              Find out more about how Jocata helped some of the largest financial institutions achieve their specific digital transformation goals.
            </p>
          </FadeIn>
        </div>
        
        <div ref={containerRef} className="grid gap-8 md:grid-cols-2">
          {siteData.testimonials.map((test, index) => (
            <div
              key={index}
              className="testimonial-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-secondary/10 p-8 backdrop-blur-sm sm:p-10"
            >
              <Quote className="absolute top-8 right-8 h-24 w-24 text-foreground/5" />
              <p className="relative z-10 mb-10 text-base font-medium leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
                "{test.quote}"
              </p>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-foreground/20 bg-secondary">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{test.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {test.role}, <span className="text-muted-foreground/80">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ScrollSection>
  );
}
