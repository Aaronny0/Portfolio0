"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/data/fr/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.25 });

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -68% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {!reduceMotion ? <motion.div className="scroll-progress" style={{ scaleX: progress }} /> : null}
      <div className="site-shell header-inner">
        <a className="brand" href="#accueil" aria-label="Retour en haut de la page">
          <span>AC</span><small>Aaron Catraye</small>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => {
            const active = activeSection === item.href.slice(1);
            return <a key={item.href} aria-current={active ? "location" : undefined} className={cn(active && "active")} href={item.href}>{item.label}</a>;
          })}
        </nav>
        <a className="header-cta" href="#contact">Me contacter <ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-menu" className={cn("mobile-menu", menuOpen && "open")} aria-hidden={!menuOpen}>
        <nav aria-label="Navigation mobile">
          {navigation.map((item, index) => (
            <a ref={index === 0 ? firstLinkRef : undefined} key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
              {item.label}<span>0{index + 1}</span>
            </a>
          ))}
          <a className="mobile-contact" href="#contact" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Me contacter</a>
        </nav>
      </div>
    </header>
  );
}
