"use client";

import { StaggerContainer } from "@/components/animations/StaggerContainer";
import {
  BarChart2,
  Shield,
  Settings2,
  Search,
  TrendingUp,
  UserCheck,
  FileText,
  AlertOctagon,
  Activity,
  ScanFace,
  FileLock2,
} from "lucide-react";

const CAPABILITIES = [
  {
    Icon: BarChart2,
    label: "Business",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    accent: "#bae6fd",
    features: ["Digital Lending", "Digital Verification", "TReDs"],
    mockRows: [
      { w: "75%", c: "#0ea5e9" },
      { w: "50%", c: "#bae6fd" },
      { w: "90%", c: "#0ea5e9" },
      { w: "60%", c: "#bae6fd" },
    ],
    FeatureIcons: [TrendingUp, UserCheck, FileText],
  },
  {
    Icon: Shield,
    label: "Risk",
    color: "#f59e0b",
    bg: "#fffbf0",
    accent: "#fde68a",
    features: ["Underwriting", "Monitoring", "Screening"],
    mockBars: [4, 7, 5, 9, 6, 8, 10, 7],
    FeatureIcons: [Activity, AlertOctagon, Search],
  },
  {
    Icon: Settings2,
    label: "Operations",
    color: "#10b981",
    bg: "#f0fdf9",
    accent: "#a7f3d0",
    features: ["Data Analytics", "Customer Onboarding", "KYC Remediation"],
    mockCols: ["ID", "Name", "KYC", "Status"],
    FeatureIcons: [BarChart2, ScanFace, FileLock2],
  },
  {
    Icon: Search,
    label: "Compliance",
    color: "#8b5cf6",
    bg: "#faf5ff",
    accent: "#ddd6fe",
    features: ["Financial Crime", "Demonetization"],
    mockRows: [
      { w: "90%", c: "#8b5cf6" },
      { w: "65%", c: "#ddd6fe" },
      { w: "78%", c: "#8b5cf6" },
      { w: "45%", c: "#ddd6fe" },
      { w: "82%", c: "#8b5cf6" },
    ],
    FeatureIcons: [Shield, AlertOctagon],
  },
];

/** Minimal MacOS-style toolbar */
function MockToolbar() {
  return (
    <div className="flex gap-1 mb-2">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
    </div>
  );
}

export function CapabilityCards() {
  return (
    <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
      {CAPABILITIES.map(
        ({ Icon, label, color, bg, accent, features, mockRows, mockBars, mockCols, FeatureIcons }) => (
          <div
            key={label}
            className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-full"
            style={{ backgroundColor: bg }}
          >
            {/* Header */}
            <div className="px-5 pt-6 pb-4 flex flex-col items-center text-center gap-2">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="h-6 w-6" style={{ color }} />
              </div>
              <h3 className="font-semibold text-sm transition-colors duration-300 group-hover:brightness-75" style={{ color }}>
                {label}
              </h3>
            </div>

            {/* Mock screen */}
            <div className="mx-4 rounded-t-lg border border-neutral-200 bg-white p-3 overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
              <MockToolbar />

              {/* Bar chart variant */}
              {mockBars && (
                <div className="flex items-end gap-0.5 h-14">
                  {mockBars.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-sm transition-all duration-700 group-hover:brightness-110"
                      style={{
                        height: `${h * 5}px`,
                        backgroundColor: idx === 4 ? color : accent,
                      } as any}
                    />
                  ))}
                </div>
              )}

              {/* Row bars variant */}
              {mockRows && (
                <div className="space-y-1.5">
                  {mockRows.map((row, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <div
                        className="h-1.5 rounded-full transition-all duration-700 group-hover:brightness-110"
                        style={{ width: row.w, backgroundColor: row.c }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Table variant */}
              {mockCols && (
                <div className="grid grid-cols-4 gap-1">
                  {mockCols.map((h) => (
                    <div
                      key={h}
                      className="h-4 rounded text-[5px] flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${color}20`, color }}
                    >
                      {h}
                    </div>
                  ))}
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-3 bg-neutral-50 border border-neutral-100 rounded transition-colors duration-300 group-hover:bg-white"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Laptop base */}
            <div className="mx-4 h-2 bg-neutral-200 rounded-b transition-colors duration-300 group-hover:bg-neutral-300" />

            {/* Features */}
            <div className="px-5 py-6 flex flex-col gap-3 mt-auto bg-white/40 backdrop-blur-sm">
              {features.map((f, fi) => {
                const FIcon = FeatureIcons[fi] || FeatureIcons[0];
                return (
                  <div key={f} className="flex items-center gap-3 group/feat transition-transform duration-300 hover:translate-x-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100 transition-all duration-300 group-hover/feat:scale-110">
                      <FIcon className="h-3 w-3" style={{ color }} />
                    </div>
                    <p className="text-xs text-neutral-600 font-medium">{f}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )
      )}
    </StaggerContainer>
  );
}
