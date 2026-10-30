# SINERGIA TECH — ECOSYSTEM KNOWLEDGE BASE
**Fecha:** 2026-10-30  
**Fuente:** Exploración completa de `C:\Users\pablo\Documents`, `C:\Users\pablo\Documents\proyectos_web`, y todos los dotfiles de `C:\Users\pablo\`

---

## 1. RESUMEN EJECUTIVO

**SinergIA Tech** = Empresa de Pablo (Director Supremo) — "IA" = Inteligencia Artificial  
**Objetivo:** Ser el "cerebro maldito" que orquesta 409 agentes, 90+ skills, 6 plataformas IA y múltiples proyectos.

**Repo destino:** `https://github.com/fabrilp2602-star/sinergia` (vacío, listo para push)

---

## 2. ARQUITECTURA DEL ECOSISTEMA (MAPA MENTAL)

```
C:\Users\pablo\
├── Documents\                           # Proyectos y conocimiento
│   ├── AI-Skills-Unificadas-2026-10-08/ # HUB CENTRAL (Plan Maestro)
│   │   ├── 00_PLAN_MAESTRO_HUB.md      # Arquitectura SinergIA-HQ, 6 fases F0-F6
│   │   ├── AGENTES_MAESTROS.md         # 409 agentes catalogados
│   │   ├── AGENTES_MANIFEST.json       # 341KB metadata
│   │   ├── CATALOGO_MAESTRO_SKILLS.md  # 90 skills → fusionar a ~40
│   │   ├── agents/                     # 7 bibliotecas de agentes
│   │   └── Plugins-Claude/             # 50+ plugins Claude
│   ├── SinergIA_Plataforma_NextJS/     # BORRADA (solo .next + node_modules)
│   ├── baterias-maresa/                # Proyecto previo (Next.js 16, Tailwind v4)
│   └── [10+ proyectos más]
│
├── .openclaw/                          # OPENCLAW - 36 agentes operativos
│   ├── openclaw.json                   # Config completa (Nemotron 3 Ultra + Ollama fallback)
│   ├── agents/                         # 36 carpetas (main, leaders, devs, QA, etc.)
│   │   ├── main/agent/openclaw-agent.sqlite (6.4MB BD)
│   │   ├── leader-technology-web-platform/
│   │   ├── leader-growth-market/
│   │   ├── leader-operations-infrastructure/
│   │   ├── dev-frontend/, dev-backend/, devops-engineer/
│   │   ├── qa-engineer/, ux-ui-designer/, performance-seo-specialist/
│   │   ├── video-marketing-creator/, community-manager/
│   │   ├── google-ads-specialist/, meta-ads-specialist/
│   │   ├── strategic-research-leader/, campaign-impact-analyst/
│   │   ├── sysadmin/, secops-engineer/, cloud-devops/, dba/, sre-engineer/
│   │   ├── asset-*, procurement-*, admin-*, risk-insurance-manager/
│   │   └── translator/, operations/, assistant/
│   ├── skills/ (casi todas disabled)
│   └── channels: telegram (token placeholder), whatsapp, sms
│
├── .antigravity-ide/                   # ANTIGRAVITY - Ganador sorteo HUB
│   ├── extensions/                     # focused-tesla, happy-curie, kind-faraday
│   └── argv.json
│
├── .claude/ (14 dirs, 10 files)       # CLAUDE CODE agents
├── .codex/ (30 dirs, 21 files)        # CODEX / ChatGPT agents
├── .gemini/ (6 dirs, 8 files)         # GEMINI CLI
├── .cursor/ (4 dirs, 2 files)         # CURSOR agents
├── .copilot/ (2 dirs, 1 file)         # GITHUB COPILOT
├── .qwen/ (4 dirs, 2 files)           # QWEN agents
├── .kimi-webbridge/, .kimi-work/      # KIMI agents
├── .docker/ (8 dirs, 3 files)         # DOCKER configs
├── .n8n/ (2 dirs, 5 files)            # N8N workflows
├── .ollama/ (2 dirs, 5 files)         # OLLAMA local models
├── .hyperframes/ (3 dirs, 3 files)    # HYPERFRAMES video
├── .hermes/                           # HERMES (este agente)
├── n8n-infra/                         # N8N infrastructure
├── OpenClawDocs/ (4 files)            # Documentación OpenClaw
└── .vscode-shared/
```

---

## 3. PLAN MAESTRO HUB (00_PLAN_MAESTRO_HUB.md) — CLAVES

