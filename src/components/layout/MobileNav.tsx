"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const icons = ["⌂", "▦", "⎔", "✉"];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-outline-variant bg-surface lg:hidden" aria-label="Mobile navigation">
      <ul className="grid grid-cols-4">
        {navigationItems.map((item, index) => {
          const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-2 py-3 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant transition-colors duration-200",
                  isActive && "text-on-surface"
                )}
              >
                <span className="text-[12px]">{icons[index]}</span>
                <span className="sr-only">{item.shortLabel}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
