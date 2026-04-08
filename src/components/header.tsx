"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/project", label: "Projets" },
  { href: "/process", label: "Méthodologie" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Bottom border that fades in on scroll */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(90deg, transparent, rgba(4,118,7,0.15), transparent)" }}
      />

      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-20 md:h-24">
        {/* Logo */}
        <Link
          href="/"
          className="group font-serif text-2xl md:text-[1.7rem] tracking-[-0.02em] text-primary transition-colors duration-500"
        >
          <span className="group-hover:text-[var(--primary)] transition-colors duration-500">Machaallah</span>
          <span className="text-[var(--primary)]">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-[12px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  pathname === link.href
                    ? "text-[var(--primary)]"
                    : "text-neutral-500 hover:text-foreground font-medium"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-[var(--primary)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[var(--primary)] border border-[var(--primary)]/20 px-5 py-2.5 hover:bg-[var(--primary)]/5 hover:border-[var(--primary)]/40 transition-all duration-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50" />
            Disponible
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground w-10 h-10 flex items-center justify-center"
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
                exit={{ rotate: -90, opacity: 0 }}
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
            className="md:hidden fixed inset-0 bg-background/98 backdrop-blur-lg z-40"
          >
            {/* Close button overlay */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100/50 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} className="text-foreground" />
            </button>

            <div className="flex flex-col justify-center h-full px-10 max-w-2xl mx-auto">
              <ul className="space-y-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.15 + i * 0.06, 
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    whileHover={{ x: 10 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block font-serif text-4xl md:text-5xl py-4 transition-all duration-300 relative group ${
                        pathname === link.href
                          ? "text-[var(--primary)]"
                          : "text-foreground hover:text-[var(--primary)]"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {pathname === link.href && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="absolute inset-0 bg-[var(--primary)]/5 rounded-lg"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--primary)] group-hover:w-full transition-all duration-300 ease-out" />
                    </Link>
                    {i < links.length - 1 && (
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                        className="h-px bg-gradient-to-r from-transparent via-[rgba(4,118,7,0.08)] to-transparent mt-2"
                      />
                    )}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-20 space-y-6"
              >
                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[var(--primary)] border border-[var(--primary)]/20 px-6 py-3 hover:bg-[var(--primary)]/5 hover:border-[var(--primary)]/40 transition-all duration-500 group"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]/50 group-hover:bg-[var(--primary)] transition-colors" />
                  Disponible
                </Link>

                {/* Social links */}
                <div className="flex items-center gap-8">
                  <a 
                    href="www.linkedin.com/in/adjibogou-machaallah-32937126a" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-black tracking-[0.15em] uppercase hover:text-[var(--primary)] transition-colors font-medium relative group"
                  >
                    LinkedIn
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[var(--primary)] group-hover:w-full transition-all duration-300" />
                  </a>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/20" />
                  <a 
                    href="https://github.com/machaallah1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-black tracking-[0.15em] uppercase hover:text-[var(--primary)] transition-colors font-medium relative group"
                  >
                    GitHub
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[var(--primary)] group-hover:w-full transition-all duration-300" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
