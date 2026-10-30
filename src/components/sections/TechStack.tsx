"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, IconBox, SectionHeader, Badge } from "@/components/ui";
import {
  Code2, Database, Server, Terminal, Cloud, Container,
  GitBranch, Zap, Shield, Brain, Globe, Layers
} from "lucide-react";

const techStack = [
  { category: "Frontend", items: [
    { name: "Next.js 16", icon: Code2, color: "cyan" },
    { name: "React 19", icon: Code2, color: "cyan" },
    { name: "TypeScript 5", icon: Code2, color: "cyan" },
    { name: "Tailwind v4", icon: Layers, color: "cyan" },
  ]},
  { category: "Backend", items: [
    { name: "Node.js 20+", icon: Server, color: "amber" },
    { name: "tRPC", icon: Terminal, color: "amber" },
    { name: "Prisma ORM", icon: Database, color: "amber" },
    { name: "PostgreSQL 16", icon: Database, color: "amber" },
  ]},
  { category: "Infra & DevOps", items: [
    { name: "Vercel Edge", icon: Cloud, color: "success" },
    { name: "Docker", icon: Container, color: "success" },
    { name: "Kubernetes", icon: Layers, color: "success" },
    { name: "Redis", icon: Database, color: "success" },
  ]},
  { category: "IA & Modelos", items: [
    { name: "Nemotron 3 Ultra", icon: Brain, color: "error" },
    { name: "Nemotron 3 Super", icon: Brain, color: "error" },
    { name: "Ollama Local", icon: Terminal, color: "error" },
    { name: "OpenRouter", icon: Globe, color: "error" },
  ]},
];

export function TechStack() {
  return (
    <section id="stack" className="py-section bg-navy-900/30" aria-labelledby="stack-title">
      <div className="container">
        <SectionHeader
          badge="Stack Tecnológico"
          badgeVariant="success"
          title="Herramientas que usan los mejores"
          subtitle="Solo lo que escala. Nada de hype. Cada tecnología tiene un propósito medible."
        />
        
        <div className="space-y-16">
          {techStack.map((category, catIndex) => (
            <div key={category.category} style={{ animationDelay: `${catIndex * 150}ms` }}>
              <h3 className="text-lg font-semibold text-slate-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-navy-800/50 flex items-center justify-center text-white text-sm font-mono">
                  {catIndex + 1}
                </span>
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={item.name} variant="glass" className="p-6 group" style={{ animationDelay: `${catIndex * 150 + itemIndex * 50 + 100}ms` }}>
                    <div className="flex flex-col items-center text-center gap-3">
                      <IconBox variant={item.color as any} size="md" className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </IconBox>
                      <span className="font-semibold text-white">{item.name}</span>
                      <Badge variant="default" className="text-xs">Producción</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* AI Models Detail */}
          <div className="mt-8 p-8 card-glass" style={{ animationDelay: `${techStack.length * 150}ms` }}>
            <h3 className="text-lg font-semibold text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-navy-800/50 flex items-center justify-center text-white text-sm font-mono">
                5
              </span>
              Modelos de IA en Producción
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card variant="glass" className="p-6">
                <div className="flex items-center gap-4">
                  <IconBox variant="error" size="lg"><Brain className="w-7 h-7" /></IconBox>
                  <div>
                    <h4 className="font-bold text-white">Nemotron 3 Ultra (550B)</h4>
                    <p className="text-slate-500 text-sm">Modelo principal — Leaders, Directors, Strategic tasks</p>
                    <Badge variant="cyan" className="mt-2 text-xs">NVIDIA API</Badge>
                  </div>
                </div>
              </Card>
              <Card variant="glass" className="p-6">
                <div className="flex items-center gap-4">
                  <IconBox variant="error" size="lg"><Brain className="w-7 h-7" /></IconBox>
                  <div>
                    <h4 className="font-bold text-white">Nemotron 3 Super (120B)</h4>
                    <p className="text-slate-500 text-sm">Especialistas, Managers, Technical execution</p>
                    <Badge variant="cyan" className="mt-2 text-xs">NVIDIA API</Badge>
                  </div>
                </div>
              </Card>
              <Card variant="glass" className="p-6">
                <div className="flex items-center gap-4">
                  <IconBox variant="success" size="lg"><Terminal className="w-7 h-7" /></IconBox>
                  <div>
                    <h4 className="font-bold text-white">Nemotron Mini (Local)</h4>
                    <p className="text-slate-500 text-sm">Fallback offline — Ollama, zero latency, zero cost</p>
                    <Badge variant="amber" className="mt-2 text-xs">Local GPU</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}