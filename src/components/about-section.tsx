"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Briefcase, MapPin, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Magnetic, TiltCard } from "@/components/animations";
import { PixelatedImage } from "@/components/pixelated-image";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="py-24 md:py-32 relative scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span className="font-mono text-xs text-[var(--primary)] tracking-[0.2em] uppercase block mb-3 font-bold">
            03 / PROFIL & VISION
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground font-bold tracking-[-0.03em] leading-[0.95]">
            Machaallah ADJIBOGOU
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
            Développeur full stack, spécialisé dans les interfaces et les expériences web.
          </p>
        </div>

        {/* ═══ Content Grid: Portrait + Storytelling ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column: Frameless, organic portrait */}
          <div className="lg:col-span-5 relative">
            <TiltCard maxTilt={2}>
              <div
                className="relative aspect-[4/5] w-full max-w-[440px] mx-auto select-none"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
              >
                <Image
                  src="/images/machaallah.jpg"
                  alt="Machaallah ADJIBOGOU"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover rounded-2xl"
                />
              </div>
            </TiltCard>
          </div>

          {/* Storytelling & Experience Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            {/* Bio Narrative */}
            <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              <p>
                Passionné par les interfaces numériques et les architectures logicielles rigoureuses, je conçois des applications web et mobiles qui réconcilient <strong className="text-foreground font-bold">l&apos;impact visuel</strong> et <strong className="text-foreground font-bold">l&apos;efficacité technique</strong>.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-base">
                Diplômé d&apos;une <strong className="text-foreground font-bold">Licence en Ingénierie Logicielle & Systèmes d&apos;Information</strong> à l&apos;ESGIS (2021 — 2024), j&apos;ai acquis le réflexe de modéliser les systèmes, de prévoir la scalabilité et d&apos;éviter la dette technique avant d&apos;écrire la moindre ligne de code.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-base">
                Au quotidien chez <strong className="text-foreground font-bold">Maono</strong>, j&apos;interviens comme Architecte Frontend et Développeur Full-Stack sur des plateformes critiques (TogoTech, SIN, Lomé Data Centre, Palais de Lomé). Mon objectif : livrer des interfaces modernes, rapides et durables.
              </p>
            </div>

            {/* Timeline Highlights */}
            <div className="space-y-4 pt-6 border-t border-black/10 dark:border-white/10">
              <span className="font-mono text-xs text-[var(--primary)] tracking-widest uppercase block mb-4 font-bold">
                PARCOURS & EXPÉRIENCE VÉRIFIÉE
              </span>

              <div className="p-5 rounded-xl bg-white dark:bg-[#0f1115] border border-black/8 dark:border-white/5 hover:border-[var(--primary)]/30 shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-none transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg text-foreground font-bold">Software Architect & Full-Stack Developer</h4>
                  <span className="font-mono text-xs text-[var(--primary)] font-bold">Oct 2024 — Présent</span>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block mb-2 font-medium">Maono • Lomé, Togo</span>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  Conception de l&apos;architecture frontend Next.js (SSR, SSG, SEO), intégration Headless WordPress et optimisation de plateformes institutionnelles et tech (TogoTech, SIN, LDC, Palais de Lomé).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#0f1115] border border-black/8 dark:border-white/5 hover:border-[var(--primary)]/30 shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-none transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg text-foreground font-bold">Développeur Full-Stack</h4>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-semibold">2024</span>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block mb-2 font-medium">KIDOLE • Sous-région ouest-africaine</span>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  Plateforme web de gestion de panneaux publicitaires : backend Laravel (API REST sécurisées), frontend Vue.js, gestion des rôles et analytique.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#0f1115] border border-black/8 dark:border-white/5 hover:border-[var(--primary)]/30 shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-none transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg text-foreground font-bold">Licence en Ingénierie Logicielle & Systèmes d&apos;Information</h4>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-semibold">2021 — 2024</span>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block font-medium">
                  ESGIS (École Supérieure de Gestion d&apos;Informatique et des Sciences)
                </span>
              </div>
            </div>

            {/* CV Download / View CTA */}
            <div className="pt-4">
              <Magnetic>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-100 dark:bg-[#161922] border border-black/10 dark:border-white/15 text-foreground text-xs font-mono font-bold tracking-wider uppercase hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span>Consulter mon CV complet (A4)</span>
                  <ArrowUpRight size={14} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
