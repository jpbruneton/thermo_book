"use client";

import { useEffect, useId, useRef, useState } from "react";
import { SUPPORTED_LANGS, type Lang } from "@/lib/languages";

const LANGUAGE_NAMES: Record<Lang, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  pt: "Português",
  it: "Italiano",
  pl: "Polski",
  ru: "Русский",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  hi: "हिन्दी",
  vi: "Tiếng Việt",
  ar: "العربية",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
  bn: "বাংলা",
  ur: "اردو",
  sw: "Kiswahili",
  fa: "فارسی",
};

// One list for every visitor, alphabetized by the languages' own names.
const LANGUAGE_OPTIONS = [...SUPPORTED_LANGS].sort((a, b) =>
  LANGUAGE_NAMES[a].localeCompare(LANGUAGE_NAMES[b], "en")
);

export function LanguageSelector({ lang, onSelect }: {
  lang: Lang;
  onSelect: (lang: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="nav-language-selector"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className="nav-language-trigger"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18" />
        </svg>
        <span className="nav-language-name" lang={lang} dir="auto">{LANGUAGE_NAMES[lang]}</span>
        <span aria-hidden="true" className="nav-language-chevron">{open ? "▴" : "▾"}</span>
      </button>
      <div id={menuId} className="nav-language-options" hidden={!open}>
        {LANGUAGE_OPTIONS.map((code) => (
          <button
            key={code}
            type="button"
            className="nav-language-option"
            aria-pressed={lang === code}
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
              if (code !== lang) onSelect(code);
            }}
          >
            <span lang={code} dir="auto">{LANGUAGE_NAMES[code]}</span>
            <span aria-hidden="true">{lang === code ? "✓" : ""}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
