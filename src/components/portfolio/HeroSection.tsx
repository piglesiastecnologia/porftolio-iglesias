"use client";

import Image from "next/image";
import {
  Box,
  Stack,
  Typography,
  Button,
  Chip,
  Link as MLink,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceIcon from "@mui/icons-material/Place";

import type { Profile } from "@/data/portfolio.pt";
import type { Locale } from "@/i18n/config";

type HeroSectionProps = {
  profile: Profile;
  locale: Locale;
};

export function HeroSection({ profile, locale }: HeroSectionProps) {
  const labels =
    locale === "en"
      ? {
          overline: "Portfolio",
          relocationChip: "Open to relocation · Remote",
          email: "Email",
          cv: "Download CV",
        }
      : {
          overline: "Portfólio",
          relocationChip: "Aberta a relocation · Remoto",
          email: "E-mail",
          cv: "Baixar CV",
        };

  const cvHref =
    locale === "en"
      ? "/cv/pamela-iglesias-cv-en.pdf"
      : "/cv/pamela-iglesias-cv-ptbr.pdf";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },              // 👈 mobile first
        gap: { xs: 3, md: 4 },
        alignItems: { xs: "center", md: "center" },
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 3 },
        flexWrap: "wrap",
      }}
    >
      {/* Foto */}
      <Box
        sx={{
          width: { xs: 160, md: 200 },                             // 👈 menor no mobile
          height: { xs: 160, md: 200 },
          position: "relative",
          borderRadius: "50%",
          boxShadow: (t) =>
            t.palette.mode === "dark"
              ? "0 10px 30px rgba(0,0,0,.7)"
              : "0 12px 40px rgba(15,23,42,.18)",
          overflow: "hidden",
          flexShrink: 0,
          bgcolor: "background.paper",
        }}
      >
        <Image
          src={profile.photo}
          alt={`Foto de perfil – ${profile.name}`}
          fill
          sizes="200px"
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          textAlign: { xs: "center", md: "left" },               // 👈 centraliza no mobile
        }}
      >
        <Typography
          variant="overline"
          sx={{ letterSpacing: 3, textTransform: "uppercase" }}
          color="primary"
        >
          {labels.overline}
        </Typography>

        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            mt: 0.5,
            mb: 0.5,
            fontSize: { xs: "2rem", md: "2.8rem" },               // 👈 reduzido no celular
            lineHeight: { xs: 1.2, md: 1.15 },
          }}
        >
          {profile.name}
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            mb: 1.5,
            fontSize: { xs: "0.95rem", md: "1rem" },
          }}
        >
          {profile.headline}
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.5}
          alignItems={{ xs: "center", md: "center" }}
          justifyContent={{ xs: "center", md: "flex-start" }}
          mb={2}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <PlaceIcon fontSize="small" />
            <Typography variant="body2">{profile.location}</Typography>
          </Stack>
          <Chip
            size="small"
            label={labels.relocationChip}
            color="primary"
            variant="outlined"
          />
        </Stack>

        <Stack
          direction="row"
          spacing={1.5}
          mt={1}
          flexWrap="wrap"
          useFlexGap
          justifyContent={{ xs: "center", md: "flex-start" }}    // 👈 centraliza botões no mobile
        >
          {/* CV BUTTON */}
          <Button
            variant="contained"
            size="small"
            component={MLink}
            href={cvHref}
            download
          >
            {labels.cv}
          </Button>

          <Button
            variant="outlined"
            size="small"
            startIcon={<LinkedInIcon />}
            component={MLink}
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<GitHubIcon />}
            component={MLink}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            size="small"
            startIcon={<MailOutlineIcon />}
            component={MLink}
            href={`mailto:${profile.email}`}
          >
            {labels.email}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
