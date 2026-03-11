"use client";

import { useState, useRef } from "react";
import {
  UserCheck,
  BarChart2,
  Flame,
  Database,
  AlertTriangle,
  List,
  Grid2x2,
  Maximize2,
  ArrowLeftRight,
  Lock,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GRID_APPS = [
  {
    id: "CLEAR",
    label: "On-Boarding,\nDigital Lending,\nand KYC",
    angle: 60,
    color: "#0ea5e9",
    Icon: UserCheck,
  },
  {
    id: "STAR",
    label: "Transaction\nMonitoring\nand Analytics",
    angle: 0,
    color: "#8b5cf6",
    Icon: BarChart2,
  },
  {
    id: "FIRE",
    label: "Fraud Incident\nand Real-Time\nManagement",
    angle: 300,
    color: "#f97316",
    Icon: Flame,
  },
  {
    id: "EVOKE",
    label: "Digital Data\nSourcing and\nAPI Management",
    angle: 240,
    color: "#10b981",
    Icon: Database,
  },
  {
    id: "CORE",
    label: "Risk Trigger\nfor Early\nWarning",
    angle: 180,
    color: "#ef4444",
    Icon: AlertTriangle,
  },
  {
    id: "RAMP",
    label: "List and Adverse\nMedia Screening",
    angle: 120,
    color: "#f59e0b",
    Icon: List,
  },
];

export const FEATURES = [
  { icon: Grid2x2, label: "Modular" },
  { icon: Maximize2, label: "Scalable" },
  { icon: ArrowLeftRight, label: "Flexible" },
  { icon: Lock, label: "Secure" },
];

const R = 140;

export function OrbitalDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate the center hub first
      tl.fromTo(
        ".grid-hub",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // Animate the app nodes with a stagger
      tl.fromTo(
        ".app-node",
        { scale: 0, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
      
      // Animate the orbit ring
      tl.fromTo(
        ".orbit-ring",
        { strokeDashoffset: 1000, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1, duration: 2, ease: "power2.inOut" },
        "0.2"
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative flex items-center justify-center w-full h-[380px]">
      <svg
        viewBox="-220 -190 440 380"
        className="w-full max-w-sm"
        style={{ overflow: "visible" }}
      >
        {/* Orbit ring */}
        <circle
          cx="0" cy="0" r={R}
          className="orbit-ring"
          fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4"
        />

        {/* App nodes */}
        {GRID_APPS.map((app) => {
          const rad = (app.angle * Math.PI) / 180;
          const x = Math.round(Math.cos(rad) * R * 10000) / 10000;
          const y = Math.round(-Math.sin(rad) * R * 10000) / 10000;
          const isHov = hovered === app.id;

          return (
            <g
              key={app.id}
              className="app-node origin-center"
              onMouseEnter={() => setHovered(app.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer", transformOrigin: `${x}px ${y}px` }}
            >
              {/* Connecting line */}
              <line
                x1={Math.round(x * 0.35 * 10000) / 10000}
                y1={Math.round(y * 0.35 * 10000) / 10000}
                x2={Math.round(x * 0.78 * 10000) / 10000}
                y2={Math.round(y * 0.78 * 10000) / 10000}
                stroke={isHov ? app.color : "#d1d5db"}
                strokeWidth={isHov ? 2 : 1}
                strokeDasharray="4 3"
                style={{ transition: "stroke 0.2s" }}
              />

              {/* Card background */}
              <rect
                x={x - 40} y={y - 30}
                width="80" height="60"
                rx="8"
                fill={isHov ? app.color : "white"}
                stroke={app.color}
                strokeWidth="1.5"
                style={{ transition: "fill 0.2s" }}
                filter="url(#card-shadow)"
              />

              {/* App ID */}
              <text
                x={x} y={y - 14}
                textAnchor="middle"
                fontSize="8"
                fontWeight="800"
                letterSpacing="1"
                fill={isHov ? "white" : app.color}
                style={{ transition: "fill 0.2s" }}
              >
                {app.id}
              </text>

              {/* Label lines */}
              {app.label.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={x}
                  y={y - 2 + li * 10}
                  textAnchor="middle"
                  fontSize="6.5"
                  fill={isHov ? "rgba(255,255,255,0.9)" : "#6b7280"}
                  style={{ transition: "fill 0.2s" }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Center GRID hub */}
        <g className="grid-hub origin-center">
          <circle
            cx="0" cy="0" r="50"
            fill="white" stroke="#e5e7eb" strokeWidth="1.5"
            filter="url(#card-shadow)"
          />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#f3f4f6" strokeWidth="1" />

          {/* Colorful dots */}
          {[
            { cx: -12, cy: -8, r: 7, fill: "#0ea5e9" },
            { cx: 2, cy: -13, r: 5, fill: "#f59e0b" },
            { cx: 13, cy: -6, r: 8, fill: "#10b981" },
            { cx: -8, cy: 6, r: 5, fill: "#8b5cf6" },
            { cx: 5, cy: 9, r: 7, fill: "#ef4444" },
            { cx: 14, cy: 7, r: 4, fill: "#f97316" },
          ].map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} opacity="0.85" />
          ))}

          <text x="0" y="28" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#9ca3af" letterSpacing="1">
            JOCATA GRID™
          </text>
        </g>

        <defs>
          <filter id="card-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0001" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
