"use client";

import { SkillsView } from "@/components/skillsView";
import { primaryCardStyle } from "@/ui/cards";
import { heading1Style, heading2Style } from "@/ui/heading";
import { Card, CardContent } from "@/ui/shadcn/card";

export const About = () => {
  const aboutBlurb = (
    <div className="text-center">
      <h1 className={heading1Style}>Hello! I'm Venus.</h1>
      <span className="text-xl">
        Fullstack Software Engineer. 9+ years of experience. Web & backend
        applications.
      </span>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 text-start">
      <Card className={primaryCardStyle}>
        <CardContent className="text-foreground">{aboutBlurb}</CardContent>
      </Card>
      <SkillsView />
    </div>
  );
};
