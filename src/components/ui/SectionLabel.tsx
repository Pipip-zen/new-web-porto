import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index?: string;
  label: string;
  className?: string;
};

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-[11px] uppercase tracking-technical text-on-surface-variant", className)}>
      {index ? <span>{index}</span> : null}
      <span className="h-px w-8 bg-outline-variant" />
      <span>{label}</span>
    </div>
  );
}
