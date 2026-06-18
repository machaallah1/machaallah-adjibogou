"use client";

import Link from "next/link";
import { FileText, ArrowRight, Code, Server, Smartphone, Layout } from "lucide-react";
import {
  SplitText,
  MaskReveal,
  LineReveal,
  Stagger,
  StaggerItem,
  PageTransition,
  ScrollProgress,
} from "@/components/animations";
import { Reveal } from "@/components/reveal";
import {
  AbstractBlob,
  FloatingElement,
  ConcentricCircles,
  WireframeGrid,
  DotsPattern,
  StatBlock,
  WireframeMockup,
  DesktopWireframe,
} from "@/components/visuals";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();

  const experience = (t("about.experience.items") as unknown) as Array<{
    role: string; company: string; period: string; desc: string;
  }>;
  const experienceList = Array.isArray(experience) ? experience : [];

  const skillCategories = (t("about.skills.categories") as unknown) as Array<{
    category: string; items: string[];
  }>;
  const skillsList = Array.isArray(skillCategories) ? skillCategories : [];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32">
        <ScrollProgress />

        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Floating decorative elements */}
          <FloatingElement className="absolute top-16 right-[8%] w-[200px] h-[200px] hidden lg:block" speed={20}>
            <AbstractBlob variant={2} className="w-full h-full opacity-30" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-[3%] w-[160px] h-[160px] hidden lg:block" speed={15} direction="down">
            <ConcentricCircles className="w-full h-full opacity-25" rings={3} />
          </FloatingElement>

          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <MaskReveal>
              <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
                {t("about.label")}
              </span>
            </MaskReveal>
            <div className="mt-4 mb-16 md:mb-24">
              <h1 className="font-serif text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] text-foreground max-w-5xl">
                <SplitText type="words" stagger={0.04}>{t("about.hero.title1")}</SplitText>{" "}
                <span className="italic text-[var(--primary)]">
                  <SplitText type="words" delay={0.5} stagger={0.04}>{t("about.hero.titleHighlight1")}</SplitText>
                </span>
                <SplitText type="words" delay={0.6} stagger={0.04}>{` ${t("about.hero.title2")}`}</SplitText>{" "}
                <span className="italic text-[var(--primary)]">
                  <SplitText type="words" delay={0.8} stagger={0.04}>{t("about.hero.titleHighlight2")}</SplitText>
                </span>
                <SplitText type="words" delay={0.9} stagger={0.04}>{` ${t("about.hero.title3")}`}</SplitText>
              </h1>
            </div>

            <LineReveal />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 mt-16 md:mt-24 items-start">
              {/* Profile area with visual richness */}
              <Reveal direction="left">
                <div className="relative">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#111110] group">

                    {/* Grid overlay */}
                    <div className="absolute inset-0 grid-pattern opacity-30" />

                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-[var(--primary)]/20">
                      <Code size={120} strokeWidth={0.5} />
                    </div>

                    {/* Image */}
                    <img
                      src="/images/machaallah.jpg"
                      alt="Machaallah ADJIBOGOU"
                      className="relative z-10 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />

                    {/* Border */}
                    <div className="absolute inset-0 border border-[var(--primary)]/10 z-20" />
                  </div>
                  {/* Offset decorative frame */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--primary)]/10 -z-10" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-[var(--primary)]/20" />
                  {/* Dots pattern decoration */}
                  <div className="absolute -bottom-10 -left-10 hidden lg:block opacity-40">
                    <DotsPattern cols={5} rows={5} />
                  </div>
                </div>
              </Reveal>

              {/* Bio */}
              <div>
                <MaskReveal delay={0.2}>
                  <p className="text-xl md:text-2xl text-foreground leading-[1.5] mb-10 font-serif">
                    {t("about.bio.intro")}
                  </p>
                </MaskReveal>

                <MaskReveal delay={0.3}>
                  <p className="text-neutral-600 leading-[1.9] mb-6 font-medium">
                    {t("about.bio.p1")}
                  </p>
                </MaskReveal>

                <MaskReveal delay={0.4}>
                  <p className="text-neutral-600 leading-[1.9] mb-10 font-medium">
                    {t("about.bio.p2")}
                  </p>
                </MaskReveal>

                <MaskReveal delay={0.5}>
                  <div className="flex items-center gap-6 pt-6 border-t border-[var(--primary)]/5">
                    <StatBlock number="10+" label={t("about.bio.statProjects")} accent />
                    <div className="w-[1px] h-10 bg-[var(--primary)]/10" />
                    <StatBlock number="2+" label={t("about.bio.statExperience")} />
                    <div className="w-[1px] h-10 bg-[var(--primary)]/10" />
                    <StatBlock number="Lomé" label={t("about.bio.statBased")} />
                  </div>
                </MaskReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Visual showcase */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100 to-transparent" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
            <div className="text-center mb-12">
              <MaskReveal>
                <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
                  {t("about.showcase.label")}
                </span>
              </MaskReveal>
              <div className="mt-3">
                <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                  <SplitText type="words" stagger={0.05}>{t("about.showcase.title")}</SplitText>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
              <DesktopWireframe className="w-full max-w-[600px] mx-auto" />
              <div className="relative max-w-[200px] mx-auto">
                <WireframeMockup className="w-full" />
                <FloatingElement className="absolute -top-8 -right-8 w-[80px] h-[80px] hidden lg:block" speed={8}>
                  <AbstractBlob variant={3} className="w-full h-full opacity-40" />
                </FloatingElement>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 md:py-40 relative">
          {/* Floating wireframe grid */}
          <FloatingElement className="absolute top-20 right-[5%] w-[250px] hidden xl:block opacity-30" speed={18}>
            <WireframeGrid />
          </FloatingElement>

          <LineReveal />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-40">
            <MaskReveal>
              <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
                {t("about.experience.label")}
              </span>
            </MaskReveal>
            <div className="mt-4 mb-16 md:mb-24">
              <h2 className="font-serif text-4xl md:text-6xl text-foreground">
                <SplitText type="words" stagger={0.05}>{t("about.experience.title")}</SplitText>
              </h2>
            </div>

            <Stagger stagger={0.1}>
              {experienceList.map((exp) => (
                <StaggerItem key={exp.role + exp.period}>
                  <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-20 py-12 md:py-16 border-b border-[var(--primary)]/5 hover:border-[var(--primary)]/15 transition-colors duration-700">
                    <span className="text-sm text-neutral-500 font-mono tracking-wide font-medium">
                      {exp.period}
                    </span>
                    <div>
                      <h3 className="text-foreground font-serif text-xl md:text-2xl mb-2 group-hover:text-[var(--primary)] transition-colors duration-500">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--primary)]/60 text-sm mb-5 tracking-wide">
                        {exp.company}
                      </p>
                      <p className="text-neutral-600 leading-[1.8] max-w-2xl">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CV CTA Banner */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Reveal>
              <Link
                href="/cv"
                className="group relative block p-10 md:p-14 border border-[var(--primary)]/10 hover:border-[var(--primary)]/20 transition-all duration-700 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[var(--primary)]/0 group-hover:border-[var(--primary)]/20 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[var(--primary)]/0 group-hover:border-[var(--primary)]/20 transition-colors duration-500" />

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 border border-[var(--primary)]/15 flex items-center justify-center group-hover:border-[var(--primary)]/30 group-hover:bg-[var(--primary)]/5 transition-all duration-500">
                      <FileText size={18} className="text-[var(--primary)]/60 group-hover:text-[var(--primary)] transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-serif text-lg md:text-xl group-hover:text-[var(--primary)] transition-colors duration-500 font-semibold">
                        {t("about.cv.title")}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1">
                        {t("about.cv.subtitle")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--primary)] text-xs tracking-[0.2em] uppercase font-semibold group-hover:translate-x-1 transition-all duration-500">
                    <span>{t("about.cv.button")}</span>
                    <ArrowRight size={14} className="transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 md:py-40 relative overflow-hidden">
          <FloatingElement className="absolute bottom-20 left-[5%] w-[200px] h-[200px] hidden lg:block" speed={20} direction="down">
            <AbstractBlob variant={1} className="w-full h-full opacity-20" />
          </FloatingElement>

          <LineReveal />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-40">
            <MaskReveal>
              <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium">
                {t("about.skills.label")}
              </span>
            </MaskReveal>
            <div className="mt-4 mb-16 md:mb-24">
              <h2 className="font-serif text-4xl md:text-6xl text-foreground">
                <SplitText type="words" stagger={0.05}>{t("about.skills.title")}</SplitText>
              </h2>
            </div>

            <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {skillsList.map((group) => (
                <StaggerItem key={group.category}>
                  <div className="p-8 md:p-10 border border-[var(--primary)]/5 hover:border-[var(--primary)]/10 transition-all duration-700 h-full group relative overflow-hidden">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--primary)]/0 group-hover:border-[var(--primary)]/15 transition-colors duration-500" />

                    <h3 className="text-[var(--primary)] text-[10px] tracking-[0.3em] uppercase font-medium mb-8 group-hover:tracking-[0.4em] transition-all duration-500">
                      {group.category}
                    </h3>
                    <ul className="space-y-4">
                      {group.items.map((item: string) => (
                        <li
                          key={item}
                          className="text-neutral-600 text-sm flex items-center gap-3 transition-colors duration-500 font-medium"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/40 transition-colors duration-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32 md:py-48 relative overflow-hidden">
          <LineReveal />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-48">
            <div className="max-w-3xl mx-auto text-center relative">
              {/* Decorative concentric circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] hidden md:block">
                <ConcentricCircles className="w-full h-full opacity-20" rings={5} />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pulse-glow rounded-full" />

              <Reveal>
                <span className="text-[var(--primary)] text-xs tracking-[0.35em] uppercase font-medium block mb-8">
                  {t("about.philosophy.label")}
                </span>
                <div className="space-y-12 relative z-10">
                  <blockquote className="font-serif text-2xl md:text-4xl text-foreground leading-[1.3] italic">
                    {t("about.philosophy.quote1")}
                  </blockquote>
                  <div className="w-12 h-[1px] bg-[var(--primary)]/20 mx-auto" />
                  <blockquote className="font-serif text-2xl md:text-4xl text-foreground leading-[1.3] italic">
                    {t("about.philosophy.quote2")}
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
