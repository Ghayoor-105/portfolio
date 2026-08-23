import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/data/techStack";

export function Systems() {
  return (
        <section id="systems" aria-labelledby="systems-heading" className="w-full border-b border-outline-strong bg-surface-dim px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap-desktop">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeading number="02" title="SYSTEMS ARCHITECTURE" headingId="systems-heading" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {techStack.map((category) => (
            <div
              key={category.label}
              className={`flex flex-col gap-2 border p-6 ${
                category.tier === "primary"
                  ? "border-primary/40 bg-surface-container"
                  : "border-outline-strong bg-surface-container-low"
              }`}
            >
              <span className={`font-mono text-[11px] uppercase tracking-widest ${category.tier === "primary" ? "text-primary" : "text-on-surface-subdued"}`}>
                {category.label}
              </span>
              <span className="font-mono text-[13px] text-on-surface">{category.items}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}