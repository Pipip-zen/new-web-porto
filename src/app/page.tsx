import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { HeroSection } from "@/components/sections/HeroSection";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <PageShell index="01" label="Index">
      <div className="space-y-20 lg:space-y-28">
        <HeroSection />
        <FeaturedProject project={featuredProjects[0]} />
      </div>
    </PageShell>
  );
}
