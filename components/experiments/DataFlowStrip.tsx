import type { ProjectStage } from "@/types/content";

interface DataFlowStripProps {
  stages: ProjectStage[];
}

const statusColor: Record<ProjectStage["status"], string> = {
  neutral: "text-on-surface-subdued border-outline-strong",
  active: "text-primary border-primary/40",
  success: "text-system-success border-system-success/40",
  error: "text-system-error border-system-error/40",
};

export function DataFlowStrip({ stages }: DataFlowStripProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-t border-outline-subtle pt-4 font-mono text-[11px] uppercase tracking-widest">
      {stages.map((stage, index) => (
        <div key={stage.label} className="flex items-center gap-2">
          <span className={`border px-2 py-1 ${statusColor[stage.status]}`}>{stage.label}</span>
          {index < stages.length - 1 && (
            <div className="relative flex h-4 w-6 items-center overflow-hidden">
              <span className="signal-dot" style={{ animationDelay: `${index * 0.3}s` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}