"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import frTranslations from "../locales/fr.json";
import enTranslations from "../locales/en.json";

export type Locale = "fr" | "en";

const translations: Record<Locale, Record<string, any>> = {
  fr: frTranslations,
  en: enTranslations,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Resolve a dot-notation key from a nested object.
 * Returns the resolved value (string, array, object) or the key as fallback.
 */
function resolve(obj: Record<string, any>, key: string): any {
  const parts = key.split(".");
  let current: any = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return key;
    current = current[part];
  }
  return current !== undefined ? current : key;
}

/**
 * Read locale from localStorage synchronously (safe in browser only).
 */
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  try {
    const stored = localStorage.getItem("locale");
    if (stored === "fr" || stored === "en") return stored;
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detected = getInitialLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string>): any => {
      let value = resolve(translations[locale], key);
      if (typeof value === "string" && params) {
        Object.entries(params).forEach(([k, v]) => {
          value = (value as string).replace(`{{${k}}}`, v);
        });
      }
      return value;
    },
    [locale]
  );

  const contextValue: LanguageContextType = {
    locale: mounted ? locale : "fr",
    setLocale,
    t: mounted
      ? t
      : (key: string) => resolve(translations.fr, key),
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { t, locale } = useLanguage();
  return { t, locale };
}
