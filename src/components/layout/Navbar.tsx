"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/lib/siteData";
import { Container } from "./Container";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <Container>
        <div className="pointer-events-auto flex items-center justify-between rounded-full border border-neutral-200 bg-white/70 px-6 py-3 backdrop-blur-md transition-shadow hover:shadow-lg hover:shadow-black/5">
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter text-neutral-900 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-neutral-50 p-1.5 ring-1 ring-neutral-200 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-sky-500/30">
              <img 
                src="/logo.svg" 
                alt="Jocata Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600">
              {siteData.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteData.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-neutral-900",
                    isActive ? "text-neutral-900" : "text-neutral-500"
                  )}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-neutral-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="text-neutral-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto absolute left-4 right-4 top-20 mt-2 rounded-2xl border border-neutral-200 bg-white/95 p-6 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-4">
              {siteData.navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-lg font-medium text-neutral-600 hover:text-neutral-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex flex-col gap-4 border-t border-neutral-100 pt-4">
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
