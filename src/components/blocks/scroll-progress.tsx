"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = total > 0 ? window.scrollY / total : 0;
      setProgress(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-accent/80" style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }} />;
}
