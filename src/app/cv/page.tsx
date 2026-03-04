"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

const experience = [
  {
    role: "Architecte Logiciel & Lead Dev",
    company: "Maono",
    location: "Togo",
    period: "Oct 2024 — Présent",
    tasks: [
      "Responsable de l'architecture technique pour des plateformes B2B/B2C d'envergure",
      "Pilotage technique des équipes et mise en place de standards de qualité (Clean Code, CI/CD)",
      "Conception de schémas de données complexes et d'APIs scalables",
    ],
  },
  {
    role: "Lead Développeur Mobile",
    company: "SLI Afrika",
    location: "Togo",
    period: "Déc 2023 — Sept 2024",
    tasks: [
      "Architecture et développement d'applications mobiles performantes sous React Native",
      "Optimisation des temps de chargement et de la consommation de données",
      "Mise en place de tests unitaires et d'intégration pour garantir la robustesse",
    ],
  },
  {
    role: "Ingénieur Software",
    company: "CADRECO",
    location: "Togo",
    period: "Juin — Sept 2023",
    tasks: [
      "Développement de prototypes fonctionnels avancés pour des projets innovants",
      "Refonte technique d'applications existantes pour améliorer la scalabilité",
      "Intégration de solutions tierces et gestion de flux de données temps réel",
    ],
  },
  {
    role: "Développeur Web & Mobile",
    company: "Upsilon Consulting",
    location: "Togo",
    period: "Juil 2022 — Janv 2023",
    tasks: [
      "Développement full-stack sur des projets clients variés (SaaS, E-commerce)",
      "Optimisation SEO et performance web (Core Web Vitals)",
      "Collaboration étroite avec les designers pour une fidélité d'intégration maximale",
    ],
  },
  {
    role: "Développeur Junior",
    company: "ORTA Service",
    location: "Togo",
    period: "Juin — Juil 2022",
    tasks: [
      "Maintenance évolutive et corrective d'applications internes",
      "Apprentissage des bonnes pratiques de développement et de versioning (Git)",
    ],
  },
];

const education = [
  {
    degree: "Ingénierie Logicielle & Systèmes d'Information",
    school: "École Supérieure d'Informatique",
    period: "2021 — 2024",
  },
];

