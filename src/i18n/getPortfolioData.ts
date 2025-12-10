// src/i18n/getPortfolioData.ts
import { notFound } from "next/navigation";
import type { Locale } from "./config";
import type { PortfolioData } from "@/data/portfolio.pt";

export async function getPortfolioData(locale: Locale): Promise<PortfolioData> {
  switch (locale) {
    case "pt": {
      const { portfolioDataPt } = await import("@/data/portfolio.pt");
      return portfolioDataPt;
    }
    case "en": {
      const { portfolioDataEn } = await import("@/data/portfolio.en");
      return portfolioDataEn;
    }
    default:
      notFound();
  }
}
