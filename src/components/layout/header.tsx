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

type HeaderProps = {
  locale: Locale;
};

const navByLocale: Record<
  Locale,
  { label: string; href: string }[]
> = {
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

    // tira o prefixo /en ou /pt da URL atual
    const cleanPath =
      pathname?.replace(/^\/(en|pt)(\/?)/, "/") || "/";

    router.push(`/${nextLocale}${cleanPath === "/" ? "" : cleanPath}`);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={(theme) => ({
        borderBottom: `1px solid ${
          theme.palette.mode === "light"
            ? "rgba(148,163,184,0.35)"
            : "rgba(15,23,42,0.9)"
        }`,
        backdropFilter: "blur(12px)",
        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(248,250,252,0.9)"
            : "rgba(2,6,23,0.92)",
      })}
    >
      <Toolbar
        sx={{
          maxWidth: "1120px",
          mx: "auto",
          width: "100%",
          minHeight: { xs: 56, md: 64 },
          px: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Brand */}
        <Typography
          component={MLink}
          href={`/${locale}`}
          variant="subtitle1"
          fontWeight={600}
          underline="none"
          sx={{
            textDecoration: "none",
            color: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          Pamela Iglesias
        </Typography>

        {/* NAV + LANG + THEME */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {/* NAV LINKS */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: "none", md: "flex" }, // some no mobile se quiser
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={MLink}
                href={item.href}
                sx={{
                  color: "text.primary",
                  fontSize: "0.85rem",
                  letterSpacing: 0.6,
                }}
              >
                {item.label.toUpperCase()}
              </Button>
            ))}
          </Stack>

          {/* LANG TOGGLE + THEME */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <IconButton size="small" disableRipple sx={{ cursor: "default" }}>
              <TranslateIcon fontSize="small" />
            </IconButton>
            <ToggleButtonGroup
              size="small"
              exclusive
              value={locale}
              onChange={handleLocaleChange}
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
