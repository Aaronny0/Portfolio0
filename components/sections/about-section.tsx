import { ArrowDownRight, Download, MapPin } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const principles = [
  ["Fiabilité", "Construire des fonctionnalités compréhensibles et stables."],
  ["Clarté", "Rendre les choix d’interface et de code faciles à suivre."],
  ["Sécurité", "Penser les accès et les données dès la conception."],
  ["Progression", "Apprendre, tester puis appliquer sur des cas réels."],
] as const;

export function AboutSection() {
  return (
    <section className="section section-light" id="a-propos" aria-labelledby="about-title">
      <div className="site-shell">
        <Reveal className="about-grid">
          <div className="about-sidebar">
            <p className="eyebrow">02 / À propos</p>
            <h2 className="section-title mt-5" id="about-title">À propos</h2>
            <dl className="about-facts">
              <div><dt>Localisation</dt><dd><MapPin className="size-4" aria-hidden="true" /> Cotonou, Bénin</dd></div>
              <div><dt>Formation</dt><dd>Licence professionnelle en cours</dd></div>
              <div><dt>Disponibilité</dt><dd>Stage · Alternance · Junior · Freelance</dd></div>
            </dl>
          </div>

          <div className="about-copy">
            <p className="about-lead">Je suis développeur Full-Stack et étudiant en Cybersécurité et Systèmes d’Information à Pigier Bénin.</p>
            <div className="grid gap-6 text-base leading-7 text-[var(--light-muted)] md:grid-cols-2">
              <p>Je conçois des sites et applications web avec React, Next.js, TypeScript et Node.js. Mon travail couvre l’interface, la logique métier, les intégrations et la mise en ligne.</p>
              <p>Ma formation en cybersécurité complète cette pratique : elle m’aide à considérer les accès, les données et le réseau comme des composantes du produit, pas comme une étape ajoutée à la fin.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              <a className="light-link mt-0" href="#expertise">Découvrir mon expertise <ArrowDownRight className="size-4" aria-hidden="true" /></a>
              {siteConfig.cvAvailable ? (
                <a className="light-link mt-0" href={siteConfig.cvPath} download>
                  Télécharger mon CV <Download className="size-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          <div className="principles" aria-label="Principes de travail">
            <p className="eyebrow">Principes de travail</p>
            {principles.map(([title, description], index) => (
              <div className="principle" key={title}>
                <span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
