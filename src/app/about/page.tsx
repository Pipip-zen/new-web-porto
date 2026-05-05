import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { SkillTags } from "@/components/sections/SkillTags";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Background, approach, and capabilities of Mika Vale."
};

export default function AboutPage() {
  return (
    <PageShell index="03" label="About">
      <div className="space-y-20 lg:space-y-28">
        <AboutIntro />
        <ExperienceList items={experience} />
        <SkillTags groups={skills} />
      </div>
    </PageShell>
  );
}
