import type { Project } from "@/types/content";
import { DataFlowStrip } from "@/components/experiments/DataFlowStrip";

interface ExperimentCardProps {
  project: Project;
}

export function ExperimentCard({ project }: ExperimentCardProps) {
  return (
    <div className={`flex flex-col gap-4 border border-outline-strong bg-surface-container p-6 transition-colors duration-300 hover:border-primary/40 ${project.featured ? "md:col-span-2" : ""}`}>
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{project.id}</span>
        {project.liveDemo ? (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`} className="font-mono text-[11px] text-on-surface-subdued transition-colors duration-300 hover:text-primary">↗</a>
        ) : project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} className="font-mono text-[11px] text-on-surface-subdued transition-colors duration-300 hover:text-primary">↗</a>
        ) : null}
      </div>

      <h3 className="text-[20px] font-semibold text-on-surface">{project.title}</h3>
      <p className="text-[15px] leading-relaxed text-on-surface-variant">{project.description}</p>

      <DataFlowStrip stages={project.stages} />

      <div className="flex flex-wrap gap-2 pt-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="border border-outline-subtle px-2 py-1 font-mono text-[11px] text-on-surface-subdued">{tech}</span>
        ))}
      </div>
    </div>
  );
}