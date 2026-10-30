import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  badgeVariant?: "cyan" | "amber" | "success" | "error" | "default";
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ 
    className, 
    badge, 
    badgeVariant = "cyan", 
    title, 
    subtitle, 
    centered = true, 
    children,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-16",
          centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
          className
        )}
        {...props}
      >
        {badge && (
          <Badge variant={badgeVariant} className="mb-4">
            {badge}
          </Badge>
        )}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";