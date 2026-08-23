"use client";

import { useEffect, useState } from "react";

const PHASES = ["SYSTEM INITIALIZING", "IDENTITY DETECTED", "GHAYOOR KHAN", "SYSTEM ACTIVE"];

export function BootSequence() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % PHASES.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono text-[13px] text-primary">{PHASES[index]}</span>;
}