"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteData } from "@/lib/siteData";
import { MapPin, Briefcase, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";

export default function JobDetailsPage() {
  const params = useParams();
  const job = siteData.jobs.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="pb-16 min-h-screen bg-neutral-50/50">
      <Container className="pt-8 flex flex-col gap-4">
        <FadeIn>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>
        </FadeIn>
      </Container>
      
      <PageHero 
        title={job.title}
        accent={`(${job.department})`}
        subtitle={`${job.location} • ${job.type}`}
      />

      <Container className="mt-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <FadeIn delay={0.2} className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-neutral-900">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex gap-4 text-neutral-600">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-neutral-900">About Working at Jocata</h2>
              <div className="flex flex-col gap-6">
                <p className="text-neutral-600 leading-relaxed">
                  Join a team of smart, talented and hardworking people who focus on the singular aim of making our clients happy. While having a bit of fun, of course!
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {siteData.perks.slice(0, 4).map((perk) => (
                    <div key={perk.title} className="rounded-xl bg-neutral-50 p-4 border border-neutral-100 flex flex-col gap-1">
                      <h3 className="text-sm font-bold text-neutral-900">{perk.title}</h3>
                      <p className="text-xs text-neutral-500">{perk.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar / Apply */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.4} className="sticky top-32 rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Experience Level</span>
                <p className="text-2xl font-bold text-neutral-900">{job.experience}</p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="w-full rounded-full bg-neutral-900 px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-95">
                  Apply Now
                </button>
                <p className="text-center text-xs text-neutral-400">
                  Send your resume to {siteData.contact.email}
                </p>
              </div>
              
              <div className="flex flex-col gap-4 border-t border-neutral-100 pt-8">
                <h3 className="font-bold text-neutral-900">Share this role</h3>
                <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer" />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
