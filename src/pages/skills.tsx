"use client";

import z from "zod";
import { SkillBar } from "../ui/skillBar";

enum Category {
  Frameworks = 'Frameworks',
  Infrastructure = 'Infrastructure',
  Languages = 'Languages',
  Other = 'Other',
};

const SkillSchema = z.object({
  name: z.string(),
  percentage: z.number(), // percentage out of 100%
  icon: z.string().optional(),
});

type Skill = z.infer<typeof SkillSchema>;

const allSkills: Record<Category, Skill[]> = {
  [Category.Languages]: [
    {
      name: 'JavaScript',
      percentage: 90,
    },
    {
      name: 'TypeScript',
      percentage: 90,
    },
    {
      name: 'HTML',
      percentage: 90,
    },
    {
      name: 'CSS',
      percentage: 90,
    },
    {
      name: 'Java',
      percentage: 80,
    },
    {
      name: 'Python',
      percentage: 75,
    },
    {
      name: 'SQL',
      percentage: 75
    },
    {
      name: 'C#',
      percentage: 50,
    }
  ],
  [Category.Infrastructure]: [
    {
      name: 'AWS',
      percentage: 75,
    },
    {
      name: 'Terraform',
      percentage: 60,
    },
    {
      name: 'Google Cloud Platform',
      percentage: 30,
    }
  ],
  [Category.Frameworks]: [
    {
      name: 'React',
      percentage: 90,
    },
    {
      name: 'NextJS',
      percentage: 80,
    },
    {
      name: 'Tailwind CSS',
      percentage: 80,
    }
  ]
}
export const Skills = () => {
  return <div className="flex flex-col gap-2 text-start">
    {Object.entries(allSkills).map(([category, skills]) => (
      <div className="flex flex-col gap-1">
        <span>{category}</span>
        {skills.map(skill =>
          <div>
            {skill.name} <SkillBar percentage={skill.percentage} />
          </div>
        )}
      </div>
    ))}
  </div>;
};
