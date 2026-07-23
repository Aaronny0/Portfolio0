import { Check, Clock3 } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { currentCertifications, obtainedCertifications } from "@/data/fr/certifications";
import type { Certification } from "@/types/portfolio";

function CertificationItem({ certification }: { certification: Certification }) {
  const obtained = certification.status === "Obtenu";
  return (
    <article className="certification-item">
      <div>
        <h4>{certification.name}</h4>
        <p>{certification.issuer}{certification.date ? ` · ${certification.date}` : ""}</p>
        {certification.objective ? <p className="certification-objective">{certification.objective}</p> : null}
      </div>
      <span className={`status ${obtained ? "status-obtained" : "status-current"}`}>
        {obtained ? <Check className="size-3.5" aria-hidden="true" /> : <Clock3 className="size-3.5" aria-hidden="true" />}{certification.status}
      </span>
    </article>
  );
}

export function CertificationsSection() {
  return (
    <section className="section section-dark certifications" id="certifications" aria-labelledby="certifications-title">
      <div className="site-shell">
        <Reveal className="section-intro section-intro-compact">
          <div><p className="eyebrow text-[var(--accent)]">05 / Certifications</p></div>
          <div>
            <h2 className="section-title" id="certifications-title">Certifications</h2>
            <p className="section-description">Des repères vérifiables dans ma progression en réseaux et cybersécurité.</p>
          </div>
        </Reveal>

        <div className="certification-grid">
          <Reveal>
            <div className="registry-heading"><h3>Obtenues</h3><span>{String(obtainedCertifications.length).padStart(2, "0")}</span></div>
            {obtainedCertifications.map((certification) => <CertificationItem certification={certification} key={certification.name} />)}
          </Reveal>
          <Reveal delay={0.05}>
            <div className="registry-heading"><h3>En cours</h3><span>{String(currentCertifications.length).padStart(2, "0")}</span></div>
            {currentCertifications.map((certification) => <CertificationItem certification={certification} key={certification.name} />)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
