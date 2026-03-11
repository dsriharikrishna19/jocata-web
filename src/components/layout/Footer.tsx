import { siteData } from "@/lib/siteData";
import { Container } from "./Container";
import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-100 bg-neutral-50 pt-16 pb-8 text-neutral-600">
      <Container>
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-neutral-900 group">
              <div className="relative h-7 w-7 overflow-hidden rounded-lg bg-white p-1 ring-1 ring-neutral-200 transition-all duration-500 group-hover:scale-110 group-hover:ring-sky-500/30">
                <img 
                  src="/logo.svg" 
                  alt="Jocata Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              {siteData.name}
            </Link>
            <p className="max-w-xs text-sm text-neutral-500 leading-relaxed">
              {siteData.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-neutral-900">Platform</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/platform" className="hover:text-neutral-900 transition-colors">Overview</Link></li>
              <li><Link href="/ai-scoring" className="hover:text-neutral-900 transition-colors">AI Scoring</Link></li>
              <li><Link href="/success-stories" className="hover:text-neutral-900 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-neutral-900">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/about" className="hover:text-neutral-900 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-neutral-900 transition-colors flex items-center justify-between">Careers <span className="rounded-full bg-neutral-900/5 px-2 py-0.5 text-xs text-neutral-600">Hiring</span></Link></li>
              <li><Link href="/contact" className="hover:text-neutral-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-neutral-900">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/privacy_statement" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/security-policy" className="hover:text-neutral-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-100 pt-12 text-sm text-neutral-400 md:flex-row">
          <p>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy_statement" className="hover:text-neutral-900 transition-colors">Privacy</Link>
            <Link href="/security-policy" className="hover:text-neutral-900 transition-colors">Security</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
