"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/work", label: "Projets" },
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
          className="group font-serif text-2xl md:text-[1.7rem] tracking-[-0.02em] text-foreground transition-colors duration-500"
        >
          <span className="group-hover:text-[var(--primary)] transition-colors duration-500">M</span>
          <span className="text-foreground/80">achaallah</span>
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
              className="md:hidden fixed inset-0 bg-background z-40"
            >
              <div className="flex flex-col justify-center h-full px-10">
                <ul className="space-y-2">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block font-serif text-5xl py-3 transition-colors duration-300 ${
                          pathname === link.href
                            ? "text-[var(--primary)]"
                            : "text-foreground/30 hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {i < links.length - 1 && (
                        <div className="h-[1px] bg-[rgba(4,118,7,0.1)]" />
                      )}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-16 flex items-center gap-6"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 tracking-[0.15em] uppercase hover:text-[var(--primary)] transition-colors font-medium">
                    LinkedIn
                  </a>
                  <span className="w-1 h-1 rounded-full bg-[var(--primary)]/20" />
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 tracking-[0.15em] uppercase hover:text-[var(--primary)] transition-colors font-medium">
                    GitHub
                  </a>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
