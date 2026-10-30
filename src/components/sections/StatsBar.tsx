"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, SectionHeader } from "@/components/ui";
import { CheckCircle, Zap, Users, Shield, Brain, Globe } from "lucide-react";

const stats = [
  { icon: Brain, label: "Agentes Activos", value: "409", suffix: "+", color: "cyan" },
  { icon: Globe, label: "Plataformas IA", value: "6", suffix: "", color: "amber" },
  { icon: Users, label: "Skills Disponibles", value: "90", suffix: "+", color: "success" },
  { icon: Shield, label: "Uptime Garantizado", value: "99.9", suffix: "%", color: "error" },
];

export function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-bar");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-bar" className="py-16 lg:py-24 bg-gradient-to-b from-navy-900/50 to-transparent" aria-labelledby="stats-title">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "card-glass p-8 text-center group",
                isVisible ? "animate-fade-in-up" : "opacity-0",
                "transition-all duration-700"
              )}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <stat.icon className={cn("w-7 h-7", `text-${stat.color}-400`)} aria-hidden="true" />
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className={cn("font-display font-bold text-4xl lg:text-5xl text-white", isVisible ? "animate-slide-in-right" : "")}>
                  {stat.value}
                </span>
                <span className={cn("font-display font-bold text-2xl lg:text-3xl text-white", isVisible ? "animate-slide-in-right" : "")}>
                  {stat.suffix}
                </span>
              </div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              <div className={cn("mt-4 h-1 w-full bg-navy-700/50 rounded-full overflow-hidden", isVisible ? "animate-fade-in" : "")}>
                <div 
                  className={cn("h-full bg-gradient-to-r", `from-${stat.color}-400 to-${stat.color}-600 rounded-full transition-all duration-1000 ease-out`, isVisible ? "w-full" : "w-0")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}