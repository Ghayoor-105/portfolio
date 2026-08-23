import { SectionHeading } from "@/components/ui/SectionHeading";
import { Terminal } from "lucide-react";

export function Evidence() {
  return (
    <section id="evidence" aria-labelledby="evidence-heading" className="w-full border-b border-outline-strong bg-surface-dim px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap-desktop">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeading number="06" title="EVIDENCE" headingId="evidence-heading" />

        <div className="group relative flex flex-col items-center gap-6 overflow-hidden border border-outline-strong bg-surface-container p-12 text-center">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-10" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <Terminal className="text-on-surface-subdued transition-colors duration-300 group-hover:text-primary" size={36} />
            <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">
              [ GITHUB_ACTIVITY_STREAM: GHAYOOR-105 ]
            </span>
            
                         <a href="https://github.com/Ghayoor-105" target="_blank" rel="noopener noreferrer" className="border border-outline-strong px-8 py-4 font-mono text-[13px] uppercase tracking-widest text-on-surface transition-colors duration-300 hover:border-primary hover:text-primary">
              INITIATE CONNECTION →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}