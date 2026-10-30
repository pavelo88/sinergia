"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { ArrowRight, Zap, Sparkles, Brain, Shield } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-section relative overflow-hidden" aria-labelledby="cta-title">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh" aria-hidden="true" />
      <div className="bg-grid-pattern" aria-hidden="true" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge badge-amber animate-fade-in-up">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            ¿Listo para tu SinergIA?
          </span>
          
          <h2 id="cta-title" className="section-title animate-fade-in-up delay-1 font-display">
            De la idea a <span className="text-gradient">producción en días</span>
          </h2>
          
          <p className="section-subtitle animate-fade-in-up delay-2">
            Un sprint de descubrimiento, arquitectura lista para escalar, y tu primer agente operativo en 2 semanas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-3 mt-8">
            <Link href="#contact" className="btn btn-primary btn-lg group">
              Agendar Discovery Call
              <ArrowRight className={cn("btn-icon transition-transform group-hover:translate-x-1")} aria-hidden="true" />
            </Link>
            <Link href="#ecosystem" className="btn btn-secondary btn-lg">
              Ver Arquitectura Técnica
            </Link>
          </div>
          
          {/* Trust line */}
          <div className="mt-16 pt-8 border-t border-navy-700/30 animate-fade-in-up delay-4">
            <p className="text-slate-500 text-sm mb-4">Con la confianza de equipos que exigen excelencia</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 text-xs font-mono">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-cyan-400" aria-hidden="true" /> { "99.9% Uptime" }</span>
              <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-amber-400" aria-hidden="true" /> { "<100ms Latency" }</span>
              <span className="flex items-center gap-1"><Brain className="w-3 h-3 text-green-500" aria-hidden="true" /> { "409 Agentes" }</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-red-500" aria-hidden="true" /> { "SOC2 Ready" }</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}