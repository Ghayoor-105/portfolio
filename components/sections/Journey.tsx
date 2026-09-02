import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";

export function Journey() {
  return (
      <section id="journey" aria-labelledby="journey-heading" className="w-full border-b border-outline-strong bg-surface-dim px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap-desktop">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeading number="04" title="EVOLUTION" headingId="journey-heading" />

        <div className="relative flex flex-col gap-8 border-l border-outline-strong pl-8">
          {timeline.map((entry) => (
            <div key={entry.id} className="relative">
                            <span
                className={`absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 ${
                  entry.isCurrent ? "node-pulse border-primary bg-primary" : "border-outline-strong bg-surface-dim"
                }`}
              />
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">
                {entry.isCurrent ? "CURRENT" : entry.id.toUpperCase()}
              </span>
              <h3 className={`text-[18px] font-semibold ${entry.isCurrent ? "text-primary" : "text-on-surface"}`}>
                {entry.title}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed text-on-surface-variant">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}