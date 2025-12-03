"use client";

import { IconButton, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeMode } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Usar tema claro" : "Usar tema escuro"}>
      <IconButton
        color="inherit"
        onClick={toggleTheme}
        aria-label="Alternar tema"
        size="small"
      >
        {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
