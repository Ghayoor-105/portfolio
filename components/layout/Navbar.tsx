"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { StatusBeacon } from "@/components/ui/StatusBeacon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <StatusBeacon label="SYSTEM ACTIVE" />
    </nav>
  );
}