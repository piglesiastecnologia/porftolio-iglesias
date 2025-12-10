// src/data/portfolio.pt.ts
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiMercadopago,
  SiPhp,
  SiMysql,
  SiAmazon,
  SiPython,
  SiFigma,
  SiMui,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

import ScheduleIcon from "@mui/icons-material/Schedule";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import PegaIcon from "@/components/icons/PegaIcon";

export type TechStackItem = { name: string; icon?: React.ReactNode };

export type Profile = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  photo: string;
  location: string;
  headline: string;
  highlights: string[];
};

export const profile: Profile = {
  name: "Pamela Fabia Iglesias",
  email: "pamela@iglesiastecnologia.com.br",
  github: "https://github.com/piglesiastecnologia",
  linkedin: "https://www.linkedin.com/in/pamelaiglesias/",
  photo: "/profile.png",
  location: "São Paulo, BR · Remoto / Relocation",
  headline: "Full-stack Engineer · Pega System Architect",
  highlights: [
    "React/TS",
    "Python (Django)",
    "Pega 23/24/25 (Constellation UI)",
  ],
};


// 🔹 Sobre – PT
export const about = {
  title: "Sobre",
  paragraphs: [
    "Sou uma profissional com trajetória sólida em Tecnologia da Informação. Iniciei minha carreira em suporte técnico, onde desenvolvi um olhar analítico e orientado à resolução de problemas. Com o tempo, aprofundei meus estudos em Desenvolvimento de Sistemas Web e, desde então, venho atuando em projetos que unem engenharia de software e arquitetura de soluções, sempre com foco em eficiência, automação e experiência do usuário.",
    "Acredito que tecnologia é sobre melhorar a vida das pessoas e é isso que me motiva a projetar soluções bem pensadas e funcionais.",
    "Hoje atuo com React/TypeScript, Python/Django, Pega (Constellation UI) e integrações complexas (pagamentos, ONIX, APIs REST/SOAP).",
  ],
};

// 🔹 Stack principal (Stack List)
export const techStack = [
  { label: "React", icon: <SiReact size={16} /> },
  { label: "Python", icon: <SiPython size={16} /> },
  { label: "Django", icon: <SiDjango size={16} /> },
  { label: "Pega (PCSSA)", icon: <PegaIcon size={16} /> },
  { label: "PostgreSQL", icon: <SiPostgresql size={16} /> },
  { label: "REST/SOAP/XML", icon: <TbApi size={16} /> },
  { label: "Auth/JWT/OAuth", icon: <MdSecurity size={16} /> },
  { label: "UI/UX", icon: <SiFigma size={16} /> },
  { label: "Material UI", icon: <SiMui size={16} /> },
];

// 🔹 Idiomas & disponibilidade – PT
export const languagesInfo = {
  title: "Idiomas & Disponibilidade",
  languagesTitle: "Idiomas",
  availabilityTitle: "Disponibilidade",
  languages: [
    "Português (C2 – Nativo)",
    "Inglês (C1 – Avançado)",
    "Espanhol (B2 – Intermediário Avançado)",
    "French (B1 - Intermediário)",
  ],
  availability: [
    "Remoto",
    "Fuso global / times distribuídos",
    "Relocation (aberta)",
  ],
};

// 🔹 Integrações & APIs – PT
export const integrations = {
  title: "Integrações & APIs",
  rest: {
    title: "RESTful",
    description:
      "Autenticação JWT/OAuth, rate limit, retry/backoff; webhooks idempotentes e reconciliação; pagamentos: Mercado Pago Bricks.",
  },
  soap: {
    title: "SOAP / XML",
    description:
      "Leitura/geração de XML (ONIX 3.0), saneamento/encoding, validação via XSD, integrações legadas (PHP/Cake, Python).",
  },
};

// 🔹 Projetos em destaque – PT
export type Project = {
  title: string;
  period: string;
  summary: string;
  stack: TechStackItem[];
  links: { label: string; href: string }[];
  impact: string[];
  category?: string;
  logo?: string;
  accentColor?: string;
  preview?: string;
};

