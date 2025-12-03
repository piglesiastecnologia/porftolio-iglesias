"use client";

// src/components/portfolio/AboutSection.tsx
import {
  Box,
  Typography,
  Card,
  CardContent
} from "@mui/material";

type AboutSectionProps = {
  title: string;
  paragraphs: readonly string[]; 
  highlights: readonly string[]; 
};

export function AboutSection({
  title,
  paragraphs,
  highlights,
}: AboutSectionProps) {
  return (
    <Box id="sobre" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Card variant="outlined">
        <CardContent>
          {paragraphs.map((p) => (
            <Typography key={p} paragraph sx={{ lineHeight: 1.7 }}>
              {p}
            </Typography>
          ))}

          {/* <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{ mt: 2, mb: 1 }}
          >
            Destaques da sua stack / foco profissional
          </Typography> */}

          {/* <Grid container spacing={1.5} mt={0.5}>
            {highlights.map((h) => (
              <Grid key={h}>
                <Chip
                  icon={<CheckCircleIcon />}
                  label={h}
                  size="small"
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid> */}
        </CardContent>
      </Card>
    </Box>
  );
}
