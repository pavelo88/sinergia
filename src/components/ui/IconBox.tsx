"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "cyan" | "amber" | "success" | "error";
  size?: "sm" | "md" | "lg";
}

export const IconBox = forwardRef<HTMLDivElement, IconBoxProps>(
  ({ className, variant = "cyan", size = "md", children, ...props }, ref) => {
    const variants = {
      cyan: "bg-cyan-400/10 text-cyan-400",
      amber: "bg-amber-400/10 text-amber-400",
      success: "bg-green-500/10 text-green-500",
      error: "bg-red-500/10 text-red-500",
    };

    const sizes = {
      sm: "w-10 h-10 rounded-xl",
      md: "w-14 h-14 rounded-2xl",
      lg: "w-16 h-16 rounded-2xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconBox.displayName = "IconBox";