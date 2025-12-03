"use client";
import { Box } from "@mui/material";

export default function PegaIcon({
  size = 16,
  alt = "Pega Systems",
  src = "/icons/pega.png", // use .svg se tiver: "/icons/pega.svg"
  monochrome = true,
}: {
  size?: number;
  alt?: string;
  src?: string;
  monochrome?: boolean;
}) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: size,
        height: size,
        display: "block",
        objectFit: "contain",
        // filtros suaves (não destrutivos)
        filter: monochrome ? "grayscale(100%) contrast(1.05) opacity(.9)" : "none",
      }}
    />
  );
}
