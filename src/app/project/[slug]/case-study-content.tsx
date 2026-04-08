"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  SplitText,
  MaskReveal,
  LineReveal,
  Magnetic,
  ScrollProgress,
} from "@/components/animations";
import {
  FloatingElement,
  AbstractBlob,
  ConcentricCircles,
  DotsPattern,
  SystemArchitecture,
  UseCaseModeling,
  LogicSequence,
} from "@/components/visuals";
import type { Project, ProjectSection } from "@/lib/projects";

/* ── Animated wrapper ── */
function AnimSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section label badge ── */
function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8 md:mb-12">
      <span className="text-[11px] text-[var(--primary-dark)] tracking-[0.4em] uppercase font-mono font-black">
        SECTION::{num}
      </span>
      <span className="w-12 h-[1px] bg-[var(--primary)]/30" />
      <span className="text-[11px] text-neutral-500 tracking-[0.2em] uppercase font-bold">
        {title}
      </span>
    </div>
  );
}

/* ── Metric card ── */
function MetricCard({
  label,
  value,
  index,
}: {
  label: string;
  value: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      className="relative group p-8 md:p-10 border border-neutral-100 hover:border-[var(--primary)]/30 transition-all duration-700 overflow-hidden bg-white hover:shadow-[0_20px_40px_rgba(4,118,7,0.05)] text-center"
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-4 right-6 text-[9px] text-[var(--primary)] font-mono opacity-20 font-black">VAL_NODE::{index}</div>
      <span className="relative block font-serif text-4xl md:text-5xl text-[var(--primary-dark)] mb-4 leading-none font-bold">
        {value}
      </span>
      <span className="relative block text-[10px] text-neutral-900 tracking-[0.3em] uppercase font-mono font-black">
        {label}
      </span>
    </motion.div>
  );
}

/* ── Full-bleed parallax image ── */
function FullBleedImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div ref={ref} className="relative overflow-hidden aspect-[16/9] bg-[#111]">
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
          </motion.div>
          <div className="absolute inset-0" />
        </div>
        
      </div>
    </div>
  );
}

