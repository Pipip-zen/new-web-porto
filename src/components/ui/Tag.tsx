import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-outline-variant px-3 py-2 font-mono text-[11px] uppercase tracking-technical text-on-surface-variant",
        className
      )}
    >
      {children}
    </span>
  );
}
