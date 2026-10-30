"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle, Zap, Shield, Database, Users } from "lucide-react";
import { Button } from "@/components/ui";

const trustIndicators = [
  { icon: CheckCircle, label: "99.9% Uptime", value: "99.9%" },
  { icon: Zap, label: "Latency", value: "<100ms" },
  { icon: Users, label: "Agentes Activos", value: "409" },
  { icon: Shield, label: "Plataformas", value: "6" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh" aria-hidden="true" />
      
      {/* Grid Pattern */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <span className="badge animate-fade-in-up">
            <Zap className="w-4 h-4" aria-hidden="true" />
            SinergIA Tech — Orquestación de IA Empresarial
          </span>

          {/* Main Title */}
          <h1
            id="hero-title"
            className="section-title animate-fade-in-up delay-1 font-display"
            style={{ maxWidth: "900px", margin: "16px auto 24px" }}
          >
            Orquestamos <span className="text-gradient">Inteligencia Artificial</span> para que tu negocio escale
          </h1>

          {/* Subtitle */}
          <p className="section-subtitle animate-fade-in-up delay-2" style={{ maxWidth: "720px", margin: "0 auto 40px" }}>
            409 agentes especializados, 6 plataformas IA unificadas, 1 solo cerebro operativo. 
            De la idea a producción en días, no meses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-3">
            <Link href="#ecosystem" className="btn btn-primary btn-lg">
              Ver Arquitectura Completa
              <ArrowRight className="btn-icon" aria-hidden="true" />
            </Link>
            <Link href="#contact" className="btn btn-secondary btn-lg">
              Empezar Ahora
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-fade-in-up delay-4">
            {trustIndicators.map((item, index) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-sm" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-center gap-1.5 text-cyan-400">
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-white">{item.value}</div>
                  <div className="text-slate-500 text-xs">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
            <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}