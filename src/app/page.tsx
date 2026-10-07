"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles, Terminal, Code2, Layers, Cpu, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  SplitText,
  Magnetic,
  Marquee,
  MaskReveal,
  ScrollProgress,
  SectionTransition,
  SectionDivider,
  ScrollAmbientGlow,
  SectionRail,
} from "@/components/animations";
import { InteractivePixelPortrait } from "@/components/interactive-pixel-portrait";
import { ProjectShowcase } from "@/components/project-showcase";
import { ExpertiseSection } from "@/components/expertise-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { useLanguage } from "@/lib/i18n";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.85], [0, 40]);
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#f59e0b]/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-[#f59e0b]/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Hero 2-Column Content: Text on Left, Interactive Pixel Portrait on Right */}
      <motion.div
        style={{ opacity, y }}
        className="max-w-[1360px] mx-auto px-6 md:px-10 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ═══ LEFT COLUMN: TYPOGRAPHY, STORY & CTAs ═══ */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Retro Blindy Signature Kicker */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b] animate-pulse" />
              <span className="font-blindy text-3xl sm:text-4xl text-[#ffe2b0] tracking-wider leading-none drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                Machaallah Adjibogou
              </span>
              <span className="text-neutral-600 font-mono text-xs">•</span>
              <span className="font-mono text-xs text-[#f59e0b] tracking-widest uppercase">
                2026
              </span>
            </div>

            {/* Main Monumental Headline */}
            <h1 className="font-serif text-[clamp(2.4rem,4.8vw,4.6rem)] leading-[0.98] tracking-[-0.035em] text-white">
              <SplitText delay={0.15} stagger={0.02} type="words">
                {t("home.hero.title1")}
              </SplitText>{" "}
              <br className="hidden sm:block" />
              <span className="italic text-[#f59e0b] font-normal">
                <SplitText delay={0.35} stagger={0.02} type="words">
                  {t("home.hero.titleHighlight1")}
                </SplitText>
              </span>{" "}
              <SplitText delay={0.55} stagger={0.02} type="words">
                {t("home.hero.title2")}
              </SplitText>
              <span className="text-[#f59e0b]">.</span>
            </h1>

            {/* Subtitle */}
            <MaskReveal delay={0.7}>
              <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-xl leading-relaxed font-normal">
                {t("home.hero.subtitle")}
              </p>
            </MaskReveal>

            {/* High-Impact Actions */}
            <MaskReveal delay={0.85}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a
                    href="#projets"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#f59e0b] text-[#08090b] text-xs font-mono font-semibold tracking-wider uppercase overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.55)] transition-all duration-300"
                  >
                    <span className="relative z-10">{t("home.hero.ctaProjects")}</span>
                    <ArrowDown size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-white text-xs font-mono tracking-wider uppercase hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all duration-300"
                  >
                    <span>{t("home.hero.ctaContact")}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]/50 group-hover:bg-[#f59e0b] transition-colors" />
                  </a>
                </Magnetic>
              </div>
            </MaskReveal>

            {/* Editorial Status Note */}
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="text-white font-medium">Lomé, Togo</span>
              <span className="text-neutral-600">•</span>
              <span className="text-[#f59e0b]">Disponible pour projets & collaborations</span>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: INTERACTIVE PIXEL CARTOON PORTRAIT ═══ */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <InteractivePixelPortrait
              src="/images/machaallah.jpg"
              name="Machaallah"
              role="DÉVELOPPEUR FULL STACK"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function MarqueeStrip() {
  const { t } = useLanguage();
  const skills = (t("home.marquee.skills") as unknown) as string[];
  const skillsList = Array.isArray(skills)
    ? skills
    : [
        "Next.js & React 19",
        "Creative Front-End",
        "Architecture Logicielle",
        "Intégration Design Systems & UI",
        "TypeScript",
        "Performance & Core Web Vitals",
        "Node.js & APIs",
        "Tailwind CSS",
      ];

  return (
    <div className="py-5 border-y border-white/5 bg-[#090a0d] overflow-hidden relative z-10">
      <Marquee speed={30}>
        <div className="flex items-center gap-10 mr-10">
          {skillsList.map((text: string) => (
            <span key={text} className="flex items-center gap-10">
              <span className="text-xs font-mono text-neutral-400 tracking-[0.2em] uppercase whitespace-nowrap">
                {text}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#f59e0b]" />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090b] text-[#f8fafc] selection:bg-[#f59e0b]/25 selection:text-white relative overflow-x-hidden">
      <ScrollProgress />
      <ScrollAmbientGlow />
      <SectionRail />

      {/* Hero Segment */}
      <HeroSection />

      {/* Marquee Ticker */}
      <MarqueeStrip />

      {/* Act 01: Selected Works */}
      <SectionTransition id="projets">
        <ProjectShowcase />
      </SectionTransition>

      {/* Act 02: Expertise & Software Architecture */}
      <SectionDivider
        actNumber="02"
        title="Architecture & Ingénierie"
        subtitle="Expertise Technique"
        tag="Stack & Méthodes"
      />
      <SectionTransition id="expertise">
        <ExpertiseSection />
      </SectionTransition>

      {/* Act 03: Profile & Trajectory */}
      <SectionDivider
        actNumber="03"
        title="Parcours & Philosophie"
        subtitle="Vision & Trajectoire"
        tag="Profil"
      />
      <SectionTransition id="a-propos">
        <AboutSection />
      </SectionTransition>

      {/* Act 04: Contact & Collaboration */}
      <SectionDivider
        actNumber="04"
        title="Contact & Collaboration"
        subtitle="Démarrer un Projet"
        tag="Disponible"
      />
      <SectionTransition id="contact">
        <ContactSection />
      </SectionTransition>
    </div>
  );
}
