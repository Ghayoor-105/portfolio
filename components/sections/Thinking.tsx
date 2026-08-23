import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/data/principles";

export function Thinking() {
  return (
      <section id="thinking" aria-labelledby="thinking-heading" className="w-full border-b border-outline-strong bg-surface-dim px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap-desktop">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeading number="05" title="HOW I THINK" headingId="thinking-heading" />
        <div className="flex flex-col gap-6">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="border-l-2 border-outline-strong py-2 pl-6 transition-colors duration-300 hover:border-primary"
            >
                                    <h3 className="text-[18px] font-semibold text-on-surface">                 
                {principle.statement}
              </h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-on-surface-variant">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}