"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const baseStyles = "rounded-2xl overflow-hidden transition-all duration-300";
    
    const variants = {
      default: "bg-navy-800/50 border border-navy-600/50",
      glass: "bg-gradient-to-br from-navy-800/30 to-navy-900/50 backdrop-blur-xl border border-cyan-400/10",
    };

    const hoverStyles = hover 
      ? "hover:border-cyan-400/50 hover:shadow-[0_0_40px_-5px_rgb(0_212_255_/_0.3)] hover:-translate-y-1" 
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-b border-navy-600/30", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-t border-navy-600/30 bg-navy-900/30", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";