"use client";

import z from "zod";
import { heading1Style } from "@/ui/heading";
import { SkillBar } from "@/ui/skillBar";
import { Category } from "@/utils/category";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";
import {
  accentCardStyle,
  mutedCardStyle,
  primaryCardStyle,
  secondaryCardStyle,
} from "@/ui/cards";
import { Separator } from "@/ui/shadcn/separator";

const SkillSchema = z.object({
  name: z.string(),
  percentage: z.number(), // percentage out of 100%
  icon: z.string().optional(),
});

type Skill = z.infer<typeof SkillSchema>;

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
  [Category.Infrastructure]: [
    {
      name: "AWS",
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
  [Category.Frameworks]: [
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "NextJS",
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
      name: "Angular",
      percentage: 50,
    },
    {
      name: ".NET",
      percentage: 50,
    },
  ],
  [Category.Other]: [
    {
      name: "NoSQL",
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

const SkillStyleSchema = z.object({
  cardStyle: z.string(),
  skillBarBgClass: z.string(),
  skillBarBorderClass: z.string(),
});

type SkillStyle = z.infer<typeof SkillStyleSchema>;

const skillStyles: Partial<Record<string, SkillStyle>> = {
  [Category.Languages]: {
    cardStyle: secondaryCardStyle,
    skillBarBgClass: "bg-muted-foreground",
    skillBarBorderClass: "border-muted-foreground",
  },
  [Category.Infrastructure]: {
    cardStyle: primaryCardStyle,
    skillBarBgClass: "bg-accent",
    skillBarBorderClass: "border-accent",
  },
  [Category.Frameworks]: {
    cardStyle: accentCardStyle,
    skillBarBgClass: "bg-foreground",
    skillBarBorderClass: "border-foreground",
  },
  [Category.Other]: {
    cardStyle: mutedCardStyle,
    skillBarBgClass: "bg-secondary",
    skillBarBorderClass: "border-secondary",
  },
};

export const SkillsView = () => {
  return (
    <div className="flex flex-col gap-6">
      {Object.entries(allSkills).map(([category, skills]) => (
        <Card className={skillStyles[category]?.cardStyle ?? ""}>
          <CardHeader>
            <CardTitle>
              <h1 className={heading1Style}>{category}</h1>
            </CardTitle>
            <Separator
              className={`w-full h-0.25 ${skillStyles[category]?.skillBarBgClass ?? ""}`}
            />
          </CardHeader>
          <CardContent className="@container">
            <div className="grid grid-cols-1 gap-6 @sm:grid-cols-2 @lg:grid-cols-3">
              {skills.map((skill) => (
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 justify-between">
                    <span className="font-semibold">{skill.name}</span>{" "}
                    <span>{skill.percentage}%</span>
                  </div>
                  <SkillBar
                    percentage={skill.percentage}
                    bgClass={skillStyles[category]?.skillBarBgClass}
                    borderClass={skillStyles[category]?.skillBarBorderClass}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
