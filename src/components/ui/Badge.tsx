"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "amber" | "success" | "error" | "default";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "cyan", children, ...props }, ref) => {
    const variants = {
      cyan: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
      amber: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
      success: "bg-green-500/10 text-green-500 border border-green-500/20",
      error: "bg-red-500/10 text-red-500 border border-red-500/20",
      default: "bg-navy-700/50 text-slate-300 border border-navy-600/50",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";