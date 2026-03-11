"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  User,
  Home,
  CreditCard,
  Smartphone,
  Scale,
  Wrench,
  FileText,
  FlaskConical,
  Settings,
  Bot,
  MessageSquare,
  BarChart2,
  Sparkles,
  Search,
  TrendingUp,
  Globe,
  Phone,
  Monitor,
  Building2,
  Briefcase,
  PersonStanding,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    id: "aggregation",
    label: "AGGREGATION",
    subtitle: "A Stack of Digital APIs",
    color: "#0ea5e9",
    items: ["Identity", "Address", "Financial", "Social", "Legal", "Custom"],
    icons: [User, Home, CreditCard, Smartphone, Scale, Wrench],
  },
  {
    id: "processing",
    label: "PROCESSING",
    subtitle: "Collection of Processing Engines",
    color: "#f59e0b",
    items: ["OCR", "Underwriting", "Workflow", "Robotics", "NLP"],
    icons: [FileText, FlaskConical, Settings, Bot, MessageSquare],
  },
  {
    id: "analytics",
    label: "ANALYTICS",
    subtitle: "AI-Based Analytical Capabilities",
    color: "#8b5cf6",
    items: ["Rule Engine", "AI Profiling", "Anomaly Detection", "Data Viz"],
    icons: [BarChart2, Sparkles, Search, TrendingUp],
  },
  {
    id: "presentation",
    label: "PRESENTATION",
    subtitle: "Multi-Channel Delivery",
    color: "#10b981",
    items: ["Websites", "Apps", "IVR", "Dashboards"],
    icons: [Globe, Smartphone, Phone, Monitor],
  },
];

const DATA_SOURCES = [
  { Icon: Building2, label: "Banks" },
  { Icon: Scale, label: "Legal" },
  { Icon: Search, label: "Social" },
];

export function GridPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const pipeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!pipeRef.current) return;
    const circles = pipeRef.current.querySelectorAll(".pipe-circle");
    gsap.fromTo(
      circles,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: pipeRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  const step = PIPELINE_STEPS[activeStep];

  return (
    <div ref={pipeRef} className="w-full overflow-x-auto pb-4">
      <div className="flex items-center gap-0 min-w-[640px]">

        {/* Data source icons */}
        <div className="flex flex-col gap-2 mr-4 flex-shrink-0">
          {DATA_SOURCES.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-500 shadow-sm"
            >
              <Icon className="h-3.5 w-3.5 text-neutral-400" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Arrow into first step */}
        <div className="flex-shrink-0 w-6 border-t border-dashed border-neutral-300" />

        {/* Pipeline circles */}
        {PIPELINE_STEPS.map((s, i) => {
          const isActive = activeStep === i;
          return (
            <div key={s.id} className="flex items-center flex-shrink-0">
              <button
                onClick={() => setActiveStep(i)}
                className="pipe-circle flex flex-col items-center group"
              >
                <div
                  className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 bg-white transition-all duration-300"
                  style={{
                    borderColor: isActive ? s.color : "#e5e7eb",
                    boxShadow: isActive ? `0 0 0 6px ${s.color}20` : "none",
                  }}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {s.icons.slice(0, 4).map((Icon, ii) => (
                      <Icon
                        key={ii}
                        className="h-4 w-4 transition-all duration-300"
                        style={{ color: isActive ? s.color : "#d1d5db" }}
                      />
                    ))}
                  </div>
                </div>
                <span
                  className="mt-2 text-[10px] font-bold tracking-wider transition-colors"
                  style={{ color: isActive ? s.color : "#9ca3af" }}
                >
                  {s.label}
                </span>
              </button>

              {i < PIPELINE_STEPS.length - 1 && (
                <div className="flex-shrink-0 w-10 border-t border-dashed border-neutral-300 mx-1" />
              )}
            </div>
          );
        })}

        {/* End: customer icon */}
        <div className="flex-shrink-0 ml-4 flex flex-col items-center gap-1">
          <div
            className="w-14 h-14 rounded-full border-2 border-sky-200 bg-sky-50 flex items-center justify-center"
          >
            <Briefcase className="h-6 w-6 text-sky-400" />
          </div>
          <span className="text-[9px] text-neutral-400 text-center">Customer</span>
        </div>
      </div>

      {/* Active step detail */}
      <div
        className="mt-6 rounded-xl border p-5 transition-all duration-300"
        style={{ borderColor: `${step.color}40`, backgroundColor: `${step.color}08` }}
      >
        <p className="text-xs font-bold tracking-widest mb-1" style={{ color: step.color }}>
          {step.label}
        </p>
        <p className="text-xs text-neutral-500 italic mb-3">{step.subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {step.items.map((item, i) => {
            const Icon = step.icons[i] || step.icons[0];
            return (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-white"
                style={{ backgroundColor: step.color }}
              >
                <Icon className="h-3 w-3" />
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
