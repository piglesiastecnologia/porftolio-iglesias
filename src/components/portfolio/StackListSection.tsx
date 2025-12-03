// src/components/portfolio/StackListSection.tsx
import { Box, Typography, Stack } from "@mui/material";
import { TechBadge } from "./TechBadge";

type StackListSectionProps = {
  items: { label: string; icon: React.ReactNode }[];
};

export function StackListSection({ items }: StackListSectionProps) {
  return (
    <Box id="skills" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Stack List
      </Typography>

      <Stack direction="row" spacing={1.2} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
        {items.map((item) => (
          <TechBadge key={item.label} icon={item.icon} label={item.label} />
        ))}
      </Stack>
    </Box>
  );
}
