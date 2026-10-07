"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t, locale } = useLanguage();

  const navItems = [
    { label: locale === "en" ? "Home" : "Accueil", href: "/#top" },
    { label: locale === "en" ? "Projects" : "Projets", href: "/#projets" },
    { label: locale === "en" ? "Expertise" : "Expertise", href: "/#expertise" },
    { label: locale === "en" ? "About" : "À propos", href: "/#a-propos" },
    { label: locale === "en" ? "Contact" : "Contact", href: "/#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative bg-neutral-100/90 dark:bg-[#060709] border-t border-black/8 dark:border-white/10 text-foreground dark:text-white transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Large CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <a href="#contact" className="group inline-block">
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground dark:text-white font-bold group-hover:text-[var(--primary)] transition-colors duration-500 leading-[1.05]">
              {locale === "en" ? "Let's craft something" : "Créons quelque chose"}
              <br />
              <span className="italic text-[var(--primary)] group-hover:text-foreground font-bold transition-colors duration-500">
                {locale === "en" ? "remarkable." : "de remarquable."}
              </span>
              <span className="inline-block ml-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight size={32} className="text-[var(--primary)]" />
              </span>
            </h3>
          </a>
        </motion.div>

        {/* Links row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 tracking-[0.3em] uppercase block mb-4 font-bold">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300 w-fit uppercase tracking-wider font-semibold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 tracking-[0.3em] uppercase block mb-4 font-bold">
              RÉSEAUX & CODE
            </span>
            <div className="flex flex-col gap-3">
              <Magnetic strength={0.2}>
                <a
                  href="https://www.linkedin.com/in/adjibogou-machaallah-32937126a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300 uppercase tracking-wider font-semibold"
                >
                  LinkedIn <ArrowUpRight size={11} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="https://github.com/machaallah1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300 uppercase tracking-wider font-semibold"
                >
                  GitHub <ArrowUpRight size={11} />
                </a>
              </Magnetic>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 tracking-[0.3em] uppercase block mb-4 font-bold">
              DISPONIBILITÉ
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--primary)] hover:text-foreground transition-colors duration-300 uppercase tracking-wider font-bold"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                {locale === "en" ? "Available for contracts" : "Disponible pour nouveaux projets"}
              </a>
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 font-medium">
                Lomé, TOGO • GMT+0
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 tracking-[0.3em] uppercase block mb-4 font-bold">
              RETOUR HAUT
            </span>
            <Magnetic>
              <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-white dark:bg-[#111318] border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-[var(--primary)] hover:border-[var(--primary)]/40 flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Retour en haut"
              >
                <ArrowUp size={18} />
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-[1px] bg-black/10 dark:bg-white/10 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-lg text-foreground dark:text-white">
              Machaallah<span className="text-[var(--primary)]">.A</span>
            </span>
            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} Machaallah ADJIBOGOU
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 tracking-[0.2em] uppercase font-medium text-center sm:text-right">
            Full Stack Developer • Interfaces & Web Experiences • ESGIS Architecture
          </span>
        </div>
      </div>
    </footer>
  );
}
