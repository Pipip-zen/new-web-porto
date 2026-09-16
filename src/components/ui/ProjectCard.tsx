import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className={cn(
        "group block border border-neutral-800 bg-black transition-colors duration-200 hover:border-neutral-600 mb-8 sm:mb-12",
        className
      )}
    >
      <div className="grid lg:grid-cols-12 min-h-[22rem] lg:min-h-[26rem]">
        {/* Left Column: Image Container */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-neutral-800 bg-[#0d0d0d] p-6 sm:p-8 flex items-center justify-center">
          <div className="w-full overflow-hidden border border-neutral-800 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={650}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Column: Title, Description, Category Tag, Case Study Link */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Title */}
            <h3 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-mono text-sm leading-relaxed text-neutral-300 sm:text-base">
              {project.summary}
            </p>

            {/* Category Tag Box */}
            <div>
              <span className="inline-block border border-neutral-400 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white">
                {project.category}
              </span>
            </div>
          </div>

          {/* Case Study Link */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 border-b border-neutral-400 pb-1 font-mono text-sm tracking-wider text-white transition-opacity group-hover:opacity-80">
              <span>Case Study</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
