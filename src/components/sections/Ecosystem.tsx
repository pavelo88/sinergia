"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, IconBox, SectionHeader, Badge } from "@/components/ui";
import { 
  Bot, Cpu, Cloud, Terminal, Database, Globe, 
  Shield, Zap, Users, Network, Code, Brain 
} from "lucide-react";

const platforms = [
  { name: "OpenClaw", role: "Operaciones & Telegram", agents: 36, model: "Nemotron 3 Ultra", icon: Bot, color: "cyan", description: "36 agentes operativos con workspace aislado, agent-to-agent delegation, Telegram integration" },
  { name: "Hermes", role: "CEO Orchestrator", agents: 1, model: "Nemotron 3 Ultra", icon: Brain, color: "amber", description: "Orquestación central, delegación jerárquica, quality gates, memoria organizacional 1M context" },
  { name: "Antigravity", role: "Web & Landing", agents: 13, model: "Gemini CLI", icon: Cloud, color: "success", description: "Visual verification en navegador, deploys automatizados, IDE gráfico con reglas .agents/rules/" },
  { name: "Codex", role: "Código Paralelo", agents: 4, model: "GPT-4o", icon: Terminal, color: "cyan", description: "Features, PRs, tests en paralelo, codex exec para tareas masivas baratas" },
  { name: "Claude", role: "Estrategia & Auditoría", agents: 3, model: "Claude 3.5 Sonnet", icon: Code, color: "amber", description: "Refactors grandes, arquitectura, redacción larga, QA, claude -p para tareas" },
  { name: "Gemini", role: "Investigación & Fallback", agents: 1, model: "Gemini 1.5 Pro", icon: Globe, color: "success", description: "Deep research, fallback Ollama/Nemotron, automatización background vía CLI" },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-section" aria-labelledby="ecosystem-title">
      <div className="container">
        <SectionHeader
          badge="Arquitectura Multi-Plataforma"
          badgeVariant="amber"
          title="6 plataformas IA. 1 solo cerebro."
          subtitle="Cada plataforma tiene su especialidad. Hermes las orquesta. OpenClaw las ejecuta. Antigravity las visualiza."
        />
        
        <div className="grid-3 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <Card key={platform.name} variant="glass" className="h-full group" style={{ animationDelay: `${index * 80}ms` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <IconBox variant={platform.color as any} size="lg" className="group-hover:scale-110 transition-transform duration-300">
                    <platform.icon className="w-7 h-7" aria-hidden="true" />
                  </IconBox>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                      <Badge variant={platform.color as any} className="text-xs">{platform.role}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {platform.agents} agentes</span>
                      <span className="flex items-center gap-1"><Cpu className="w-4 h-4" /> {platform.model}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">{platform.description}</p>
                <div className="pt-4 border-t border-navy-700/30">
                  <Badge variant="default" className="text-xs">Activo en producción</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="mt-16 p-8 card-glass">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Flujo de Datos y Delegación</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-400/10 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-white mb-2">Entrada</h4>
              <p className="text-slate-400 text-sm">Pablo → Hermes (CEO)</p>
            </div>
            <div className="p-4 relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-400/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="font-bold text-white mb-2">Procesamiento</h4>
              <p className="text-slate-400 text-sm">Hermes → Leaders → Specialists</p>
              <div className="absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400/50" />
            </div>
            <div className="p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="font-bold text-white mb-2">Salida</h4>
              <p className="text-slate-400 text-sm">Código + Tests + Deploy + Métricas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}