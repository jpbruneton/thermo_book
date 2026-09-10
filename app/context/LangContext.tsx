"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, isRtlLang, type Lang } from "@/lib/languages";
import type { ReaderLanguage } from "@/lib/readerLanguage";

interface LangContextValue extends ReaderLanguage {
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children, initialLanguage }: {
  children: React.ReactNode;
  initialLanguage: ReaderLanguage;
}) {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const urlLang = isLang(segment) ? segment : null;
  const [savedLanguage, setSavedLanguage] = useState(initialLanguage);
  const request = useRef<AbortController | null>(null);
  const cache = useRef(new Map<Lang, ReaderLanguage>([[initialLanguage.lang, initialLanguage]]));
  // Route data wins immediately, including during back/forward navigation.
  const language = urlLang ? initialLanguage : savedLanguage;

  const loadLanguage = async (lang: Lang) => {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    try {
      let data = cache.current.get(lang);
      if (!data) {
        const response = await fetch(`/api/language/${lang}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Language unavailable");
        data = await response.json() as ReaderLanguage;
        if (data.lang !== lang) throw new Error("Unexpected language");
        cache.current.set(lang, data);
      }
      if (!controller.signal.aborted) setSavedLanguage(data);
    } catch {
      // Preserve the requested language if the optional JSON fetch fails.
      if (!controller.signal.aborted) window.location.assign(`/${lang}`);
    }
  };

  useEffect(() => {
    cache.current.set(initialLanguage.lang, initialLanguage);
    if (urlLang) {
      request.current?.abort();
      setSavedLanguage(initialLanguage);
      localStorage.setItem("lang", urlLang);
    } else {
      const stored = localStorage.getItem("lang");
      if (stored && isLang(stored)) void loadLanguage(stored);
    }
    return () => request.current?.abort();
  }, [urlLang, initialLanguage]);

  useEffect(() => {
    document.documentElement.lang = language.lang;
    document.documentElement.dir = isRtlLang(language.lang) ? "rtl" : "ltr";
  }, [language.lang]);

  const setLang = (lang: Lang) => {
    localStorage.setItem("lang", lang);
    // NavBar navigates to the corresponding URL on localized routes.
    if (!urlLang) void loadLanguage(lang);
  };

  return <LangContext.Provider value={{ ...language, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang requires LangProvider");
  return context;
}
