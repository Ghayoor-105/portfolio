import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperimentCard } from "@/components/experiments/ExperimentCard";
import { projects } from "@/data/projects";

export function Experiments() {
  return (
    <section id="experiments" className="w-full border-b border-outline-strong bg-surface-dim px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap-desktop">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeading number="03" title="EXPERIMENTS" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ExperimentCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}