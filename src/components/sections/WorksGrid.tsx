import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

type WorksGridProps = {
  projects: Project[];
};

export function WorksGrid({ projects }: WorksGridProps) {
  return (
    <section className="pt-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </section>
  );
}
