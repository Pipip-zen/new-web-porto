import type { Metadata } from "next";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { HeroSection } from "@/components/sections/HeroSection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Index — Rafif Nuha",
  description: "I craft digital products and interfaces that feel intuitive, perform seamlessly, and leave a lasting impression.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured) || projects[0];

  return (
    <div className="space-y-12 lg:space-y-16">
      <HeroSection />
      <FeaturedProject project={featuredProject} />
    </div>
  );
}
