import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { siteProfile } from "@/data/navigation";

type PageShellProps = {
  index: string;
  label: string;
  children: ReactNode;
};

export function PageShell({ index, label, children }: PageShellProps) {
  return (
    <div className="min-h-screen px-0 pb-24 pt-0 lg:pb-0">
      <div className="mx-auto flex min-h-screen max-w-[120rem] flex-col">
        <div className="flex items-center justify-between border-b border-outline-variant px-4 py-3 font-mono text-[10px] uppercase tracking-technical text-on-surface-variant sm:px-6 lg:px-10">
          <span className="lg:invisible lg:w-0">{siteProfile.name.toUpperCase()}</span>
          <span>
            {index} — {label}
          </span>
        </div>
        <div className="flex-1 px-4 pb-16 pt-6 sm:px-6 lg:px-10 lg:pb-10 lg:pt-8 xl:px-14">{children}</div>
        <div className="px-4 pb-8 sm:px-6 lg:px-10 lg:pb-8 xl:px-14">
          <Footer />
        </div>
      </div>
    </div>
  );
}
