"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ══════════════════════════════════════
   ABSTRACT GEOMETRIC ILLUSTRATIONS
   ══════════════════════════════════════ */

/* Flowing abstract shape — organic blob */
export function AbstractBlob({ className = "", variant = 1 }: { className?: string; variant?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paths = [
    "M44.5,2.6C56.5,6.2,61.8,21.8,64.8,35.7c3,13.9,3.7,28.1-2.3,39.3C55.7,86.2,43,92.7,30.6,91.2 C18.2,89.7,6,80.2,1.8,67.5c-4.2-12.7-0.4-28.6,6.2-41.5C14.7,13.1,32.5-1,44.5,2.6z",
    "M39.2,1.3c11.7,3.2,20.8,14.1,27.5,26.4c6.7,12.3,11,26,7.3,37.9c-3.7,11.9-15.4,22-28.4,25.1 C32.6,93.8,18.3,89.9,9.2,79.3C0.1,68.7-3.8,51.4,3.2,37.5C10.2,23.6,27.5-1.9,39.2,1.3z",
    "M42.7,3.1c13.8,2.1,25.3,12.6,30.9,26c5.6,13.4,5.3,29.7-1.3,42.3c-6.6,12.6-19.5,21.5-32.8,22.2 C26.2,94.3,12.5,86.8,5.3,74.6c-7.2-12.2-7.9-29.1-2-42.3C9.2,19.1,28.9,1,42.7,3.1z",
  ];

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <defs>
        <linearGradient id={`blob-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(4, 118, 7, 0.2)" />
          <stop offset="100%" stopColor="rgba(4, 118, 7, 0.05)" />
        </linearGradient>
      </defs>
      <path
        d={paths[(variant - 1) % paths.length]}
        fill={`url(#blob-grad-${variant})`}
        stroke="rgba(4, 118, 7, 0.15)"
        strokeWidth="0.5"
      />
    </motion.svg>
  );
}

/* Abstract wireframe grid — 3D perspective */
export function WireframeGrid({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 400 300"
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5 }}
    >
      {/* Horizontal lines with perspective */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 40 + i * 30;
        const indent = i * 15;
          return (
            <motion.line
              key={`h-${i}`}
              x1={indent}
              y1={y}
              x2={400 - indent}
              y2={y}
              stroke="rgba(4, 118, 7, 0.12)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
            />
          );
        })}
        {/* Vertical lines with perspective */}
        {Array.from({ length: 10 }).map((_, i) => {
          const x = 40 + i * 35;
          return (
            <motion.line
              key={`v-${i}`}
              x1={x}
              y1={40}
              x2={x + (i - 4.5) * 8}
              y2={250}
              stroke="rgba(4, 118, 7, 0.1)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 + i * 0.06, ease: "easeOut" }}
            />
          );
        })}
      {/* Accent dots at intersections */}
      {[
        [120, 100],
        [200, 130],
        [280, 100],
        [160, 190],
        [240, 190],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={2.5}
          fill="var(--primary)"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
        />
      ))}
    </motion.svg>
  );
}

/* Abstract UI wireframe mockup */
export function WireframeMockup({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
        <svg viewBox="0 0 360 640" className="w-full h-full">
          {/* Phone frame */}
          <rect x="10" y="10" width="340" height="620" rx="30" fill="none" stroke="rgba(4, 118, 7, 0.22)" strokeWidth="1" />

          {/* Status bar */}
          <rect x="30" y="30" width="80" height="4" rx="2" fill="rgba(4, 118, 7, 0.18)" />
          <rect x="250" y="30" width="80" height="4" rx="2" fill="rgba(4, 118, 7, 0.18)" />

          {/* Header placeholder */}
          <motion.rect
            x="30" y="60" width="200" height="10" rx="3" fill="rgba(4, 118, 7, 0.2)"
            initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} style={{ transformOrigin: "left" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />

          {/* Hero image placeholder */}
          <motion.rect
            x="30" y="100" width="300" height="180" rx="8" fill="rgba(4, 118, 7, 0.08)" stroke="rgba(4, 118, 7, 0.15)" strokeWidth="0.5"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          {/* Cross lines in hero */}
          <line x1="30" y1="100" x2="330" y2="280" stroke="rgba(4, 118, 7, 0.08)" strokeWidth="0.5" />
          <line x1="330" y1="100" x2="30" y2="280" stroke="rgba(4, 118, 7, 0.08)" strokeWidth="0.5" />

          {/* Text lines */}
          {[310, 330, 350].map((y, i) => (
            <motion.rect
              key={y} x="30" y={y} width={i === 2 ? 180 : 300} height="6" rx="3" fill="rgba(4, 118, 7, 0.12)"
              initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} style={{ transformOrigin: "left" }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
            />
          ))}

          {/* Card blocks */}
          {[390, 470].map((y, i) => (
            <motion.g key={y}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 + i * 0.15 }}
            >
              <rect x="30" y={y} width="140" height="60" rx="6" fill="rgba(4, 118, 7, 0.08)" stroke="rgba(4, 118, 7, 0.12)" strokeWidth="0.5" />
              <rect x="190" y={y} width="140" height="60" rx="6" fill="rgba(4, 118, 7, 0.08)" stroke="rgba(4, 118, 7, 0.12)" strokeWidth="0.5" />
            </motion.g>
          ))}

          {/* Bottom nav */}
          <rect x="30" y="580" width="300" height="30" rx="15" fill="rgba(4, 118, 7, 0.08)" stroke="rgba(4, 118, 7, 0.12)" strokeWidth="0.5" />
          {[100, 180, 260].map((x) => (
            <circle key={x} cx={x} cy={595} r={4} fill="rgba(4, 118, 7, 0.2)" />
          ))}
        </svg>
    </motion.div>
  );
}

