"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function TopHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#222222] bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        {/* Monogram RN Logo */}
        <Link href="/" className="group flex items-center">
          <span className="font-serif text-3xl font-bold tracking-tighter text-white transition-opacity group-hover:opacity-80 sm:text-4xl">
            RN
          </span>
        </Link>

        {/* Navigation Links (Desktop only) */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 sm:gap-8 lg:gap-10">
            {navigationItems.map((item) => {
              const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-mono text-xs uppercase tracking-wider transition-colors duration-200 hover:text-white sm:text-sm",
                      isActive ? "text-white font-medium" : "text-neutral-400"
                    )}
                  >
                    <span className="text-neutral-500 mr-1.5">{item.index}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
