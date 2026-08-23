import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, ArrowDown } from "lucide-react";
import { techStack } from "@/data/techStack";

function TechBox({ category }: { category: (typeof techStack)[number] }) {
  return (
    <div
      className={`flex flex-col gap-2 border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,229,255,0.15)] ${
        category.tier === "primary"
          ? "border-primary/40 bg-surface-container hover:border-primary"
          : "border-outline-strong bg-surface-container-low hover:border-primary/60 hover:bg-surface-bright"
      }`}
    >
      <span className={`font-mono text-[11px] uppercase tracking-widest ${category.tier === "primary" ? "text-primary" : "text-on-surface-subdued"}`}>
        {category.label}
      </span>
      <span className="font-mono text-[13px] text-on-surface">{category.items}</span>
    </div>
  );
}

export function Systems() {
  const [intelligence, computerVision, engineeringCore, dataTools, frontend] = techStack;

  return (
    <section id="systems" aria-labelledby="systems-heading" className="w-full border-b border-outline-strong bg-surface-dim px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap-desktop">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeading number="02" title="SYSTEMS ARCHITECTURE" headingId="systems-heading" />

        <div className="flex flex-col gap-6 border border-outline-strong bg-surface p-6 md:p-8">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
            <TechBox category={intelligence} />
            <ArrowRight className="hidden text-outline-strong md:block" size={20} />
            <TechBox category={computerVision} />
          </div>

          <ArrowDown className="mx-auto text-outline-strong" size={20} />

          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
            <TechBox category={engineeringCore} />
            <ArrowRight className="hidden text-outline-strong md:block" size={20} />
            <TechBox category={dataTools} />
          </div>

          <ArrowDown className="mx-auto text-outline-strong" size={20} />

          <TechBox category={frontend} />
        </div>
      </div>
    </section>
  );
}