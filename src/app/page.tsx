"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Suspense, useRef } from "react";
import {
  SplitText,
  Magnetic,
  LineReveal,
  Marquee,
  MaskReveal,
  Stagger,
  StaggerItem,
  ScrollProgress,
} from "@/components/animations";
import { Reveal } from "@/components/reveal";
import {
  HeroVisual,
  FloatingElement,
  ConcentricCircles,
  WireframeGrid,
  AbstractBlob,
  StatBlock,
  DotsPattern,
  ClassDiagramSkeleton,
  MobileClassDiagramSkeleton,
} from "@/components/visuals";
import { useLanguage } from "@/lib/i18n";
import { useLocalizedProjects } from "@/lib/use-localized-projects";
import type { Project } from "@/lib/projects";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 orb-1" />
      <div className="absolute inset-0 orb-2" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Hero abstract visual — right side */}
      <div className="absolute right-[-5%] top-[10%] w-[500px] h-[500px] hidden lg:block opacity-60">
        <HeroVisual />
      </div>

      {/* Floating blobs */}
      <FloatingElement className="absolute top-[15%] left-[5%] w-[200px] h-[200px] hidden lg:block" speed={20}>
        <AbstractBlob variant={1} className="w-full h-full opacity-40" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-[25%] right-[25%] w-[120px] h-[120px] hidden lg:block" speed={15} direction="down">
        <AbstractBlob variant={2} className="w-full h-full opacity-30" />
      </FloatingElement>

      {/* Decorative dots */}
      <div className="absolute top-[20%] right-[40%] hidden xl:block opacity-30">
        <DotsPattern cols={5} rows={5} />
      </div>

      {/* Rotating badge */}
      <div className="absolute top-[18%] right-[8%] hidden lg:block">
        <div className="spin-slow w-[120px] h-[120px] relative">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <path id="circle-text" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
            <text className="fill-[var(--primary)]/30 text-[11px] tracking-[0.35em] uppercase">
              <textPath href="#circle-text">{t("home.hero.rotatingBadge")}</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glow-dot" />
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: titleY, opacity }}
        className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10"
      >
        {/* Top line */}
        <div className="mb-10 md:mb-14">

        </div>

        {/* Main title */}
        <h1 className="font-serif text-5xl md:text-6xl leading-[0.92] tracking-[-0.03em] text-foreground">
          <SplitText delay={0.4} stagger={0.025} type="words">
            {t("home.hero.title1")}
          </SplitText>{" "}
          <span className="italic text-[var(--primary)]">
            <SplitText delay={0.6} stagger={0.025} type="words">
              {t("home.hero.titleHighlight1")}
            </SplitText>
          </span>
          <br className="hidden md:block" />{" "}
          <SplitText delay={0.7} stagger={0.025} type="words">
            {t("home.hero.title2")}
          </SplitText>{" "}
          <span className="italic text-[var(--primary)]">
            <SplitText delay={0.9} stagger={0.025} type="words">
              {t("home.hero.titleHighlight2")}
            </SplitText>
          </span>
          <br className="hidden md:block" />{" "}
          <SplitText delay={1.0} stagger={0.025} type="words">
            {t("home.hero.title3")}
          </SplitText>
        </h1>

        {/* Subtitle & CTAs */}
        <motion.div
          style={{ y: subtitleY }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <MaskReveal delay={1.2}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-md leading-relaxed">
              {t("home.hero.subtitle")}
              <br />
              <span className="text-neutral-500">{t("home.hero.subtitleLocation")}</span>
            </p>
          </MaskReveal>

          <MaskReveal delay={1.4}>
            <div className="flex gap-4">
              <Magnetic>
                <Link
                  href="/project"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--primary)] text-white text-sm font-medium tracking-[0.12em] uppercase overflow-hidden"
                >
                  <span className="relative z-10">{t("home.hero.ctaProjects")}</span>
                  <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-[#068a09] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--primary)]/20 text-foreground text-sm font-medium tracking-[0.12em] uppercase hover:border-[var(--primary)]/50 transition-all duration-500"
                >
                  Contact
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 group-hover:bg-[var(--primary)] transition-colors duration-300" />
                </Link>
              </Magnetic>
            </div>
          </MaskReveal>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-6 md:left-10 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >

        </motion.div>
      </motion.div>
    </section>
  );
}

