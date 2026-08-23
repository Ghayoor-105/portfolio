interface SectionHeadingProps {
  number: string;
  title: string;
  headingId: string;
}

export function SectionHeading({ number, title, headingId }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-center gap-4 border-b border-outline-strong pb-4">
      <span className="font-mono text-[13px] text-primary">{number}</span>
      <h2 id={headingId} className="font-mono text-[13px] uppercase tracking-widest text-on-surface">
        {title}
      </h2>
    </div>
  );
}