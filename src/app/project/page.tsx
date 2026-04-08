"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code, Smartphone, Server, Globe } from "lucide-react";
import { projects } from "@/lib/projects";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SplitText,
  MaskReveal,
  LineReveal,
  PageTransition,
  ScrollProgress,
} from "@/components/animations";
import {
  FloatingElement,
  AbstractBlob,
  DotsPattern,
  ProcessFlowDiagram,
} from "@/components/visuals";

const filters = ["Tous", "Web", "Mobile", "Fullstack", "Architecture"];

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.05 }}
    >
      <Link href={`/project/${project.slug}`} className="group block project-card" data-cursor="Voir">
        <div className="relative overflow-hidden bg-[#111110] aspect-[16/10] rounded-sm">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover project-img transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-[#080808]/10 to-transparent" />
          <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="absolute top-5 left-5 flex items-center gap-3">
            <span className="text-[10px] text-white/25 tracking-[0.3em] font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* View indicator */}
          <div className="absolute bottom-5 right-5 flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Détails</span>
            <div className="w-7 h-7 rounded-full border border-[var(--primary)]/30 flex items-center justify-center group-hover:bg-[var(--primary)]/10 transition-colors duration-300">
              <ArrowUpRight size={11} className="text-[var(--primary)]" />
            </div>
          </div>
        </div>

        <div className="mt-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] text-[var(--primary)] tracking-[0.25em] uppercase font-medium">
                {project.type}
              </span>
              <span className="w-5 h-[1px] bg-[var(--primary)]/20" />
              <span className="text-[10px] text-neutral-500 tracking-[0.15em] uppercase font-medium">
                {project.sector}
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-[var(--primary)] transition-colors duration-500 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm font-medium">
              {project.description}
            </p>
          </div>
        </Link>
      </motion.div>
    );
  }

  export default function WorkPage() {
    const [active, setActive] = useState("Tous");

    const filtered =
      active === "Tous"
        ? projects
        : projects.filter((p) => p.tags.includes(active) || p.type.includes(active));

    return (
      <PageTransition>
        <div className="min-h-screen pt-24 md:pt-32 relative overflow-hidden">
          <ScrollProgress />

          {/* Floating decorative elements */}
          <FloatingElement className="absolute top-32 right-[5%] w-[200px] h-[200px] hidden lg:block" speed={20}>
            <AbstractBlob variant={1} className="w-full h-full opacity-25" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-[30%] left-[3%] w-[160px] h-[160px] hidden lg:block" speed={15} direction="down">
            <AbstractBlob variant={3} className="w-full h-full opacity-20" />
          </FloatingElement>

          <section className="py-20 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              {/* Header */}
              <div className="mb-20 md:mb-28 relative">
                <MaskReveal>
                  <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
                    Portfolio technique
                  </span>
                </MaskReveal>
                <div className="mt-4 mb-6">
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]">
                      <SplitText type="words" stagger={0.06}>Projets</SplitText>
                    </h1>
                </div>
                <MaskReveal delay={0.3}>
                  <p className="text-neutral-600 max-w-lg text-lg leading-relaxed font-medium">
                    Sélection de projets web et mobiles mettant en œuvre des architectures robustes et des solutions techniques innovantes.
                  </p>
                </MaskReveal>

                {/* Dots decoration */}
                <div className="absolute top-4 right-0 hidden xl:block opacity-30">
                  <DotsPattern cols={5} rows={5} />
                </div>
              </div>

              {/* Filters */}
              <MaskReveal delay={0.4}>
                <div className="flex flex-wrap gap-3 mb-16 md:mb-24">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActive(f)}
                      className={`relative px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase transition-all duration-500 z-10 ${
                        active === f
                          ? "text-white"
                          : "text-neutral-500 border border-[var(--primary)]/15 hover:border-[var(--primary)]/30 hover:text-foreground font-medium"
                      }`}
                    >
                      {f}
                      {active === f && (
                        <motion.div
                          layoutId="filter-active"
                          className="absolute inset-0 bg-[var(--primary)] -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                  <span className="text-[10px] text-neutral-400 tracking-wider self-center ml-2">
                    {filtered.length} projet{filtered.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </MaskReveal>

            <LineReveal delay={0.2} className="mb-16" />

              {/* Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 md:gap-y-28"
                >
                  {filtered.map((project, i) => (
                    <ProjectItem key={project.slug} project={project} index={i} />
                  ))}
                  {/* Carte "À venir" — visible uniquement sur le filtre All */}
                    {active === "Tous" && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: filtered.length * 0.05 }}
                    >
                      <div className="block project-card opacity-40 cursor-default select-none">
                        <div className="relative overflow-hidden bg-[#111110] aspect-[16/10] rounded-sm border border-dashed border-[var(--primary)]/15 flex flex-col items-center justify-center gap-4">
                          {/* Subtle grid pattern */}
                          <div className="absolute inset-0 grid-pattern opacity-10" />
                          {/* Number */}
                          <div className="absolute top-5 left-5">
                            <span className="text-[10px] text-white/20 tracking-[0.3em] font-mono">
                              {String(filtered.length + 1).padStart(2, "0")}
                            </span>
                          </div>
                          {/* Plus icon */}
                          <div className="w-10 h-10 border border-[var(--primary)]/20 flex items-center justify-center relative z-10">
                            <Code size={20} className="text-[var(--primary)]/40" />
                          </div>
                          <span className="text-[10px] text-[#6B635A] tracking-[0.35em] uppercase font-medium relative z-10">
                            En développement
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] text-[var(--primary)]/30 tracking-[0.25em] uppercase font-medium">
                              Prochainement
                            </span>
                          </div>
                          <h3 className="font-serif text-2xl md:text-3xl text-foreground/20 mb-2">
                            Nouvelle architecture en cours
                          </h3>
                          <p className="text-sm text-[#6B635A]/40 leading-relaxed max-w-sm">
                            De nouvelles réalisations techniques sont régulièrement ajoutées au portfolio.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Bottom flow diagram */}
              <div className="mt-24 md:mt-36">
                <ProcessFlowDiagram />
              </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
