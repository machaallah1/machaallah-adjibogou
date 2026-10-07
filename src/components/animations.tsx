"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ── Split text with 3D character reveal ── */
interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  type?: "chars" | "words";
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
  type = "chars",
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = type === "chars" ? children.split("") : children.split(" ");

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={children}>
      {items.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.2em] mb-[-0.2em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "120%", rotateX: -40, opacity: 0 }}
            animate={
              isInView
                ? { y: "0%", rotateX: 0, opacity: 1 }
                : { y: "120%", rotateX: -40, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              ease: [0.215, 0.61, 0.355, 1],
              delay: delay + i * stagger,
            }}
          >
            {item === " " ? "\u00A0" : item}
            {type === "words" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Magnetic hover effect ── */
interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = "", strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Horizontal line draw ── */
interface LineRevealProps {
  className?: string;
  delay?: number;
}

export function LineReveal({ className = "", delay = 0 }: LineRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #f59e0b, transparent)",
          opacity: 0.3
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay }}
      />
    </div>
  );
}

/* ── Parallax image with scroll-driven motion ── */
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 50,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-[1.15]"
        />
      </motion.div>
    </div>
  );
}

/* ── Horizontal scroll section ── */
interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={containerRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div ref={ref} style={{ x }} className="flex gap-8 pl-[10vw]">
          {children}
        </motion.div>
      </div>
    </div>
  );
}

/* ── Staggered container ── */
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({ children, className = "", stagger = 0.1, delay = 0 }: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Marquee (infinite scroll) ── */
interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export function Marquee({ children, speed = 30, className = "", reverse = false }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/* ── Masked text reveal ── */
interface MaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MaskReveal({ children, className = "", delay = 0 }: MaskRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : { y: "100%" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── Page transition wrapper ── */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Scroll progress indicator ── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] origin-left z-[9999] shadow-[0_0_12px_rgba(245,158,11,0.6)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

/* ── Image reveal with clip-path ── */
interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function ImageReveal({ src, alt, className = "", delay = 0 }: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Wipe overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-[#f59e0b]/20 backdrop-blur-sm"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        style={{ transformOrigin: "right" }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay }}
      />
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.3, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: delay + 0.2 }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}

/* ── Floating badge ── */
interface FloatingBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function FloatingBadge({ children, className = "" }: FloatingBadgeProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── High-Tech Section Divider (Stable, No Infinite Wobbling) ── */
interface SectionDividerProps {
  actNumber: string;
  title: string;
  subtitle?: string;
  tag?: string;
}

export function SectionDivider({
  actNumber,
  title,
  subtitle,
  tag,
}: SectionDividerProps) {
  return (
    <div className="relative py-10 md:py-14 overflow-hidden pointer-events-none select-none">
      {/* Clean, Sharp Architectural Divider */}
      <div className="relative w-full h-[1px] bg-black/5 dark:bg-white/[0.06]">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />
      </div>

      {/* Act Telemetry Banner */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-5 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px]">
        {/* Left: Act Index + Beacon */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]" />
          <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] font-bold tracking-widest uppercase">
            ACTE // {actNumber}
          </span>
          <span className="text-foreground font-bold tracking-wider uppercase hidden sm:inline">
            {title}
          </span>
        </div>

        {/* Right: Technical Tags & Subtitle */}
        <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
          {subtitle && (
            <span className="tracking-widest uppercase text-[10px] hidden md:inline text-neutral-500 dark:text-neutral-400 font-medium">
              {subtitle}
            </span>
          )}
          {tag && (
            <span className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-[var(--primary)] text-[10px] tracking-wider font-semibold">
              {tag}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Stable Section Transition Wrapper with Smooth Scroll Reveal ── */
interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionTransition({
  children,
  id,
  className = "",
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-60px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0.7, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative scroll-mt-20 ${className}`}
    >
      {/* Subtle section transition horizon & ambient atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent pointer-events-none" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[60px] bg-[#f59e0b]/[0.02] blur-3xl pointer-events-none" />
      {children}
    </motion.div>
  );
}

/* ── Subtle Tilt Card with soft physics (stable) ── */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = "", maxTilt = 4 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || maxTilt <= 0) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = -((y - centerY) / centerY) * maxTilt;
    const rY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.4s ease-out",
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Soft, Static Ambient Aura (no continuous movement) ── */
export function ScrollAmbientGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#f59e0b]/[0.025] via-transparent to-[#f59e0b]/[0.02] blur-[200px]" />
    </div>
  );
}

/* ── Floating Act Rail for smooth section jump & tracking ── */
export function SectionRail() {
  const [activeSection, setActiveSection] = useState("projets");

  useEffect(() => {
    const sections = ["top", "projets", "expertise", "a-propos", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 350;
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const acts = [
    { id: "projets", label: "01", name: "Projets" },
    { id: "expertise", label: "02", name: "Expertise" },
    { id: "a-propos", label: "03", name: "Parcours" },
    { id: "contact", label: "04", name: "Contact" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-5 pointer-events-auto">
      {acts.map((act) => {
        const isActive = activeSection === act.id;
        return (
          <a
            key={act.id}
            href={`#${act.id}`}
            className="group flex items-center gap-3 py-1 cursor-pointer"
          >
            <span
              className="font-mono text-[10px] tracking-widest uppercase transition-all duration-300 text-neutral-600 dark:text-neutral-400 font-bold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
            >
              {act.name}
            </span>
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[var(--primary)] scale-125 shadow-[0_0_10px_var(--primary)]"
                  : "bg-black/20 dark:bg-white/20 group-hover:bg-black/60 dark:group-hover:bg-white/60 scale-75 group-hover:scale-100"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}

/* ── Noise background ── */
export function NoiseBackground() {
  useEffect(() => {}, []);
  return null;
}

