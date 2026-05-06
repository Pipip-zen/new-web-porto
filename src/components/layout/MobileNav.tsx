"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const indices = ["01", "02", "03", "04"];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-outline-variant bg-[#0a0a0a]/95 backdrop-blur-md lg:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="grid grid-cols-4">
        {navigationItems.map((item, index) => {
          const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex min-h-[4rem] flex-col items-center justify-center gap-1 px-2 py-3 font-mono text-[10px] uppercase text-on-surface-variant transition-colors duration-200",
                  isActive && "bg-white/[0.03] text-on-surface"
                )}
              >
                <span
                  className={cn(
                    "inline-flex min-w-[2rem] items-center justify-center border border-outline-variant px-1.5 py-0.5 text-[9px] leading-none tracking-[0.14em] transition-colors duration-200",
                    isActive && "border-on-surface bg-on-surface text-black"
                  )}
                >
                  {indices[index]}
                </span>
                <span className="text-[10px] tracking-[0.14em]">{item.shortLabel}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
