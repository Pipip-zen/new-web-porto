import { Divider } from "@/components/ui/Divider";

export function AboutIntro() {
  return (
    <section className="space-y-10">
      <div className="space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">Vol. 01 / Profile</p>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <h1 className="max-w-[11ch] font-serif text-[3.4rem] font-normal leading-[0.96] tracking-editorial text-on-surface sm:text-[4.8rem] lg:text-[6.4rem]">
            The Human Behind the Code
          </h1>
          <p className="max-w-sm text-sm leading-7 text-on-surface-variant">
            A Multimedia Engineering student who builds things across web development, network infrastructure, and immersive
            media.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.29fr)_minmax(0,0.29fr)]">
        <div className="hidden lg:block" />
        <p className="text-sm leading-8 text-on-surface-variant">
          I am always learning, always improving, and ready to collaborate on projects that matter. My focus is on building
          solutions that are reliable, scalable, and user-friendly across both product and infrastructure work.
        </p>
        <p className="text-sm leading-8 text-on-surface-variant">
          I see every project as a chance to grow. From full-stack applications to network systems, I care about delivering
          work that is practical, maintainable, and grounded in real user needs.
        </p>
      </div>

      <Divider className="pt-6" />
    </section>
  );
}
