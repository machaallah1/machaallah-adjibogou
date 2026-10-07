"use client";

import React, { useState, useEffect } from "react";
import { Mail, MessageSquare, MapPin, Share2, ArrowRight, CheckCircle2, Clock, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Magnetic } from "@/components/animations";

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lomeTime, setLomeTime] = useState("");

  // Live Lomé time (UTC+0)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lome",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLomeTime(now.toLocaleTimeString("fr-FR", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("machdev02@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `Bonjour Machaallah,\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const encoded = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/22892218207?text=${encoded}`;

    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative scroll-mt-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f59e0b]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 text-[#f59e0b] font-mono text-[11px] tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            <span>05 // COLLABORATION & CONTACT</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-[-0.03em] leading-[0.95] max-w-4xl">
            Donnons vie à votre prochaine interface
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-400 max-w-2xl">
            Une idée de projet, une refonte d&apos;application web ou un besoin d&apos;expertise front-end & architecture ? Échangeons directement.
          </p>
        </div>

        {/* ═══ Main Contact Grid ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0f1115] border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                  Message préparé avec succès !
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8">
                  Votre message a été transmis vers WhatsApp. Vous pouvez également m&apos;écrire directement à <strong className="text-white">machdev02@gmail.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-[#181b22] text-xs font-mono text-neutral-300 hover:text-white border border-white/10 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3">
                    VOTRE NOM // CONTACT
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="ex. Jean Dupont"
                    className="w-full bg-[#141720] border border-white/10 focus:border-[#f59e0b] rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3">
                    VOTRE ADRESSE EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ex. contact@entreprise.com"
                    className="w-full bg-[#141720] border border-white/10 focus:border-[#f59e0b] rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3">
                    DÉTAIL DU PROJET OU BESOIN TECHNIQUE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre vision, votre planning ou les défis d'interface à relever..."
                    className="w-full bg-[#141720] border border-white/10 focus:border-[#f59e0b] rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <Magnetic>
                  <button
                    type="submit"
                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#f59e0b] text-[#08090b] text-xs font-mono font-semibold tracking-wider uppercase hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300"
                  >
                    <span>Démarrer la discussion</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Magnetic>
              </form>
            )}
          </motion.div>

          {/* Right Column: Verified Coordinates & Telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Live Lomé Status Card */}
            <div className="p-6 rounded-2xl bg-[#0f1115] border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <Clock size={13} className="text-[#f59e0b]" />
                  HEURE LOCALE // LOMÉ
                </span>
                <span className="px-2.5 py-1 rounded bg-[#f59e0b]/10 text-[#f59e0b] font-mono text-xs font-semibold">
                  GMT+0
                </span>
              </div>
              <div className="font-mono text-3xl font-bold text-white tracking-wider mb-2">
                {lomeTime || "12:00:00"}
              </div>
              <p className="text-xs text-neutral-400">
                Disponible pour des missions à distance et des projets internationaux.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#0f1115] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#141720] flex items-center justify-center text-[#f59e0b] shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                    EMAIL PERSONNEL
                  </span>
                  <a
                    href="mailto:machdev02@gmail.com"
                    className="text-sm font-medium text-white hover:text-[#f59e0b] transition-colors truncate block"
                  >
                    machdev02@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copier l'email"
                className="p-3 rounded-xl bg-[#141720] text-neutral-400 hover:text-white transition-colors shrink-0"
              >
                {copied ? <Check size={16} className="text-[#f59e0b]" /> : <Copy size={16} />}
              </button>
            </div>

            {/* WhatsApp & Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0f1115] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#141720] flex items-center justify-center text-[#f59e0b] shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                    WHATSAPP & TÉLÉPHONE
                  </span>
                  <a
                    href="https://wa.me/22892218207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-[#f59e0b] transition-colors block"
                  >
                    +228 92 21 82 07
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/22892218207"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#f59e0b]/10 text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#08090b] transition-colors text-xs font-mono font-semibold"
              >
                DISCUTER
              </a>
            </div>

            {/* Social & Repositories */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/adjibogou-machaallah-32937126a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0f1115] border border-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 block group"
              >
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                  RÉSEAU PROFESSIONNEL
                </span>
                <span className="text-sm font-medium text-white group-hover:text-[#f59e0b] transition-colors flex items-center justify-between">
                  LinkedIn ↗
                </span>
              </a>

              <a
                href="https://github.com/machaallah1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0f1115] border border-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 block group"
              >
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                  CODE & REPOSITORIES
                </span>
                <span className="text-sm font-medium text-white group-hover:text-[#f59e0b] transition-colors flex items-center justify-between">
                  GitHub ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
