interface StatusBeaconProps {
  label: string;
}

export function StatusBeacon({ label }: StatusBeaconProps) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      <span className="hidden md:inline">{label}</span>
    </div>
  );
}