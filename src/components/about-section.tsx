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
          <span className="font-mono text-xs text-[#f59e0b] tracking-[0.2em] uppercase block mb-3 font-semibold">
            03 / PROFIL & VISION
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-[-0.03em] leading-[0.95]">
            Machaallah ADJIBOGOU
          </h2>
          <p className="mt-4 text-base text-neutral-400 max-w-xl">
            Développeur full stack, spécialisé dans les interfaces et les expériences web.
          </p>
        </div>

        {/* ═══ Content Grid: Portrait + Storytelling ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column: Pure, uncluttered with scroll-converging pixels */}
          <div className="lg:col-span-5 relative">
            <TiltCard maxTilt={3}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0e1014] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <PixelatedImage
                  src="/images/machaallah.jpg"
                  alt="Machaallah ADJIBOGOU"
                  aspectRatio="4/5"
                  pixelSize={22}
                  maxScatter={28}
                  showBadge={true}
                  priority
                />
              </div>
            </TiltCard>
          </div>

          {/* Storytelling & Experience Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            {/* Bio Narrative */}
            <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed">
              <p>
                Passionné par les interfaces numériques et les architectures logicielles rigoureuses, je conçois des applications web et mobiles qui réconcilient <strong className="text-white font-medium">l&apos;impact visuel</strong> et <strong className="text-white font-medium">l&apos;efficacité technique</strong>.
              </p>
              <p className="text-neutral-400 text-base">
                Diplômé d&apos;une <strong className="text-white font-medium">Licence en Ingénierie Logicielle & Systèmes d&apos;Information</strong> à l&apos;ESGIS (2021 — 2024), j&apos;ai acquis le réflexe de modéliser les systèmes, de prévoir la scalabilité et d&apos;éviter la dette technique avant d&apos;écrire la moindre ligne de code.
              </p>
              <p className="text-neutral-400 text-base">
                Au quotidien chez <strong className="text-white font-medium">Maono</strong>, j&apos;interviens comme Architecte Frontend et Développeur Full-Stack sur des plateformes critiques (TogoTech, SIN, Lomé Data Centre, Palais de Lomé). Mon objectif : livrer des interfaces modernes, rapides et durables.
              </p>
            </div>

            {/* Timeline Highlights */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-[#f59e0b] tracking-widest uppercase block mb-4">
                PARCOURS & EXPÉRIENCE VÉRIFIÉE
              </span>

              <div className="p-5 rounded-xl bg-[#0f1115] border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg text-white">Software Architect & Full-Stack Developer</h4>
                  <span className="font-mono text-xs text-[#f59e0b]">Oct 2024 — Présent</span>
                </div>
                <span className="text-xs font-mono text-neutral-400 block mb-2">Maono • Lomé, Togo</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Conception de l&apos;architecture frontend Next.js (SSR, SSG, SEO), intégration Headless WordPress et optimisation de plateformes institutionnelles et tech (TogoTech, SIN, LDC, Palais de Lomé).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0f1115] border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg text-white">Développeur Full-Stack</h4>
                  <span className="font-mono text-xs text-neutral-400">2024</span>
                </div>
                <span className="text-xs font-mono text-neutral-400 block mb-2">KIDOLE • Sous-région ouest-africaine</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Plateforme web de gestion de panneaux publicitaires : backend Laravel (API REST sécurisées), frontend Vue.js, gestion des rôles et analytique.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0f1115] border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg text-white">Licence en Ingénierie Logicielle & Systèmes d&apos;Information</h4>
                  <span className="font-mono text-xs text-neutral-400">2021 — 2024</span>
                </div>
                <span className="text-xs font-mono text-neutral-400 block">
                  ESGIS (École Supérieure de Gestion d&apos;Informatique et des Sciences)
                </span>
              </div>
            </div>

            {/* CV Download / View CTA */}
            <div className="pt-4">
              <Magnetic>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#161922] border border-white/15 text-white text-xs font-mono font-semibold tracking-wider uppercase hover:border-[#f59e0b] hover:text-[#f59e0b] transition-all duration-300"
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
