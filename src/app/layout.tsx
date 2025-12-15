// src/app/layout.tsx
import type { Metadata } from "next";
// import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "Portfólio – Pamela Fabia Iglesias",
  description: "Portfólio profissional de Pamela Fabia Iglesias (Full-stack Engineer, Pega System Architect).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
