"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, SectionHeader } from "@/components/ui";
import { Star, Shield, Zap, Brain, Globe, Users } from "lucide-react";

const testimonials = [
  {
    quote: "Redujimos 80% el tiempo de deployment y eliminamos los errores manuales. La orquestación de Hermes + OpenClaw es otro nivel.",
    author: "Carlos M.",
    role: "CTO",
    company: "Fintech Series B",
    metric: "6 meses en producción",
    avatar: "CM",
  },
  {
    quote: "Automatizamos lead gen end-to-end: de web scraping a CRM sin tocar una tecla. El ROI fue visible en semana 2.",
    author: "Ana R.",
    role: "Head of Growth",
    company: "SaaS B2B",
    metric: "340% más leads calificados",
    avatar: "AR",
  },
  {
    quote: "Seguridad enterprise desde día 1. Auditoría SOC2 lista, zero-trust nativo, encriptación total. Dormimos tranquilos.",
    author: "Miguel T.",
    role: "CISO",
    company: "HealthTech",
    metric: "0 incidentes en 18 meses",
    avatar: "MT",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-section" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeader
          badge="Casos Reales"
          badgeVariant="amber"
          title="Lo que dicen quienes ya operan con SinergIA"
          subtitle="No vendemos humo. Entregamos resultados medibles en producción."
        />
        
        <div className="grid-3">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.author} variant="glass" className="h-full" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label="5 estrellas">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-navy-950 font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role} @ {testimonial.company}</div>
                  </div>
                </div>
                
                {/* Metric */}
                <div className="mt-4 pt-4 border-t border-navy-700/30">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Zap className="w-3 h-3 text-amber-400" aria-hidden="true" />
                    <span>{testimonial.metric}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}