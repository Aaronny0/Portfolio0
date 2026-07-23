import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";

import { projects } from "@/data/fr/projects";

const proof = [
  { label: "Projets déployés", value: String(projects.length).padStart(2, "0") },
  { label: "Technologies principales", value: "React · Next.js · TypeScript" },
  { label: "Projet mis en avant", value: projects[0].name },
] as const;

export function Hero() {
  return (
    <section className="hero-section" id="accueil" aria-labelledby="hero-title">
      <div className="site-shell hero-inner">
        <div className="hero-status">
          <p className="eyebrow flex items-center gap-3 text-[var(--accent)]">
            <span className="size-2 rounded-full bg-[var(--signal)]" aria-hidden="true" />
            Disponible pour de nouvelles opportunités
          </p>
          <p className="eyebrow hidden items-center gap-2 text-[var(--text-muted)] sm:flex">
            <MapPin className="size-3.5" aria-hidden="true" /> Cotonou, Bénin · À distance
          </p>
        </div>

        <div className="hero-grid">
          <div>
            <p className="eyebrow mb-5 text-[var(--text-secondary)]">
              Développeur Full-Stack &amp; Cybersécurité
            </p>
            <h1 className="hero-title" id="hero-title">
              <span>Aaron</span> <span>Catraye</span>
            </h1>
            <p className="hero-copy">
              Je construis des applications web complètes et sécurisées, de l’interface au déploiement, avec une attention particulière portée à la fiabilité, à la qualité du code et aux usages réels.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
              Disponible pour un stage, une alternance, un poste junior ou une mission freelance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-primary" href="#projets">
                Voir mes projets <ArrowDownRight className="size-4" aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#contact">
                Me contacter <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Repères du portfolio">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
              <span className="eyebrow text-[var(--accent)]">Repères</span>
              <span className="font-mono text-[0.68rem] text-[var(--text-muted)]">AC / 2026</span>
            </div>
            <dl>
              {proof.map((item) => (
                <div className="proof-row" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-auto border-t border-[var(--border-soft)] pt-5 text-sm leading-6 text-[var(--text-secondary)]">
              Un profil junior orienté produit, avec une formation en cybersécurité et systèmes d’information.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
