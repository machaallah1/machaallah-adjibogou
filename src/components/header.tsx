"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/#top", targetId: "top", label: "Accueil", enLabel: "Home" },
  { href: "/#projets", targetId: "projets", label: "Projets", enLabel: "Projects" },
  { href: "/#expertise", targetId: "expertise", label: "Expertise", enLabel: "Expertise" },
  { href: "/#a-propos", targetId: "a-propos", label: "À propos", enLabel: "About" },
  { href: "/#contact", targetId: "contact", label: "Contact", enLabel: "Contact" },
];

function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 dark:bg-[#12141a] border border-black/5 dark:border-white/10 ${className}`}>
      <button
        onClick={() => setLocale("fr")}
        className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full transition-all duration-300 ${
          locale === "fr"
            ? "bg-[#f59e0b] text-[#08090b] font-bold shadow-[0_0_10px_rgba(245,158,11,0.4)]"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full transition-all duration-300 ${
          locale === "en"
            ? "bg-[#f59e0b] text-[#08090b] font-bold shadow-[0_0_10px_rgba(245,158,11,0.4)]"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { locale, t } = useLanguage();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ["top", "projets", "expertise", "a-propos", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 dark:bg-[#08090b]/85 backdrop-blur-2xl border-b border-black/5 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-20 md:h-24">
        {/* Logo */}
        <Link
          href="/"
          className="group font-serif font-bold text-2xl md:text-[1.7rem] tracking-[-0.02em] text-foreground dark:text-white transition-colors duration-300"
        >
          <span className="group-hover:text-[var(--primary)] transition-colors">Machaallah</span>
          <span className="text-[var(--primary)]">.A</span>
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 p-1.5 rounded-full bg-neutral-100/90 dark:bg-[#111317]/80 backdrop-blur-md border border-black/5 dark:border-white/10">
          {navItems.map((item) => {
            const isActive = pathname === "/" && activeSection === item.targetId;
            return (
              <li key={item.targetId}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.targetId)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? "text-foreground dark:text-white bg-black/5 dark:bg-white/10 font-bold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-foreground dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {locale === "en" ? item.enLabel : item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--primary)]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop: Theme toggle + Language toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="md:hidden fixed inset-0 bg-background/98 dark:bg-[#08090b]/98 backdrop-blur-2xl z-40 text-foreground"
          >
            {/* Close button overlay */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col justify-center h-full px-10 max-w-2xl mx-auto">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.targetId}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.06,
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.targetId)}
                      className="block font-serif font-bold text-3xl sm:text-4xl py-3 text-foreground hover:text-[var(--primary)] transition-colors"
                    >
                      {locale === "en" ? item.enLabel : item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 space-y-6">
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[var(--primary)] text-white dark:text-[#08090b] text-xs font-mono font-bold tracking-wider uppercase"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>DISPONIBLE POUR PROJETS</span>
                </a>

                {/* Social links */}
                <div className="flex items-center gap-6 pt-2">
                  <a
                    href="https://www.linkedin.com/in/adjibogou-machaallah-32937126a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-[var(--primary)] uppercase"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20" />
                  <a
                    href="https://github.com/machaallah1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-[var(--primary)] uppercase"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
