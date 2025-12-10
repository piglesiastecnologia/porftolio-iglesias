// src/theme/glassStyles.ts
import type { Theme } from "@mui/material/styles";

export const glassCard = (theme: Theme) => ({
  borderRadius: 32, // borda bem arredondada, estilo Apple
  border: "1px solid rgba(148,163,184,0.55)",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(15,23,42,0.78))"
      : "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.85))",
  backdropFilter: "blur(24px) saturate(170%)",
  WebkitBackdropFilter: "blur(24px) saturate(170%)",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 24px 60px rgba(0,0,0,0.75)"
      : "0 24px 60px rgba(15,23,42,0.16)",
  position: "relative",
  overflow: "hidden",

  // highlight suave no topo, tipo reflexo
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(to bottom, rgba(148,163,184,0.18), transparent 40%)"
        : "linear-gradient(to bottom, rgba(255,255,255,0.65), transparent 40%)",
    opacity: 0.9,
    pointerEvents: "none",
  },
});
