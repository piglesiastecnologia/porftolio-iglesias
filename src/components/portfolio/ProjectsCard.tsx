// src/components/portfolio/ProjectsCard.tsx
"use client";

import {
  Card,
  CardContent,
  Stack,
  Typography,
  Paper,
  Box,
  Button,
  Link as MLink,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import type { Project } from "@/data/portfolio.pt";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    period,
    summary,
    stack,
    links,
    impact,
    category,
    logo,
    accentColor,
  } = project;

  const topStripeBackground =
    accentColor ??
    "linear-gradient(90deg, #4f46e5 0%, #ec4899 50%, #f97316 100%)";

  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        borderColor:
          theme.palette.mode === "light"
            ? "rgba(148,163,184,0.35)"
            : "rgba(51,65,85,0.9)",
        bgcolor:
          theme.palette.mode === "light"
            ? theme.palette.background.paper
            : "rgba(2,6,23,0.96)",
        boxShadow:
          theme.palette.mode === "light"
            ? "0 18px 40px rgba(15,23,42,0.12)"
            : "0 22px 55px rgba(0,0,0,0.9)",
        transition:
          "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "rgba(129,140,248,0.9)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 22px 55px rgba(15,23,42,0.18)"
              : "0 26px 65px rgba(0,0,0,1)",
        },
      })}
    >
      {/* Faixa de cor no topo */}
      <Box
        sx={{
          height: 6,
          width: "100%",
          background: topStripeBackground,
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          minHeight: { xs: 260, md: 300 },
          px: { xs: 3, md: 4 },
          py: { xs: 2.5, md: 3 },
        }}
      >
        {/* Cabeçalho: texto + logo */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>
            {category && (
              <Typography
                variant="overline"
                sx={(theme) => ({
                  letterSpacing: 0.6,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  color:
                    theme.palette.mode === "light"
                      ? "rgba(100,116,139,0.95)"
                      : "rgba(148,163,184,0.9)",
                })}
              >
                {category}
              </Typography>
            )}
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>
            <Typography
              variant="caption"
              sx={(theme) => ({
                fontWeight: 500,
                color:
                  theme.palette.mode === "light"
                    ? "rgba(100,116,139,0.95)"
                    : "rgba(148,163,184,0.95)",
              })}
            >
              {period}
            </Typography>
          </Box>

          {logo && (
            <Box
              sx={(theme) => ({
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor:
                  theme.palette.mode === "light" ? "#0f172a" : "#020617",
                border: "2px solid rgba(148,163,184,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              })}
            >
              <Box
                component="img"
                src={logo}
                alt={`${title} logo`}
                sx={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </Stack>

        {/* Resumo */}
        <Typography
          variant="body2"
          sx={(theme) => ({
            mt: 0.5,
            fontSize: "0.9rem",
            color: theme.palette.text.secondary,
          })}
        >
          {summary}
        </Typography>

        {/* Stack */}
        <Stack
          direction="row"
          spacing={1}
          mt={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ rowGap: 1 }}
        >
          {stack.map((techItem) => (
            <Paper
              key={techItem.name}
              variant="outlined"
              sx={(theme) => ({
                px: 1.2,
                py: 0.4,
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.8,
                borderColor:
                  theme.palette.mode === "light"
                    ? "rgba(148,163,184,0.4)"
                    : "rgba(148,163,184,0.5)",
                bgcolor:
                  theme.palette.mode === "light"
                    ? "rgba(15,23,42,0.02)"
                    : "rgba(15,23,42,0.9)",
              })}
            >
              {techItem.icon ?? null}
              <Typography
                variant="caption"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              >
                {techItem.name}
              </Typography>
            </Paper>
          ))}
        </Stack>

        {/* Impacto */}
        <Box
          component="ul"
          sx={{
            pl: 2,
            my: 1.2,
            flexGrow: 1,
            "& li": { mb: 0.4 },
          }}
        >
          {impact.map((i) => (
            <li key={i}>
              <Typography
                variant="body2"
                sx={(theme) => ({
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: theme.palette.text.secondary,
                })}
              >
                {i}
              </Typography>
            </li>
          ))}
        </Box>

        {/* Links */}
        <Stack direction="row" spacing={1.5} mt="auto" flexWrap="wrap">
          {links.map((l) => (
            <Button
              key={l.label}
              size="small"
              component={MLink}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon />}
              sx={{
                textTransform: "none",
                px: 1.4,
                py: 0.4,
              }}
            >
              {l.label}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
