"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Link as MLink,
  ToggleButtonGroup,
  ToggleButton,
  Box,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Locale } from "@/i18n/config";

type HeaderProps = { locale: Locale };

const navByLocale: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Languages", href: "#languages" },
    { label: "Contact", href: "#contact" },
  ],
  pt: [
    { label: "Sobre", href: "#sobre" },
    { label: "Stack", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Idiomas", href: "#idiomas" },
    { label: "Contato", href: "#contato" },
  ],
};

export function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const navItems = navByLocale[locale];

  const handleLocaleChange = (
    _event: React.MouseEvent<HTMLElement>,
    nextLocale: Locale | null
  ) => {
    if (!nextLocale || nextLocale === locale) return;
    const cleanPath = pathname?.replace(/^\/(en|pt)(\/?)/, "/") || "/";
    router.push(`/${nextLocale}${cleanPath === "/" ? "" : cleanPath}`);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={(theme) => ({
        top: 0,
        zIndex: theme.zIndex.appBar,
        background: "transparent",
        // 🔹 vidro de verdade
        backdropFilter: "blur(24px) saturate(170%)",
        WebkitBackdropFilter: "blur(24px) saturate(170%)",
        // faixa de vidro com gradiente e transparência
        backgroundImage:
          theme.palette.mode === "dark"
            ? "linear-gradient(to bottom, rgba(15,23,42,0.65), rgba(15,23,42,0.35), rgba(15,23,42,0.08))"
            : "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(248,250,252,0.7), rgba(248,250,252,0.12))",
        // tira bordona marcada
        borderBottom: "1px solid rgba(148,163,184,0.25)",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 18px 40px rgba(0,0,0,0.6)"
            : "0 18px 40px rgba(15,23,42,0.18)",
      })}
    >
      <Toolbar
        sx={{
          maxWidth: "1120px",
          mx: "auto",
          width: "100%",
          minHeight: { xs: 56, md: 64 },
          px: { xs: 1.5, md: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand */}
        <Typography
          component={MLink}
          href={`/${locale}`}
          variant="subtitle1"
          fontWeight={600}
          sx={{
            textDecoration: "none",
            color: "rgba(255,255,255,0.96)",
            letterSpacing: 0.4,
            textShadow: "0 2px 6px rgba(0,0,0,0.35)",
            whiteSpace: "nowrap",
          }}
        >
          Pamela Iglesias
        </Typography>

        {/* Nav + controls */}
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Nav links */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={MLink}
                href={item.href}
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.8rem",
                  letterSpacing: 0.6,
                  textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                {item.label.toUpperCase()}
              </Button>
            ))}
          </Stack>

          {/* Idioma + tema */}
          <Stack direction="row" spacing={1.2} alignItems="center">
            <IconButton size="small" sx={{ color: "rgba(255,255,255,0.9)" }}>
              <TranslateIcon fontSize="small" />
            </IconButton>

            <ToggleButtonGroup
              exclusive
              size="small"
              value={locale}
              onChange={handleLocaleChange}
              sx={{
                "& .MuiToggleButton-root": {
                  color: "rgba(255,255,255,0.85)",
                  border: "none",
                  px: 1.6,
                  textTransform: "none",
                  fontSize: "0.7rem",
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, rgba(191,219,254,0.35), rgba(129,140,248,0.55))",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  },
                },
              }}
            >
              <ToggleButton value="en">EN</ToggleButton>
              <ToggleButton value="pt">PT-BR</ToggleButton>
            </ToggleButtonGroup>

            <ThemeSwitcher />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
