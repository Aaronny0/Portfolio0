import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { siteConfig } from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
  sameAs: [siteConfig.linkedinHref],
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "Cybersécurité", "Réseaux", "Cisco CCNA"],
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