/* Abstract desktop mockup wireframe */
export function DesktopWireframe({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
        <svg viewBox="0 0 800 500" className="w-full h-full">
          {/* Monitor frame */}
          <rect x="5" y="5" width="790" height="460" rx="12" fill="none" stroke="rgba(4, 118, 7, 0.2)" strokeWidth="1" />
          {/* Browser chrome */}
          <rect x="5" y="5" width="790" height="35" rx="12" fill="rgba(4, 118, 7, 0.08)" />
          <circle cx="25" cy="22" r="4" fill="rgba(4, 118, 7, 0.22)" />
          <circle cx="40" cy="22" r="4" fill="rgba(4, 118, 7, 0.18)" />
          <circle cx="55" cy="22" r="4" fill="rgba(4, 118, 7, 0.18)" />
          <rect x="200" y="14" width="400" height="16" rx="8" fill="rgba(4, 118, 7, 0.08)" />

          {/* Sidebar */}
          <motion.rect
            x="5" y="40" width="180" height="425" fill="rgba(4, 118, 7, 0.05)"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <line x1="185" y1="40" x2="185" y2="465" stroke="rgba(4, 118, 7, 0.1)" strokeWidth="0.5" />

          {/* Sidebar nav items */}
          {[70, 100, 130, 160, 190].map((y, i) => (
            <motion.rect
              key={y} x="25" y={y} width={100 - i * 10} height="5" rx="2.5" fill="rgba(4, 118, 7, 0.15)"
              initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} style={{ transformOrigin: "left" }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
            />
          ))}

          {/* Main content — Hero area */}
          <motion.rect
            x="205" y="60" width="570" height="200" rx="8" fill="rgba(4, 118, 7, 0.08)" stroke="rgba(4, 118, 7, 0.1)" strokeWidth="0.5"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          {/* Hero text lines */}
          <motion.rect x="225" y="80" width="250" height="12" rx="4" fill="rgba(4, 118, 7, 0.18)"
            initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} style={{ transformOrigin: "left" }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          <motion.rect x="225" y="105" width="180" height="6" rx="3" fill="rgba(4, 118, 7, 0.1)"
            initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} style={{ transformOrigin: "left" }}
            transition={{ duration: 0.6, delay: 0.9 }}
          />

          {/* CTA button */}
          <motion.rect x="225" y="135" width="100" height="28" rx="4" fill="rgba(4, 118, 7, 0.2)"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          />

          {/* Card grid */}
          {[[205, 280], [395, 280], [585, 280]].map(([x, y], i) => (
            <motion.g key={i}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.1 + i * 0.12 }}
            >
              <rect x={x} y={y} width="175" height="120" rx="6" fill="rgba(4, 118, 7, 0.05)" stroke="rgba(4, 118, 7, 0.1)" strokeWidth="0.5" />
              <rect x={Number(x) + 12} y={Number(y) + 90} width="100" height="5" rx="2.5" fill="rgba(4, 118, 7, 0.15)" />
              <rect x={Number(x) + 12} y={Number(y) + 102} width="60" height="4" rx="2" fill="rgba(4, 118, 7, 0.1)" />
            </motion.g>
          ))}

        {/* Monitor stand */}
        <rect x="350" y="465" width="100" height="8" rx="2" fill="rgba(4, 118, 7, 0.05)" />
        <rect x="320" y="473" width="160" height="6" rx="3" fill="rgba(4, 118, 7, 0.06)" />
      </svg>
    </motion.div>
  );
}

