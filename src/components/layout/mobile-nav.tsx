"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!open) return;
      if (menuRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <div className="md:hidden relative">
      <button
        ref={buttonRef}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute right-4 top-full mt-2 w-56 bg-background border border-border/50 rounded-lg shadow-lg z-50 p-3"
        >
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 px-3 rounded text-sm text-foreground hover:bg-surface/60"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