const skills = {
  web: ["React / Next.js", "TypeScript", "Tailwind CSS", "Redux / Zustand", "SSR / SSG", "Node.js"],
  mobile: ["React Native", "Expo", "Navigation Native", "Push Notifications", "Performance Mobile"],
  backend: ["Architecture Logicielle", "NestJS", "APIs REST / GraphQL", "PostgreSQL / MongoDB", "Docker"],
  expertise: ["Clean Code", "Design Patterns", "CI/CD", "Tests Unitaires", "Sécurité applicative"],
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      {/* Top bar with actions */}
      <div className="max-w-[900px] mx-auto px-6 mb-8 flex items-center justify-between print-hidden">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[#6B635A] text-sm hover:text-[var(--primary)] transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          <span>Retour</span>
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-[var(--primary)] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#068a09] transition-colors duration-300"
        >
          <Download size={14} />
          Télécharger PDF
        </button>
      </div>

      {/* CV Container — A4 proportions */}
      <motion.div
        ref={cvRef}
        initial="hidden"
        animate="visible"
        className="cv-page max-w-[900px] mx-auto bg-[#0C0C0B] border border-[var(--primary)]/10 relative overflow-hidden"
      >
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[var(--primary)]/20 print:border-[var(--primary)]/30" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[var(--primary)]/20 print:border-[var(--primary)]/30" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[var(--primary)]/20 print:border-[var(--primary)]/30" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[var(--primary)]/20 print:border-[var(--primary)]/30" />

        <div className="px-10 md:px-16 py-12 md:py-16">
          {/* Header */}
          <motion.header variants={fadeIn} custom={0} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <motion.h1
                  variants={fadeIn}
                  custom={1}
                  className="font-serif text-4xl md:text-5xl text-foreground tracking-[-0.02em] leading-[1.1]"
                >
                  Machaallah<span className="text-[var(--primary)]">.</span>
                </motion.h1>
                <motion.h1
                  variants={fadeIn}
                  custom={2}
                  className="font-serif text-4xl md:text-5xl text-foreground tracking-[-0.02em] leading-[1.1]"
                >
                  ADJIBOGOU
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  custom={3}
                  className="mt-3 text-[var(--primary)] text-sm tracking-[0.25em] uppercase font-medium"
                >
                  Développeur Web & Mobile / Architecte
                </motion.p>
              </div>

              <motion.div
                variants={fadeIn}
                custom={4}
                className="text-right text-[#6B635A] text-xs leading-[2] tracking-wide"
              >
                <p>Lomé, TOGO</p>
                <p>contact@machaallah.dev</p>
                <p>linkedin.com/in/machaallah-adjibogou</p>
                <p>github.com/machaallah</p>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="mt-8 h-[1px] bg-gradient-to-r from-[var(--primary)]/40 via-[var(--primary)]/10 to-transparent" />
          </motion.header>

          {/* Profile summary */}
          <motion.section variants={fadeIn} custom={5} className="mb-12">
            <h2 className="cv-section-title">Profil Technique</h2>
            <p className="text-[#8A817A] text-sm leading-[1.9] max-w-[680px]">
              Développeur Web et Mobile avec plus de 5 ans d&apos;expérience, spécialisé dans l&apos;architecture
              logicielle et la conception de solutions robustes et scalables. Expert dans l&apos;écosystème
              React (Next.js, React Native), je privilégie une approche rigoureuse basée sur le Clean Code,
              la performance et la sécurité. Passionné par la résolution de défis techniques complexes
              et l&apos;optimisation des flux de données.
            </p>
          </motion.section>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16">
            {/* Left Column — Experience */}
            <div>
              <motion.section variants={fadeIn} custom={6}>
                <h2 className="cv-section-title">Expérience technique</h2>
                <div className="space-y-8">
                  {experience.map((exp, i) => (
                    <motion.div
                      key={exp.company + i}
                      variants={fadeIn}
                      custom={7 + i}
                      className="relative pl-5 border-l border-[var(--primary)]/10"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-3px] top-[6px] w-[5px] h-[5px] rounded-full bg-[var(--primary)]/60" />

                      <div className="flex items-baseline justify-between gap-4 mb-1.5">
                        <h3 className="text-foreground text-sm font-medium">
                          {exp.role}
                        </h3>
                        <span className="text-[#6B635A] text-[10px] tracking-wider font-mono whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[var(--primary)]/70 text-xs tracking-wide mb-2.5">
                        {exp.company}{exp.location ? ` — ${exp.location}` : ""}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.tasks.map((task) => (
                          <li
                            key={task}
                            className="text-[#6B635A] text-xs leading-[1.7] flex gap-2"
                          >
                            <span className="text-[var(--primary)]/30 mt-[2px] shrink-0">—</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column — Skills, Education, Languages */}
            <div className="space-y-10">
              {/* Compétences */}
              <motion.section variants={fadeIn} custom={12}>
                <h2 className="cv-section-title">Stack Technique</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[var(--primary)]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Web & Core
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.web.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[var(--primary)]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Mobile
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.mobile.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[var(--primary)]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Backend & Infrastructure
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.backend.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[var(--primary)]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.expertise.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Formation */}
              <motion.section variants={fadeIn} custom={13}>
                <h2 className="cv-section-title">Formation</h2>
                {education.map((edu) => (
                  <div key={edu.degree} className="mb-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-foreground text-sm font-medium">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-[#6B635A] text-xs mt-1">{edu.school}</p>
                    <p className="text-[#6B635A] text-[10px] tracking-wider font-mono mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </motion.section>

              {/* Langues */}
              <motion.section variants={fadeIn} custom={14}>
                <h2 className="cv-section-title">Langues</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-sm">Français</span>
                    <span className="text-[#6B635A] text-xs">Natif</span>
                  </div>
                  <div className="h-[1px] bg-[var(--primary)]/5" />
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-sm">Anglais</span>
                    <span className="text-[#6B635A] text-xs">Technique / Avancé</span>
                  </div>
                </div>
              </motion.section>

              {/* Centres d'intérêt */}
              <motion.section variants={fadeIn} custom={15}>
                <h2 className="cv-section-title">Centres d&apos;intérêt</h2>
                <p className="text-[#6B635A] text-xs leading-[1.9]">
                  Architecture logicielle, Open Source, Intelligence Artificielle, IoT, Cybersécurité
                </p>
              </motion.section>
            </div>
          </div>

          {/* Footer */}
          <motion.footer
            variants={fadeIn}
            custom={16}
            className="mt-14 pt-6 border-t border-[var(--primary)]/5"
          >
            <div className="flex items-center justify-between">
              <p className="text-[#6B635A]/50 text-[10px] tracking-wider">
                CV — Machaallah ADJIBOGOU — Software Architect
              </p>
              <p className="text-[#6B635A]/50 text-[10px] tracking-wider">
                {new Date().getFullYear()}
              </p>
            </div>
          </motion.footer>
        </div>
      </motion.div>
    </div>
  );
}
