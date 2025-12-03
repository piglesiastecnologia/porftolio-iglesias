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

import type { Profile } from "@/data/portfolio";

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 3, md: 4 },
        alignItems: { xs: "flex-start", md: "center" },
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 3 },
        flexWrap: "wrap",
      }}
    >
      {/* Foto redonda */}
      <Box
        sx={{
          width: 200,
          height: 200,
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

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="overline"
          sx={{ letterSpacing: 3, textTransform: "uppercase" }}
          color="primary"
        >
          Portfolio
        </Typography>

        <Typography variant="h3" fontWeight={800} sx={{ mt: 0.5, mb: 0.5 }}>
          {profile.name}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1.5 }}>
          {profile.headline}
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          mb={2}
          flexWrap="wrap"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <PlaceIcon fontSize="small" />
            <Typography variant="body2">{profile.location}</Typography>
          </Stack>
          <Chip
            size="small"
            label="Open to relocation · Remote"
            color="primary"
            variant="outlined"
          />
        </Stack>

        {/* <Stack direction="row" spacing={1} mb={2} flexWrap="wrap" useFlexGap>
          {profile.highlights.map((h) => (
            <Chip
              key={h}
              label={h}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 999, borderStyle: "dashed" }}
            />
          ))}
        </Stack> */}

        <Stack direction="row" spacing={2} mt={1} flexWrap="wrap" useFlexGap>
          <Button
            variant="contained"
            size="small"
            startIcon={<LinkedInIcon />}
            component={MLink}
            href={profile.linkedin}
            target="_blank"
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
          >
            GitHub
          </Button>
          <Button
            size="small"
            startIcon={<MailOutlineIcon />}
            component={MLink}
            href={`mailto:${profile.email}`}
          >
            E-mail
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
