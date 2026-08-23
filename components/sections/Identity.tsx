import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBeacon } from "@/components/ui/StatusBeacon";

export function Identity() {
  return (
     <section id="identity" aria-labelledby="identity-heading" className="w-full border-b border-outline-strong bg-surface-dim px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap-desktop">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeading number="01" title="IDENTITY" headingId="identity-heading" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <p className="text-[24px] font-semibold leading-snug tracking-tight text-on-surface md:text-[36px] md:leading-[44px]">
            I build software at the intersection of intelligence and engineering.
          </p>

          <div className="border border-outline-strong bg-surface-container p-6">
            <div className="mb-6 flex items-center justify-between border-b border-outline-subtle pb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">SYSTEM_ID // GHAYOOR-01</span>
              <StatusBeacon label="ONLINE" />
            </div>

            <dl className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-outline-subtle pb-3">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">NAME</dt>
                <dd className="font-mono text-[13px] text-on-surface">GHAYOOR KHAN</dd>
              </div>
              <div className="flex items-center justify-between border-b border-outline-subtle pb-3">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">ROLE</dt>
                <dd className="font-mono text-[13px] text-on-surface">AI / SW ENGINEER</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">STATUS</dt>
                <dd className="font-mono text-[13px] text-primary">ONLINE</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}