"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import {
  Banknote,
  Cog,
  Sparkles,
  Search,
  FileOutput,
  XCircle,
  UserCheck2,
  Users,
  Database,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MAIN_FLOW = [
  { id: "txn",  label: "New\nTransactions",   Icon: Banknote,    color: "#0ea5e9" },
  { id: "rule", label: "Rule\nEngine",         Icon: Cog,         color: "#f59e0b" },
  { id: "ai",   label: "AI\nEnsemble",         Icon: Sparkles,    color: "#8b5cf6", large: true },
  { id: "inv",  label: "Investigation\nFlow",  Icon: Search,      color: "#10b981" },
  { id: "str",  label: "File\nSTR",            Icon: FileOutput,  color: "#0ea5e9" },
];

const METRICS = [
  { val: "75%+",      label: "False positive reduction" },
  { val: "Real-time", label: "Fraud prevention" },
  { val: "AI / ML",   label: "Powered insights" },
  { val: "Minimal",   label: "System changes needed" },
];

function FlowNode({
  Icon, label, color, large = false,
}: {
  Icon: React.ElementType;
  label: string;
  color: string;
  large?: boolean;
}) {
  const size = large ? "w-[88px] h-[88px]" : "w-[72px] h-[72px]";
  return (
    <div className="ai-node flex flex-col items-center opacity-0">
      <div
        className={`${size} flex items-center justify-center rounded-xl border-2 bg-white shadow-sm transition-transform hover:scale-105`}
        style={{ borderColor: color, backgroundColor: `${color}10` }}
      >
        <Icon className="h-7 w-7" style={{ color }} />
      </div>
      <p
        className="mt-2 text-center text-[10px] font-semibold text-neutral-600 whitespace-pre-line leading-tight"
        style={{ maxWidth: "84px" }}
      >
        {label}
      </p>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center flex-shrink-0 mx-1">
      <div className="w-8 border-t-2 border-dashed border-neutral-300" />
      <ChevronRight className="h-3 w-3 text-neutral-400 -ml-1" />
    </div>
  );
}

export function AIWorkflow() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const nodes = ref.current.querySelectorAll(".ai-node");
    gsap.fromTo(
      nodes,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div ref={ref} className="overflow-x-auto pb-4">
      <div className="min-w-[680px]">

        {/* ── Main flow row ── */}
        <div className="flex items-center">
          {MAIN_FLOW.map((node, i) => (
            <div key={node.id} className="flex items-center">
              <FlowNode {...node} />
              {i < MAIN_FLOW.length - 1 && <Connector />}
            </div>
          ))}

          {/* False positives branch */}
          <div className="flex items-center ml-1">
            <div className="flex-shrink-0 mx-1">
              <div className="w-6 border-t-2 border-dashed border-amber-300" />
            </div>
            <div className="ai-node flex flex-col items-center opacity-0">
              <div className="flex items-center justify-center w-[68px] h-[68px] rounded-xl border-2 border-amber-400 bg-amber-50 shadow-sm transition-transform hover:scale-105">
                <XCircle className="h-7 w-7 text-amber-500" />
              </div>
              <p className="mt-2 text-center text-[10px] font-semibold text-amber-600 leading-tight whitespace-pre-line">
                {"False\nPositives"}
              </p>
            </div>
          </div>

          {/* Happy officer end */}
          <div className="flex items-center ml-2">
            <Connector />
            <div className="ai-node flex flex-col items-center opacity-0">
              <div className="flex items-center justify-center w-[68px] h-[68px] rounded-xl border-2 border-green-400 bg-green-50 shadow-sm transition-transform hover:scale-105">
                <UserCheck2 className="h-7 w-7 text-green-500" />
              </div>
              <p className="mt-2 text-center text-[10px] font-semibold text-green-600 leading-tight">
                Happy<br />Compliance<br />Officer
              </p>
            </div>
          </div>
        </div>

        {/* ── Feedback loop row ── */}
        <div className="flex items-end gap-10 mt-6 ml-16">
          <div className="ai-node flex flex-col items-center opacity-0">
            <div className="flex items-center justify-center w-[64px] h-[64px] rounded-xl border-2 border-neutral-300 bg-neutral-50 shadow-sm">
              <Users className="h-6 w-6 text-neutral-400" />
            </div>
            <p className="mt-2 text-center text-[10px] font-semibold text-neutral-500 leading-tight">
              Investigation<br />Team
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-8 border-l-2 border-dashed border-neutral-300" />
            <div className="w-24 border-t-2 border-dashed border-neutral-300" />
          </div>

          <div className="ai-node flex flex-col items-center opacity-0">
            <div className="flex items-center justify-center w-[64px] h-[64px] rounded-xl border-2 border-neutral-300 bg-neutral-50 shadow-sm">
              <Database className="h-6 w-6 text-neutral-400" />
            </div>
            <p className="mt-2 text-center text-[10px] font-semibold text-neutral-500 leading-tight">
              Historical<br />Data
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-8 border-l-2 border-dashed border-neutral-300" />
            <div className="w-24 border-t-2 border-dashed border-neutral-300" />
          </div>

          <div className="ai-node flex flex-col items-center opacity-0">
            <div className="flex items-center justify-center w-[64px] h-[64px] rounded-xl border-2 border-green-400 bg-green-50 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
            <p className="mt-2 text-center text-[10px] font-semibold text-green-600 leading-tight">
              Case<br />Closed
            </p>
          </div>
        </div>

        {/* ── Metrics ── */}
        <StaggerContainer className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" staggerDelay={0.1}>
          {METRICS.map((m) => (
            <div key={m.label} className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-center">
              <p className="text-lg font-extrabold text-amber-500">{m.val}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{m.label}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
