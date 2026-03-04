"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/animations";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative">
      <div className="divider-line" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Large CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-20"
          >
            <Link href="/contact" className="group inline-block">
              <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground group-hover:text-[var(--primary)] transition-colors duration-500 leading-[1.05]">
                  Créons quelque chose
                  <br />
                  <span className="italic text-[var(--primary)] group-hover:text-foreground transition-colors duration-500">
                    de robuste
                  </span>
                <span className="inline-block ml-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight size={32} className="text-[var(--primary)]" />
                </span>
              </h3>
            </Link>
          </motion.div>

          {/* Links row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div>
              <span className="text-[10px] text-neutral-500 tracking-[0.3em] uppercase block mb-4 font-medium">Navigation</span>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Accueil", href: "/" },
                  { label: "Projets", href: "/work" },
                    { label: "Méthodologie", href: "/process" },
                  { label: "À propos", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-neutral-500 hover:text-[var(--primary)] transition-colors duration-300 link-underline w-fit font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 tracking-[0.3em] uppercase block mb-4 font-medium">Social</span>
              <div className="flex flex-col gap-3">
                <Magnetic strength={0.2}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--primary)] transition-colors duration-300 font-medium"
                  >
                    LinkedIn <ArrowUpRight size={11} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--primary)] transition-colors duration-300 font-medium"
                  >
                    GitHub <ArrowUpRight size={11} />
                  </a>
                </Magnetic>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 tracking-[0.3em] uppercase block mb-4 font-medium">Contact</span>
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-sm text-[var(--primary)] hover:text-foreground transition-colors duration-300 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]/40" />
                    Me contacter
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-[1px] bg-[rgba(4,118,7,0.1)] mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-foreground">
                M<span className="text-[var(--primary)]">.</span>
              </span>
              <span className="text-[10px] text-neutral-500/60 tracking-wider">
                &copy; {new Date().getFullYear()} Machaallah ADJIBOGOU
              </span>
            </div>
            <span className="text-[10px] text-neutral-500/40 tracking-[0.15em] uppercase">
              Ingénierie & Architecture
            </span>
          </div>
      </div>
    </footer>
  );
}
