"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useTheme();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("munx-theme");
      if (stored === "light" || stored === "dark") setMode(stored as any);
      else setMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } catch (e) {}
  }, []);

  function toggle() {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    theme.applyTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="btn-ghost flex items-center justify-center rounded-full p-2"
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
    >
      {mode === "dark" ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
