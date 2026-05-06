import Image from "next/image";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

type FeaturedProjectProps = {
  project: Project;
};

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5.99.11-.78.42-1.3.77-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.38.82 1.11.82 2.25v3.34c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.8]">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

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
          <div className="overflow-hidden border border-outline-variant bg-[#161616] p-3 sm:p-4">
            <div className="overflow-hidden border border-white/6 bg-[#111111]">
              <Image
                src={project.image}
                alt={project.title}
                width={1400}
                height={980}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full brightness-[0.94] contrast-[0.98] saturate-[0.92]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 lg:pl-8">
          <div className="space-y-6">
            <p className="max-w-md text-sm leading-7 text-on-surface-variant">{project.summary}</p>
            <Divider />
            <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">
              <div>
                <p>{project.clientLabel ?? "Client"}</p>
                <p className="mt-3 text-sm normal-case tracking-normal text-on-surface">{project.client}</p>
              </div>
              <div>
                <p>Role</p>
                <p className="mt-3 text-sm normal-case tracking-normal text-on-surface">{project.role}</p>
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
          <div className="flex flex-wrap gap-3">
            {project.demoUrl ? (
              <Button href={project.demoUrl} className="w-fit">
                <>
                  View live demo
                  <ArrowUpRightIcon />
                </>
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button href={project.githubUrl} className="w-fit">
                <>
                  <GithubIcon />
                  View GitHub
                </>
              </Button>
            ) : null}
            <Button href={`/works/${project.slug}`} className="w-fit">
              Examine case study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
