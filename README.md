# Portfolio professionnel — Aaron CATRAYE

Portfolio public d’Aaron CATRAYE, développeur Full-Stack et étudiant en Cybersécurité et Systèmes d’Information à Cotonou.

## Technologies

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React et Zod.

## Installation et lancement

    pnpm install
    pnpm dev

Le site est ensuite accessible sur http://localhost:3000.

## Vérifications

    pnpm lint
    pnpm typecheck
    pnpm build

## Configuration

Copier .env.example vers .env.local. NEXT_PUBLIC_SITE_URL doit contenir l’URL finale. Pour activer le formulaire, configurer une clé Resend, une adresse d’expédition vérifiée et l’adresse destinataire.

## Contenus

- Projets : data/fr/projects.ts
- Compétences : data/fr/skills.ts
- Certifications : data/fr/certifications.ts
- Expériences : data/fr/experiences.ts
- Coordonnées et CV : config/site.ts
- Captures : public/projects/
- CV : public/cv/CV_Aaron_Catraye_Developpeur_Full_Stack.pdf
- Certificats : public/certificates/

Les données françaises sont isolées dans data/fr pour faciliter l’ajout futur de data/en et de routes /fr et /en sans publier une traduction incomplète.

## Déploiement Vercel

Importer le dépôt dans Vercel, renseigner les variables d’environnement, puis lancer le déploiement. Vercel détecte automatiquement pnpm et la commande de construction est pnpm build.
