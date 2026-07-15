export const publicNavigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const clientNavigation = [
  { label: "Tableau de bord", href: "/client/dashboard" },
  { label: "Nouveau brief", href: "/client/brief/new" },
  { label: "Mes projets", href: "/client/projects" },
  { label: "Mes factures", href: "/client/invoices" },
  { label: "Mon profil", href: "/client/profile" },
] as const;

export const adminNavigation = [
  { label: "Tableau de bord", href: "/admin/dashboard" },
  { label: "Clients", href: "/admin/clients" },
  { label: "Briefs", href: "/admin/briefs" },
  { label: "Projets", href: "/admin/projects" },
  { label: "Devis", href: "/admin/quotes" },
  { label: "Factures", href: "/admin/invoices" },
  { label: "Services", href: "/admin/services" },
  { label: "Portfolio", href: "/admin/portfolio" },
  { label: "Blog", href: "/admin/blog" },
  { label: "Équipe", href: "/admin/team" },
  { label: "Paramètres", href: "/admin/settings" },
] as const;
