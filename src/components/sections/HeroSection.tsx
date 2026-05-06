import { siteProfile } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

export function HeroSection() {
  return (
    <section className="border border-outline-variant">
      <div className="grid min-h-[26rem] gap-10 border-b border-outline-variant px-5 py-8 sm:px-8 lg:min-h-[34rem] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12 lg:px-12 lg:py-12">
        <div className="space-y-8 lg:space-y-14">
          <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">[ Digital design & development ]</p>
          <h1 className="max-w-[10ch] font-serif text-[3.6rem] font-normal italic leading-[0.96] tracking-editorial text-on-surface sm:text-[4.8rem] lg:text-[6.2rem] xl:text-[7.2rem]">
            Turning Ideas into Digital Solutions
          </h1>
        </div>
        <div className="max-w-md self-end lg:justify-self-end">
          <p className="text-sm leading-7 text-on-surface-variant sm:text-base sm:leading-8">
            I&apos;m Muhammad Rafif Nuha Daniswara, creating digital products and interfaces that look refined, work beautifully, and help brands stand out online.
          </p>
        </div>
      </div>

      <div className="grid border-b border-outline-variant lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="border-b border-outline-variant p-4 lg:border-b-0 lg:border-r lg:border-outline-variant lg:p-6">
          <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">Loc</p>
          <p className="mt-4 text-sm leading-7 text-on-surface">{siteProfile.location}</p>
        </div>
        <div className="border-b border-outline-variant p-4 lg:border-b-0 lg:border-r lg:border-outline-variant lg:p-6">
          <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">Status</p>
          <p className="mt-4 text-sm leading-7 text-on-surface">{siteProfile.availability}</p>
        </div>
        <div className="p-4 lg:flex lg:items-center lg:justify-end lg:p-6">
          <div className="flex flex-wrap gap-4">
            <Button href="/works">View archive</Button>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
