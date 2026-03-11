"use client";

import { Story } from "@/types/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function StoryCard({ story }: { story: Story }) {
  return (
    <div className="group relative flex flex-col gap-6 justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-secondary/50 to-background p-8 transition-all hover:-translate-y-2 hover:border-foreground/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
            {story.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {story.title}
        </h3>
        <p className="text-muted-foreground max-w-sm">
          {story.description}
        </p>
      </div>

      <div className=" flex items-center justify-between border-t border-foreground/10 pt-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Key Result</p>
          <p className="text-3xl font-extrabold text-foreground mt-1">{story.stat}</p>
        </div>
        <Link
          href={`/success-stories/${story.id}`}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-foreground transition-all group-hover:bg-foreground group-hover:text-background"
        >
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
      
      {/* Background glow on hover */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-black opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.03]" />
    </div>
  );
}
