"use client";

import { Job } from "@/types/site";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden rounded-2xl border border-foreground/10 bg-secondary/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-secondary/20">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {job.title}
        </h3>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" />
            {job.department}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {job.location}
          </span>
          <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground">
            {job.type}
          </span>
        </div>
      </div>
      
      <div className="shrink-0">
        <Link
          href={`/careers/${job.id}`}
          className="flex h-12 w-full sm:w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-110"
          aria-label={`Apply for ${job.title}`}
        >
          <span className="sm:hidden font-medium mr-2">Apply Now</span>
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
      
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
