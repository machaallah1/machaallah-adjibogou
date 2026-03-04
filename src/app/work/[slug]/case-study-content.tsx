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
      <span className="text-[11px] text-[var(--primary)] tracking-[0.3em] uppercase font-medium">
        {num}
      </span>
      <span className="w-12 h-[1px] bg-[var(--primary)]/30" />
      <span className="text-[11px] text-[#6B635A] tracking-[0.2em] uppercase">
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
      className="relative group p-8 md:p-10 border border-[var(--primary)]/10 hover:border-[var(--primary)]/20 transition-all duration-700 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <span className="relative block font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--primary)] mb-4 leading-none">
        {value}
      </span>
      <span className="relative block text-[11px] text-[#6B635A] tracking-[0.2em] uppercase">
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/30 via-transparent to-[#080808]/10" />
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
        <div className="bg-[#1A1918] border border-[var(--primary)]/10 rounded-t-xl overflow-hidden">
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--primary)]/5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/10" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-[#0E0D0C] rounded-md px-16 py-1.5">
                  <span className="text-[10px] text-[#6B635A] tracking-wider">
                    aperçu technique
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
      <div className="bg-[#1A1918] border border-[var(--primary)]/10 rounded-[2.5rem] overflow-hidden p-2.5">
        <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden bg-[#0E0D0C]">
          <Image src={src} alt={alt} fill className="object-cover object-top" sizes="320px" />
        </div>
      </div>
        <p className="text-[11px] text-[#6B635A] tracking-[0.15em] uppercase mt-6 text-center">
          Interface mobile
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

/* ── Color palette ── */
function ColorPalette({ colors }: { colors: { name: string; hex: string }[] }) {
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
        <SectionLabel num="Identité" title="Univers chromatique" />
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
                className="aspect-[3/2] rounded-sm mb-4 border border-white/5 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: c.hex }}
              />
              {/* <p className="text-sm text-foreground font-medium mb-1">{c.name}</p> */}
              <p className="text-[11px] text-[#6B635A] tracking-[0.1em] uppercase font-mono">
                {c.hex}
              </p>
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
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-20">
          {/* Left */}
          <div className="flex items-start gap-4">
            <span className="text-[var(--primary)]/15 text-5xl md:text-7xl font-serif italic leading-none">
              {section.num}
            </span>
            <h2 className="font-serif text-xl md:text-2xl text-foreground pt-2">
              {section.title}
            </h2>
          </div>
          {/* Right */}
          <div className="max-w-2xl">
            {section.content && (
              <p className="text-[#8A817A] leading-[1.9] text-base md:text-lg mb-6">
                {section.content}
              </p>
            )}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 mb-8">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8A817A] leading-[1.8] text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/30 mt-2.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {section.subsections?.map((sub, i) => (
              <div key={i} className="mb-8 last:mb-0">
                <h3 className="text-foreground text-sm md:text-base font-medium tracking-wide mb-3 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[var(--primary)]/20" />
                  {sub.title}
                </h3>
                {sub.content && (
                  <p className="text-[#8A817A] leading-[1.9] text-base mb-4 pl-9">
                    {sub.content}
                  </p>
                )}
                {sub.bullets && sub.bullets.length > 0 && (
                  <ul className="space-y-2 pl-9">
                    {sub.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#8A817A] leading-[1.8] text-sm md:text-base">
                        <span className="w-1 h-1 rounded-full bg-[var(--primary)]/25 mt-2.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {section.quote && (
              <div className="mt-8 pl-6 border-l-2 border-[var(--primary)]/20">
                <p className="text-foreground/80 italic font-serif text-base md:text-lg leading-relaxed">
                  {section.quote}
                </p>
              </div>
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
      { after: 0, element: <FullBleedImage key="fb1" src={g[1]} alt={`${project.title} — Vue d'ensemble`} caption="Vue d'ensemble et contexte" /> },
      { after: 1, element: project.slug === 'toju' ? null : (
          <div key="phone-focus" className="py-12 md:py-20 relative overflow-hidden">
             <PhoneMockup src={g[2]} alt={`${project.title} — Interface Mobile`} />
          </div>
        ) 
      },
      { after: 2, element: <DuoImages key="duo1" images={[g[3], g[4]]} alts={[`${project.title} — Detail 1`, `${project.title} — Detail 2`]} /> },
      { after: 3, element: <DuoPhones key="phones1" leftSrc={g[5]} rightSrc={g[6]} alt={`${project.title} — Mobile Screens`} /> }
    );
  } else {
    // Standard Desktop/Web layout
    visualSlots.push(
      { after: 0, element: <FullBleedImage key="fb1" src={g[1]} alt={`${project.title} — Vue d'ensemble`} caption="Vue d'ensemble du projet" /> },
      { after: 1, element: <BrowserMockup key="bm1" src={g[2]} alt={`${project.title} — Desktop`} /> },
      { after: 2, element: <DuoImages key="duo1" images={[g[3], g[4]]} alts={[`${project.title} — Detail 1`, `${project.title} — Detail 2`]} /> },
      { after: 3, element: <DeviceDuo key="dd1" desktopSrc={g[5]} mobileSrc={g[6]} alt={project.title} /> }
    );
  }

  // After tools/colors: trio + phone mockup between remaining sections
  const lateVisuals: { after: number; element: React.ReactNode }[] = [];
  if (sections.length > 5) {
    lateVisuals.push({
      after: 0,
      element: <TrioImages key="trio1" images={[g[7], g[8], g[9]]} alts={[`${project.title} — Composition 1`, `${project.title} — Composition 2`, `${project.title} — Composition 3`]} />,
    });
  }
  if (sections.length > 6) {
    lateVisuals.push({
      after: 1,
      element: (
        <div key="phone-section" className="py-16 md:py-24 relative overflow-hidden">
          <FloatingElement className="absolute top-10 left-[10%] w-[150px] h-[150px] hidden lg:block" speed={15}>
            <AbstractBlob variant={1} className="w-full h-full opacity-20" />
          </FloatingElement>
          <PhoneMockup src={g[10]} alt={`${project.title} — Mobile`} />
        </div>
      ),
    });
  }

  // Split sections: first 4 with visuals, then tools/colors, then rest with late visuals
  const firstBatch = sections.slice(0, Math.min(4, sections.length));
  const secondBatch = sections.slice(4);

  return (
    <div className="min-h-screen">
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
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#080808]/90 backdrop-blur-md border border-[var(--primary)]/30 text-[11px] text-[var(--primary)]/80 tracking-[0.2em] uppercase hover:border-[var(--primary)]/70 hover:text-[var(--primary)] transition-all duration-500 group shadow-xl shadow-black/40"
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

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-foreground leading-[0.85] mb-6">
            <SplitText type="words" delay={0.2} stagger={0.08}>
              {project.title}
            </SplitText>
          </h1>

          <MaskReveal delay={0.4}>
            <p className="text-base md:text-lg text-[var(--primary)]/60 font-serif italic mb-6 max-w-2xl">
              {project.subtitle}
            </p>
          </MaskReveal>

            <MaskReveal delay={0.5}>
              <p className="text-lg md:text-xl text-[#8A817A] max-w-2xl leading-relaxed">
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
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0A0A09] to-[#080808]" />
        <FloatingElement className="absolute top-10 right-[8%] w-[200px] h-[200px] hidden lg:block" speed={15}>
          <AbstractBlob variant={2} className="w-full h-full opacity-20" />
        </FloatingElement>
        <div className="relative max-w-[1000px] mx-auto px-6 md:px-10 text-center">
          <AnimSection>
            <div className="relative">
              <span className="text-[var(--primary)]/10 text-8xl md:text-9xl font-serif absolute -top-10 left-1/2 -translate-x-1/2 select-none">
                &ldquo;
              </span>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground/90 italic leading-relaxed pt-8">
                {project.vision}
              </p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ═══ KEY METRICS ═══ */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
          <AnimSection>
            <SectionLabel num="Synthèse" title="Chiffres & Impact" />
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-[var(--primary)]/10">
              <div>
                <span className="text-[10px] text-[#6B635A] tracking-[0.2em] uppercase block mb-2">Rôle</span>
                <span className="text-sm text-foreground">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B635A] tracking-[0.2em] uppercase block mb-2">Périmètre</span>
                <span className="text-sm text-foreground">{project.scope}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B635A] tracking-[0.2em] uppercase block mb-2">Année</span>
                <span className="text-sm text-foreground">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B635A] tracking-[0.2em] uppercase block mb-2">Secteur</span>
                <span className="text-sm text-foreground">{project.sector}</span>
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

      {/* ═══ DESIGN INTERLUDE: Colors + Tools ═══ */}
      <Divider />
      <ColorPalette colors={project.colors} />
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
      <div className="py-8 md:py-16">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <AnimSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {g.slice(11).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="relative overflow-hidden aspect-[4/3] bg-[#111] group"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — Gallery ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
