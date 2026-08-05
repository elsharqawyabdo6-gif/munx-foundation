import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-full border border-border bg-surface px-4 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25",
        className,
      )}
      {...props}
    />
  );
}
