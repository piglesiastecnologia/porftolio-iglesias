"use client";

// src/components/portfolio/ProjectsSection.tsx
import { Box, Typography, Grid } from "@mui/material";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectsCard";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Box id="projetos" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Projetos em Destaque
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2.5, maxWidth: 520 }}
      >
        Três cases que resumem bem meu perfil: e-commerce próprio, modernização
        enterprise com design system e integrações de metadados com grandes
        players.
      </Typography>

      <Grid container spacing={2.5}>
        {projects.map((p) => (
          <Grid key={p.title} size={{ xs: 12, md: 6 }}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
