"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300/40 dark:border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme ?? resolvedTheme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
        isDark
          ? "bg-[#12141a] border-white/10 text-neutral-300 hover:text-[#f59e0b] hover:border-[#f59e0b]/40"
          : "bg-white border-neutral-200 text-neutral-700 hover:text-[#d97706] hover:border-[#d97706]/40 shadow-sm"
      } ${className}`}
      title={isDark ? "Activer le mode jour (Light)" : "Activer le mode nuit (Dark)"}
      aria-label={isDark ? "Passer en mode jour" : "Passer en mode nuit"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon size={16} className="text-[#f59e0b]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Sun size={16} className="text-[#d97706]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
