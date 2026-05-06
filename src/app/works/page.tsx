import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WorksGrid } from "@/components/sections/WorksGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Works",
  description: "Selected frontend, web app, and spatial web projects by Muhammad Rafif Nuha Daniswara.",
  alternates: {
    canonical: "/works"
  }
};

export default function WorksPage() {
  return (
    <PageShell index="02" label="Works">
      <section className="space-y-6 border-b border-outline-variant pb-5 lg:pb-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:items-start">
          <div>
            <h1 className="font-serif text-[3.6rem] font-normal leading-[0.94] tracking-editorial text-on-surface sm:text-[5rem] lg:text-[6rem]">
              Selected Works
            </h1>
            <p className="font-serif text-[3.2rem] italic leading-none text-white/18 sm:text-[4.5rem] lg:text-[5.4rem]">2025-2026</p>
          </div>
          <p className="hidden self-center justify-self-end font-mono text-[10px] uppercase tracking-[0.35em] text-on-surface-variant lg:block [writing-mode:vertical-rl]">
            Architecture of Information
          </p>
        </div>
      </section>
      <WorksGrid projects={projects} />
    </PageShell>
  );
}
