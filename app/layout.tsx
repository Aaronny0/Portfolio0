import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aaron CATRAYE — Développeur Full-Stack & Cybersécurité",
  description: "Portfolio d’Aaron CATRAYE, développeur Full-Stack basé à Cotonou. Découvrez six projets web déployés, ses compétences et son parcours en cybersécurité.",
  keywords: ["Aaron CATRAYE", "Développeur Full-Stack", "Cybersécurité", "React", "Next.js", "Node.js", "Cotonou", "Bénin"],
  authors: [{ name: "Aaron CATRAYE" }],
  creator: "Aaron CATRAYE",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "Aaron CATRAYE — Full-Stack & Cybersécurité",
    description: "Des besoins concrets transformés en produits web clairs, fiables et déployés.",
    siteName: "Portfolio Aaron CATRAYE",
    images: [{ url: "/og-v2.png", width: 1733, height: 907, alt: "Aaron CATRAYE — Full-Stack et Cybersécurité" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron CATRAYE — Full-Stack & Cybersécurité",
    description: "Six projets web en ligne, du développement Full-Stack à la cybersécurité.",
    images: ["/og-v2.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html className={`${geist.variable} ${geistMono.variable}`} lang="fr"><body>{children}</body></html>;
}
