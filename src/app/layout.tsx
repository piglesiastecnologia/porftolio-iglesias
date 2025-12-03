// src/app/layout.tsx
import type { Metadata } from "next";
// import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ThemeProvider } from "@/providers/ThemeProvider";


export const metadata: Metadata = {
  title: "Portfólio – Pamela Fabia Iglesias",
  description: "Portfólio profissional de Pamela Fabia Iglesias (Full-stack Engineer, Pega System Architect).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