export const projects: Project[] = [
  {
    title: "Kaiju Comics – E-commerce",
    period: "2024–2025",
    summary:
      "Catálogo com variações, carrinho, checkout, Mercado Pago Bricks (PIX/Cartão), MelhorEnvio, painel do usuário e admin custom.",
    stack: [
      { name: "React", icon: <SiReact size={14} /> },
      { name: "Django", icon: <SiDjango size={14} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={14} /> },
      { name: "Docker", icon: <SiDocker size={14} /> },
      { name: "Mercado Pago", icon: <SiMercadopago size={14} /> },
    ] as TechStackItem[],
    links: [
      { label: "Site", href: "https://kaijucomics.com.br/" },
      // { label: "Case", href: "/case/kaiju" },
    ],
    impact: [
      "Arquitetura modular (products, orders, payments, shipping, promotions)",
      "Timeline de pedidos + QR PIX; reconciliação via Webhooks",
      "Cálculo consistente de totais e idempotência no backend",
    ],
    category: "Case · E-commerce / Retail",
    logo: "/logos/kaiju.png",
    accentColor: "#ff0000",
  },
  {
    title: "Pega Constellation",
    period: "2025",
    summary:
      "Liderança técnica na modernização de aplicações legadas para Constellation UI. Desenvolvimento de componentes React customizados, padronização visual e automação de workflows.",
    stack: [
      { name: "Pega 24", icon: <PegaIcon size={14} /> },
      { name: "Infinity Server", icon: <PegaIcon size={14} /> },
      { name: "DX API", icon: <PegaIcon size={14} /> },
      { name: "Constellation UI", icon: <PegaIcon size={14} /> },
      { name: "React", icon: <SiReact size={14} /> },
    ] as TechStackItem[],
    links: [
      {
        label: "Constellation UI Gallery - Case Launcher (widget)",
        href: "https://pegasystems.github.io/constellation-ui-gallery/?path=/docs/widgets-case-launcher--docs",
      },
    ],
    impact: [
      "Publicação de componente oficial na Pega Constellation UI Gallery",
      "Reconhecimento interno por destaque em design system e inovação",
      "Implementação de guidelines visuais e práticas React para novos módulos",
    ],
    category: "Case · Design System / Enterprise",
    logo: "/logos/pega.png",
    accentColor: "#0ea5e9",
  },
  {
    title: "Bookinfo Metadados v2 — ONIX + Amazon",
    period: "2018–2025",
    summary:
      "Idealização e liderança técnica da segunda versão do sistema de metadados editoriais. Pipeline diário de ONIX 3.0 com envio automático para Amazon (e outros canais) e saneamento de dados.",
    stack: [
      { name: "PHP/CakePHP", icon: <SiPhp size={14} /> },
      { name: "MySQL", icon: <SiMysql size={14} /> },
      { name: "ONIX 3.0", icon: <MenuBookIcon fontSize='inherit' /> },
      { name: "Cron Jobs", icon: <ScheduleIcon fontSize='inherit' /> },
      { name: "Amazon", icon: <SiAmazon size={14} /> },
    ] as TechStackItem[],
    links: [{ label: "Site", href: "https://bookinfometadados.com.br/" }],
    impact: [
      "Arquitetura e implementação do pipeline ONIX 3.0 (geração, validação e saneamento de encoding)",
      "Integração diária com a Amazon para envio/atualização de metadados de catálogo",
      "Rotinas automáticas via cron (reprocesso, retries e notificações em caso de falha)",
      "Padronização de formatos e redução de retrabalho para operações/editorial",
      "Evolução contínua 2018–2025: manutenção, melhorias e novas integrações",
    ],
    category: "Case · Metadata / Integrations",
    logo: "/logos/bookinfo.png",
    accentColor: "#f97316",
  },
];

// 🔹 Contato – PT
export const contact = {
  title: "Contato",
  description:
    "Aberta a oportunidades remotas e relocation. Vamos conversar sobre arquitetura, e-commerce ou modernização de sistemas?",
};

// // agregado pra facilitar o loader
// export const portfolioDataPt = {
//   profile,
//   about,
//   techStack,
//   languagesInfo,
//   integrations,
//   projects,
//   contact,
// };

// export type PortfolioData = typeof portfolioDataPt;

export type PortfolioData = {
  profile: Profile;
  about: typeof about;
  techStack: typeof techStack;
  languagesInfo: typeof languagesInfo;
  integrations: typeof integrations;
  projects: Project[];
  contact: typeof contact;
};

export const portfolioDataPt: PortfolioData = {
  profile,
  about,
  techStack,
  languagesInfo,
  integrations,
  projects,
  contact,
};

