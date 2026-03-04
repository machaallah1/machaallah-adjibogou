"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

const experience = [
  {
    role: "Software Architect & Full-Stack Developer",
    company: "Maono",
    location: "Lomé, Togo",
    period: "Oct 2024 — Présent",
    tasks: [
      "Développement du frontend du site Maono avec Next.js (SSR, SSG, optimisation SEO)",
      "Intégration Headless WordPress (REST API) pour la gestion dynamique des contenus",
      "Conception d'interfaces modernes, performantes et responsive",
      "Optimisation des performances (Core Web Vitals, lazy loading, caching)",
      "Développement et maintenance des plateformes : Togotech, CNCIA, Palais de Lomé, Lome Data Centre (LDC), SIN, ARCEP",
      "Développement de l'application Horizon360 (Next.js + Firebase)",
    ],
  },
  {
    role: "Développeur Full-Stack",
    company: "KIDOLE",
    location: "Togo (Sous-région : Togo, Bénin, Ghana, Côte d’Ivoire)",
    period: "2024",
    tasks: [
      "Développement d'une application web de gestion des panneaux publicitaires",
      "Conception du backend avec Laravel (API REST sécurisées)",
      "Développement du frontend en Vue.js",
      "Gestion des rôles, permissions et tableaux de bord analytiques",
      "Optimisation des performances et structuration de la base de données",
    ],
  },
  {
    role: "Stagiaire Développeur Mobile",
    company: "Kimoasoft",
    location: "Togo",
    period: "2024",
    tasks: [
      "Développement d'applications mobiles avec Flutter",
      "Participation au développement des applications Kweek et Afrostand",
      "Implémentation d'interfaces UI modernes et responsives",
      "Connexion aux APIs et gestion d’état des applications",
    ],
  },
];

const education = [
  {
    degree: "Ingénierie Logicielle & Systèmes d'Information",
    school: "École Supérieure de Gestion d'Informatique et des Sciences (ESGIS)",
    period: "2021 — 2024",
  },
];

const skills = {
  web: [
    "Next.js (SSR / SSG / ISR)",
    "React",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Headless WordPress",
    "SEO & Core Web Vitals"
  ],
  mobile: [
    "Flutter",
    "Dart",
    "Architecture Mobile",
    "State Management"
  ],
  backend: [
    "Laravel",
    "APIs REST",
    "Firebase",
    "Authentication & Security",
    "Database Design",
    "PostgreSQL / MySQL"
  ],
  architecture: [
    "Software Architecture",
    "Clean Code",
    "Scalable Systems",
    "System Design",
    "CI/CD"
  ],
  innovation: [
    "Intelligence Artificielle",
    "Automatisation",
    "Optimisation des performances",
    "Veille technologique"
  ]
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
        className="cv-page max-w-[900px] mx-auto bg-white border border-[var(--primary)]/10 relative overflow-hidden"
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
                <p>machdev02@gmail.com</p>
                <p>linkedin.com/in/machaallah-adjibogou</p>
                <p>github.com/machaallah1</p>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="mt-8 h-[1px] bg-gradient-to-r from-[var(--primary)]/40 via-[var(--primary)]/10 to-transparent" />
          </motion.header>

          {/* Profile summary */}
          <motion.section variants={fadeIn} custom={5} className="mb-12">
            <h2 className="cv-section-title">Profil Technique</h2>
            <p className="text-[#8A817A] text-sm leading-[1.9] max-w-[680px]">
              Développeur Web & Architecte applicatif spécialisé en Next.js et architectures Headless
              (WordPress API, Laravel, Firebase). Je conçois des applications performantes, scalables
              et orientées expérience utilisateur.
              Passionné par l’Intelligence Artificielle et les systèmes intelligents,
              j’explore continuellement les solutions basées sur l’IA pour optimiser les performances,
              automatiser les processus et créer des produits à forte valeur technologique.
              Rigoureux sur la qualité du code (Clean Code), la performance et la sécurité applicative.
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
                      {skills.architecture.map((s) => (
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
