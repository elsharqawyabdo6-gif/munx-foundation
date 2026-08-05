"use client";

import { useEffect, useRef, useState } from "react";

export function CursorDot() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const el = ref.current;
    function onMove(e: MouseEvent) {
      if (!el) return;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    }

    function onDown() {
      if (!el) return;
      el.style.transform = "translate(-50%, -50%) scale(0.8)";
    }
    function onUp() {
      if (!el) return;
      el.style.transform = hovering
        ? "translate(-50%, -50%) scale(1.9)"
        : "translate(-50%, -50%) scale(1)";
    }

    function onPointerOver(e: any) {
      const target = e.target as HTMLElement;
      if (!el) return;
      if (target && (target.tagName === "A" || target.getAttribute("role") === "button" || target.closest("button"))) {
        setHovering(true);
        el.classList.add("cursor-hover");
      }
    }
    function onPointerOut(e: any) {
      const target = e.target as HTMLElement;
      if (!el) return;
      if (target && (target.tagName === "A" || target.getAttribute("role") === "button" || target.closest("button"))) {
        setHovering(false);
        el.classList.remove("cursor-hover");
      }
    }

    document.documentElement.classList.add("use-custom-cursor");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);

    return () => {
      document.documentElement.classList.remove("use-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, [hovering]);

  return <div ref={ref} className="cursor-dot" aria-hidden />;
}

export default CursorDot;
