"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

function HomeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ArchiveIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const getNavIcon = (index: string) => {
  switch (index) {
    case "01":
      return <HomeIcon />;
    case "02":
      return <ArchiveIcon />;
    case "03":
      return <AboutIcon />;
    case "04":
      return <ContactIcon />;
    default:
      return null;
  }
};

export function MobileNav() {
  const pathname = usePathname();

  // Hide MobileNav completely on /terminal route
  if (pathname === "/terminal") {
    return null;
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-black/95 backdrop-blur-xl md:hidden"
      aria-label="Mobile Bottom Navigation"
    >
      <ul className="grid grid-cols-4 px-2 py-2">
        {navigationItems.map((item) => {
          const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl transition-all duration-200 font-mono text-[10px] tracking-wider uppercase",
                  isActive
                    ? "text-white font-bold bg-neutral-900 border border-neutral-700/60"
                    : "text-neutral-400 hover:text-white"
                )}
              >
                <div className={cn("transition-transform duration-200", isActive && "scale-110 text-white")}>
                  {getNavIcon(item.index)}
                </div>
                <span>{item.index} {item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