/* ── Browser mockup frame ── */
function BrowserMockup({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-12 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="bg-[#111110] border border-[var(--primary)]/20 rounded-t-xl overflow-hidden shadow-2xl">
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--primary)]/10 bg-[#1a1a19]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex justify-center">
              <div className="bg-[#0a0a09] border border-white/5 rounded-md px-16 py-1.5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="text-[9px] text-[#8A817A] tracking-[0.2em] uppercase font-mono">
                    PRODUCTION_STABLE::v1.0.4
                  </span>
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/10] bg-[#0E0D0C]">
            <Image src={src} alt={alt} fill className="object-cover object-top" sizes="100vw" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Phone mockup frame ── */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="mx-auto max-w-[320px] relative"
    >
      <div className="bg-[#111110] border border-[var(--primary)]/20 rounded-[3rem] overflow-hidden p-3 shadow-2xl">
        <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-[#0E0D0C]">
          <Image src={src} alt={alt} fill className="object-cover object-top" sizes="320px" />
        </div>
      </div>
        <p className="text-[11px] text-[#4a4a4a] tracking-[0.15em] uppercase mt-6 text-center font-medium">
          Interface Mobile Native
        </p>
    </motion.div>
  );
}

/* ── Duo image grid (side by side) ── */
function DuoImages({ images, alts }: { images: string[]; alts: string[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9 }}
      className="py-8 md:py-16"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images.slice(0, 2).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative overflow-hidden aspect-[4/3] bg-[#111]"
            >
              <Image src={src} alt={alts[i] || ""} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Trio image grid (1 big + 2 stacked) ── */
function TrioImages({ images, alts }: { images: string[]; alts: string[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9 }}
      className="py-8 md:py-16"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden aspect-[4/3] bg-[#111]"
          >
            <Image src={images[0]} alt={alts[0] || ""} fill className="object-cover" sizes="66vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/20 to-transparent" />
          </motion.div>
          <div className="flex flex-col gap-4 md:gap-6">
            {images.slice(1, 3).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
                className="relative overflow-hidden aspect-[4/3] bg-[#111] flex-1"
              >
                <Image src={src} alt={alts[i + 1] || ""} fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Duo phones side by side ── */
function DuoPhones({ leftSrc, rightSrc, alt }: { leftSrc: string; rightSrc: string; alt: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-16 md:py-24"
    >
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <div className="flex justify-center items-center gap-8 md:gap-16">
          {/* Phone 1 */}
          <div className="relative w-[280px] md:w-[320px]">
             <div className="bg-[#1A1918] border border-[var(--primary)]/10 rounded-[2.5rem] overflow-hidden p-2 shadow-2xl shadow-black/50">
                <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden bg-[#0E0D0C]">
                  <Image src={leftSrc} alt={`${alt} — Screen 1`} fill className="object-cover object-top" sizes="320px" />
                </div>
             </div>
          </div>
          {/* Phone 2 - slightly offset or just side by side */}
          <div className="relative w-[280px] md:w-[320px] pt-12 md:pt-24 hidden md:block">
             <div className="bg-[#1A1918] border border-[var(--primary)]/10 rounded-[2.5rem] overflow-hidden p-2 shadow-2xl shadow-black/50">
                <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden bg-[#0E0D0C]">
                  <Image src={rightSrc} alt={`${alt} — Screen 2`} fill className="object-cover object-top" sizes="320px" />
                </div>
             </div>
          </div>
        </div>
          <p className="text-[11px] text-[#6B635A] tracking-[0.15em] uppercase mt-12 text-center">
            Vues mobiles
          </p>
      </div>
    </motion.div>
  );
}

/* ── Desktop + Mobile side by side mockup ── */
function DeviceDuo({ desktopSrc, mobileSrc, alt }: { desktopSrc: string; mobileSrc: string; alt: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative">
          {/* Desktop */}
          <div className="bg-[#1A1918] border border-[var(--primary)]/10 rounded-t-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--primary)]/5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/10" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#0E0D0C] rounded-md px-12 py-1">
                    <span className="text-[10px] text-[#6B635A] tracking-wider">système</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/10] bg-[#0E0D0C]">
              <Image src={desktopSrc} alt={`${alt} — Desktop`} fill className="object-cover object-top" sizes="100vw" />
            </div>
          </div>
          {/* Mobile overlaid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-8 -right-4 md:right-8 w-[140px] md:w-[200px] z-10"
          >
            <div className="bg-[#1A1918] border border-[var(--primary)]/15 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden p-1.5 md:p-2 shadow-2xl shadow-black/50">
              <div className="relative aspect-[9/19] rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden bg-[#0E0D0C]">
                <Image src={mobileSrc} alt={`${alt} — Mobile`} fill className="object-cover object-top" sizes="200px" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── System Architecture Tokens ── */
function ArchitectureTokens({ colors }: { colors: { name: string; hex: string }[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
      className="py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionLabel num="System" title="Architecture & Identité" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {colors.map((c, i) => (
            <motion.div
              key={c.hex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div
                className="aspect-[3/2] rounded-sm mb-4 border border-black/5 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: c.hex }}
              />
              <p className="text-[11px] text-[#1a1a1a] tracking-[0.2em] uppercase font-mono font-bold">
                {c.hex}
              </p>
              <p className="text-[9px] text-[#8A817A] tracking-wider font-mono">COLOR_ID::{i}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Tools ── */
function ToolsList({ tools }: { tools: string[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
      className="py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionLabel num="Stack" title="Technologies & Outils" />
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="px-6 py-3 border border-[var(--primary)]/10 text-sm text-[#8A817A] tracking-[0.1em] uppercase hover:border-[var(--primary)]/30 hover:text-[var(--primary)] transition-all duration-500 cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Rich section renderer ── */
function RichSection({ section }: { section: ProjectSection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          {/* Left */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-start gap-6"
          >
            <span className="text-[var(--primary)] opacity-[0.08] text-6xl md:text-8xl font-serif italic leading-none select-none">
              {section.num}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 pt-3 font-bold leading-tight">
              {section.title}
            </h2>
          </motion.div>
          {/* Right */}
          <div className="max-w-2xl bg-white/50 relative">
            {section.content && (
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-neutral-800 leading-[1.9] text-base md:text-lg mb-10 font-medium"
              >
                {section.content}
              </motion.p>
            )}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-4 mb-10">
                {section.bullets.map((b, i) => (
                  <motion.li 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 text-neutral-700 leading-[1.8] text-base"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)]/40 mt-2 shrink-0 border border-[var(--primary)]/10" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            )}
            {section.subsections?.map((sub, i) => (
              <div key={i} className="mb-10 last:mb-0 border-l border-neutral-100 pl-10 relative">
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-[var(--primary)]/30 -translate-x-full" />
                <h3 className="text-neutral-900 text-sm md:text-base font-black tracking-widest mb-4 uppercase">
                  {sub.title}
                </h3>
                {sub.content && (
                  <p className="text-neutral-700 leading-[1.9] text-base mb-4 font-medium">
                    {sub.content}
                  </p>
                )}
                {sub.bullets && sub.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {sub.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-neutral-600 leading-[1.8] text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/20 mt-2.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {section.quote && (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.98 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 pl-8 border-l-2 border-[var(--primary)]/30 py-4 bg-[var(--primary)]/[0.01]"
              >
                <p className="text-neutral-800 italic font-serif text-lg md:text-xl leading-relaxed">
                  {section.quote}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Divider ── */
function Divider() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <LineReveal />
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════ */

export function CaseStudyContent({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const g = project.gallery;
  const sections = project.sections;

  // We interleave visuals between sections for maximum impact
  // Layout: Hero → Vision → Metrics → Info bar → S0 → FullBleed → S1 → BrowserMockup → S2 → DuoImages → S3 → DeviceDuo → Colors/Tools → S4 → TrioImages → S5 → PhoneMockup → S6 → FullBleed → remaining → NextProject

  // Determine if this is a purely mobile project (like Toju)
  const isMobileProject = project.slug === 'toju' || project.tags.some(t => t.toLowerCase().includes('mobile'));

  const visualSlots: { after: number; element: React.ReactNode }[] = [];

  if (isMobileProject) {
    // Mobile-first layout
    visualSlots.push(
      { after: 0, element: <FullBleedImage key="fb1" src={g[1]} alt={`${project.title} — Système`} caption="Vue d'ensemble et contexte" /> },
      { after: 1, element: <UseCaseModeling key="uc1" className="max-w-[1200px] mx-auto px-6" /> },
      { after: 2, element: <DuoImages key="duo1" images={[g[3], g[4]]} alts={[`${project.title} — Detail 1`, `${project.title} — Detail 2`]} /> },
      { after: 3, element: <DuoPhones key="phones1" leftSrc={g[5]} rightSrc={g[6]} alt={`${project.title} — Mobile Screens`} /> }
    );
  } else {
    // Standard Architecture layout
    visualSlots.push(
      { after: 0, element: null },
      { after: 1, element: <SystemArchitecture key="sa1" className="max-w-[1200px] mx-auto px-6" /> },
      { after: 2, element: null },
      { after: 3, element: <UseCaseModeling key="um1" className="max-w-[1200px] mx-auto px-6" /> }
    );
  }

  // After tools/colors: logic sequence
  const lateVisuals: { after: number; element: React.ReactNode }[] = [];
  if (sections.length > 5) {
    lateVisuals.push({
      after: 0,
      element: <LogicSequence key="ls1" className="max-w-[1200px] mx-auto px-6" />,
    });
  }

  // Split sections
  const firstBatch = sections.slice(0, Math.min(4, sections.length));
  const secondBatch = sections.slice(4);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      {/* ═══ STICKY CTA ═══ */}
      {project.url && (
        <AnimatePresence>
          {showSticky && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed bottom-8 right-8 z-50"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--primary)] border border-white/10 text-[11px] text-white tracking-[0.2em] uppercase hover:bg-neutral-900 transition-all duration-500 group shadow-2xl shadow-black/40"
              >
                {project.urlLabel ?? "Voir le projet"}
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32 overflow-hidden"
      >
        <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0">
          <Image src={g[0]} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/50 to-transparent" />
        </motion.div>

        <div className="absolute top-[20%] right-[8%] hidden xl:block opacity-20 z-10">
          <DotsPattern cols={4} rows={4} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full"
        >
          <MaskReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] text-[var(--primary)]/60 hover:text-[var(--primary)] transition-colors duration-500 mb-12 tracking-[0.15em] uppercase"
            >
              <ArrowLeft size={12} />
              Tous les projets
            </Link>
          </MaskReveal>

          <MaskReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-4 py-1.5 border border-[var(--primary)]/20 text-[10px] text-[var(--primary)] tracking-[0.3em] uppercase">
                {project.type}
              </span>
              <span className="w-6 h-[1px] bg-[var(--primary)]/30" />
              <span className="text-[11px] text-[#8A817A] tracking-[0.2em] uppercase">{project.sector}</span>
              <span className="w-6 h-[1px] bg-[var(--primary)]/30" />
              <span className="text-[11px] text-[#8A817A] tracking-[0.2em] uppercase">{project.year}</span>
            </div>
          </MaskReveal>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-primary leading-[0.85] mb-6">
            <SplitText type="words" delay={0.2} stagger={0.08}>
              {project.title}
            </SplitText>
          </h1>

          <MaskReveal delay={0.4}>
            <p className="text-base md:text-lg text-white/60 font-serif italic mb-6 max-w-2xl">
              {project.subtitle}
            </p>
          </MaskReveal>

            <MaskReveal delay={0.5}>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-medium">
                {project.description}
              </p>
            </MaskReveal>

            {project.url && (
              <MaskReveal delay={0.65}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 px-6 py-3 border border-[var(--primary)]/25 text-[11px] text-[var(--primary)]/70 tracking-[0.2em] uppercase hover:border-[var(--primary)]/60 hover:text-[var(--primary)] transition-all duration-500 group"
                >
                  {project.urlLabel ?? "Voir le projet"}
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                  />
                </a>
              </MaskReveal>
            )}
          </motion.div>
        </section>

      {/* ═══ VISION QUOTE ═══ */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white border-y border-neutral-100">
        <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
        <div className="relative max-w-[1000px] mx-auto px-6 md:px-10 text-center">
          <AnimSection>
            <div className="relative">
              <span className="text-neutral-100 text-8xl md:text-9xl font-serif absolute -top-10 left-1/2 -translate-x-1/2 select-none opacity-50">
                &ldquo;
              </span>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-neutral-800 italic leading-relaxed pt-8">
                {project.vision}
              </p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ═══ KEY METRICS ═══ */}
      <section className="py-12 md:py-20 relative overflow-hidden bg-white">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
          <AnimSection>
            <SectionLabel num="Système" title="Performance & Impact" />
          </AnimSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {project.metrics.map((m, i) => (
              <MetricCard key={m.label} label={m.label} value={m.value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECT INFO BAR ═══ */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <AnimSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-[var(--primary)]/15">
              <div>
                <span className="text-[10px] text-[#4a4a4a] tracking-[0.2em] uppercase block mb-2 font-mono font-bold">RÔLE_DEV</span>
                <span className="text-sm text-[#1a1a1a] font-medium">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#4a4a4a] tracking-[0.2em] uppercase block mb-2 font-mono font-bold">ARCHITECTURE</span>
                <span className="text-sm text-[#1a1a1a] font-medium">{project.scope}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#4a4a4a] tracking-[0.2em] uppercase block mb-2 font-mono font-bold">TAGS</span>
                <div className="flex gap-1 overflow-hidden opacity-40">
                    <span className="text-[9px] font-mono">#TS</span>
                    <span className="text-[9px] font-mono">#NODE</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-[#4a4a4a] tracking-[0.2em] uppercase block mb-2 font-mono font-bold">LOCATION</span>
                <span className="text-sm text-[#1a1a1a] font-medium">Remote/On-site</span>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ═══ FIRST BATCH: sections interleaved with visuals ═══ */}
      {firstBatch.map((section, i) => (
        <div key={section.num}>
          {i > 0 && <Divider />}
          <RichSection section={section} />
          {/* Visual after this section */}
          {visualSlots[i] && visualSlots[i].element}
        </div>
      ))}

      <Divider />
      <ToolsList tools={project.tools} />

      {/* ═══ SECOND BATCH: remaining sections with late visuals ═══ */}
      {secondBatch.map((section, i) => (
        <div key={section.num}>
          <Divider />
          <RichSection section={section} />
          {lateVisuals[i] && lateVisuals[i].element}
        </div>
      ))}

      {/* ═══ FINAL IMAGE GALLERY ═══ */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <AnimSection>
            <SectionLabel num="Gallerie" title="Détails du projet" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {g.slice(1, 4).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative overflow-hidden aspect-[4/3] bg-neutral-100 group"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — Detail ${i + 1}`}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </AnimSection>
        </div>
      </div>

      {/* ═══ NEXT PROJECT ═══ */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <Divider />

        <div className="absolute inset-0 opacity-[0.04]">
          <Image src={next.thumbnail} alt="" fill className="object-cover blur-2xl" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden md:block">
          <ConcentricCircles className="w-full h-full opacity-15" rings={4} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-48 text-center relative">
          <AnimSection>
            <span className="text-[10px] text-[#6B635A] tracking-[0.35em] uppercase block mb-4">
              Projet suivant
            </span>
            <span className="text-[11px] text-[var(--primary)]/40 tracking-[0.2em] uppercase block mb-10">
              {next.type} / {next.sector}
            </span>
          </AnimSection>

          <Magnetic>
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex flex-col items-center gap-8"
              data-cursor="Suivant"
              scroll={false}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              <span className="font-serif text-5xl md:text-7xl lg:text-9xl text-foreground group-hover:text-[var(--primary)] transition-colors duration-700 leading-none">
                <SplitText type="words" stagger={0.06}>
                  {next.title}
                </SplitText>
              </span>
              <span className="inline-flex items-center gap-3 text-sm text-[#6B635A] group-hover:text-[var(--primary)] transition-colors duration-500 tracking-[0.15em] uppercase">
                Découvrir le projet
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                />
              </span>
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
