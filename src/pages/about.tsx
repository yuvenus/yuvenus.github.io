"use client";

import z from "zod";
import { heading2Style } from "../ui/heading";
import { SkillBar } from "../ui/skillBar";
import { Category } from "../utils/category";

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
      percentage: 40,
    },
    {
      name: ".NET",
      percentage: 40,
    },
  ],
  [Category.Other]: [
    {
      name: "NoSQL",
      percentage: 75,
    },
  ],
};

export const About = () => {
  const aboutBlurb = (
    <div className="text-center">
      I am a{" "}
      <span className="font-semibold">
        fullstack software engineer with almost 10 years of experience
      </span>{" "}
      building web and backend applications.
    </div>
  );

  return (
    <div className="flex flex-col gap-2 text-start">
      {aboutBlurb}
      {Object.entries(allSkills).map(([category, skills]) => (
        <div className="flex flex-col gap-1">
          <h2 className={heading2Style}>{category}</h2>
          {skills.map((skill) => (
            <div>
              {skill.name} <SkillBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
