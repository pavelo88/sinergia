"use client";

import { cn } from "@/lib/utils";
import { Brain, Database, Shield, Zap, Globe, Users } from "lucide-react";
import { Card, CardContent, IconBox, SectionHeader } from "@/components/ui";

const valueProps = [
  {
    title: "Operaciones IA-Optimizadas",
    description: "Automatizamos flujos complejos con agentes que aprenden, se coordinan y ejecutan sin supervisión constante. 80% menos tiempo en tareas repetitivas.",
    icon: Brain,
    iconVariant: "cyan" as const,
  },
  {
    title: "Memoria Unificada de Agentes",
    description: "Contexto compartido entre OpenClaw, Hermes, Antigravity, Codex, Claude y Gemini. Cada agente sabe lo que hizo el anterior, sin pérdida de información.",
    icon: Database,
    iconVariant: "amber" as const,
  },
  {
    title: "Seguridad Enterprise Nativa",
    description: "Arquitectura zero-trust, encriptación end-to-end, auditoría completa y cumplimiento SOC2. Tus datos y los de tus clientes siempre protegidos.",
    icon: Shield,
    iconVariant: "success" as const,
  },
];

export function ValueProps() {
  return (
    <section id="value-props" className="py-section bg-navy-900/30" aria-labelledby="value-props-title">
      <div className="container">
        <SectionHeader
          badge="Por qué SinergIA"
          badgeVariant="cyan"
          title="Tres pilares que cambian las reglas"
          subtitle="No sumamos herramientas. Creamos un sistema que piensa, recuerda y actúa como uno solo."
        />
        
        <div className="grid-3">
          {valueProps.map((prop, index) => (
            <Card key={prop.title} variant="glass" className="h-full" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8">
                <IconBox variant={prop.iconVariant} size="lg" className="mb-6 animate-float" style={{ animationDelay: `${index * 200 + 500}ms` }}>
                  <prop.icon className="w-7 h-7" aria-hidden="true" />
                </IconBox>
                <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
                <p className="text-slate-400 leading-relaxed">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}