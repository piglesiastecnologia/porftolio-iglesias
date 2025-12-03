"use client";

import { IconButton, Tooltip } from "@mui/material";
import { useThemeMode } from "@/providers/ThemeProvider";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function ThemeSwitcher() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Tooltip title={mode === "light" ? "Tema escuro" : "Tema claro"}>
      <IconButton
        onClick={toggleTheme}
        size="small"
        sx={{
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        {mode === "light" ? (
          <DarkModeIcon sx={{ transition: "0.3s" }} />
        ) : (
          <LightModeIcon sx={{ transition: "0.3s", color: "#ffeb3b" }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
