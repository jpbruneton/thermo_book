"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang, translations } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations.en;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

/** Lang segment at the start of the path, if the current route is under /en or /fr. */
function langFromPathname(pathname: string): Lang | null {
  const segment = pathname.split("/")[1];
  return isLang(segment) ? segment : null;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [lang, setLangState] = useState<Lang>("en");
  const urlLang = langFromPathname(pathname);

  useEffect(() => {
    if (urlLang) {
      setLangState(urlLang);
      localStorage.setItem("lang", urlLang);
      return;
    }
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "fr") {
      setLangState(stored);
    }
  }, [urlLang]);

  const activeLang = urlLang ?? lang;

  useEffect(() => {
    document.documentElement.lang = activeLang;
  }, [activeLang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang: activeLang, setLang, t: translations[activeLang] as typeof translations.en }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
