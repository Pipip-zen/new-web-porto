import Image from "next/image";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section className="border border-outline-variant">
      <div className="flex items-center justify-between border-b border-outline-variant px-4 py-3 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant sm:px-6">
        <span>Featured Project</span>
        <span>{project.displayIndex}</span>
      </div>
      <div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:p-10">
          <div className="space-y-5">
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">
              <span>
                {project.displayIndex} {" / "} {project.slug.replaceAll("-", " ")}
              </span>
            </div>
          <h2 className="max-w-[8ch] font-sans text-[2.2rem] font-semibold uppercase leading-[1.02] text-on-surface sm:text-[2.8rem] lg:text-[3rem]">
            {project.title}
          </h2>
          <div className="overflow-hidden border border-outline-variant bg-surface-container-lowest">
            <Image src={project.image} alt={project.title} width={1400} height={980} className="h-auto w-full" priority />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 lg:pl-8">
          <div className="space-y-6">
            <p className="max-w-md text-sm leading-7 text-on-surface-variant">{project.summary}</p>
            <Divider />
            <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">
              <div>
                <p>Client</p>
                <p className="mt-3 text-sm normal-case tracking-normal text-on-surface">{project.client}</p>
              </div>
              <div>
                <p>Role</p>
                <p className="mt-3 text-sm normal-case tracking-normal text-on-surface">Lead Design / Eng</p>
              </div>
              <div>
                <p>Year</p>
                <p className="mt-3 text-sm normal-case tracking-normal text-on-surface">{project.year}</p>
              </div>
              <div>
                <p>Type</p>
                <p className="mt-3 text-sm normal-case tracking-normal text-on-surface">{project.category}</p>
              </div>
            </div>
          </div>
          <Button href={`/works/${project.slug}`} className="w-fit">
            Examine case study
          </Button>
        </div>
      </div>
    </section>
  );
}
