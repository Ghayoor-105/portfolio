import { socials } from "@/data/socials";

export function Connect() {
  const linkedin = socials.find((s) => s.platform === "linkedin");
  const github = socials.find((s) => s.platform === "github");

  return (
    <section id="connect" className="flex w-full flex-col items-center gap-8 bg-primary-container px-margin-mobile py-section-gap-mobile text-center md:px-margin-desktop md:py-section-gap-desktop">
      <span className="font-mono text-[11px] uppercase tracking-widest text-on-primary">07 // CONNECT</span>

      <h2 className="max-w-2xl text-[28px] font-bold uppercase leading-tight tracking-tighter text-on-primary md:text-[40px]">
        LET&apos;S BUILD SOMETHING INTELLIGENT.
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        {linkedin && (
          <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="bg-on-primary px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-primary-container transition-opacity duration-300 hover:opacity-90">
            {linkedin.label}
          </a>
        )}
        {github && (
          <a href={github.url} target="_blank" rel="noopener noreferrer" className="border border-on-primary px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-on-primary hover:text-primary-container">
            {github.label}
          </a>
        )}
      </div>
    </section>
  );
}