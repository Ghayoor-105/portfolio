import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-4 border-t border-outline-strong bg-deep-void px-margin-mobile py-gutter-lg md:flex-row md:px-margin-desktop">
      <p className="font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">
        &copy; 2026 Ghayoor Khan
      </p>
      <ul className="flex gap-6 font-mono text-[13px] text-on-surface-subdued">
        {socials.map((social) => (
          <li key={social.platform}>
            <a href={social.url} target={social.platform === "email" ? undefined : "_blank"} rel={social.platform === "email" ? undefined : "noopener noreferrer"} className="underline decoration-primary/30 transition-colors duration-200 hover:text-primary">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}