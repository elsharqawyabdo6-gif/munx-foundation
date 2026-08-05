import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variantClassName = {
    default: "border border-border bg-surface text-foreground",
    muted: "border border-border/70 bg-surface-muted text-muted-foreground",
    accent: "border border-accent/30 bg-accent/10 text-accent",
  }[variant];

  return <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-[0.24em] uppercase", variantClassName, className)}>{children}</span>;
}
