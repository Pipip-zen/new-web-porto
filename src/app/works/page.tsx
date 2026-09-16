import type { Metadata } from "next";
import { WorksGrid } from "@/components/sections/WorksGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Archive — Rafif Nuha",
  description: "Selected frontend, web app, and spatial web projects by Rafif Nuha.",
  alternates: {
    canonical: "/works"
  }
};

export default function WorksPage() {
  return (
    <div className="py-12 space-y-6">
      <div className="pb-6">
        <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Selected Works & Case Studies
        </h1>
      </div>

      <WorksGrid projects={projects} />
    </div>
  );
}
