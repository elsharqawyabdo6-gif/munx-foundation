"use client";

import { type Transition } from "framer-motion";

export const motionPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
} satisfies Record<string, { initial: object; animate: object; transition: Transition }>;
