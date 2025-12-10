// src/theme/glassStyles.ts
import type { Theme } from "@mui/material/styles";

export const glassCard = (theme: Theme) => ({
  borderRadius: 22,
  border: theme.palette.mode === "dark"
    ? "1px solid rgba(255,255,255,0.06)"
    : "1px solid rgba(0,0,0,0.08)",

  background: theme.palette.mode === "dark"
    ? "rgba(255,255,255,0.06)"
    : "rgba(255,255,255,0.65)",

  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0,0,0,0.35)"
      : "0 8px 32px rgba(15,23,42,0.12)",

  overflow: "hidden",
  position: "relative",
});
