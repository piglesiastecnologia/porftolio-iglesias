'use client';

import {
  Container,
  Typography,
  Box,
  Chip,
  Card,
  CardContent,
  Grid,
  Stack,
  Button,
  Link as MLink,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

export default function KaijuCase() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Case: Kaiju Comics
      </Typography>
      <Typography color="text.secondary">
        Problema → Solução → Resultados
      </Typography>

      {/* CONTEXTO */}
      <Box mt={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Contexto
            </Typography>
            <Typography variant="body2">
              E-commerce de colecionáveis com catálogo extenso e variações.
              Necessidade de checkout fluido (PIX/Cartão), cálculo de frete,
              painel do usuário e administração simples para equipe pequena.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* SOLUÇÃO */}
      <Box mt={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Solução
            </Typography>
            <Typography variant="body2">
              Backend Django REST modular (<b>products</b>, <b>orders</b>,
              <b> payments</b>, <b>shipping</b>, <b>promotions</b>) + Front em
              React/TS. Integrações: Mercado Pago Bricks (PIX/Cartão) e
              MelhorEnvio. Webhooks idempotentes, reconciliação e cálculo de
              totais centralizado para consistência.
            </Typography>
            <Box mt={1}>
              <Chip label="Django REST" size="small" sx={{ mr: 1 }} />
              <Chip label="React/TS" size="small" sx={{ mr: 1 }} />
              <Chip label="PostgreSQL" size="small" sx={{ mr: 1 }} />
              <Chip label="Mercado Pago" size="small" sx={{ mr: 1 }} />
              <Chip label="MelhorEnvio" size="small" />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* RESPONSABILIDADES */}
      <Box mt={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Responsabilidades
            </Typography>
            <Grid container spacing={1}>
              {[
                'Arquitetura do domínio e apps (Products, Orders, Payments...)',
                'Integração Mercado Pago Bricks + Webhooks (idempotência)',
                'Integração MelhorEnvio e cálculo de frete',
                'Painel do usuário com timeline de pedidos',
                'Admin custom e testes (pytest / RTL)',
                'Observabilidade básica e reprocessamento de pagamentos',
              ].map((r) => (
                <Grid size={{ xs: 12, sm: 6}} key={r}>
                  <Typography variant="body2">• {r}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* RESULTADOS / MÉTRICAS (preencha à vontade) */}
      <Box mt={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Resultados
            </Typography>
            <Grid container spacing={1}>
              {[
                'Checkout mais rápido (ex.: −20% tempo médio)*',
                'Falhas de webhook reduzidas por idempotência*',
                'Agilidade de operação (reprocesso manual no admin)*',
              ].map((m) => (
                <Grid size={{ xs: 12, sm: 6}} key={m}>
                  <Typography variant="body2">• {m}</Typography>
                </Grid>
              ))}
            </Grid>
            <Typography variant="caption" color="text.secondary" display="block" mt={1.5}>
              * Substitua por números reais quando possível.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* LINKS */}
      <Box mt={3}>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button
            size="small"
            component={MLink}
            href="https://kaijucomics.com.br/"
            target="_blank"
            endIcon={<LaunchIcon />}
          >
            Site em produção
          </Button>
          <Button
            size="small"
            component={MLink}
            href="https://github.com/piglesiastecnologia"
            target="_blank"
            endIcon={<LaunchIcon />}
          >
            GitHub (org)
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