### Arquitectura Objetivo: **SinergIA-HQ**
```
AI-Skills-Unificadas-2026-10-08/  →  SinergIA-HQ/
│
├── AGENTS.md              # ÚNICA puerta entrada (≤120 líneas)
├── CLAUDE.md              # "@AGENTS.md"
├── GEMINI.md              # "Leé AGENTS.md"
├── .agents/rules/hub.md   # "Leé AGENTS.md" (Antigravity)
│
├── hub/                   # Capa operativa (siempre se lee)
│   ├── PROTOCOLO.md       # Ciclo ENTRAR→UBICAR→RECLAMAR→TRABAJAR→CERRAR→APRENDER
│   ├── ARQUITECTURA.md    # negocio→dominio→repo→hosting→DB→dueño
│   ├── EQUIPO.md          # 6 agentes: roles, comandos, límites, salud
│   ├── TABLERO.md         # 10 pendientes globales
│   ├── REGISTRO.md        # Bitácora append-only
│   ├── CREDENCIALES.md    # SOLO nombres variables (cero valores)
│   ├── APRENDIZAJES.md    # Errores no repetir
│   └── ESTADO_AGENTES.md  # health_check.py
│
├── proyectos/             # Un por negocio
│   ├── _plantilla/        # {PROYECTO.md, TAREAS.md, ARQUITECTURA.md, AVANCE.md, VENTAS.md}
│   ├── sinergia-tech/     # ESTE PROYECTO
│   ├── baterias-maresa/
│   └── vermilion/
│
├── skills/                # Skills vivas (formato SKILL.md)
│   └── _INDEX.md          # 1 línea por skill
├── tools/                 # Scripts (health_check.py)
├── agents/                # Definiciones por plataforma (no tocar)
└── biblioteca/            # Archivo (Unified-Skills, Plugins-Claude)
```

### Protocolo de Sesión (6 pasos)
1. **ENTRAR** → leer AGENTS.md
2. **UBICAR** → proyectos/<x>/PROYECTO.md → TAREAS.md → AVANCE.md
3. **RECLAMAR** → `dueño: <agente> <fecha-hora>` en tarea
4. **TRABAJAR** → SOLO archivos listados en tarea
5. **CERRAR** → actualizar TAREAS.md + reescribir AVANCE.md + línea en REGISTRO.md + commit git
6. **APRENDER** → ¿se usó/creó/mejoró skill? → volcar a skills/