/* Concentric circles decoration */
export function ConcentricCircles({ className = "", rings = 4 }: { className?: string; rings?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 300 300"
      className={className}
      initial={{ opacity: 0, rotate: -45 }}
      animate={isInView ? { opacity: 1, rotate: 0 } : {}}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {Array.from({ length: rings }).map((_, i) => {
        const r = 30 + i * 30;
        return (
          <motion.circle
            key={i}
            cx="150"
            cy="150"
            r={r}
            fill="none"
            stroke="rgba(4, 118, 7, 0.06)"
            strokeWidth="0.5"
            strokeDasharray={`${4 + i * 2} ${8 + i * 3}`}
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
          />
        );
      })}
      {/* Center dot */}
      <motion.circle
        cx="150" cy="150" r="4" fill="var(--primary)"
        initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
      />
      {/* Accent arcs */}
      <motion.circle
        cx="150" cy="150" r="80" fill="none" stroke="rgba(4, 118, 7, 0.15)" strokeWidth="1"
        strokeDasharray="20 80"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </motion.svg>
  );
}

/* Process flow diagram */
export function ProcessDiagram({ className = "", step = 1 }: { className?: string; step?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const icons: Record<number, React.ReactNode> = {
    1: ( // Research — magnifier
      <g>
        <circle cx="90" cy="85" r="25" fill="none" stroke="rgba(4, 118, 7, 0.3)" strokeWidth="1.5" />
        <line x1="108" y1="103" x2="125" y2="120" stroke="rgba(4, 118, 7, 0.3)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="85" cy="80" r="4" fill="rgba(4, 118, 7, 0.12)" />
      </g>
    ),
    2: ( // Structure — grid
      <g>
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect key={`${row}-${col}`} x={65 + col * 25} y={65 + row * 25} width="18" height="18" rx="3"
              fill="none" stroke="rgba(4, 118, 7, 0.2)" strokeWidth="1" />
          ))
        )}
        <rect x="65" y="65" width="18" height="18" rx="3" fill="rgba(4, 118, 7, 0.12)" />
      </g>
    ),
    3: ( // Flow — connected nodes
      <g>
        <circle cx="75" cy="75" r="12" fill="none" stroke="rgba(4, 118, 7, 0.25)" strokeWidth="1" />
        <circle cx="120" cy="95" r="12" fill="none" stroke="rgba(4, 118, 7, 0.25)" strokeWidth="1" />
        <circle cx="90" cy="125" r="12" fill="rgba(4, 118, 7, 0.1)" stroke="rgba(4, 118, 7, 0.25)" strokeWidth="1" />
        <line x1="85" y1="82" x2="110" y2="90" stroke="rgba(4, 118, 7, 0.12)" strokeWidth="1" />
        <line x1="112" y1="104" x2="98" y2="118" stroke="rgba(4, 118, 7, 0.12)" strokeWidth="1" />
        <line x1="82" y1="86" x2="85" y2="115" stroke="rgba(4, 118, 7, 0.12)" strokeWidth="1" />
      </g>
    ),
    4: ( // Design — pen tool
      <g>
        <path d="M80,120 L100,65 L120,120 Z" fill="none" stroke="rgba(4, 118, 7, 0.25)" strokeWidth="1.5" />
        <circle cx="100" cy="65" r="4" fill="var(--primary)" opacity="0.4" />
        <circle cx="80" cy="120" r="3" fill="rgba(4, 118, 7, 0.15)" />
        <circle cx="120" cy="120" r="3" fill="rgba(4, 118, 7, 0.15)" />
        <path d="M80,120 Q90,95 100,65" fill="none" stroke="rgba(4, 118, 7, 0.1)" strokeWidth="0.5" strokeDasharray="3 3" />
      </g>
    ),
    5: ( // Deliver — check / rocket
      <g>
        <circle cx="100" cy="95" r="30" fill="none" stroke="rgba(4, 118, 7, 0.2)" strokeWidth="1" />
        <polyline points="85,95 95,108 118,80" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </g>
    ),
  };

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 200"
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(4, 118, 7, 0.04)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(4, 118, 7, 0.03)" strokeWidth="0.5" strokeDasharray="4 6" />
      {icons[step] || icons[1]}
    </motion.svg>
  );
}

