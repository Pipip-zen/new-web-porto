import type { SkillGroup } from "@/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

type SkillTagsProps = {
  groups: SkillGroup[];
};

export function SkillTags({ groups }: SkillTagsProps) {
  return (
    <section className="space-y-8">
      <SectionLabel index="Capabilities" label="Technical capabilities" />
      <div className="grid gap-6 xl:grid-cols-3">
        {groups.map((group) => (
          <div key={group.category} className="space-y-5">
            <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">{group.category}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
