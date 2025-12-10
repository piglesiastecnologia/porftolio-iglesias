/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// src/components/portfolio/ProjectsSection.tsx
import { Box, Typography, Grid } from "@mui/material";
import type { Project, PortfolioData } from "@/data/portfolio.pt";
import type { Locale } from "@/i18n/config";
import { ProjectCard } from "@/components/portfolio/ProjectsCard";

type ProjectsSectionProps = {
  projects: Project[];
  locale: Locale;
};

export function ProjectsSection({ projects, locale }: ProjectsSectionProps) {
  const texts =
    locale === "en"
      ? {
          id: "projects",
          title: "Featured Projects",
          description:
            "Three case studies that represent my profile well: a modular e-commerce I own, enterprise modernization with design systems, and metadata integrations with major platforms.",
        }
      : {
          id: "projetos",
          title: "Projetos em Destaque",
          description:
            "Três cases que resumem bem meu perfil: e-commerce próprio, modernização enterprise com design system e integrações de metadados com grandes players.",
        };

  return (
    <Box id={texts.id} sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {texts.title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2.5, maxWidth: 520 }}
      >
        {texts.description}
      </Typography>

      <Grid container spacing={2.5}>
        {projects.map((p) => (
          <Grid key={p.title} size={{xs: 12, md: 6}}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
