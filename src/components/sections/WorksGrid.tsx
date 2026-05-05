import type { Project } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

type WorksGridProps = {
  projects: Project[];
};

export function WorksGrid({ projects }: WorksGridProps) {
  return (
    <section className="space-y-8">
      <SectionLabel index="02" label="Selected works" />
      <div className="border-b border-outline-variant">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
