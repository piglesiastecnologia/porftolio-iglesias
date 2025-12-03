"use client";

import { AppBar, Toolbar, Typography, Box, Stack, Button } from "@mui/material";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Stack" },
  { id: "projetos", label: "Projetos" },
  { id: "idiomas", label: "Idiomas" },
//   { id: "integracoes", label: "Integrações" },
  { id: "contato", label: "Contato" },
];

function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Header() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        borderBottom: (t) =>
          t.palette.mode === "light"
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "lg",
          mx: "auto",
          width: "100%",
          gap: 2,
        }}
      >
        {/* Logo / Nome */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            component={Link}
            href="#"
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Pamela Iglesias
          </Typography>
        </Box>

        {/* Navegação desktop */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {sections.map((section) => (
            <Button
              key={section.id}
              size="small"
              color="inherit"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </Stack>

        {/* Theme toggle */}
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
