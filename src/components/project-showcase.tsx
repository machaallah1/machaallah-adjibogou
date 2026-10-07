"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { useLocalizedProjects } from "@/lib/use-localized-projects";
import type { Project } from "@/lib/projects";
import { Magnetic, TiltCard } from "@/components/animations";

export function ProjectShowcase() {
  const { t } = useLanguage();
  const allProjects = useLocalizedProjects();
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = allProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "web")
      return (
        p.type.toLowerCase().includes("web") ||
        p.sector.toLowerCase().includes("digital") ||
        p.tags.some((tag) => ["Web", "SaaS"].includes(tag))
      );
    if (filter === "infra")
      return (
        p.sector.toLowerCase().includes("infrastructures") ||
        p.sector.toLowerCase().includes("technologie") ||
        p.sector.toLowerCase().includes("data")
      );
    if (filter === "creative")
      return (
        p.tags.some((tag) => ["Product", "UI", "Design"].includes(tag)) ||
        p.sector.toLowerCase().includes("sport") ||
        p.sector.toLowerCase().includes("art") ||
        p.sector.toLowerCase().includes("culture")
      );
    return true;
  });

  return (
    <section id="projets" className="py-24 md:py-36 relative scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#f59e0b]/[0.035] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#f59e0b]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <span className="font-mono text-xs text-[#f59e0b] tracking-[0.2em] uppercase block mb-3 font-semibold">
              01 // TRAVAUX SÉLECTIONNÉS
            </span>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-[-0.03em] leading-[0.96]">
              {t("home.selectedProjects.title")}
            </h2>
            <p className="mt-4 text-base md:text-lg text-neutral-400 max-w-xl font-normal">
              {t("home.selectedProjects.subtitle")}
            </p>
          </div>

          {/* Category Filter Pills (clean single-row layout) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#111317]/90 border border-white/10 backdrop-blur-md overflow-x-auto scrollbar-none max-w-full">
            {[
              { id: "all", label: t("home.selectedProjects.filters.all") },
              { id: "web", label: t("home.selectedProjects.filters.web") },
              { id: "infra", label: t("home.selectedProjects.filters.infra") },
              { id: "creative", label: t("home.selectedProjects.filters.creative") },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 ${
                  filter === f.id
                    ? "bg-[#f59e0b] text-[#08090b] font-semibold shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ═══ STICKY STACKING SCROLL SEQUENCE ═══ */}
        <div className="relative pb-24 md:pb-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectScrollCard
                key={project.slug}
                project={project}
                index={idx}
                total={filteredProjects.length}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA to View Full Archive */}
        <div className="mt-16 text-center">
          <Magnetic>
            <Link
              href="/project"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md text-neutral-200 text-xs font-mono tracking-widest uppercase hover:border-[#f59e0b] hover:text-[#f59e0b] hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-300"
            >
              <span>{t("home.selectedProjects.viewAll")}</span>
              <ArrowUpRight size={16} />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function ProjectScrollCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Track scroll progression as card moves from viewport bottom to docking position
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 md:top-28 mb-16 md:mb-24 last:mb-0 transition-all"
      style={{
        top: `calc(72px + ${Math.min(index, 6) * 16}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        layout
        style={{ scale, opacity, y }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative group"
      >
        <TiltCard maxTilt={1.5}>
          <div className="relative rounded-3xl bg-[#0d0f14]/98 border border-white/10 hover:border-[#f59e0b]/40 transition-all duration-500 overflow-hidden p-6 sm:p-8 md:p-12 shadow-[0_-15px_50px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            {/* Top Accent Horizon Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent pointer-events-none" />

            {/* Subtle Ambient Glow within card */}
            <div className="absolute -top-32 right-1/4 w-[350px] h-[350px] bg-[#f59e0b]/[0.025] rounded-full blur-3xl pointer-events-none" />

            {/* Top Architectural Metadata Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 md:mb-10 border-b border-white/5 text-xs font-mono">
              {/* Project Index Counter & Sector */}
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 text-[#f59e0b] font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <span className="text-neutral-400 tracking-wider uppercase font-medium">
                  {project.sector}
                </span>
              </div>

              {/* Year & Live Site Indicator */}
              <div className="flex items-center gap-4 text-neutral-400">
                <span className="text-neutral-500 font-medium">{project.year}</span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visiter le site en ligne"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 text-neutral-300 hover:text-[#f59e0b] hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/10 transition-colors"
                  >
                    <Globe size={13} />
                    <span className="text-[11px] tracking-wide">Live</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>

            {/* ═══ 2-COLUMN BALANCED CONTENT (ALTERNATING ON DESKTOP) ═══ */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
              }`}
            >
              {/* Visual Preview Side (High-Res, Clean, with Hover Zoom) */}
              <div className="lg:col-span-7">
                <Link
                  href={`/project/${project.slug}`}
                  className="block relative overflow-hidden rounded-2xl bg-[#060709] border border-white/10 group/preview transition-all duration-500 hover:border-[#f59e0b]/40 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
                  data-cursor="DÉCOUVRIR"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
                    />

                    {/* Gradient Depth Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-transparent to-transparent opacity-50 group-hover/preview:opacity-20 transition-opacity duration-500 pointer-events-none" />

                    {/* Hover Floating Action Badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="px-6 py-3 rounded-full bg-[#f59e0b] text-[#08090b] font-mono text-xs font-bold tracking-wider uppercase shadow-2xl flex items-center gap-2.5">
                        <span>VOIR L&apos;ÉTUDE COMPLÈTE</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Editorial Details Side */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight mb-3 group-hover:text-[#f59e0b] transition-colors duration-300">
                    <Link href={`/project/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  {/* Subtitle / Punchy Editorial Summary */}
                  <p className="font-sans text-sm sm:text-base text-neutral-300 font-medium mb-5 leading-snug">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-normal line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Stack & CTAs */}
                <div className="pt-6 border-t border-white/5 space-y-6">
                  {/* Tech Tools Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-md bg-[#13151b] border border-white/5 text-neutral-300 font-mono text-[11px] tracking-wider hover:border-[#f59e0b]/30 hover:text-[#f59e0b] transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Direct Action Links */}
                  <div className="flex items-center gap-4 pt-2">
                    <Magnetic>
                      <Link
                        href={`/project/${project.slug}`}
                        className="group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#f59e0b] text-[#08090b] font-mono text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] transition-all duration-300"
                      >
                        <span>Étude de cas</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </Magnetic>

                    {project.url && (
                      <Magnetic>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 bg-white/[0.02] text-neutral-300 hover:text-white hover:border-[#f59e0b] font-mono text-xs tracking-wider uppercase transition-colors"
                        >
                          <span>Visiter</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}
