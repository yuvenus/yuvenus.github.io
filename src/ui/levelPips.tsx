"use client";

import { cn } from "@/ui/shadcn/utils";
import { maxLevel } from "@/utils/level";

export const LevelPips = ({ level }: { level: number }) => {
  return (
    <span className="inline-flex gap-[3px]" aria-hidden>
      {Array.from({ length: maxLevel }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-1 w-3.5 rounded-full",
            i < level ? "bg-primary" : "bg-border",
          )}
        />
      ))}
    </span>
  );
};
