"use client";

import { useState } from "react";
import { LevelPips } from "@/ui/levelPips";
import { cn } from "@/ui/shadcn/utils";
import { Category } from "@/utils/category";
import { getLevel, Level } from "@/utils/level";

type Skill = {
  name: string;
  percentage: number; // percentage out of 100%
  icon?: string;
};

const allSkills: Record<string, Skill[]> = {
  [Category.Languages]: [
    {
      name: "JavaScript",
      percentage: 90,
    },
    {
      name: "TypeScript",
      percentage: 90,
    },
    {
      name: "HTML",
      percentage: 90,
    },
    {
      name: "CSS",
      percentage: 90,
    },
    {
      name: "Java",
      percentage: 80,
    },
    {
      name: "Python",
      percentage: 75,
    },
    {
      name: "SQL",
      percentage: 75,
    },
    {
      name: "C#",
      percentage: 50,
    },
  ],
  [Category.Frameworks]: [
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "Next.js",
      percentage: 80,
    },
    {
      name: "Tailwind CSS",
      percentage: 80,
    },
    {
      name: "Spring Boot",
      percentage: 80,
    },
    {
      name: "Node.js",
      percentage: 75,
    },
    {
      name: "Angular",
      percentage: 50,
    },
    {
      name: "Vue",
      percentage: 50,
    },
    {
      name: ".NET",
      percentage: 50,
    },
  ],
  [Category.Infrastructure]: [
    {
      name: "Amazon Web Services",
      percentage: 75,
    },
    {
      name: "Terraform",
      percentage: 60,
    },
    {
      name: "Google Cloud Platform",
      percentage: 30,
    },
  ],
  [Category.Databases]: [
    {
      name: "PostgreSQL",
      percentage: 90,
    },
    {
      name: "MongoDB",
      percentage: 75,
    },
    {
      name: "MariaDB",
      percentage: 75,
    },
  ],
  [Category.Other]: [
    {
      name: "OCPP",
      percentage: 90,
    },
    {
      name: "OCPI",
      percentage: 90,
    },
    {
      name: "Hasura",
      percentage: 75,
    },
    {
      name: "GraphQL",
      percentage: 75,
    },
    {
      name: "Redis",
      percentage: 75,
    },
    {
      name: "Jenkins",
      percentage: 75,
    },
  ],
};

type SkillStyle = {
  chipClass: string;
  swatchClass: string;
  buttonClass: string;
  activeButtonClass: string;
};

// one color per category; 100-level tints with 700-level text, as on the resume,
// and translucent 400-level tints with 300-level text in dark mode
const skillStyles: Partial<Record<string, SkillStyle>> = {
  [Category.Languages]: {
    chipClass:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300",
    swatchClass: "bg-indigo-700 dark:bg-indigo-400",
    buttonClass:
      "hover:border-indigo-700 hover:text-indigo-700 dark:hover:border-indigo-400 dark:hover:text-indigo-300",
    activeButtonClass:
      "border-indigo-700 text-indigo-700 dark:border-indigo-400 dark:text-indigo-300",
  },
  [Category.Frameworks]: {
    chipClass:
      "bg-teal-100 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300",
    swatchClass: "bg-teal-700 dark:bg-teal-400",
    buttonClass:
      "hover:border-teal-700 hover:text-teal-700 dark:hover:border-teal-400 dark:hover:text-teal-300",
    activeButtonClass:
      "border-teal-700 text-teal-700 dark:border-teal-400 dark:text-teal-300",
  },
  [Category.Infrastructure]: {
    chipClass:
      "bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300",
    swatchClass: "bg-rose-700 dark:bg-rose-400",
    buttonClass:
      "hover:border-rose-700 hover:text-rose-700 dark:hover:border-rose-400 dark:hover:text-rose-300",
    activeButtonClass:
      "border-rose-700 text-rose-700 dark:border-rose-400 dark:text-rose-300",
  },
  [Category.Databases]: {
    chipClass:
      "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-400/15 dark:text-fuchsia-300",
    swatchClass: "bg-fuchsia-700 dark:bg-fuchsia-400",
    buttonClass:
      "hover:border-fuchsia-700 hover:text-fuchsia-700 dark:hover:border-fuchsia-400 dark:hover:text-fuchsia-300",
    activeButtonClass:
      "border-fuchsia-700 text-fuchsia-700 dark:border-fuchsia-400 dark:text-fuchsia-300",
  },
  [Category.Other]: {
    chipClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300",
    swatchClass: "bg-amber-700 dark:bg-amber-400",
    buttonClass:
      "hover:border-amber-700 hover:text-amber-700 dark:hover:border-amber-400 dark:hover:text-amber-300",
    activeButtonClass:
      "border-amber-700 text-amber-700 dark:border-amber-400 dark:text-amber-300",
  },
};

// regroup by level, highest first, keeping category order inside each level
const skillsByLevel = new Map<number, (Skill & { category: string })[]>();
for (const [category, skills] of Object.entries(allSkills)) {
  for (const skill of skills) {
    const level = getLevel(skill.percentage);
    skillsByLevel.set(level, [
      ...(skillsByLevel.get(level) ?? []),
      { ...skill, category },
    ]);
  }
}
const levels = [...skillsByLevel.keys()].sort((a, b) => b - a);

export const SkillsView = () => {
  // highlighting is opt-in: clicking a category toggles it
  const [highlighted, setHighlighted] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-1.5 font-mono text-xs">
        <span className="mr-1 text-muted-foreground">highlight:</span>
        {Object.keys(allSkills).map((category) => {
          const isActive = highlighted === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setHighlighted(isActive ? null : category)}
              className={cn(
                "inline-flex cursor-pointer items-center gap-2 rounded-full border py-0.5 pr-3 pl-2.5 text-muted-foreground lowercase transition-colors",
                skillStyles[category]?.buttonClass,
                isActive && skillStyles[category]?.activeButtonClass,
              )}
            >
              <span
                className={cn(
                  "size-2 rounded-xs",
                  skillStyles[category]?.swatchClass,
                )}
              />
              {category}
            </button>
          );
        })}
      </div>

      {levels.map((level) => (
        <div
          key={level}
          className="grid grid-cols-1 items-start gap-x-6 gap-y-2 border-b py-4.5 last:border-b-0 sm:grid-cols-[150px_1fr]"
        >
          <div className="flex items-center gap-3 font-mono text-[13px] font-medium text-ink sm:flex-col sm:items-start sm:gap-1.5 sm:pt-1">
            {Level[level]}
            <LevelPips level={level} />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skillsByLevel.get(level)?.map((skill) => (
              <span
                key={skill.name}
                className={cn(
                  "inline-flex h-7.5 items-center rounded-[5px] px-2.75 font-mono text-[13px] whitespace-nowrap transition-colors",
                  // other categories go neutral rather than faded, so they stay readable
                  highlighted && highlighted !== skill.category
                    ? "bg-muted text-muted-foreground"
                    : skillStyles[skill.category]?.chipClass,
                )}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
