import { socialLinks } from "@/data/socialLinks";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

export function ContactPanel() {
  return (
    <section className="space-y-8">
      <p className="font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">Initiate communication</p>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          <p className="max-w-[8ch] font-serif text-[3.8rem] font-normal leading-[0.92] tracking-editorial text-on-surface sm:text-[5rem] lg:text-[7.4rem]">
            RAFIF.<br />
            NUHA@<br />
            GMAIL.COM
          </p>
          <Divider />
          <div className="flex flex-wrap gap-4">
            <Button href="mailto:rafif.nuha@gmail.com" className="min-w-[10rem]">
              Contact Me
            </Button>
            <Button href="/Rafif-Nuha-CV.pdf" className="min-w-[10rem] border-outline-variant hover:border-on-surface">
              Download CV
            </Button>
          </div>
          <div className="aspect-square max-w-[22rem] border border-outline-variant bg-surface-container-lowest" />
        </div>
        <div className="border border-outline-variant">
          <div className="border-b border-outline-variant px-5 py-4 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">
            Digital Presence
          </div>
          <div className="px-5">
            {socialLinks.slice(0, 3).map((link, index) => (
              <div key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="flex items-center justify-between py-6 transition-colors duration-200 hover:text-on-surface">
                  <span className="font-sans text-[2.1rem] font-semibold uppercase leading-none text-on-surface sm:text-[2.8rem]">{link.value}</span>
                  <span className="text-2xl text-on-surface-variant">↗</span>
                </a>
                {index < 2 ? <Divider /> : null}
              </div>
            ))}
          </div>
          <div className="px-5 py-8 font-mono text-[10px] uppercase tracking-technical text-white/20">
            <p>System Status: online</p>
            <p className="mt-2">Latency: &lt;12ms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
