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
      sx={(theme) => {
        const isDark = theme.palette.mode === "dark";

        return {
          top: 0,
          zIndex: theme.zIndex.appBar,
          background: "transparent",
          backdropFilter: "blur(20px) saturate(170%)",
          WebkitBackdropFilter: "blur(20px) saturate(170%)",
          // fundo de vidro diferente por tema
          backgroundImage: isDark
            ? "linear-gradient(to bottom, rgba(15,23,42,0.95), rgba(15,23,42,0.7), rgba(15,23,42,0.15))"
            : "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(248,250,252,0.8), rgba(248,250,252,0.2))",
          borderBottom: isDark
            ? "1px solid rgba(15,23,42,0.9)"
            : "1px solid rgba(148,163,184,0.35)",
          boxShadow: isDark
            ? "0 18px 40px rgba(0,0,0,0.7)"
            : "0 10px 30px rgba(148,163,184,0.35)",
        };
      }}
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
          sx={(theme) => ({
            textDecoration: "none",
            color: theme.palette.text.primary,
            letterSpacing: 0.4,
          })}
        >
          Pamela Iglesias
        </Typography>

        {/* Nav + controles */}
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Links */}
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
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  fontSize: "0.8rem",
                  letterSpacing: 0.6,
                })}
              >
                {item.label.toUpperCase()}
              </Button>
            ))}
          </Stack>

          {/* Idioma + tema */}
          <Stack direction="row" spacing={1.2} alignItems="center">
            <IconButton
              size="small"
              sx={(theme) => ({
                color: theme.palette.text.primary,
              })}
            >
              <TranslateIcon fontSize="small" />
            </IconButton>

            <ToggleButtonGroup
              exclusive
              size="small"
              value={locale}
              onChange={handleLocaleChange}
              sx={(theme) => {
                const isDark = theme.palette.mode === "dark";
                return {
                  "& .MuiToggleButton-root": {
                    textTransform: "none",
                    fontSize: "0.7rem",
                    px: 1.6,
                    borderRadius: 999,
                    border: "none",
                    color: theme.palette.text.primary,
                    backgroundColor: "transparent",
                    "&.Mui-selected": {
                      background: isDark
                        ? "linear-gradient(135deg, rgba(129,140,248,0.35), rgba(59,130,246,0.55))"
                        : "linear-gradient(135deg, rgba(191,219,254,0.9), rgba(129,140,248,0.9))",
                      color: isDark ? "#e5edff" : "#0f172a",
                    },
                  },
                };
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
