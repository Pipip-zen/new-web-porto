import type { ExperienceItem } from "@/data/experience";
import { Divider } from "@/components/ui/Divider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

type ExperienceListProps = {
  items: ExperienceItem[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <section className="space-y-8">
      <SectionLabel index="Journey" label="Experience" />
      <div className="border-y border-outline-variant">
        {items.map((item, index) => (
          <article
            key={`${item.period}-${item.role}`}
            className="grid gap-6 px-0 py-8 lg:grid-cols-[11rem_minmax(0,1.05fr)_minmax(0,0.95fr)_3rem]"
          >
            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">{item.period}</p>
              <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">{item.location}</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-sans text-[1.7rem] font-semibold uppercase leading-[0.95] text-on-surface sm:text-[2.25rem]">
                  {item.organization}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-on-surface">{item.role}</p>
              </div>
              <div className="flex flex-wrap gap-2" aria-label={`${item.organization} focus areas`}>
                {item.highlights.map((highlight) => (
                  <Tag key={highlight}>{highlight}</Tag>
                ))}
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-on-surface-variant">{item.summary}</p>
            <p className="hidden font-mono text-[10px] uppercase tracking-technical text-white/20 lg:block">
              {String(index + 1).padStart(2, "0")}
            </p>
            {index < items.length - 1 ? <Divider className="lg:col-span-4" /> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
