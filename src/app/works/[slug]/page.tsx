import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
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
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/works/${project.slug}`
    },
    openGraph: {
      title: `${project.title} - Rafif Nuha Portfolio`,
      description: project.summary,
      url: `/works/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Rafif Nuha Portfolio`,
      description: project.summary,
      images: [project.image]
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
    <PageShell index="02" label="Work / Detail">
      <div className="space-y-20 lg:space-y-28">
        <section className="grid gap-10 border-b border-outline-variant pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <SectionLabel index={project.year} label={project.category} />
            <h1 className="font-serif text-[3.4rem] font-normal leading-[0.96] tracking-editorial text-on-surface sm:text-[4.8rem] lg:text-[6rem]">{project.title}</h1>
            <p className="max-w-3xl text-sm leading-8 text-on-surface-variant">{project.description}</p>
          </div>

          <div className="space-y-5 border border-outline-variant bg-surface-container-lowest p-6">
            <div className="grid gap-4 font-mono text-[11px] uppercase tracking-technical text-on-surface-variant sm:grid-cols-2">
              <div>
                <p>{project.clientLabel ?? "Client"}</p>
                <p className="mt-2 text-sm normal-case tracking-normal text-on-surface">{project.client}</p>
              </div>
              <div>
                <p>Role</p>
                <p className="mt-2 text-sm normal-case tracking-normal text-on-surface">{project.role}</p>
              </div>
              <div>
                <p>Location</p>
                <p className="mt-2 text-sm normal-case tracking-normal text-on-surface">{project.location}</p>
              </div>
              <div>
                <p>Year</p>
                <p className="mt-2 text-sm normal-case tracking-normal text-on-surface">{project.year}</p>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border border-outline-variant bg-[#161616] p-3 sm:p-4">
          <div className="overflow-hidden border border-white/6 bg-[#111111]">
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={1000}
              className="h-auto w-full brightness-[0.95] contrast-[0.98] saturate-[0.94]"
              priority
            />
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="border border-outline-variant bg-surface-container-lowest p-6">
              <p className="font-mono text-[11px] uppercase tracking-technical text-on-surface-variant">{metric.label}</p>
              <p className="mt-4 font-serif text-4xl italic text-on-surface">{metric.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="border border-outline-variant p-6">
            <SectionLabel label="Challenge" />
            <p className="mt-6 text-sm leading-7 text-on-surface-variant">{project.challenge}</p>
          </div>
          <div className="border border-outline-variant p-6">
            <SectionLabel label="Solution" />
            <p className="mt-6 text-sm leading-7 text-on-surface-variant">{project.solution}</p>
          </div>
          <div className="border border-outline-variant p-6">
            <SectionLabel label="Outcome" />
            <p className="mt-6 text-sm leading-7 text-on-surface-variant">{project.outcome}</p>
          </div>
        </section>

        <section className="space-y-8">
          <SectionLabel index="P1" label="Process frames" />
          <div className="grid gap-6">
            {project.process.map((step, index) => (
              <div key={step.title} className="grid gap-6 border border-outline-variant bg-surface-container-lowest p-6 lg:grid-cols-[6rem_minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <p className="font-mono text-[11px] uppercase tracking-technical text-on-surface-variant">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="font-serif text-[1.9rem] italic leading-tight text-on-surface">{step.title}</h2>
                <p className="max-w-2xl text-sm leading-7 text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border border-outline-variant p-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:p-10">
          <div className="space-y-5">
            <SectionLabel index="P2" label="Services" />
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <Tag key={service}>{service}</Tag>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-end gap-3 lg:justify-end">
            {project.demoUrl ? (
              <Button href={project.demoUrl}>
                <>
                  View live demo
                  <ArrowUpRightIcon />
                </>
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button href={project.githubUrl}>
                <>
                  <GithubIcon />
                  View GitHub
                </>
              </Button>
            ) : null}
            <Button href="/contact">Discuss a similar project</Button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
