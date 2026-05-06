import { siteProfile } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="grid gap-5 border-t border-outline-variant pt-6 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8 lg:pt-8">
      <div className="space-y-2">
        <p>2026 {siteProfile.name}. Built on mono-system.</p>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end sm:text-right">
        {socialLinks.slice(0, 3).map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-on-surface">
            {link.value}
          </a>
        ))}
      </div>
    </footer>
  );
}
