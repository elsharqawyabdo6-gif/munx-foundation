"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("munx-theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = stored || (prefersDark ? "dark" : "light");
      applyTheme(theme as "dark" | "light");
    } catch (e) {
      // ignore
    }
  }, []);

  function applyTheme(mode: "light" | "dark") {
    const root = document.documentElement;
    if (mode === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }
    try {
      localStorage.setItem("munx-theme", mode);
    } catch (e) {}
  }

  if (!mounted) return <>{children}</>;

  return (
    <ThemeContextProvider applyTheme={applyTheme}>
      {children}
    </ThemeContextProvider>
  );
}

// Minimal context used by ThemeToggle component without adding a dependency
import React from "react";

const ThemeContext = React.createContext<{ applyTheme: (s: "light" | "dark") => void } | null>(null);

function ThemeContextProvider({ children, applyTheme }: any) {
  return <ThemeContext.Provider value={{ applyTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
