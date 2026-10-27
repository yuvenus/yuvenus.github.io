"use client";

import { SkillsView } from "@/components/skillsView";
import { ThemeToggle } from "@/components/themeToggle";
import { sectionHeadingStyle } from "@/ui/heading";

export const About = () => {
  return (
    <main className="mx-auto w-full max-w-220 px-6 pt-18 pb-24">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-[34px] leading-none font-bold tracking-tight text-ink sm:text-[44px]">
            Venus Yu
          </h1>
          <p className="mt-3 font-mono text-sm text-primary before:text-muted-foreground before:content-['>_']">
            full-stack software engineer
          </p>
          <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed [&_b]:font-semibold [&_b]:text-ink">
            <b>9+ years</b> building software end to end:{" "}
            <b>React and Next.js</b> front ends, <b>Java, Node.js, and C#</b>{" "}
            back ends, and <b>AWS</b> cloud deployments. A problem-solver, avid
            learner, and strong communicator. Most recently at <b>S44 Energy</b>
            .
          </p>
        </div>
        <ThemeToggle />
      </header>

      <section className="mt-14">
        <h2 className={sectionHeadingStyle}>skills</h2>
        <SkillsView />
      </section>
    </main>
  );
};
