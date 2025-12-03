// src/components/portfolio/LanguagesSection.tsx
"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

type LanguagesSectionProps = {
  title: string;
  languagesTitle: string;
  availabilityTitle: string;
  languages: string[];
  availability: string[];
};

export function LanguagesSection({
  title,
  languagesTitle,
  availabilityTitle,
  languages,
  availability,
}: LanguagesSectionProps) {
  return (
    <Box id="idiomas" sx={{ py: 4 }}>
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
        Idiomas que uso no dia a dia e como me conecto com times distribuídos,
        clientes globais e contextos multiculturais.
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
              : "rgba(15,23,42,0.95)",
        })}
      >
        <CardContent
          sx={{
            px: { xs: 3, md: 4 },
            py: { xs: 3, md: 3.5 },
          }}
        >
          <Grid container spacing={3}>
            {/* Coluna idiomas */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={(theme) => ({
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor:
                        theme.palette.mode === "light"
                          ? "rgba(129,140,248,0.12)"
                          : "rgba(30,64,175,0.5)",
                    })}
                  >
                    <TranslateIcon fontSize="small" />
                  </Box>
                  <div>
                    <Typography variant="subtitle2">{languagesTitle}</Typography>
                    <Typography
                      variant="caption"
                      sx={(theme) => ({
                        color: theme.palette.text.secondary,
                      })}
                    >
                      Níveis alinhados com uso real em projetos e viagens.
                    </Typography>
                  </div>
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {languages.map((lang) => (
                    <Chip
                      key={lang}
                      label={lang}
                      size="medium"
                      sx={(theme) => ({
                        borderRadius: 999,
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "white"
                            : "rgba(15,23,42,0.9)",
                        borderColor:
                          theme.palette.mode === "light"
                            ? "rgba(148,163,184,0.5)"
                            : "rgba(148,163,184,0.6)",
                      })}
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Coluna disponibilidade */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={(theme) => ({
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor:
                        theme.palette.mode === "light"
                          ? "rgba(52,211,153,0.14)"
                          : "rgba(16,185,129,0.35)",
                    })}
                  >
                    <PublicIcon fontSize="small" />
                  </Box>
                  <div>
                    <Typography variant="subtitle2">
                      {availabilityTitle}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={(theme) => ({
                        color: theme.palette.text.secondary,
                      })}
                    >
                      Como posso atuar em times globais e projetos long term.
                    </Typography>
                  </div>
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {availability.map((item) => {
                    const icon =
                      item.toLowerCase().includes("fuso") ? (
                        <AccessTimeFilledIcon fontSize="inherit" />
                      ) : item.toLowerCase().includes("relocation") ? (
                        <FlightTakeoffIcon fontSize="inherit" />
                      ) : undefined;

                    return (
                      <Chip
                        key={item}
                        label={item}
                        icon={icon}
                        size="medium"
                        color="success"
                        variant="outlined"
                        sx={(theme) => ({
                          borderRadius: 999,
                          bgcolor:
                            theme.palette.mode === "light"
                              ? "white"
                              : "rgba(15,23,42,0.9)",
                          borderColor:
                            theme.palette.mode === "light"
                              ? "rgba(52,211,153,0.5)"
                              : "rgba(52,211,153,0.7)",
                          color:
                            theme.palette.mode === "light"
                              ? "rgb(22,101,52)"
                              : "rgb(187,247,208)",
                          "& .MuiChip-icon": {
                            fontSize: "1rem",
                          },
                        })}
                      />
                    );
                  })}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
