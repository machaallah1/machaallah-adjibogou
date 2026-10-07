"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

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
  const { t } = useLanguage();

  const experience = (t("cv.experience") as unknown) as Array<{
    role: string; company: string; location: string; period: string; tasks: string[];
  }>;
  const experienceList = Array.isArray(experience) ? experience : [];

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
          <span>{t("cv.back")}</span>
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-[var(--primary)] text-white dark:text-[#08090b] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#b45309] shadow-[0_0_20px_rgba(217,119,6,0.25)] transition-all duration-300 rounded-full"
        >
          <Download size={14} />
          {t("cv.download")}
        </button>
      </div>

      {/* CV Container — A4 proportions */}
      <motion.div
        ref={cvRef}
        initial="hidden"
        animate="visible"
        className="cv-page max-w-[900px] mx-auto bg-white border border-[var(--primary)]/10 relative overflow-hidden rounded-xl shadow-2xl"
      >
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[var(--primary)]/20 print:border-[var(--primary)]/30" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[var(--primary)]/20 print:border-[var(--primary)]/30" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[var(--primary)]/20 print:border-[var(--primary)]/30" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[var(--primary)]/20 print:border-[var(--primary)]/30" />

        <div className="px-10 md:px-16 py-12 md:py-16">
          {/* Header */}
          <motion.div variants={fadeIn} custom={0} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <motion.h1
                  variants={fadeIn}
                  custom={1}
                  className="font-serif text-4xl md:text-5xl text-neutral-900 tracking-[-0.02em] leading-[1.1] font-bold"
                >
                  Machaallah<span className="text-[var(--primary)]">.</span>
                </motion.h1>
                <motion.h1
                  variants={fadeIn}
                  custom={2}
                  className="font-serif text-4xl md:text-5xl text-neutral-900 tracking-[-0.02em] leading-[1.1] font-bold"
                >
                  ADJIBOGOU
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  custom={3}
                  className="mt-3 text-[var(--primary)] text-sm uppercase font-semibold"
                >
                  {t("cv.role")}
                </motion.p>
              </div>

              <motion.div
                variants={fadeIn}
                custom={4}
                className="text-right text-[#6B635A] text-xs leading-[2] tracking-wide"
              >
                <p>Lomé, TOGO - Agoe-Assiyéyé</p>
                <p>+228 92 21 82 07</p>
                <p className="text-[var(--primary)] font-semibold">machdev02@gmail.com</p>
                <p>linkedin.com/in/machaallah-adjibogou</p>
                <p>github.com/machaallah1</p>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="mt-8 h-[1px] bg-gradient-to-r from-[var(--primary)]/40 via-[var(--primary)]/10 to-transparent" />
          </motion.div>

          {/* Profile summary */}
          <motion.section variants={fadeIn} custom={5} className="mb-12">
            <h2 className="cv-section-title">{t("cv.profileTitle")}</h2>
            <p className="text-[#333333] text-sm leading-[1.9] max-w-[680px]">
              {t("cv.profileDesc")}
            </p>
          </motion.section>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16">
            {/* Left Column — Experience */}
            <div>
              <motion.section variants={fadeIn} custom={6}>
                <h2 className="cv-section-title">{t("cv.experienceTitle")}</h2>
                <div className="space-y-8">
                  {experienceList.map((exp, i) => (
                    <motion.div
                      key={exp.company + i}
                      variants={fadeIn}
                      custom={7 + i}
                      className="relative pl-5 border-l border-[var(--primary)]/20"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-3px] top-[6px] w-[5px] h-[5px] rounded-full bg-[var(--primary)] shadow-[0_0_6px_var(--primary)]" />

                      <div className="flex items-baseline justify-between gap-4 mb-1.5">
                        <h3 className="text-neutral-900 text-sm font-bold">
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
                        {exp.tasks.map((task: string) => (
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
                <h2 className="cv-section-title">{t("cv.stackTitle")}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[var(--primary)]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      {t("cv.webCore")}
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
                      {t("cv.mobile")}
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
                      {t("cv.backendInfra")}
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
                      {t("cv.expertise")}
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
                <h2 className="cv-section-title">{t("cv.educationTitle")}</h2>
                <div className="mb-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-neutral-900 text-sm font-bold">
                      {t("cv.education.degree")}
                    </h3>
                  </div>
                  <p className="text-[#6B635A] text-xs mt-1">{t("cv.education.school")}</p>
                  <p className="text-[#6B635A] text-[10px] tracking-wider font-mono mt-1">
                    {t("cv.education.period")}
                  </p>
                </div>
              </motion.section>

              {/* Langues */}
              <motion.section variants={fadeIn} custom={14}>
                <h2 className="cv-section-title">{t("cv.languagesTitle")}</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-900 text-sm font-medium">{t("cv.french")}</span>
                    <span className="text-[#6B635A] text-xs">{t("cv.frenchLevel")}</span>
                  </div>
                  <div className="h-[1px] bg-[var(--primary)]/5" />
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-900 text-sm font-medium">{t("cv.english")}</span>
                    <span className="text-[#6B635A] text-xs">{t("cv.englishLevel")}</span>
                  </div>
                </div>
              </motion.section>

              {/* Centres d'intérêt */}
              <motion.section variants={fadeIn} custom={15}>
                <h2 className="cv-section-title">{t("cv.interestsTitle")}</h2>
                <p className="text-[#6B635A] text-xs leading-[1.9]">
                  {t("cv.interests")}
                </p>
              </motion.section>
            </div>
          </div>

          {/* Footer */}
          <motion.div
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
