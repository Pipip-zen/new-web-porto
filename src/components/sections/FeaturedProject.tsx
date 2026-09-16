import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type FeaturedProjectProps = {
  project: Project;
};

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5.99.11-.78.42-1.3.77-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.38.82 1.11.82 2.25v3.34c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section className="py-12">
      {/* Section Label */}
      <h2 className="font-mono text-base font-normal tracking-wide text-white mb-6">
        Featured Project
      </h2>

      {/* Main Outer Box Frame */}
      <div className="border border-neutral-800 bg-black p-6 sm:p-8 lg:p-10">
        {/* Title */}
        <h3 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-8">
          {project.title}
        </h3>

        {/* 2-Column Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Left Column: Image Preview Container */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-800 bg-neutral-900/60 p-4 sm:p-6 rounded-none">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="w-full h-auto object-cover border border-neutral-800/80 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Column: Metadata & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Description */}
            <p className="font-mono text-sm leading-relaxed text-neutral-300 sm:text-base">
              {project.summary}
            </p>

            {/* Separator */}
            <div className="border-t border-neutral-800" />

            {/* Metadata 2x2 Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-sm">
              <div>
                <p className="text-neutral-500 mb-1">{project.clientLabel ?? "Context"}</p>
                <p className="text-white font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-neutral-500 mb-1">Role</p>
                <p className="text-white font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-neutral-500 mb-1">Year</p>
                <p className="text-white font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-neutral-500 mb-1">Type</p>
                <p className="text-white font-medium">{project.category}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs sm:text-sm">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/80 px-4 py-2.5 text-white hover:bg-white hover:text-black transition-colors"
                >
                  <span>View Live Demo</span>
                  <span>↗</span>
                </a>
              ) : null}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/80 px-4 py-2.5 text-white hover:bg-white hover:text-black transition-colors"
                >
                  <GithubIcon />
                  <span>View Github</span>
                </a>
              ) : null}

              <Link
                href={`/works/${project.slug}`}
                className="inline-flex items-center gap-2 border border-white/80 px-4 py-2.5 text-white hover:bg-white hover:text-black transition-colors"
              >
                <span>Examine Case Study</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
