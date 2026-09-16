"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // Hide Footer completely on /terminal route
  if (pathname === "/terminal") {
    return null;
  }

  return (
    <footer className="border-t border-[#222222] py-8 text-neutral-400 font-mono text-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p>© 2026 Rafif Nuha. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