function MarqueeStrip() {
  const { t, locale } = useLanguage();
  const skills = (t("home.marquee.skills") as unknown) as string[];
  // Fallback if t returns a string key instead of array
  const skillsList = Array.isArray(skills) ? skills : ["Architecture Logicielle", "Développement Web", "Développement Mobile", "React / Next.js", "Vue.js", "Flutter", "Node.js", "Clean Code", "API Design", "Performance", "Scalabilité"];

  return (
    <div className="py-8 border-t border-b border-[var(--primary)]/10">
      <Marquee speed={40}>
        <div className="flex items-center gap-12 mr-12">
          {skillsList.map((text: string) => (
            <span key={text} className="flex items-center gap-12">
              <span className="text-xs text-neutral-500 tracking-[0.2em] uppercase whitespace-nowrap">
                {text}
              </span>
              <span className="glow-dot !w-[4px] !h-[4px] !shadow-none opacity-40" />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

/* Stats banner between sections */
function StatsStrip() {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 cross-pattern opacity-20" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <StatBlock number="10+" label={t("home.stats.projects")} accent />
          <StatBlock number="6+" label={t("home.stats.sectors")} />
          <StatBlock number="2+" label={t("home.stats.experience")} accent />
          <StatBlock number="100%" label={t("home.stats.quality")} />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: (index % 2) * 0.15 }}
    >
      <Link href={`/project/${project.slug}`} className="group block project-card" data-cursor="Voir">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#111110] aspect-[4/3] rounded-sm">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover project-img transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Number */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] text-white/25 tracking-[0.3em] font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] text-[var(--primary)] tracking-[0.25em] uppercase font-medium">
                {project.type}
              </span>
              <span className="w-4 h-[1px] bg-[var(--primary)]/20" />
              <span className="text-[9px] text-white/40 tracking-[0.15em] uppercase">
                {project.sector}
              </span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--primary)]/40 transition-all duration-500">
            <ArrowUpRight size={12} className="text-[var(--primary)]" />
          </div>
        </div>

        {/* Title below */}
        <div className="mt-4">
          <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-[var(--primary)] transition-colors duration-500">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

function Selectedproject() {
  const localizedProjects = useLocalizedProjects();
  const featured = localizedProjects.slice(0, 6);
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 relative">
      {/* Floating decorative blobs */}
      <FloatingElement className="absolute top-20 right-[5%] w-[180px] h-[180px] hidden lg:block" speed={25}>
        <AbstractBlob variant={3} className="w-full h-full opacity-30" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-[3%] w-[140px] h-[140px] hidden lg:block" speed={18} direction="down">
        <AbstractBlob variant={1} className="w-full h-full opacity-20" />
      </FloatingElement>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <MaskReveal>
              <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
                {t("home.selectedProjects.label")}
              </span>
            </MaskReveal>
            <div className="mt-3">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
                <SplitText type="words" stagger={0.05}>{t("home.selectedProjects.title")}</SplitText>
              </h2>
            </div>
          </div>
          <Reveal>
            <Magnetic>
              <Link
                href="/project"
                className="hidden sm:inline-flex items-center gap-3 text-sm text-neutral-500 hover:text-[var(--primary)] transition-colors duration-500 tracking-[0.12em] uppercase link-underline"
              >
                {t("home.selectedProjects.viewAll")}
                <ArrowUpRight size={14} />
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* View all - mobile */}
        <div className="mt-12 sm:hidden text-center">
          <Magnetic>
            <Link
              href="/project"
              className="inline-flex items-center gap-3 text-sm text-neutral-500 hover:text-[var(--primary)] transition-colors duration-500 tracking-[0.12em] uppercase"
            >
              {t("home.selectedProjects.viewAll")}
              <ArrowUpRight size={14} />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

/* Visual showcase between sections — Desktop & Mobile wireframes */
function DesignShowcase() {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="text-center mb-12 md:mb-16">
          <MaskReveal>
            <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
              {t("home.designShowcase.label")}
            </span>
          </MaskReveal>
          <div className="mt-3">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[0.95]">
              <SplitText type="words" stagger={0.05}>{t("home.designShowcase.title")}</SplitText>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
          {/* Desktop logic diagram */}
          <div className="relative">
            <ClassDiagramSkeleton className="w-full max-w-[700px] mx-auto" />
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 hidden lg:block opacity-40">
              <DotsPattern cols={4} rows={4} />
            </div>
          </div>

          {/* Mobile logic diagram */}
          <div className="relative max-w-[240px] mx-auto lg:mx-0">
            <MobileClassDiagramSkeleton className="w-full" />
            {/* Floating concentric circles */}
            <FloatingElement className="absolute -top-12 -right-12 w-[100px] h-[100px] hidden lg:block" speed={10}>
              <ConcentricCircles className="w-full h-full" rings={3} />
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { t, locale } = useLanguage();
  const steps = (t("home.process.steps") as unknown) as Array<{ num: string; title: string; desc: string }>;
  const stepsList = Array.isArray(steps) ? steps : [];

  return (
    <section className="py-32 md:py-48 relative">
      <div className="absolute inset-0 cross-pattern opacity-30" />

      {/* Floating wireframe grid decoration */}
      <FloatingElement className="absolute top-32 right-[5%] w-[280px] hidden xl:block opacity-40" speed={15}>
        <Suspense fallback={null}>
          <WireframeGrid />
        </Suspense>
      </FloatingElement>

      <LineReveal />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <MaskReveal>
              <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
                {t("home.process.label")}
              </span>
            </MaskReveal>
            <div className="mt-4 mb-6">
              <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-[0.95]">
                <SplitText type="words" stagger={0.05}>{t("home.process.title")}</SplitText>
              </h2>
            </div>
            <Reveal delay={0.3}>
              <p className="text-neutral-600 leading-relaxed max-w-md">
                {t("home.process.description")}
              </p>
            </Reveal>

            {/* Concentric circles illustration */}
            <div className="mt-10 hidden lg:block">
              <ConcentricCircles className="w-[200px] h-[200px] opacity-50" />
            </div>
          </div>

          <Stagger stagger={0.08} delay={0.2}>
            {stepsList.map((step) => (
              <StaggerItem key={step.num}>
                <div className="group flex items-start gap-8 md:gap-12 py-10 border-b border-[var(--primary)]/5 hover:border-[var(--primary)]/20 transition-all duration-700">
                  <span className="text-[var(--primary)]/20 text-2xl md:text-3xl font-serif italic group-hover:text-[var(--primary)]/60 transition-colors duration-700 shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-foreground text-xl md:text-2xl font-serif mb-2 group-hover:text-[var(--primary)] transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed max-lg">
                      {step.desc}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[var(--primary)]/0 group-hover:text-[var(--primary)]/50 transition-all duration-500 ml-auto mt-2 shrink-0" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function StrengthsSection() {
  const { t } = useLanguage();
  const items = (t("home.strengths.items") as unknown) as Array<{ num: string; title: string; desc: string }>;
  const strengthsList = Array.isArray(items) ? items : [];

  return (
    <section className="py-32 md:py-48 relative">
      {/* Floating abstract blob */}
      <FloatingElement className="absolute top-20 left-[8%] w-[250px] h-[250px] hidden lg:block" speed={20}>
        <AbstractBlob variant={2} className="w-full h-full opacity-25" />
      </FloatingElement>

      <LineReveal />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-48">
        <div className="text-center mb-20 md:mb-28">
          <MaskReveal>
            <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
              {t("home.strengths.label")}
            </span>
          </MaskReveal>
          <div className="mt-4">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
              <SplitText type="words" stagger={0.05}>{t("home.strengths.title")}</SplitText>
            </h2>
          </div>
        </div>

        <Stagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {strengthsList.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group relative p-10 md:p-14 border border-[var(--primary)]/5 hover:border-[var(--primary)]/20 transition-all duration-700 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(4,118,7,0.12)]">
                {/* Background gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.03] via-transparent to-[var(--primary)]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Animated accent line — slides in from left */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />

                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                {/* Decorative corner accents */}
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[var(--primary)]/0 group-hover:border-[var(--primary)]/15 transition-all duration-500 delay-100" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[var(--primary)]/0 group-hover:border-[var(--primary)]/15 transition-all duration-500 delay-100" />

                {/* Glow dot — pulses on hover */}
                <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/40 transition-all duration-500 group-hover:shadow-[0_0_8px_2px_rgba(4,118,7,0.2)]" />

                <div className="relative z-10">
                  <span className="text-[var(--primary)]/15 text-5xl md:text-6xl font-serif italic group-hover:text-[var(--primary)]/35 group-hover:scale-110 inline-block origin-left transition-all duration-700 ease-out">
                    {s.num}
                  </span>
                  <h3 className="text-foreground text-xl md:text-2xl font-serif mt-6 mb-4 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all duration-500">
                    {s.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm max-w-sm group-hover:text-neutral-500 transition-colors duration-500">
                    {s.desc}
                  </p>

                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-40 md:py-56 relative">
      <LineReveal />
      <motion.div
        style={{ scale }}
        className="max-w-[1400px] mx-auto px-6 md:px-10 pt-40 md:pt-56 text-center relative"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pulse-glow" />

        {/* Concentric circle decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden md:block">
          <ConcentricCircles className="w-full h-full opacity-30" />
        </div>

        <MaskReveal>
          <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
            {t("home.cta.label")}
          </span>
        </MaskReveal>
        <div className="mt-6">
          <h2 className="font-serif text-[clamp(2rem,6vw,5rem)] text-foreground leading-[0.95] max-w-5xl mx-auto">
            <SplitText type="words" stagger={0.04}>{t("home.cta.title1")}</SplitText>{" "}
            <span className="italic text-[var(--primary)]">
              <SplitText type="words" delay={0.5} stagger={0.04}>{t("home.cta.titleHighlight")}</SplitText>
            </span>{" "}
            <SplitText type="words" delay={0.6} stagger={0.04}>{t("home.cta.title2")}</SplitText>
          </h2>
        </div>

        <MaskReveal delay={0.8}>
          <div className="mt-14">
            <Magnetic>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[var(--primary)] text-white text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden"
              >
                <span className="relative z-10">{t("home.cta.button")}</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-[#068a09] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </Magnetic>
          </div>
        </MaskReveal>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <HeroSection />
      <MarqueeStrip />
      <StatsStrip />
      <Selectedproject />
      <DesignShowcase />
      <ProcessSection />
      <StrengthsSection />
      <CTASection />
    </div>
  );
}
