import type { Expertise } from "@/types/portfolio";

export const expertise: Expertise[] = [
  {
    title: "Interfaces web",
    description: "Des interfaces lisibles, responsive et accessibles, structurées autour des usages avant les effets visuels.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    project: "YCATE Luxury",
  },
  {
    title: "Applications full-stack",
    description: "Des produits complets qui relient écrans, données, règles métier et parcours utilisateurs cohérents.",
    technologies: ["Next.js", "React", "Node.js", "Serverless"],
    project: "VORTEX",
  },
  {
    title: "API & logique métier",
    description: "Des services et intégrations organisés pour rendre les fonctionnalités fiables et maintenables.",
    technologies: ["API REST", "Node.js", "Authentification", "Validation"],
    project: "FinancePro",
  },
  {
    title: "Sécurité & déploiement",
    description: "Une attention portée aux accès, aux données et aux fondamentaux réseau, jusqu’à la mise en ligne.",
    technologies: ["Sécurité des accès", "TCP/IP", "Git", "Vercel"],
    project: "NOVAVOX",
  },
];
