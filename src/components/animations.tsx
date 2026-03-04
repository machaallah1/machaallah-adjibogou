"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
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
            "linear-gradient(90deg, transparent, rgba(196,169,125,0.4), transparent)",
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
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#C4A97D] origin-left z-[9999]"
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
        className="absolute inset-0 z-10 bg-[#C4A97D]"
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

/* ── Noise background ── */
export function NoiseBackground() {
  useEffect(() => {}, []);
  return null;
}
