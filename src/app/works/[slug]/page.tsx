import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5.99.11-.78.42-1.3.77-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.38.82 1.11.82 2.25v3.34c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project"
    };
  }

  return {
    title: `${project.title} — Rafif Nuha`,
    description: project.summary,
    alternates: {
      canonical: `/works/${project.slug}`
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-10 space-y-10 lg:space-y-12">
      {/* Back Button */}
      <div>
        <Link
          href="/works"
          className="inline-flex items-center gap-2 font-mono text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>Back</span>
        </Link>
      </div>

      {/* Header Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-tight text-white border-b-2 border-white/80 pb-1 inline-block">
            {project.title}
          </h1>
        </div>
        <div className="font-mono text-sm text-neutral-400">
          <span>{project.location}, March {project.year}</span>
        </div>
      </div>

      {/* Hero Banner Image */}
      <div className="border border-neutral-800 bg-[#0d0d0d] p-4 sm:p-6 lg:p-8">
        <div className="overflow-hidden border border-neutral-800 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            sizes="100vw"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* 2-Column Details Layout */}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 pt-6">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-8">
          {/* Role */}
          <div>
            <p className="font-mono text-xs uppercase text-neutral-500 mb-1">My Role</p>
            <p className="font-mono text-sm font-semibold text-white">{project.role}</p>
          </div>

          {/* Large Highlight Description */}
          <h2 className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
            {project.description}
          </h2>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-neutral-700 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white bg-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 space-y-8">
          {/* Context */}
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">Context</p>
            <p className="font-mono text-sm leading-relaxed text-neutral-300">
              {project.client}
            </p>
          </div>

          <div className="border-t border-neutral-800" />

          {/* Challenge */}
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">CHALLENGE</p>
            <p className="font-mono text-sm leading-relaxed text-neutral-300">
              {project.challenge}
            </p>
          </div>

          <div className="border-t border-neutral-800" />

          {/* Approach / Solution */}
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">APPROACH</p>
            <p className="font-mono text-sm leading-relaxed text-neutral-300">
              {project.solution}
            </p>
          </div>

          <div className="border-t border-neutral-800" />

          {/* Outcome */}
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">OUTCOME</p>
            <p className="font-mono text-sm leading-relaxed text-neutral-300">
              {project.outcome}
            </p>
          </div>

          <div className="border-t border-neutral-800" />

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end gap-3 pt-4 font-mono text-sm">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/80 px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
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
                className="inline-flex items-center gap-2 border border-white/80 px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              >
                <GithubIcon />
                <span>View Github</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
