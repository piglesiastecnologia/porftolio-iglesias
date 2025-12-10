"use client";

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  Link as MLink,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import type { Profile, PortfolioData } from "@/data/portfolio.pt";
import type { Locale } from "@/i18n/config";

type ContactContent = PortfolioData["contact"];

type ContactSectionProps = {
  profile: Profile;
  contact: ContactContent;
  locale: Locale;
};

export function ContactSection({ profile, contact, locale }: ContactSectionProps) {
  const labels =
    locale === "en"
      ? {
          email: "Email",
          linkedin: "LinkedIn",
          github: "GitHub",
        }
      : {
          email: "E-mail",
          linkedin: "LinkedIn",
          github: "GitHub",
        };

  return (
    <Box
      id={locale === "en" ? "contact" : "contato"}
      sx={{ py: 4 }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
      >
        {contact.title}
      </Typography>

      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
        }}
      >
        <CardContent
          sx={{
            px: { xs: 3, md: 4 },
            py: { xs: 2.5, md: 3 },
          }}
        >
          {contact.description && (
            <Typography
              variant="body2"
              sx={{ mb: 2, maxWidth: 560 }}
            >
              {contact.description}
            </Typography>
          )}

          <Stack
            direction="row"
            spacing={2}
            mt={1}
            flexWrap="wrap"
            useFlexGap
          >
            <Button
              startIcon={<MailOutlineIcon />}
              component={MLink}
              href={`mailto:${profile.email}`}
            >
              {labels.email}
            </Button>

            <Button
              startIcon={<LinkedInIcon />}
              component={MLink}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.linkedin}
            </Button>

            <Button
              startIcon={<GitHubIcon />}
              component={MLink}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.github}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
