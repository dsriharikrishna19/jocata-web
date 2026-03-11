"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCKUPS = [
  {
    url: "/images/mockups/one-case-manager-1.png",
    title: "Alert Management",
  },
  {
    url: "/images/mockups/one-case-manager-2.png",
    title: "Case Details",
  },
  {
    url: "/images/mockups/one-case-manager-3.png",
    title: "Analytics Dashboard",
  },
];

export function CaseManagerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % MOCKUPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % MOCKUPS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + MOCKUPS.length) % MOCKUPS.length);

  return (
    <div className="relative group overflow-hidden rounded-xl bg-white shadow-2xl">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {MOCKUPS.map((mock, i) => (
          <div key={i} className="min-w-full relative aspect-[16/10]">
            <Image
              src={mock.url}
              alt={mock.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {MOCKUPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              current === i ? "w-6 bg-white" : "w-1.5 bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
