"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { StatusBeacon } from "@/components/ui/StatusBeacon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      firstLinkRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    document.body.style.overflow = "";
    setMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-margin-mobile md:px-margin-desktop transition-colors duration-300 ${
        scrolled
          ? "border-b border-outline-strong bg-surface/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a href="#" className="font-semibold tracking-tighter text-on-surface">
        GHAYOOR / 01
      </a>

      <ul className="hidden md:flex gap-6">
        {navigation.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant transition-colors duration-300 hover:text-primary">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <StatusBeacon label="SYSTEM ACTIVE" />
        <button ref={menuButtonRef} type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" className="relative z-50 flex h-6 w-6 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className={`h-0.5 w-6 bg-on-surface transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-on-surface transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 w-4 self-end bg-on-surface transition-all duration-300 ${menuOpen ? "w-6 -translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen} className={`fixed inset-0 z-40 bg-deep-void/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} />

      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site navigation" className={`fixed right-0 top-0 z-45 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto border-l border-outline-strong bg-surface-container px-8 py-20 transition-transform duration-300 ease-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="m-auto flex w-full flex-col gap-10">
          <div className="flex items-center justify-between border-b border-outline-strong pb-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">NAVIGATION</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{navigation.length} NODES</span>
          </div>

          <nav className="flex flex-col gap-1">
            {navigation.map((item, index) => (
              <a key={item.href} ref={index === 0 ? firstLinkRef : undefined} href={item.href} onClick={closeMenu} style={menuOpen ? { animation: `menu-link-in 0.4s ease-out ${index * 0.05}s both` } : undefined} className="group flex items-baseline gap-4 border-b border-outline-subtle py-4 transition-all duration-300 hover:pl-2">
                <span className="font-mono text-[12px] text-on-surface-subdued transition-colors duration-300 group-hover:text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[19px] uppercase tracking-widest text-on-surface transition-colors duration-300 group-hover:text-primary">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-outline-strong pt-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary">SYSTEM ACTIVE</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-on-surface-subdued">
              <a href="https://linkedin.com/in/ghayoorkhan1015" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary">LINKEDIN</a>
              <a href="https://github.com/Ghayoor-105" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary">GITHUB</a>
              <a href="mailto:ghayoorkhan1015@gmail.com" className="transition-colors duration-300 hover:text-primary">EMAIL</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}