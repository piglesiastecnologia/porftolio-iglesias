// src/app/[locale]/page.tsx
import { Box, Container } from "@mui/material";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { StackListSection } from "@/components/portfolio/StackListSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { LanguagesSection } from "@/components/portfolio/LanguagesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

import { getPortfolioData } from "@/i18n/getPortfolioData";
import type { Locale } from "@/i18n/config";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const { profile, about, techStack, projects, languagesInfo, contact } =
    await getPortfolioData(locale);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}>
      <Header locale={locale} />
      <Container
        maxWidth='lg'
        sx={{
          py: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
        }}>
        <HeroSection profile={profile} />
        <AboutSection
          title={about.title}
          paragraphs={about.paragraphs}
          highlights={profile.highlights}
        />
        <StackListSection items={techStack} />
        <ProjectsSection projects={projects} />
        <LanguagesSection
          title={languagesInfo.title}
          languagesTitle={languagesInfo.languagesTitle}
          availabilityTitle={languagesInfo.availabilityTitle}
          languages={languagesInfo.languages}
          availability={languagesInfo.availability}
        />
        <ContactSection profile={profile} contact={contact} />
      </Container>
    </Box>
  );
}
