import type { SkillGroup } from "@/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";

type SkillTagsProps = {
  groups: SkillGroup[];
};

export function SkillTags({ groups }: SkillTagsProps) {
  return (
    <section className="space-y-8">
      <SectionLabel index="Toolkit" label="Technical capabilities" />
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.category}
            aria-labelledby={`skill-group-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="space-y-5 border border-outline-variant bg-surface-container-low/40 p-5 sm:p-6"
          >
            <p
              id={`skill-group-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant"
            >
              {group.category}
            </p>
            <div className="mt-6 space-y-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-4 border-b border-outline-variant pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm leading-6 text-on-surface">{item.name}</p>
                  <span className="inline-flex shrink-0 items-center border border-outline-variant px-2 py-1 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
