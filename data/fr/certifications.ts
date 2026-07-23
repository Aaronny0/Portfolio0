import type { Certification } from "@/types/portfolio";

export const obtainedCertifications: Certification[] = [
  { name: "CCNA 1 — Introduction to Networks", issuer: "Cisco", date: "Avril 2025", status: "Obtenu" },
  { name: "CCNA 2 — Switching, Routing and Wireless Essentials", issuer: "Cisco", date: "Février 2026", status: "Obtenu" },
  { name: "Formation intensive en anglais", issuer: "CEBELAE", status: "Obtenu" },
];

export const currentCertifications: Certification[] = [
  { name: "CCNA 3 — Enterprise Networking, Security and Automation", issuer: "Cisco", objective: "Objectif : avant décembre 2026", status: "En cours" },
  { name: "CyberOps Associate", issuer: "Cisco", status: "En cours" },
];

export const academicTraining: Certification = {
  name: "Licence Professionnelle Cybersécurité et Systèmes d’Information",
  issuer: "Pigier Bénin",
  date: "2024 — 2027",
  status: "En cours",
};
