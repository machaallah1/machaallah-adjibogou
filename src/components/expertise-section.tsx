"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, Cpu, Database, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function ExpertiseSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      icon: Code2,
      num: "01",
      tag: "FRONT-END ENGINE",
      title: "Ingénierie Front-End & Expériences Web",
      summary: "Conception d'applications web d'une fluidité irréprochable avec React 19 et Next.js.",
      details: [
        "Architecture Next.js App Router, SSR, SSG et streaming React 19",
        "Animations et micro-interactions coordonnées avec Framer Motion",
        "Performance obsessionnelle : Core Web Vitals 99+, optimisations LCP/FID/CLS",
        "TypeScript strict, composants modulaires et responsive mobile-first",
      ],
      stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
    },
    {
      id: 1,
      icon: Palette,
      num: "02",
      tag: "FRONT-END ARCHITECTURE & DESIGN SYSTEMS",
      title: "Intégration d'Interfaces & Design Systems",
      summary: "Traduction rigoureuse des maquettes en composants réutilisables, accessibles et fidèles au pixel près.",
      details: [
        "Intégration fidèle au pixel près depuis maquettes Figma",
        "Mise en place de Design Systems modulaires avec tokens sémantiques",
        "Micro-interactions et animations soignées avec Framer Motion & CSS pur",
        "Accessibilité (WCAG), conformité responsive mobile-first et clean markup",
      ],
      stack: ["Design Systems", "Framer Motion", "Tailwind CSS", "Responsive Web", "Accessibilité WCAG"],
    },
    {
      id: 2,
      icon: Cpu,
      num: "03",
      tag: "SOFTWARE ARCHITECTURE",
      title: "Architecture Logicielle & Rigueur Systèmes",
      summary: "Licence ESGIS en Architecture Logicielle : structurer avant de coder pour garantir la longévité.",
      details: [
        "Principes Clean Architecture, SOLID, DRY et modularité forte",
        "Conception de schémas de données relationnels et documentaires optimisés",
        "Modélisation des flux applicatifs et des cas d'utilisation critiques",
        "Conception d'APIs RESTful et GraphQL résilientes et documentées",
      ],
      stack: ["Clean Architecture", "Design Patterns", "Data Modeling", "API Design", "ESGIS Licence"],
    },
    {
      id: 3,
      icon: Database,
      num: "04",
      tag: "FULL STACK & INFRASTRUCTURE",
      title: "Capacités Full Stack & Déploiement Cloud",
      summary: "Maîtrise de l'ensemble de la chaîne de valeur, de la base de données au cloud.",
      details: [
        "Backend moderne avec Node.js / Express / NestJS et Laravel",
        "Intégrations CMS Headless (WordPress REST API, Supabase, Firebase)",
        "Bases de données PostgreSQL, MySQL, MongoDB et gestion d'état avancée",
        "Déploiement continu, pipelines CI/CD et hébergement cloud sur Vercel",
      ],
      stack: ["Node.js", "Laravel", "PostgreSQL", "WordPress Headless", "Firebase", "CI/CD"],
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 relative scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span className="font-mono text-xs text-[var(--primary)] tracking-[0.2em] uppercase block mb-3 font-bold">
            02 / EXPERTISE & ARCHITECTURE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground font-bold tracking-[-0.03em] leading-[0.95] max-w-4xl">
            De la modélisation logicielle à l&apos;interaction pixel-perfect
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal">
            Une pratique alliant intégration fidèle d&apos;interfaces, rigueur front-end et principes d&apos;architecture logicielle.
          </p>
        </div>

        {/* ═══ 4 Clean Expertise Pillars Grid ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: pillar.id * 0.08 }}
                className="rounded-2xl p-7 md:p-8 border border-black/8 dark:border-white/10 bg-white dark:bg-[#0e1014] hover:border-[var(--primary)]/40 hover:bg-neutral-50 dark:hover:bg-[#12141a] shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-none transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[var(--primary)] font-bold">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-[#161820] flex items-center justify-center text-neutral-800 dark:text-neutral-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="block font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-2 font-semibold">
                    {pillar.tag}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                    {pillar.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-5 border-t border-black/5 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.stack.slice(0, 3).map((st) => (
                      <span
                        key={st}
                        className="px-2.5 py-1 rounded text-[10px] font-mono bg-neutral-100 dark:bg-[#161820] text-neutral-700 dark:text-neutral-400 font-medium"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
