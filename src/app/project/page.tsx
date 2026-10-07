"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Globe,
  Code2,
  SlidersHorizontal,
} from "lucide-react";
import { useLocalizedProjects } from "@/lib/use-localized-projects";
import type { Project } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import {
  SplitText,
  MaskReveal,
  PageTransition,
  ScrollProgress,
  Magnetic,
  TiltCard,
} from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="h-full"
    >
      <TiltCard maxTilt={1.5} className="h-full">
        <div className="relative rounded-3xl bg-white/95 dark:bg-[#0d0f14]/98 border border-black/8 dark:border-white/10 hover:border-[var(--primary)]/50 transition-all duration-500 overflow-hidden p-6 sm:p-8 md:p-9 flex flex-col justify-between h-full shadow-[0_10px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl group hover:-translate-y-1.5">
          {/* Top Horizon Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent pointer-events-none" />

          {/* Subtle Ambient Glow within card */}
          <div className="absolute -top-32 right-1/4 w-[300px] h-[300px] bg-[var(--primary)]/[0.035] rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Top Architectural Metadata Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-black/5 dark:border-white/5 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-[var(--primary)] font-bold tracking-wider text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]" />
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tracking-wider uppercase font-semibold text-[11px]">
                  {project.sector}
                </span>
              </div>

              <div className="flex items-center gap-3 text-neutral-500 text-[11px]">
                <span className="font-semibold">{project.year}</span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={locale === "en" ? "Visit live website" : "Visiter le site en ligne"}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-[var(--primary)] hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/10 transition-colors"
                  >
                    <Globe size={12} />
                    <span>Live</span>
                    <ArrowUpRight size={11} />
                  </a>
                )}
              </div>
            </div>

            {/* Visual Preview Side (High-Res, Clean, Hover Zoom) */}
            <Link
              href={`/project/${project.slug}`}
              className="block relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-[#060709] border border-black/8 dark:border-white/10 group/preview transition-all duration-500 my-5"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
                />

                {/* Vignette Gradient Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#08090b]/80 via-transparent to-transparent opacity-40 group-hover/preview:opacity-10 transition-opacity duration-500 pointer-events-none" />

                {/* Hover Action Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-5 py-2.5 rounded-full bg-[var(--primary)] text-white dark:text-[#08090b] font-mono text-xs font-bold tracking-wider uppercase shadow-2xl flex items-center gap-2">
                    <span>{locale === "en" ? "VIEW CASE STUDY" : "VOIR L'ÉTUDE"}</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Title & Editorial Summary */}
            <h3 className="font-sans text-2xl sm:text-3xl text-foreground font-bold tracking-tight mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
              <Link href={`/project/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-semibold mb-3 leading-snug line-clamp-1">
              {project.subtitle}
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Stack & CTAs */}
          <div className="pt-5 border-t border-black/5 dark:border-white/5 space-y-5">
            {/* Tech Tools Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-[#13151b] border border-black/5 dark:border-white/5 text-neutral-700 dark:text-neutral-300 font-mono text-[10px] tracking-wider hover:border-[var(--primary)]/30 hover:text-[var(--primary)] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Direct Action Links */}
            <div className="flex items-center gap-3 pt-1">
              <Magnetic>
                <Link
                  href={`/project/${project.slug}`}
                  className="group/btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--primary)] text-white dark:text-[#08090b] font-mono text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] transition-all duration-300"
                >
                  <span>{locale === "en" ? "Case Study" : "Étude de cas"}</span>
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Magnetic>

              {project.url && (
                <Magnetic>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 hover:text-foreground dark:hover:text-white hover:border-[var(--primary)] font-mono text-xs font-bold tracking-wider uppercase transition-colors"
                  >
                    <span>{locale === "en" ? "Visit" : "Visiter"}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function ComingSoonCard() {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div className="relative rounded-3xl bg-neutral-100/50 dark:bg-[#0d0f14]/50 border border-dashed border-[var(--primary)]/25 p-8 sm:p-10 flex flex-col justify-between backdrop-blur-md min-h-[460px] h-full group hover:border-[var(--primary)]/50 transition-colors">
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-black/5 dark:border-white/5">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-mono text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              {t("projects.comingSoon") || "Prochainement"}
            </span>
            <span className="text-[11px] font-mono text-neutral-400 uppercase">
              Pipeline R&D
            </span>
          </div>

          <div className="my-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 size={28} className="text-[var(--primary)]" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-bold mb-3">
              {t("projects.comingSoonTitle") || "Nouvelle architecture en cours"}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm leading-relaxed font-normal">
              {t("projects.comingSoonDesc") || "De nouvelles réalisations techniques sont régulièrement ajoutées au portfolio."}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
          <span>{locale === "en" ? "Production status: Active" : "Statut : En cours d'intégration"}</span>
          <span className="text-[var(--primary)] font-bold">2026</span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectPageCTA() {
  const { locale } = useLanguage();

  return (
    <div className="mt-28 md:mt-36">
      <div className="relative rounded-3xl bg-white/95 dark:bg-[#0d0f14]/98 border border-black/8 dark:border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Top horizon gradient */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--primary)]/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[var(--primary)]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-mono text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]" />
            <span>02 // {locale === "en" ? "START A PROJECT" : "COLLABORATION & IMPACT"}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight leading-tight mb-4">
            {locale === "en"
              ? "Have a project or system to build?"
              : "Un projet ambitieux à concevoir ou restructurer ?"}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 font-normal">
            {locale === "en"
              ? "From architecture and performance optimization to polished UI engineering, let's create a scalable and memorable digital solution."
              : "De l'architecture logicielle à l'intégration d'interfaces ciselées, concevons ensemble une solution performante, maintenable et mémorable."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--primary)] text-white dark:text-[#08090b] text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(217,119,6,0.3)] hover:shadow-[0_0_35px_rgba(217,119,6,0.5)] transition-all duration-300"
              >
                <span>{locale === "en" ? "Contact me" : "Me contacter"}</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="/cv"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-black/15 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.04] text-foreground text-xs font-mono font-bold tracking-wider uppercase hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
              >
                <span>{locale === "en" ? "View technical CV" : "Consulter mon CV"}</span>
                <ArrowUpRight size={14} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const { t, locale } = useLanguage();
  const allProjects = useLocalizedProjects();

  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = useMemo(() => [
    { id: "all", label: locale === "en" ? "All" : "Tous" },
    { id: "web", label: locale === "en" ? "Web & Platforms" : "Web & Plateformes" },
    { id: "infra", label: locale === "en" ? "Infrastructures & Tech" : "Infrastructures & Tech" },
    { id: "creative", label: locale === "en" ? "Design & Creative" : "Design & Créatif" },
  ], [locale]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "web") {
        return (
          p.type.toLowerCase().includes("web") ||
          p.sector.toLowerCase().includes("digital") ||
          p.tags.some((tag) => ["Web", "SaaS", "Plateforme"].includes(tag))
        );
      }
      if (activeFilter === "infra") {
        return (
          p.sector.toLowerCase().includes("infrastructures") ||
          p.sector.toLowerCase().includes("technologie") ||
          p.sector.toLowerCase().includes("data") ||
          p.sector.toLowerCase().includes("institutionnel") ||
          p.tags.some((tag) => ["Institutionnel", "Architecture", "Fullstack"].includes(tag))
        );
      }
      if (activeFilter === "creative") {
        return (
          p.tags.some((tag) => ["Product", "UI", "Design", "Culturel", "Portfolio"].includes(tag)) ||
          p.sector.toLowerCase().includes("sport") ||
          p.sector.toLowerCase().includes("art") ||
          p.sector.toLowerCase().includes("culture") ||
          p.sector.toLowerCase().includes("loisirs")
        );
      }
      return true;
    });
  }, [allProjects, activeFilter]);

  const countSummary = filteredProjects.length !== 1
    ? (locale === "en" ? `${filteredProjects.length} projects` : `${filteredProjects.length} projets`)
    : (locale === "en" ? "1 project" : "1 projet");

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden">
        <ScrollProgress />

        {/* Ambient background lighting matching new design */}
        <div className="absolute top-20 right-0 w-[550px] h-[550px] bg-[#f59e0b]/[0.035] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f59e0b]/[0.025] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur-md text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-foreground dark:hover:text-white hover:border-[var(--primary)] transition-all group"
            >
              <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
              <span>{locale === "en" ? "Back to home" : "Retour à l'accueil"}</span>
            </Link>
          </div>

          {/* Monumental Header Section */}
          <div className="mb-14 md:mb-18">
            <MaskReveal>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)] animate-pulse" />
                <span className="font-mono text-xs text-[var(--primary)] tracking-[0.25em] uppercase font-bold">
                  01 // {t("projects.label") || "ARCHIVE COMPLÈTE"}
                </span>
              </div>
            </MaskReveal>

            <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground tracking-[-0.035em] leading-[0.98]">
              <SplitText type="words" stagger={0.05}>
                {t("projects.title")}
              </SplitText>
              <span className="text-[var(--primary)]">.</span>
            </h1>

            <MaskReveal delay={0.25}>
              <p className="mt-5 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed font-normal">
                {t("projects.subtitle")}
              </p>
            </MaskReveal>
          </div>

          {/* Clean Category Filter Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-16 pb-6 border-b border-black/5 dark:border-white/5">
            {/* Filter Pills Bar */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-neutral-100/90 dark:bg-[#111317]/90 border border-black/5 dark:border-white/10 backdrop-blur-md">
              {filterTabs.map((f) => {
                const count = f.id === "all"
                  ? allProjects.length
                  : allProjects.filter((p) => {
                      if (f.id === "web") {
                        return p.type.toLowerCase().includes("web") || p.sector.toLowerCase().includes("digital") || p.tags.some((t) => ["Web", "SaaS", "Plateforme"].includes(t));
                      }
                      if (f.id === "infra") {
                        return p.sector.toLowerCase().includes("infrastructures") || p.sector.toLowerCase().includes("technologie") || p.sector.toLowerCase().includes("data") || p.sector.toLowerCase().includes("institutionnel") || p.tags.some((t) => ["Institutionnel", "Architecture", "Fullstack"].includes(t));
                      }
                      if (f.id === "creative") {
                        return p.tags.some((t) => ["Product", "UI", "Design", "Culturel", "Portfolio"].includes(t)) || p.sector.toLowerCase().includes("sport") || p.sector.toLowerCase().includes("art") || p.sector.toLowerCase().includes("culture") || p.sector.toLowerCase().includes("loisirs");
                      }
                      return true;
                    }).length;

                return (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-300 ${
                      activeFilter === f.id
                        ? "bg-[var(--primary)] text-white dark:text-[#08090b] font-bold shadow-[0_0_15px_rgba(217,119,6,0.3)]"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-foreground dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 font-medium"
                    }`}
                  >
                    <span>{f.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        activeFilter === f.id
                          ? "bg-black/20 text-white dark:bg-black/25 dark:text-[#08090b]"
                          : "bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Summary Count Pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-neutral-500 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]" />
              <span className="font-bold text-foreground">{countSummary}</span>
            </div>
          </div>

          {/* Projects Balanced Grid Layout */}
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center rounded-3xl bg-neutral-100/30 dark:bg-[#0d0f14]/30 border border-black/5 dark:border-white/5 p-8"
              >
                <SlidersHorizontal size={32} className="mx-auto text-neutral-400 mb-4 opacity-50" />
                <h3 className="font-serif text-2xl text-foreground font-bold mb-2">
                  {locale === "en" ? "No projects match your criteria" : "Aucun projet ne correspond à vos critères"}
                </h3>
                <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">
                  {locale === "en"
                    ? "Try adjusting your search query or selecting a different category."
                    : "Essayez de modifier votre mot-clé de recherche ou sélectionnez une autre catégorie."}
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="px-6 py-2.5 rounded-full bg-[var(--primary)] text-white dark:text-[#08090b] font-mono text-xs font-bold tracking-wider uppercase"
                >
                  {locale === "en" ? "Reset filters" : "Réinitialiser les filtres"}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
              >
                {filteredProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={idx}
                    total={filteredProjects.length}
                  />
                ))}

                {/* Coming Soon R&D Card on "all" filter */}
                {activeFilter === "all" && (
                  <ComingSoonCard />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modern Bottom Collaboration CTA */}
          <ProjectPageCTA />
        </div>
      </div>
    </PageTransition>
  );
}
