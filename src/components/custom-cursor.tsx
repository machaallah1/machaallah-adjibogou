"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  const onMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  useEffect(() => {
    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        setHovered(true);
        setLabel(cursorEl.dataset.cursor || "");
      }
    };
    const handleOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor]")) {
        setHovered(false);
        setLabel("");
      }
    };
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hovered ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
      </motion.div>

      {/* Outer ring / label */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:flex items-center justify-center"
        animate={{
          x: pos.x - (hovered ? 42 : 16),
          y: pos.y - (hovered ? 42 : 16),
          width: hovered ? 84 : 32,
          height: hovered ? 84 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.7 }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-300 flex items-center justify-center ${
            hovered
              ? "border-[#f59e0b] bg-[#f59e0b]/15 backdrop-blur-md shadow-[0_0_25px_rgba(245,158,11,0.35)]"
              : "border-white/20 bg-white/[0.02]"
          }`}
        >
          <AnimatePresence>
            {hovered && label && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-[10px] font-mono font-bold text-white tracking-[0.2em] uppercase text-center whitespace-nowrap"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
