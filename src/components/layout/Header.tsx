import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";

type HeaderProps = {
  index: string;
  label: string;
  title: string;
  description: string;
};

export function Header({ index, label, title, description }: HeaderProps) {
  return (
    <header className="space-y-8">
      <SectionLabel index={index} label={label} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.7fr)] lg:items-end">
        <h1 className="font-serif text-[3.2rem] font-normal italic leading-[1.04] tracking-editorial text-on-surface sm:text-[4.3rem] xl:text-[5rem]">
          {title}
        </h1>
        <p className="max-w-md text-sm leading-7 text-on-surface-variant">{description}</p>
      </div>
      <Divider />
    </header>
  );
}
