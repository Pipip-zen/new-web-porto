"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, siteProfile } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-[15rem] flex-col justify-between border-r border-outline-variant bg-[#070707] px-8 py-8 lg:flex">
      <div className="space-y-16">
        <div className="space-y-5">
          <Link href="/" className="block font-serif text-[2rem] font-normal leading-[0.88] tracking-[-0.04em] text-on-surface">
            {siteProfile.name.split(" ").map((part) => (
              <span key={part} className="block uppercase">
                {part}
              </span>
            ))}
          </Link>
          <p className="max-w-[10rem] font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">
            {siteProfile.role}
          </p>
        </div>

        <nav aria-label="Primary navigation">
          <ul className="space-y-6">
            {navigationItems.map((item) => {
              const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 font-mono text-[11px] uppercase tracking-technical text-on-surface-variant transition-colors duration-200 hover:text-on-surface",
                      isActive && "text-on-surface"
                    )}
                  >
                    <span className={cn("h-[5px] w-[5px] rounded-full border border-outline-variant", isActive && "bg-on-surface border-on-surface")} />
                    <span>{item.index}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="space-y-3 border-t border-outline-variant pt-6 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant">
        <p>{siteProfile.location}</p>
        <p>{siteProfile.availability}</p>
      </div>
    </aside>
  );
}
