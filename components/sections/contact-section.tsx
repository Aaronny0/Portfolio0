import { ArrowUpRight, BriefcaseBusiness, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const contactLinks = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail, external: false },
  { label: "Téléphone", value: siteConfig.phone, href: siteConfig.phoneHref, icon: Phone, external: false },
  { label: "WhatsApp", value: "Écrire sur WhatsApp", href: siteConfig.whatsappHref, icon: MessageCircle, external: true },
  { label: "LinkedIn", value: "aaron-catraye", href: siteConfig.linkedinHref, icon: BriefcaseBusiness, external: true },
] as const;

export function ContactSection() {
  return (
    <section className="section section-contact" id="contact" aria-labelledby="contact-title">
      <div className="site-shell">
        <Reveal className="contact-intro">
          <div>
            <p className="eyebrow text-[var(--accent)]">06 / Contact</p>
            <h2 className="section-title mt-5" id="contact-title">Parlons de votre projet</h2>
          </div>
          <div>
            <p className="section-description mt-0">Une opportunité, une mission ou une idée à développer ? Présentez-moi le contexte et je vous répondrai avec précision.</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-[var(--text-secondary)]"><MapPin className="size-4 text-[var(--accent)]" aria-hidden="true" /> Cotonou, Bénin · Disponible à distance</p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-links" aria-label="Coordonnées">
            {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
              <a href={href} key={label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                <Icon className="size-4 text-[var(--accent)]" aria-hidden="true" />
                <span><small>{label}</small><strong>{value}</strong></span>
                <ArrowUpRight className="ml-auto size-4" aria-hidden="true" />
              </a>
            ))}
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow mb-5 text-[var(--text-muted)]">Votre message</p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