/* Parallax floating element with scroll */
export function FloatingElement({
  children,
  className = "",
  speed = 30,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [speed, -speed] : [-speed, speed]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* Animated counter */
export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView ? value : 0}
      </motion.span>
      {suffix}
    </span>
  );
}

/* Horizontal rule with diamond accent */
export function DiamondRule({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
    <div ref={ref} className={`flex items-center gap-4 ${className}`}>
      <motion.div
        className="flex-1 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(4, 118, 7, 0.15))", transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="w-2 h-2 rotate-45 bg-[var(--primary)]/30 border border-[var(--primary)]/20"
        initial={{ scale: 0, rotate: 0 }}
        animate={isInView ? { scale: 1, rotate: 45 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.div
        className="flex-1 h-[1px]"
        style={{ background: "linear-gradient(90deg, rgba(4, 118, 7, 0.15), transparent)", transformOrigin: "right" }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

/* Decorative dots pattern */
export function DotsPattern({ className = "", cols = 8, rows = 6 }: { className?: string; cols?: number; rows?: number }) {
  return (
    <div className={`grid ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "16px" }}>
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-[var(--primary)]/10" />
      ))}
    </div>
  );
}

/* Hero visual — abstract composition for the landing page */
export function HeroVisual({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5 }}
    >
      <motion.svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ rotate }}
      >
        {/* Large outer ring */}
        <motion.circle
          cx="250" cy="250" r="220" fill="none" stroke="rgba(4, 118, 7, 0.06)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.circle
          cx="250" cy="250" r="180" fill="none" stroke="rgba(4, 118, 7, 0.05)" strokeWidth="0.5" strokeDasharray="8 12"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.3 }}
        />
        <motion.circle
          cx="250" cy="250" r="140" fill="none" stroke="rgba(4, 118, 7, 0.08)" strokeWidth="1"
          strokeDasharray="2 20"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.5, delay: 0.5 }}
        />

        {/* Radial lines */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <motion.line
              key={i}
              x1={250 + Math.cos(angle) * 100}
              y1={250 + Math.sin(angle) * 100}
              x2={250 + Math.cos(angle) * 220}
              y2={250 + Math.sin(angle) * 220}
              stroke="rgba(4, 118, 7, 0.03)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 + i * 0.05 }}
            />
          );
        })}

        {/* Accent arcs */}
        <motion.path
          d="M 250 30 A 220 220 0 0 1 470 250"
          fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.2"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.path
          d="M 470 250 A 220 220 0 0 1 250 470"
          fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.1"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.3 }}
        />

        {/* Center glow */}
        <circle cx="250" cy="250" r="40" fill="url(#hero-center-glow)" />
        <defs>
          <radialGradient id="hero-center-glow">
            <stop offset="0%" stopColor="rgba(4, 118, 7, 0.1)" />
            <stop offset="100%" stopColor="rgba(4, 118, 7, 0)" />
          </radialGradient>
        </defs>

        {/* Small accent dots */}
        {[
          [250, 30], [470, 250], [250, 470], [30, 250],
          [390, 100], [390, 400], [110, 400], [110, 100],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i} cx={cx} cy={cy} r={i < 4 ? 3 : 2} fill="var(--primary)"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: i < 4 ? 0.4 : 0.2, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.08 }}
          />
        ))}
      </motion.svg>

      {/* Floating child element */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y }}
      >
        <div className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_20px_6px_rgba(4,118,7,0.15)]" />
      </motion.div>
    </motion.div>
  );
}

/* Animated Process Flow Diagram — visualizes the 5-step methodology */
export function ProcessFlowDiagram({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const flowSteps = [
    { label: "Analyser", icon: "search" },
    { label: "Modéliser", icon: "users" },
    { label: "Implémenter", icon: "flow" },
    { label: "Tester", icon: "design" },
    { label: "Déployer", icon: "check" },
  ];

  const nodePositions = [
    { x: 100, y: 200 },
    { x: 280, y: 100 },
    { x: 460, y: 200 },
    { x: 640, y: 100 },
    { x: 820, y: 200 },
  ];

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Section label */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
            Cycle de vie
          </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mt-3">
              De l&apos;idée au produit scalable
            </h3>
            <p className="text-[#4a4a4a] text-sm mt-2 max-w-md mx-auto font-medium">
              Un processus itératif garantissant qualité technique et alignement métier
            </p>
        </motion.div>

      <svg viewBox="0 0 920 320" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        {/* Background grid dots */}
        {Array.from({ length: 15 }).map((_, row) =>
          Array.from({ length: 30 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={20 + col * 30}
              cy={20 + row * 20}
              r={0.6}
              fill="rgba(4, 118, 7, 0.05)"
            />
          ))
        )}

        {/* Connecting paths between nodes */}
        {nodePositions.slice(0, -1).map((from, i) => {
          const to = nodePositions[i + 1];
          const midX = (from.x + to.x) / 2;
          const midY = Math.min(from.y, to.y) - 30;
          return (
            <motion.path
              key={`path-${i}`}
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              fill="none"
              stroke="rgba(4, 118, 7, 0.12)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 + i * 0.25, ease: "easeInOut" }}
            />
          );
        })}

        {/* Animated flowing dots on paths */}
        {nodePositions.slice(0, -1).map((from, i) => {
          const to = nodePositions[i + 1];
          const midX = (from.x + to.x) / 2;
          const midY = Math.min(from.y, to.y) - 30;
          return (
            <motion.circle
              key={`flow-dot-${i}`}
              r={3}
              fill="var(--primary)"
              opacity={0.5}
              initial={{ offsetDistance: "0%" }}
              animate={isInView ? { offsetDistance: "100%" } : {}}
              transition={{ duration: 2, delay: 1.5 + i * 0.3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            >
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                begin={`${1.5 + i * 0.5}s`}
                path={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              />
            </motion.circle>
          );
        })}

        {/* Step nodes */}
        {nodePositions.map((pos, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
          >
            {/* Outer pulse ring */}
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              r={42}
              fill="none"
              stroke="rgba(4, 118, 7, 0.06)"
              strokeWidth="0.5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: [0.8, 1.1, 1], opacity: [0, 0.4, 0.2] } : {}}
              transition={{ duration: 2, delay: 1 + i * 0.2, repeat: Infinity, repeatDelay: 4 }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
            />

            {/* Main circle background */}
            <circle cx={pos.x} cy={pos.y} r={36} fill="rgba(4, 118, 7, 0.03)" stroke="rgba(4, 118, 7, 0.1)" strokeWidth="1" />

            {/* Inner accent ring */}
            <circle cx={pos.x} cy={pos.y} r={28} fill="none" stroke="rgba(4, 118, 7, 0.05)" strokeWidth="0.5" />

            {/* Step number */}
            <text
              x={pos.x}
              y={pos.y - 4}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--primary)"
              fontSize="16"
              fontFamily="serif"
              fontStyle="italic"
              opacity="0.7"
            >
              {String(i + 1).padStart(2, "0")}
            </text>

            {/* Step label */}
            <text
              x={pos.x}
              y={pos.y + 14}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(4, 118, 7, 0.4)"
              fontSize="7"
                letterSpacing="0.15em"
                style={{ textTransform: "uppercase" }}
            >
              {flowSteps[i].label.toUpperCase()}
            </text>
          </motion.g>
        ))}

        {/* Direction arrows between nodes */}
        {nodePositions.slice(0, -1).map((from, i) => {
          const to = nodePositions[i + 1];
          const arrowX = (from.x + to.x) / 2;
          const arrowY = (from.y + to.y) / 2 - 18;
          const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
          return (
            <motion.g
              key={`arrow-${i}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.3 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.25 }}
            >
              <g transform={`translate(${arrowX}, ${arrowY}) rotate(${angle})`}>
                <polygon points="0,-3 8,0 0,3" fill="var(--primary)" />
              </g>
            </motion.g>
          );
        })}

        {/* Iterative feedback loop (dashed arc from step 5 back to step 1) */}
        <motion.path
          d={`M ${nodePositions[4].x} ${nodePositions[4].y + 40} Q 460 310 ${nodePositions[0].x} ${nodePositions[0].y + 40}`}
          fill="none"
          stroke="rgba(4, 118, 7, 0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
        />
        <motion.text
          x="460"
          y="305"
          textAnchor="middle"
          fill="rgba(4, 118, 7, 0.2)"
          fontSize="8"
          letterSpacing="0.2em"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 3 }}
        >
          MAINTENANCE & ÉVOLUTION
        </motion.text>
      </svg>
    </motion.div>
  );
}

/* Stats row with visual flair */
export function StatBlock({
  number,
  label,
  accent = false,
}: {
  number: string;
  label: string;
  accent?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className={`block font-serif text-5xl md:text-7xl leading-none mb-3 ${accent ? "text-[var(--primary)]" : "text-foreground"}`}>
        {number}
      </span>
      <span className="text-[10px] text-neutral-500 tracking-[0.25em] uppercase font-medium">
        {label}
      </span>
      <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[var(--primary)]/20 group-hover:w-16 transition-all duration-500" />
    </motion.div>
  );
}
