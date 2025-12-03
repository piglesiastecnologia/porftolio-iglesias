"use client";

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
} from "@mui/material";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useThemeMode() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeMode deve ser usado dentro de <ThemeProvider>");
  }
  return ctx;
}

function buildTheme(mode: ThemeMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#4f46e5" : "#818cf8",
      },
      background: {
        default: mode === "light" ? "#f9fafb" : "#020617",
        paper: mode === "light" ? "#ffffff" : "#0b1120",
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            transition:
              "background-color .2s ease, border-color .2s ease, box-shadow .2s ease",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
      },
    },
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 👇 Estado inicial FIXO, igual pra server e client
  const [mode, setMode] = useState<ThemeMode>("light");

  // 👇 Depois que montar no client, lemos localStorage / matchMedia
  useEffect(() => {
  try {
    const stored = localStorage.getItem("theme-mode") as ThemeMode | null;

    if (stored === "light" || stored === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(stored);
    } else if (window.matchMedia) {
      const prefersDark = window
        .matchMedia("(prefers-color-scheme: dark)")
        .matches;

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(prefersDark ? "dark" : "light");
    }
  } catch {
    // se der erro em localStorage, ignora
  }
}, []);


  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme-mode", next);
      } catch {
        // ignora erro
      }
      return next;
    });
  }, []);

  const theme = useMemo(() => buildTheme(mode), [mode]);
  const value = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
