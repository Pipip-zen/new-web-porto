import { Divider } from "@/components/ui/Divider";

export function AboutIntro() {
  return (
    <section className="space-y-10">
      <div className="space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">Vol. 01 / Philosophy</p>
        <p className="max-w-[10ch] font-serif text-[3.4rem] font-normal leading-[0.96] tracking-editorial text-on-surface sm:text-[4.8rem] lg:text-[6.4rem]">
          Design as Architecture.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.275fr)_minmax(0,0.275fr)]">
        <div />
        <p className="text-sm leading-8 text-on-surface-variant">
          I approach digital interfaces not as surfaces to be decorated, but as spaces to be structured. My work sits at the intersection of brutalism and meticulous editorial design, where negative space behaves like physical material.
        </p>
        <p className="text-sm leading-8 text-on-surface-variant">
          By stripping away the superfluous, the system becomes more legible. The focus remains on content, typographic scale, and the framework that quietly supports every interaction.
        </p>
      </div>

      <Divider className="pt-6" />
    </section>
  );
}
