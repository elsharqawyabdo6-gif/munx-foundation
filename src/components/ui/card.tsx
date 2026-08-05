import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "glass";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  const variantClassName = {
    default: "card-default",
    elevated: "card-elevated",
    glass: "card-glass",
  }[variant];

  return <div className={cn("rounded-2xl p-6", variantClassName, className)}>{children}</div>;
}
