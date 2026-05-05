import { siteProfile } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="grid gap-8 border-t border-outline-variant pt-8 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="space-y-2">
        <p>2025 {siteProfile.name}. Built on mono-system.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-4 sm:text-right">
        {socialLinks.slice(0, 3).map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-on-surface">
            {link.value}
          </a>
        ))}
      </div>
    </footer>
  );
}
