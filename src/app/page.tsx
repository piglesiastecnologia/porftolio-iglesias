"use client";

import { Container, Box } from "@mui/material";

import { Header } from "@/components/layout/header";
import {
  profile,
  techStack,
  projects,
  about,
  languagesInfo,
  contact,
} from "@/data/portfolio";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection"; // você cria igual ao HeroSection
import { StackListSection } from "@/components/portfolio/StackListSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { LanguagesSection } from "@/components/portfolio/LanguagesSection";
// import { IntegrationsSection } from "@/components/portfolio/IntegrationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        // Fundo suave: adapta pra light/dark
        background: (t) =>
          t.palette.mode === "light"
            ? "radial-gradient(circle at top, #eef2ff 0, #f9fafb 40%, #ffffff 80%)"
            : "radial-gradient(circle at top, #020617 0, #020617 40%, #020617 80%)",
        color: "text.primary",
      }}>
      <Header />

      <Container
        maxWidth='lg'
        sx={{
          py: { xs: 4, md: 6 },
          // layout mais “respirado”
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
        }}>
        {/* HERO */}
        <HeroSection profile={profile} />


        {/* SOBRE */}
        <AboutSection
          title={about.title}
          paragraphs={about.paragraphs}
          highlights={profile.highlights}
        />

        {/* SKILLS */}
        <StackListSection items={techStack} />

        {/* PROJETOS */}
        <ProjectsSection projects={projects} />

        {/* IDIOMAS & DISPONIBILIDADE */}
        <LanguagesSection
          title={languagesInfo.title}
          languagesTitle={languagesInfo.languagesTitle}
          availabilityTitle={languagesInfo.availabilityTitle}
          languages={languagesInfo.languages}
          availability={languagesInfo.availability}
        />

        {/* INTEGRAÇÕES */}
        {/* <Box id='integracoes' sx={{ py: 4 }}>
        <Typography variant='h5' fontWeight={700} gutterBottom>
          Integrações & APIs
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card variant='outlined'>
              <CardContent>
                <Typography fontWeight={700} gutterBottom>
                  RESTful
                </Typography>
                <Typography variant='body2'>
                  Autenticação JWT/OAuth, rate limit, retry/backoff; webhooks
                  idempotentes e reconciliação; pagamentos: Mercado Pago Bricks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card variant='outlined'>
              <CardContent>
                <Typography fontWeight={700} gutterBottom>
                  SOAP / XML
                </Typography>
                <Typography variant='body2'>
                  Leitura/geração de XML (ONIX 3.0), saneamento/encoding,
                  validação via XSD, integrações legadas (PHP/Cake, Python).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box> */}

        {/* CONTATO */}
        <ContactSection profile={profile} contact={contact} />
      </Container>
    </Box>
  );
}
