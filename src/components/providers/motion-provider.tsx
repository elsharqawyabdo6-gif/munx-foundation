"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
      style={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
