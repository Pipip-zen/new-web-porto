type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-technical text-on-surface transition-colors duration-200 hover:text-on-surface-variant"
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
