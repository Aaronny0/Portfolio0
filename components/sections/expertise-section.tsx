import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { expertise } from "@/data/fr/expertise";
import { projects } from "@/data/fr/projects";

export function ExpertiseSection() {
  return (
    <section className="section section-dark" id="expertise" aria-labelledby="expertise-title">
      <div className="site-shell">
        <Reveal className="section-intro">
          <div><p className="eyebrow text-[var(--accent)]">03 / Expertise</p></div>
          <div>
            <h2 className="section-title" id="expertise-title">Construire un produit cohérent, de bout en bout</h2>
            <p className="section-description">Quatre domaines reliés par la même exigence : comprendre le besoin, choisir une structure claire et livrer une solution utilisable.</p>
          </div>
        </Reveal>

        <div className="expertise-list">
          {expertise.map((item, index) => {
            const project = projects.find((candidate) => candidate.name === item.project);
            return (
              <Reveal className="expertise-row" delay={index * 0.04} key={item.title}>
                <span className="expertise-index">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="tag-list expertise-tags">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                {project ? (
                  <a className="expertise-project" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <span>Projet associé</span>{item.project}<ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
