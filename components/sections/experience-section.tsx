import { GraduationCap } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { academicTraining } from "@/data/fr/certifications";
import { experiences } from "@/data/fr/experiences";

export function ExperienceSection() {
  return (
    <section className="section section-elevated" id="parcours" aria-labelledby="journey-title">
      <div className="site-shell">
        <Reveal className="section-intro">
          <div><p className="eyebrow text-[var(--accent)]">04 / Parcours</p></div>
          <div>
            <h2 className="section-title" id="journey-title">Formation &amp; expérience</h2>
            <p className="section-description">Un parcours qui associe formation technique, responsabilités collectives et expérience de la relation client.</p>
          </div>
        </Reveal>

        <div className="timeline">
          <Reveal className="timeline-item">
            <span className="timeline-marker" aria-hidden="true" />
            <div className="timeline-period">{academicTraining.date}</div>
            <article className="timeline-content">
              <div className="timeline-heading"><span className="eyebrow text-[var(--accent)]">Formation en cours</span><GraduationCap className="size-5 text-[var(--text-muted)]" aria-hidden="true" /></div>
              <h3>{academicTraining.name}</h3>
              <p className="timeline-organization">{academicTraining.issuer}</p>
              <p>Une formation consacrée aux systèmes d’information, aux réseaux et à la cybersécurité, menée en parallèle de projets web déployés.</p>
              <div className="tag-list"><span>Cybersécurité</span><span>Réseaux</span><span>Systèmes d’information</span></div>
            </article>
          </Reveal>

          {experiences.map((experience, index) => (
            <Reveal className="timeline-item" delay={index * 0.05} key={experience.role}>
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-period">{experience.period}</div>
              <article className="timeline-content">
                <span className="eyebrow text-[var(--text-muted)]">Expérience 0{index + 1}</span>
                <h3>{experience.role}</h3>
                <p className="timeline-organization">{experience.organization}</p>
                <p>{experience.context}</p>
                <ul>
                  {experience.responsibilities.slice(0, 3).map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                </ul>
                <div className="tag-list">{experience.skillsDeveloped.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
