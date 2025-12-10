"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  locale: Locale;
};

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

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();

  // Remove prefixo /pt ou /en da URL atual
  const cleanPath = pathname.replace(/^\/(pt|en)/, "") || "";

  return (
    <AppBar
      position='sticky'
      color='transparent'
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        borderBottom: (t) =>
          t.palette.mode === "light"
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid rgba(255,255,255,0.08)",
      }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 1.5, md: 2 },
          minHeight: { xs: 56, md: 64 },
        }}>
        {/* Logo / Nome */}
        <Box
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant='subtitle1'
            fontWeight={700}
            component={Link}
            href='#'
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}>
            Pamela Iglesias
          </Typography>
        </Box>

        {/* Navegação desktop */}
        <Stack
          direction='row'
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" } }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              size='small'
              color='inherit'
              onClick={() => scrollToSection(section.id)}>
              {section.label}
            </Button>
          ))}
        </Stack>

        {/* Language Switcher */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TranslateRoundedIcon fontSize='small' sx={{ opacity: 0.7 }} />

          <ToggleButtonGroup
            exclusive
            value={locale}
            size='small'
            sx={{
              "& .MuiToggleButton-root": {
                textTransform: "none",
                fontSize: "0.75rem",
                px: 1.5,
                py: 0.3,
                borderRadius: "8px",
                transition: "0.2s",
              },
            }}>
            <ToggleButton
              value='en'
              component={Link}
              href={`/en${cleanPath}`}
              sx={{
                opacity: locale === "en" ? 1 : 0.4,
                fontWeight: locale === "en" ? 700 : 400,
              }}>
              EN
            </ToggleButton>

            <ToggleButton
              value='pt'
              component={Link}
              href={`/pt${cleanPath}`}
              sx={{
                opacity: locale === "pt" ? 1 : 0.4,
                fontWeight: locale === "pt" ? 700 : 400,
              }}>
              PT-BR
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Theme toggle */}
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
