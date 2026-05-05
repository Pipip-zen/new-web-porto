import type { ExperienceItem } from "@/data/experience";
import { Divider } from "@/components/ui/Divider";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ExperienceListProps = {
  items: ExperienceItem[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <section className="space-y-8">
      <SectionLabel index="System" label="Experience" />
      <div className="border-y border-outline-variant">
        {items.map((item, index) => (
          <div key={`${item.period}-${item.role}`} className="grid gap-6 px-0 py-8 lg:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1.1fr)_3rem]">
            <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">{item.period}</p>
            <div>
              <h3 className="font-sans text-[2rem] font-semibold uppercase leading-none text-on-surface sm:text-[2.5rem]">{item.studio}</h3>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.role}</p>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-on-surface-variant">{item.description}</p>
            <p className="hidden font-mono text-[10px] uppercase tracking-technical text-white/20 lg:block">{String(index + 1).padStart(2, "0")}</p>
            {index < items.length - 1 ? <Divider className="lg:col-span-4" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
