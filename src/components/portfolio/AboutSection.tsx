"use client";

import { Box, Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import type { Locale } from "@/i18n/config";

type AboutSectionProps = {
  title: string;
  paragraphs: string[];
  highlights: string[];
  locale: Locale;
};

export function AboutSection({
  title,
  paragraphs,
  highlights,
  locale,
}: AboutSectionProps) {
  const subtitle =
    locale === "en"
      ? "A bit about how I think and work."
      : "Um pouco sobre como eu penso e trabalho.";

  return (
    <Box id={locale === "en" ? "about" : "sobre"} sx={{ py: { xs: 3, md: 4 } }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={(theme) => ({
          mb: 2,
          color: theme.palette.text.secondary,
        })}
      >
        {subtitle}
      </Typography>

      <Card
        variant="outlined"
        sx={(theme) => ({
          borderRadius: 3,
          borderColor:
            theme.palette.mode === "light"
              ? "rgba(148,163,184,0.35)"
              : "rgba(30,64,175,0.7)",
          bgcolor:
            theme.palette.mode === "light"
              ? "rgba(249,250,251,0.9)"
              : "rgba(15,23,42,0.98)",
        })}
      >
        <CardContent
          sx={{
            px: { xs: 3, md: 4 },
            py: { xs: 3, md: 3.5 },
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {/* PARÁGRAFOS – AGORA COM KEY */}
          {paragraphs.map((p, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              {p}
            </Typography>
          ))}

          {/* HIGHLIGHTS – TAMBÉM COM KEY */}
          {highlights.length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 1.5 }}
            >
              {highlights.map((h) => (
                <Chip
                  key={h}
                  label={h}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: 999,
                    borderStyle: "dashed",
                  }}
                />
              ))}
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
