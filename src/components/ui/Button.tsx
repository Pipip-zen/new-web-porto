import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, children, className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-3 border border-on-surface px-6 py-3 font-mono text-[11px] uppercase tracking-technical text-on-surface transition-colors duration-200 hover:bg-on-surface hover:text-surface",
    className
  );

  if (href.startsWith("/")) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <a href={href} className={classes} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
