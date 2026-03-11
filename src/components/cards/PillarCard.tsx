import { Pillar } from "@/types/site";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface PillarCardProps {
  pillar: Pillar;
  className?: string;
}

export function PillarCard({ pillar, className }: PillarCardProps) {
  // Dynamically resolve icon from Lucide, defaulting to Zap if not found
  const IconComponent = (Icons as any)[pillar.icon] || Icons.Zap;

  return (
    <div
      className={cn(
        "group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-foreground/10 bg-secondary/20 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-foreground/20 hover:bg-secondary/40 hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border border-foreground/5 transition-transform duration-500 group-hover:scale-110">
        <IconComponent className="h-6 w-6 text-foreground transition-colors duration-500 group-hover:text-primary" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground tracking-tight">
          {pillar.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {pillar.description}
        </p>
      </div>
      {/* Decorative hover gradient */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-foreground opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-5" />
    </div>
  );
}
