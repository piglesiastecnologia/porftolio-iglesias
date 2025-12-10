// src/data/portfolio.en.ts
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
import type { PortfolioData, TechStackItem } from "./portfolio.pt";

export const profile: PortfolioData["profile"] = {
  name: "Pamela Fabia Iglesias",
  email: "pamela@iglesiastecnologia.com.br",
  github: "https://github.com/piglesiastecnologia",
  linkedin: "https://www.linkedin.com/in/pamelaiglesias/",
  photo: "/profile.png",
  location: "São Paulo, BR · Remote / Relocation-ready",
  headline: "Full-stack Engineer · Pega System Architect",
  highlights: [
    "React/TypeScript",
    "Python (Django)",
    "Pega 23/24/25 (Constellation UI)",
  ],
};

// About – EN
export const about: PortfolioData["about"] = {
  title: "About",
  paragraphs: [
    "I built my career in Technology by getting close to real problems first. I started in technical support, which taught me to listen, diagnose and solve issues under pressure. From there, I moved into Web Development and Software Engineering, focusing on designing systems that are robust, maintainable and pleasant to use.",
    "Collaborating with global teams across time zones has sharpened my communication and my sense of ownership. I care about clear architecture, clean code and solutions that actually make people’s work easier.",
    "Today I work mainly with React/TypeScript, Python/Django, Pega (Constellation UI) and complex integrations — from payment platforms to ONIX/XML and REST/SOAP APIs.",
  ],
};

// Tech stack – EN (labels em inglês)
export const techStack: PortfolioData["techStack"] = [
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

// Languages & availability – EN
export const languagesInfo: PortfolioData["languagesInfo"] = {
  title: "Languages & Availability",
  languagesTitle: "Languages",
  availabilityTitle: "Availability",
  languages: [
    "Portuguese (C2 – Native)",
    "English (C1 – Advanced · daily work language)",
    "French (A2 - ILSC Montréal 2025)",
    "Spanish (B2 – Upper Intermediate)",
  ],
  availability: [
    "Remote work",
    "Distributed / multi–time zone teams",
    "Open to relocation",
  ],
};

// Integrations & APIs – EN
export const integrations: PortfolioData["integrations"] = {
  title: "Integrations & APIs",
  rest: {
    title: "RESTful",
    description:
      "JWT/OAuth authentication, rate limiting, retry/backoff strategies; idempotent webhooks and reconciliation; payment flows with Mercado Pago Bricks.",
  },
  soap: {
    title: "SOAP / XML",
    description:
      "Reading/generating ONIX 3.0 XML, data cleaning and encoding, XSD validation, and legacy integrations (PHP/Cake, Python).",
  },
};

export type Project = PortfolioData["projects"][number];

// Projects – EN
export const projects: Project[] = [
  {
    title: "Kaiju Comics – E-commerce",
    period: "2024–2025",
    summary:
      "Modular e-commerce for comics and collectibles: catalog with variations, cart, checkout, Mercado Pago Bricks (PIX/Card), MelhorEnvio, user area and custom admin.",
    stack: [
      { name: "React", icon: <SiReact size={14} /> },
      { name: "Django", icon: <SiDjango size={14} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={14} /> },
      { name: "Docker", icon: <SiDocker size={14} /> },
      { name: "Mercado Pago", icon: <SiMercadopago size={14} /> },
    ] as TechStackItem[],
    links: [
      { label: "Website", href: "https://kaijucomics.com.br/" },
      { label: "Case study", href: "/case/kaiju" },
    ],
    impact: [
      "Designed a modular architecture (products, orders, payments, shipping, promotions) to support future growth.",
      "Implemented order timelines, PIX QR integration and webhook-based reconciliation for reliable payments.",
      "Centralized total amount calculation on the backend to ensure consistency and idempotent payment flows.",
    ],
    category: "Case · E-commerce / Retail",
    logo: "/logos/kaiju.png",
    accentColor: "#ff0000",
  },
  {
    title: "Pega Constellation",
    period: "2025",
    summary:
      "Technical lead on the modernization of legacy Pega applications to Constellation UI. Built custom React-based widgets, standardized visual patterns and helped automate core workflows.",
    stack: [
      { name: "Pega 24", icon: <PegaIcon size={14} /> },
      { name: "Infinity Server", icon: <PegaIcon size={14} /> },
      { name: "DX API", icon: <PegaIcon size={14} /> },
      { name: "Constellation UI", icon: <PegaIcon size={14} /> },
      { name: "React", icon: <SiReact size={14} /> },
    ] as TechStackItem[],
    links: [
      {
        label: "Constellation UI Gallery – Case Launcher (widget)",
        href: "https://pegasystems.github.io/constellation-ui-gallery/?path=/docs/widgets-case-launcher--docs",
      },
    ],
    impact: [
      "Published an official component in the Pega Constellation UI Gallery, referenced by internal teams.",
      "Recognized internally for contributions to the design system and front-end best practices.",
      "Defined visual guidelines and React patterns used as a baseline for new Constellation modules.",
    ],
    category: "Case · Design System / Enterprise",
    logo: "/logos/pega.png",
    accentColor: "#0ea5e9",
  },
  {
    title: "Bookinfo Metadados v2 — ONIX + Amazon",
    period: "2018–2025",
    summary:
      "Second generation of an editorial metadata platform. Designed and led the evolution of a daily ONIX 3.0 pipeline with automatic delivery to Amazon and other channels.",
    stack: [
      { name: "PHP/CakePHP", icon: <SiPhp size={14} /> },
      { name: "MySQL", icon: <SiMysql size={14} /> },
      { name: "ONIX 3.0", icon: <MenuBookIcon fontSize='inherit' /> },
      { name: "Cron Jobs", icon: <ScheduleIcon fontSize='inherit' /> },
      { name: "Amazon", icon: <SiAmazon size={14} /> },
    ] as TechStackItem[],
    links: [{ label: "Website", href: "https://bookinfometadados.com.br/" }],
    impact: [
      "Designed the ONIX 3.0 pipeline end-to-end (generation, validation and encoding sanitation).",
      "Maintained daily integrations with Amazon to push and update full catalog metadata.",
      "Implemented cron-based routines for retries, reprocessing and failure notifications.",
      "Standardized data formats and reduced manual effort for editorial/operations teams.",
      "Drove ongoing evolution from 2018 to 2025, including maintenance and new integrations.",
    ],
    category: "Case · Metadata / Integrations",
    logo: "/logos/bookinfo.png",
    accentColor: "#f97316",
  },
];

// Contact – EN
export const contact: PortfolioData["contact"] = {
  title: "Contact",
  description:
    "Open to remote roles and relocation. Happy to talk about architecture, e-commerce platforms or legacy modernization.",
};

export const portfolioDataEn: PortfolioData = {
  profile,
  about,
  techStack,
  languagesInfo,
  integrations,
  projects,
  contact,
};
