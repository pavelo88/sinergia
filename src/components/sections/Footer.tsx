import Link from "next/link";
import { cn } from "@/lib/utils";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  plataformas: [
    { label: "OpenClaw", href: "#openclaw" },
    { label: "Hermes", href: "#hermes" },
    { label: "Antigravity", href: "#antigravity" },
    { label: "Codex", href: "#codex" },
    { label: "Claude", href: "#claude" },
    { label: "Gemini", href: "#gemini" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Blog Técnico", href: "#blog" },
    { label: "Carreras", href: "#careers" },
    { label: "Contacto", href: "#contact" },
  ],
  recursos: [
    { label: "Documentación", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Changelog", href: "#changelog" },
    { label: "Status", href: "#status" },
  ],
  legal: [
    { label: "Privacidad", href: "#privacy" },
    { label: "Términos", href: "#terms" },
    { label: "Cookies", href: "#cookies" },
    { label: "Seguridad", href: "#security" },
  ],
  contacto: {
    email: "hola@sinergiatech.io",
    phone: "+34 900 123 456",
    address: "Madrid, España",
  },
};

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy-950 border-t border-navy-800" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="SinergIA Tech - Inicio">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-navy-950" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold font-display text-white">SinergIA Tech</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Orquestamos inteligencia artificial para que tu negocio escale. 
              409 agentes, 6 plataformas, 1 solo cerebro.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Zap className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              { "99.9% Uptime" } <span aria-hidden="true">·</span> { "<100ms Latency" } <span aria-hidden="true">·</span> { "SOC2 Ready" }
            </div>
          </div>

          {/* Plataformas */}
          <nav aria-label="Plataformas IA">
            <h3 className="font-semibold text-white mb-4">Plataformas</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.plataformas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-label="Empresa">
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Recursos */}
          <nav aria-label="Recursos">
            <h3 className="font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} SinergIA Tech. Todos los derechos reservados.
            </p>
            
            <nav aria-label="Redes sociales" className="flex items-center justify-center gap-4 md:gap-6">
              <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 01-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </nav>
            
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <span>Hecho con</span>
              <span className="text-red-500">♥</span>
              <span>Next.js 16 + Nemotron 3 Ultra</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}