"use client";

// src/components/portfolio/TechBadge.tsx
import { Paper, Typography } from "@mui/material";

type TechBadgeProps = {
  icon: React.ReactNode;
  label: string;
};

export function TechBadge({ icon, label }: TechBadgeProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        px: 1.5,
        py: 1,
        borderRadius: 2,
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        transition: "all 0.2s ease",
        "&:hover": {
          bgcolor: "primary.main",
          color: "primary.contrastText",
          "& svg": { transform: "scale(1.1)" },
        },
        "& svg": {
          transition: "transform 0.2s ease",
        },
      }}
    >
      {icon}
      <Typography variant="body2" fontWeight={600}>
        {label}
      </Typography>
    </Paper>
  );
}
