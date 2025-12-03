"use client";

import * as React from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  PaletteMode,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Detecta se o sistema está em dark mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? "#8b5cf6" : "#6d28d9", // roxo vibrante
          },
          background: prefersDarkMode
            ? { default: "#0b0b0b", paper: "#111" }
            : { default: "#fafafa", paper: "#fff" },
        },
        shape: {
          borderRadius: 16,
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
          fontSize: 14,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                background: prefersDarkMode
                  ? "linear-gradient(180deg, #0b0b0b 0%, #000 100%)"
                  : "linear-gradient(180deg, #fafafa 0%, #fff 100%)",
                transition: "background 0.3s ease",
              },
              a: {
                color: "inherit",
                textDecoration: "none",
              },
            },
          },
          MuiButton: {
            defaultProps: {
              disableElevation: true,
            },
            styleOverrides: {
              root: {
                borderRadius: 12,
                textTransform: "none",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backdropFilter: "blur(6px)",
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
