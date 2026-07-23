import { ArrowUp, BriefcaseBusiness, Mail, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <div><strong>Aaron Catraye</strong><span>Développeur Full-Stack · Cotonou, Bénin</span></div>
        <p>© {new Date().getFullYear()} · Portfolio</p>
        <div className="footer-actions">
          <a aria-label="Envoyer un email" href={`mailto:${siteConfig.email}`}><Mail className="size-4" /></a>
          <a aria-label="LinkedIn d’Aaron Catraye (nouvel onglet)" href={siteConfig.linkedinHref} target="_blank" rel="noopener noreferrer"><BriefcaseBusiness className="size-4" /></a>
          <a aria-label="Contacter Aaron sur WhatsApp (nouvel onglet)" href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" /></a>
          <a aria-label="Retour en haut de la page" href="#accueil"><ArrowUp className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}
