"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui";

const navLinks = [
  { href: "#ecosystem", label: "Ecosistema" },
  { href: "#agents", label: "Agentes" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-950/90 backdrop-blur-xl border-b border-navy-700/50 shadow-2xl"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="container" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="SinergIA Tech - Inicio"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-navy-950" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold font-display text-white hidden sm:block">
              SinergIA Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/5 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#contact" className="btn btn-ghost btn-sm">
              Contactar
            </Link>
            <Link href="#ecosystem" className="btn btn-primary btn-sm">
              Ver Arquitectura
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-navy-800/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden py-6 border-t border-navy-700/50 animate-fade-in"
            role="navigation"
            aria-label="Menú móvil"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-navy-700/50">
                <Link
                  href="#contact"
                  className="btn btn-secondary w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Contactar
                </Link>
                <Link
                  href="#ecosystem"
                  className="btn btn-primary w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Ver Arquitectura
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}