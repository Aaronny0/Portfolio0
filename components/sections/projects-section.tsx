import { ArrowUpRight, CircleCheck } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/fr/projects";
import type { Project } from "@/types/portfolio";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl className="project-meta">
      <div><dt>Rôle</dt><dd>{project.role}</dd></div>
      <div><dt>Statut</dt><dd className="flex items-center gap-2"><CircleCheck className="size-3.5 text-[var(--accent)]" aria-hidden="true" />{project.status}</dd></div>
    </dl>
  );
}

function ProjectLink({ project, label = "Voir le projet" }: { project: Project; label?: string }) {
  return (
    <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
      {label} <span className="sr-only">{project.name} (nouvel onglet)</span><ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

export function ProjectsSection() {
  const [mainProject, ...featuredProjects] = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="section section-dark" id="projets" aria-labelledby="projects-title">
      <div className="site-shell">
        <Reveal className="section-intro">
          <div><p className="eyebrow text-[var(--accent)]">01 / Sélection</p></div>
          <div>
            <h2 className="section-title" id="projects-title">Projets sélectionnés</h2>
            <p className="section-description">Des applications conçues à partir de besoins concrets, du cadrage jusqu’au déploiement.</p>
          </div>
        </Reveal>

        <Reveal className="case-study case-study-main">
          <a className="case-visual" href={mainProject.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Voir ${mainProject.name} en ligne (nouvel onglet)`}>
            <Image src={mainProject.image} alt={mainProject.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 62vw" className="object-cover object-top" />
          </a>
          <div className="case-content">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="eyebrow text-[var(--accent)]">Projet principal</span>
              <span className="eyebrow text-[var(--text-muted)]">{mainProject.type}</span>
            </div>
            <h3 className="project-title">{mainProject.name}</h3>
            <p className="project-summary">{mainProject.description}</p>
            <div className="project-problem"><span>Besoin traité</span><p>{mainProject.problem}</p></div>
            <ProjectMeta project={mainProject} />
            <div className="tag-list">{mainProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <ProjectLink project={mainProject} />
          </div>
        </Reveal>

        <div className="secondary-projects">
          {featuredProjects.map((project, index) => (
            <Reveal className="case-study case-study-secondary" delay={index * 0.05} key={project.slug}>
              <a className="case-visual" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Voir ${project.name} en ligne (nouvel onglet)`}>
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
              </a>
              <div className="case-content">
                <p className="eyebrow text-[var(--text-muted)]">0{index + 2} · {project.type}</p>
                <h3 className="project-title project-title-small">{project.name}</h3>
                <p className="project-summary">{project.description}</p>
                <div className="project-problem"><span>Besoin traité</span><p>{project.problem}</p></div>
                <ProjectMeta project={project} />
                <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <ProjectLink project={project} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="other-projects">
          <div className="other-projects-heading"><p className="eyebrow text-[var(--text-muted)]">Autres réalisations</p><span>{otherProjects.length} projets</span></div>
          {otherProjects.map((project, index) => (
            <article className="project-row" key={project.slug}>
              <span className="project-row-index">0{index + 4}</span>
              <div><h3>{project.name}</h3><p>{project.description}</p></div>
              <span className="project-row-type">{project.type}</span>
              <ProjectLink project={project} label="Visiter" />
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
