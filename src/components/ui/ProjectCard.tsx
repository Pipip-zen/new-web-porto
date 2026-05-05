import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Divider } from "./Divider";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  const reverse = index % 2 === 1;

  return (
    <Link
      href={`/works/${project.slug}`}
      className={cn(
        "group block border-t border-outline-variant py-6 transition-colors duration-200 hover:border-on-surface sm:py-8",
        className
      )}
    >
      <div className={cn("grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10", reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1")}>
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <Tag className="border-outline-variant px-3 py-1.5 text-[10px]">{project.category}</Tag>
              <h3 className="font-serif text-[2.5rem] font-normal leading-[1] text-on-surface transition-colors duration-200 group-hover:text-on-surface-variant sm:text-[3.6rem]">
                {project.title}
              </h3>
            </div>
            <span className="font-serif text-[3.6rem] leading-none text-white/14 sm:text-[5.8rem]">{project.displayIndex}</span>
          </div>
          <div className="overflow-hidden border border-outline-variant bg-[#161616] p-2.5">
            <div className="overflow-hidden border border-white/6 bg-[#111111]">
              <Image
                src={project.image}
                alt={project.title}
                width={1400}
                height={980}
                className="h-auto w-full brightness-[0.95] contrast-[0.98] saturate-[0.94] transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>
          <div className="space-y-3">
            <Divider />
            <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">{project.category}</p>
            <p className="max-w-xl text-xs leading-6 text-on-surface-variant sm:text-sm sm:leading-7">{project.summary}</p>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-between lg:border-l lg:border-outline-variant lg:pl-10">
          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">{project.year} / {project.clientLabel ?? "Client"}: {project.client}</p>
            <p className="max-w-sm text-sm leading-7 text-on-surface-variant">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.services.slice(0, 2).map((service) => (
              <Tag key={service}>{service}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
