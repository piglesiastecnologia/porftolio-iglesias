"use client";

import { Box, Card, CardContent, Stack, Typography, Button, Link as MLink } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import type { Profile } from "@/data/portfolio";

type ContactContent = {
  title: string;
  description?: string;
};

type ContactSectionProps = {
  profile: Profile;
  contact: ContactContent;
};

export function ContactSection({ profile, contact }: ContactSectionProps) {
  return (
    <Box id="contato" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {contact.title}
      </Typography>

      <Card variant="outlined">
        <CardContent sx={{ px: { xs: 3, md: 4 }, py: { xs: 2.5, md: 3 } }}>
          {contact.description && (
            <Typography variant="body2" sx={{ mb: 2, maxWidth: 560 }}>
              {contact.description}
            </Typography>
          )}

          <Stack direction="row" spacing={2} mt={1} flexWrap="wrap" useFlexGap>
            <Button
              startIcon={<MailOutlineIcon />}
              component={MLink}
              href={`mailto:${profile.email}`}
            >
              E-mail
            </Button>
            <Button
              startIcon={<LinkedInIcon />}
              component={MLink}
              href={profile.linkedin}
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              startIcon={<GitHubIcon />}
              component={MLink}
              href={profile.github}
              target="_blank"
            >
              GitHub
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
