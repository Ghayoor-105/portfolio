export function Hero() {
  return (
    <header className="relative flex min-h-screen w-full flex-col items-start justify-center overflow-hidden border-b border-outline-strong bg-surface-dim px-margin-mobile pt-16 md:px-margin-desktop">
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="mb-12 flex w-full flex-col justify-between border-b border-outline-strong pb-4 font-mono text-[13px] uppercase tracking-widest text-on-surface-subdued md:flex-row">
          <span>GHAYOOR KHAN / AI ENGINEER / SOFTWARE ENGINEER</span>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          <div className="inline-block self-start font-mono text-[13px] text-primary">SYSTEM ACTIVE</div>

          <h1 className="max-w-4xl text-[32px] font-bold uppercase leading-tight tracking-tighter text-on-surface md:text-[48px] md:leading-[56px]">
            BUILDING <br />
            <span className="text-primary">INTELLIGENT</span> SOFTWARE.
          </h1>

          <div className="mt-6 flex flex-wrap gap-4">
            <span className="border border-outline-strong bg-surface-container px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">SYSTEM / GHAYOOR-01</span>
            <span className="border border-outline-strong bg-surface-container px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">MODE / BUILDING</span>
            <span className="border border-outline-strong bg-surface-container px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">DOMAIN / AI + SOFTWARE</span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#experiments" className="bg-primary-container px-8 py-4 text-center font-mono text-[11px] uppercase tracking-widest text-on-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]">EXPLORE EXPERIMENTS</a>
            <a href="#resume" className="flex items-center justify-center gap-2 border border-outline-strong px-8 py-4 text-center font-mono text-[13px] text-on-surface transition-colors duration-300 hover:border-primary hover:text-primary">[ VIEW RESUME → ]</a>
          </div>
        </div>
      </div>
    </header>
  );
}