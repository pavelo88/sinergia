import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { TechStack } from "@/components/sections/TechStack";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SinergIA Tech | Orquestamos IA para que tu negocio escale",
    template: "%s | SinergIA Tech",
  },
  description: "409 agentes especializados, 6 plataformas IA unificadas, 1 solo cerebro operativo. De la idea a producción en días, no meses.",
  keywords: ["IA", "Inteligencia Artificial", "Agentes", "Automatización", "OpenClaw", "Hermes", "Antigravity", "Orquestación"],
  authors: [{ name: "SinergIA Tech" }],
  creator: "SinergIA Tech",
  publisher: "SinergIA Tech",
  robots: "index, follow",
  openGraph: {
    title: "SinergIA Tech | Orquestamos IA para que tu negocio escale",
    description: "409 agentes especializados, 6 plataformas IA unificadas, 1 solo cerebro operativo.",
    type: "website",
    locale: "es_ES",
    siteName: "SinergIA Tech",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SinergIA Tech - Orquestación de IA Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SinergIA Tech | Orquestamos IA para que tu negocio escale",
    description: "409 agentes especializados, 6 plataformas IA unificadas, 1 solo cerebro operativo.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-navy-950 text-white">
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
