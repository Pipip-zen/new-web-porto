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
    description: project.summary
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
                <p>Client</p>
                <p className="mt-2 text-sm normal-case tracking-normal text-on-surface">{project.client}</p>
              </div>
              <div>
                <p>Location</p>
                <p className="mt-2 text-sm normal-case tracking-normal text-on-surface">{project.location}</p>
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

        <section className="overflow-hidden border border-outline-variant bg-surface-container-lowest">
          <Image src={project.image} alt={project.title} width={1600} height={1000} className="h-auto w-full" priority />
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
          <div className="flex items-end lg:justify-end">
            <Button href="/contact">Discuss a similar project</Button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
