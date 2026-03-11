"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteData } from "@/lib/siteData";
import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";

const AWARDS = [
  {
    logo: "🏆",
    org: "BFSI Excellence Awards 2022",
    title: "Best Analytics Solution of the year for SME DNA",
    dark: true,
  },
  {
    logo: "🌟",
    org: "BFSI Exceller Awards 2023",
    title: "Best Initiative in Digital Lending for AI-powered Digital Lending Transformation Platform",
    dark: true,
  },
  {
    logo: "🌍",
    org: "GPFI – G20",
    title: "Jocata Sumpoorn was presented at GPFI in 2023 under the G20 Presidency at the Global SME Finance Forum",
    dark: false,
  },
  {
    logo: "🏛️",
    org: "Citizen Stack",
    title: "Jocata Sumpoorn was showcased at Citizen Stack – the first United Nations Conference on DPI in 2024",
    dark: false,
  },
  {
    logo: "🏅",
    org: "Global SME Finance Awards 2024",
    title: "Product Innovation of the Year – Asia for Jocata SWARA and Sumpoorn at Global SME Finance Awards 2024",
    dark: false,
  },
];

export function Clients() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // We duplicate the clients array multiple times to ensure seamless infinite looping
  const duplicatedClients = [...siteData.clients, ...siteData.clients, ...siteData.clients, ...siteData.clients];

  useGSAP(() => {
    if (!marqueeRef.current) return;

    const tl = gsap.to(marqueeRef.current, {
      xPercent: -25,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    // Pause on hover
    marqueeRef.current.addEventListener("mouseenter", () => tl.pause());
    marqueeRef.current.addEventListener("mouseleave", () => tl.play());

    return () => {
      tl.kill();
    };
  }, { scope: marqueeRef });

  return (
    <section className="bg-white">
      {/* Clients Marquee */}
      <div className="border-y border-neutral-100 py-16 overflow-hidden">
        <Container>
          <FadeIn>
            <h2 className="mb-2 text-center text-3xl font-light tracking-tight text-neutral-800">
              Our Clients
            </h2>
            <p className="text-center text-sm text-sky-500 font-medium mb-8">
              Since 2010, we have successfully partnered with some of the largest financial institutions in their digital transformation journeys.
            </p>
          </FadeIn>
        </Container>

        {/* Marquee */}
        <div className="relative flex w-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex flex-nowrap items-center gap-16 px-8"
            style={{ width: "max-content" }}
          >
            {duplicatedClients.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex h-16 w-40 flex-shrink-0 items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105 cursor-default"
                title={client.name}
              >
                <img
                  src={client.url}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          {/* Edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>

      {/* Awards Section */}
      <div className="py-12 bg-white">
        <Container>
          <div className="rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
              {AWARDS.map((award, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center p-6 gap-3 ${
                    award.dark ? "bg-neutral-900" : "bg-white"
                  }`}
                >
                  <div className={`text-3xl`}>{award.logo}</div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      award.dark ? "text-amber-400" : "text-sky-500"
                    }`}
                  >
                    {award.org}
                  </p>
                  <p className={`text-xs leading-relaxed ${award.dark ? "text-neutral-300" : "text-neutral-600"}`}>
                    {award.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
