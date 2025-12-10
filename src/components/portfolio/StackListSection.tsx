"use client";

// src/components/portfolio/StackListSection.tsx
import { Box, Typography, Stack } from "@mui/material";
import { TechBadge } from "./TechBadge";
import type { Locale } from "@/i18n/config";

type StackListSectionProps = {
  items: { label: string; icon: React.ReactNode }[];
  locale: Locale;
};

export function StackListSection({ items, locale }: StackListSectionProps) {
  const title = locale === "en" ? "Tech Stack" : "Stack Técnico";

  return (
    <Box id="skills" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {title}
      </Typography>

      <Stack
        direction="row"
        spacing={1.2}
        useFlexGap
        flexWrap="wrap"
        sx={{ mt: 1 }}
      >
        {items.map((item) => (
          <TechBadge key={item.label} icon={item.icon} label={item.label} />
        ))}
      </Stack>
    </Box>
  );
}