### Fases Ejecución (F0-F6)
| Fase | Qué | Criterio |
|------|-----|----------|
| **F0** | `git init`, `.gitignore`, commit inicial | 1 commit, no `.env` versionado |
| **F1** | Cimientos: AGENTS.md, punteros, hub/* | Agente nuevo llega a archivo en ≤3 lecturas |
| **F2** | proyectos/ con carpeta por negocio | Cada uno con PROYECTO.md (oferta, público, URL, estado) |
| **F3** | skills/_INDEX.md + clasificación | ≤40 activas, 1 línea c/u, nada borrado |
| **F4** | Puentes: OpenClaw, Hermes, APX, Gemini, Claude | Cada agente responde "próximo pendiente de X" citando ruta |
| **F5** | Salud/respaldo: health_check.py, fallback Ollama | ESTADO_AGENTES.md auto-actualizado; si NVIDIA 429 → alternativa |
| **F6** | Renombrar carpeta (con OK Pablo) | APX y Hermes encuentran nueva ruta |

---

## 4. OPENCLAW — CONFIGURACIÓN REAL

**Modelo:** `nvidia/nemotron-3-ultra-550b-a55b` (primary) + `ollama/nemotron-mini:latest` (fallback)  
**36 Agentes definidos** con workspaces en `C:\AgentOps\agents\<nombre>\`  
**Skills:** 13 entradas, **todas `enabled: false`** (camsnap, coding-agent, gog, goplaces, himalaya, nano-pdf, openai-whisper, openhue, sag, sherpa-onnx-tts, songsee, spotify-player, summarize, trello, wacli)  
**Canales:** Telegram enabled (token placeholder `14 chars` — inválido), WhatsApp/SMS enabled  
**Plugins permitidos:** google, sms, whatsapp, nvidia, ollama, anthropic, deepseek, memory-core, telegram  
**Agent-to-Agent:** enabled, allow `["*"]`

### Jerarquía OpenClaw (según plan maestro user)
```
Pablo (Director Supremo) → Hermes (CEO Orchestrator) → Leaders (Ultra) → Specialists (Super) → QA/Dev
Leaders: leader-technology-web-platform, leader-growth-market, leader-operations-infrastructure
```

---

## 5. PROYECTOS EXISTENTES — PATRONES APRENDIDOS

### baterias-maresa (Next.js 16, Tailwind v4, App Router)
- 6 componentes: Header, Hero, Buscador, Services, EngineeringKeys, Footer
- Design system: Primary `#1e3a5f`, Accent `#e8a838`, Surface `#f8fafc`
- Clases utilitarias: `.btn`, `.card`, `.grid-2/3/4`, `.section-header`, `.animate-fade-in-up`, `.delay-1-6`, `.icon-box`, `.badge`, `.container`, `.py-section`
- Problemas resueltos: Turbopack no Win32 → Webpack, TS strict 0 errores, tipos Next.js 16 faltantes

### SoftIA Tech Website (phase-2) — Referencia calidad
- Next.js 15 App Router, TS Strict, Tailwind v4, Radix UI
- 54 componentes (21 atoms, 18 molecules, 15 organisms)
- Design System v1: 200+ tokens, Style Dictionary build, ThemeProvider, Chromatic
- i18n 7 locales, Vercel Edge + ISR
- Visual benchmark: Vercel/Linear/Stripe

---

## 6. HERRAMIENTAS EXTERNAS INTEGRADAS (6 repos)

| Herramienta | Repo | Función | Área |
|-------------|------|---------|------|
| **OmniRoute** | `diegosouzapw/OmniRoute` | AI Gateway 352 providers, 1.5B free tokens | **Primary LLM Gateway** |
| **Open-SEO** | `every-app/open-seo` | SEO toolkit (Ahrefs/Semrush alternative) | Marketing/SEO |
| **Strix** | `usestrix/strix` | AI Penetration Testing | Security/QA |
| **Open-Notebook** | `lfnovo/open-notebook` | PDF understanding + Video generation | R&D/Content |
| **ai-job-search** | `MadsLorentzen/ai-job-search` | AI Job Application Framework | HR/Recruiting |
| **ComfyUI** | `comfyanonymous/ComfyUI` | Local Image/Video Generation | Creative/Design |

**Integración:** Docker Compose stack, `.env` unificado, Python client classes, delegation templates.

---

## 7. LANDING PAGE SINERGIA TECH — ESPECIFICACIÓN TÉCNICA

### Stack
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript Strict
- **Styling:** Tailwind v4 (CSS-first, `@theme inline`) + CSS Variables (design tokens)
- **Fonts:** Inter (sans), Space Grotesk (display), Geist Mono (mono)
- **Icons:** Lucide React (inline SVG)
- **Animations:** CSS puro (keyframes) + `prefers-reduced-motion`
- **Build:** Webpack en Windows (Turbopack no soportado win32/x64)

### Estructura Página (Single Page — `/`)
```
1. HERO (full-screen)
   - Gradient mesh background (cyan + amber radials)
   - Animated grid pattern
   - Badge "SinergIA Tech"
   - H1: "Orquestamos IA para que tu negocio escale"
   - Subtitle: 409 agentes, 6 plataformas, 1 solo cerebro
   - CTAs duales: "Ver Arquitectura" (primary) + "Contactar" (secondary)
   - Trust indicators: 99.9% uptime, <100ms latency, 409 agentes, 6 plataformas

2. VALUE PROPS (3 columnas)
   - AI-Optimized Operations (icon-box cyan)
   - Unified Agent Memory (icon-box amber)
   - Enterprise-Grade Security (icon-box success)

3. ECOSYSTEM / ARQUITECTURA (grid-5)
   - 6 plataformas: OpenClaw, Hermes, Antigravity, Codex, Claude, Gemini
   - Cada card: logo, nombre, rol, agente count, modelo

4. AGENTES POR ÁREA (grid-4 con tabs o accordion)
   - Tecnología (99), Marketing (74), Dirección (6), Datos (17), Calidad (16), etc.

5. STACK TECNOLÓGICO (grid-6)
   - Next.js 16, React 19, TS, Tailwind v4, Vercel, PostgreSQL, Redis, Docker, K8s, Prisma, tRPC, Zod, NVIDIA Nemotron, Ollama, OpenRouter

6. STATS BAR (4 métricas animadas)
   - 409 Agentes | 6 Plataformas | 90+ Skills | 1 Cerebro

7. TESTIMONIOS / CASOS (3 cards)
   - "Redujimos 80% tiempo deployment"
   - "Automatizamos lead gen end-to-end"
   - "Seguridad enterprise desde día 1"

8. CTA FINAL (gradient background)
   - "¿Listo para tu SinergIA?" + btn-primary + btn-secondary

9. FOOTER (4 columnas)
   - Brand + tagline
   - Plataformas (links internos)
   - Empresa (Sobre nosotros, Blog, Carreras, Contacto)
   - Legal (Privacidad, Términos, Cookies)
   - Bottom bar: © 2026 SinergIA Tech · Hecho con Next.js + Nemotron
```

### Responsive Rules (críticas — aprendidas en baterias-maresa)
- **Hero CTAs:** Mobile 2+1 pattern (2 botones fila superior flex-1, 1 botón fila inferior full-width `sm:hidden`)
- **Stats:** Hidden desktop (`hidden sm:flex`), stacked cards mobile (`sm:hidden space-y-3`)
- **Mobile detection:** `useEffect` + `window.innerWidth < 768` (NO `lg:hidden` / `lg:absolute` → hydration mismatch)
- **Images:** `/hero-mobile.webp` (no `/hero-movile.webp` typo)

### Quality Gates (obligatorios)
- ✅ `npm run build` → 100% pass
- ✅ `npx tsc --noEmit` → 0 errores TypeScript strict
- ✅ WCAG 2.1 AA (contraste, focus-visible, ARIA labels, semantic HTML)
- ✅ PageSpeed Mobile > 90
- ✅ Visual parity Vercel/Linear/Stripe

---

## 8. DECISIONES DE DISEÑO SINERGIA TECH (PROPIAS, NO COPIADAS)

| Token | SinergIA Tech | baterias-maresa (ref) |
|-------|---------------|----------------------|
| Primary | `#0a1628` (Deep Navy) | `#1e3a5f` (Navy) |
| Secondary | `#00d4ff` (Electric Cyan) | — |
| Accent | `#ffb700` (Warm Amber) | `#e8a838` (Gold) |
| Surface | `#0f1f3a` | `#f8fafc` (light) |
| Text | `#e8f1ff` | `#1e293b` (dark) |
| Border | `#1e3a5f` | `#e2e8f0` (light) |
| Font Display | Space Grotesk | Inter |
| Background | Dark (siempre) | Light/Dark auto |

**Rationale:** Dark-first, high contrast, cyber/tech aesthetic coherente con "IA orquestada".

---

## 9. PRÓXIMOS PASOS INMEDIATOS

1. ✅ Crear proyecto Next.js 16 en `sinergia-tech-v2`
2. ✅ Design system completo en `globals.css` (Dark Navy + Cyan + Amber)
3. ⏳ **Crear componentes base** (Button, Card, IconBox, Badge, Container, SectionHeader)
4. ⏳ **Crear landing page** en `src/app/page.tsx` con todas las secciones
5. ⏳ **Configurar fonts** (Inter, Space Grotesk, Geist Mono via `next/font/google`)
6. ⏳ **Verificar build + TS strict**
7. ⏳ **`git init` + commit + push a `fabrilp2602-star/sinergia`**
8. ⏳ **Registrar en hub/proyectos/sinergia-tech/** con PROYECTO.md, TAREAS.md, AVANCE.md

---

## 10. COMANDOS ÚTILES PARA EL PROYECTO

```bash
# Desarrollo
cd C:\Users\pablo\Documents\proyectos_web\sinergia-tech-v2
npm run dev          # Webpack (puerto 3000/3001)

# Calidad
npm run build        # Build producción
npx tsc --noEmit     # TypeScript strict
npm run lint         # ESLint

# Git
git init
git add .
git commit -m "feat: SinergIA Tech landing page v1 - Design system + all sections"
git remote add origin https://github.com/fabrilp2602-star/sinergia.git
git push -u origin main

# Health check agentes (cuando health_check.py exista)
python tools/health_check.py
```

---

## 11. NOTAS CRÍTICAS PARA NO REPETIR ERRORES

| Error Anterior | Solución Aplicada |
|----------------|-------------------|
| Turbopack en Windows | `package.json` scripts con `--webpack` |
| Tipos Next.js 16 faltantes | `src/next-types.d.ts` con declaraciones completas |
| `<style jsx global>` en App Router | Eliminado → CSS en `globals.css` |
| `.next/types` en tsconfig.include | Eliminado → solo source files |
| Hydration mismatch mobile | `useEffect` para detección mobile, NO `lg:hidden` |
| Dev server colgado | `taskkill /f /im node.exe` antes de `npm run dev` |
| Repo dentro de otro repo | Carpeta nueva limpia, `git init` propio |

---

**ESTE DOCUMENTO ES LA MEMORIA VIVA DEL PROYECTO. SE ACTUALIZA EN CADA SESIÓN (fase APRENDER).**