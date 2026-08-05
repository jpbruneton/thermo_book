"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";
import { useLang } from "@/app/context/LangContext";
import { sectionFromSlug, sectionHref } from "@/lib/i18n";
import { DonateButton } from "@/app/components/DonateButton";
import { useEffect, useRef, useState } from "react";

const MORE_LANGUAGES: { code: string; flag: string; nativeName: string }[] = [
  { code: "de", flag: "🇩🇪", nativeName: "Deutsch" },
  { code: "es", flag: "🇪🇸", nativeName: "Español" },
  { code: "pt", flag: "🇵🇹", nativeName: "Português" },
  { code: "it", flag: "🇮🇹", nativeName: "Italiano" },
  { code: "pl", flag: "🇵🇱", nativeName: "Polski" },
  { code: "ru", flag: "🇷🇺", nativeName: "Русский" },
  { code: "zh", flag: "🇨🇳", nativeName: "中文" },
  { code: "ja", flag: "🇯🇵", nativeName: "日本語" },
  { code: "ko", flag: "🇰🇷", nativeName: "한국어" },
  { code: "hi", flag: "🇮🇳", nativeName: "हिन्दी" },
  { code: "vi", flag: "🇻🇳", nativeName: "Tiếng Việt" },
  { code: "ar", flag: "🇸🇦", nativeName: "العربية" },
];

function MoreLanguagesMenu({ lang, small }: { lang: "en" | "fr"; small?: boolean }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickAway = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const moreLabel = lang === "fr" ? "Plus…" : "More…";
  const notReadyText = (nativeName: string) =>
    lang === "fr"
      ? `${nativeName} : pas encore traduit.`
      : `${nativeName}: not yet translated.`;

  return (
    <div ref={containerRef} style={{ position: "relative", flexShrink: 0 }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          background: "transparent",
          color: "var(--text-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          padding: small ? "0.45rem 0.75rem" : "0.35rem 0.65rem",
          cursor: "pointer",
          fontFamily: "var(--font-inter)",
          fontSize: small ? "0.8rem" : "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        {moreLabel} <span style={{ fontSize: "0.65em" }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 0.4rem)",
            left: 0,
            zIndex: 60,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            padding: "0.4rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
            gap: "0.15rem",
            minWidth: "260px",
          }}
        >
          {MORE_LANGUAGES.map(({ code, flag, nativeName }) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setToast(notReadyText(nativeName));
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                border: "none",
                borderRadius: "4px",
                padding: "0.4rem 0.5rem",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-inter)",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--accent-bg-xs, rgba(200,150,60,0.08))")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
            >
              <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>{flag}</span>
              <span dir="auto">{nativeName}</span>
            </button>
          ))}
        </div>
      )}

      {toast && (
        <div
          role="status"
          style={{
            position: "absolute",
            top: "calc(100% + 0.4rem)",
            left: 0,
            zIndex: 70,
            background: "var(--bg-card)",
            border: "1px solid var(--accent-border-lg, var(--border))",
            borderRadius: "6px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            padding: "0.55rem 0.85rem",
            fontFamily: "var(--font-inter)",
            fontSize: "0.8rem",
            color: "var(--text-heading)",
            whiteSpace: "nowrap",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinks = [
    { href: "/", label: t.nav.home },
    { href: sectionHref(lang, "chapters"), label: t.nav.chapters },
    { href: sectionHref(lang, "exercises"), label: t.nav.exercises },
    { href: sectionHref(lang, "quiz"), label: t.nav.quiz },
    { href: sectionHref(lang, "glossary"), label: t.nav.glossary },
    { href: sectionHref(lang, "about"), label: t.nav.about },
  ];

  const mobileLinks = desktopLinks;

  const langLabels: Record<"en" | "fr", string> = {
    fr: "Français",
    en: "English",
  };

  const langLabelsShort: Record<"en" | "fr", string> = {
    fr: "FR",
    en: "EN",
  };

  const pathMatch = /^\/(en|fr)\/([^/]+)(\/.*)?$/.exec(pathname);

  const switchLang = (l: "en" | "fr") => {
    if (pathMatch) {
      const [, currentLang, sectionSlug, rest] = pathMatch;
      const section = sectionFromSlug(currentLang as "en" | "fr", sectionSlug);
      const swapped = section ? sectionHref(l, section) + (rest ?? "") : `/${l}`;
      setLang(l);
      router.push(swapped);
      return;
    }
    setLang(l);
  };

  const LangToggle = ({ small }: { small?: boolean }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
        fontFamily: "var(--font-inter)",
        fontSize: small ? "0.8rem" : "0.75rem",
        fontWeight: 500,
        flexShrink: 0,
      }}
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchLang(l)}
          style={{
            background: lang === l ? "var(--amber)" : "transparent",
            color: lang === l ? (theme === "dark" ? "#0a0b0f" : "#ffffff") : "var(--text-secondary)",
            border: "none",
            padding: small ? "0.45rem 0.75rem" : "0.35rem 0.65rem",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "background 0.2s, color 0.2s",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {small ? langLabelsShort[l] : langLabels[l]}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 1.5px;
          background: var(--amber);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after,
        .nav-link-active::after {
          transform: scaleX(1);
        }
      `}</style>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--nav-bg)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.25s ease, border-color 0.25s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Desktop nav */}
          <div
            className="nav-desktop"
            style={{
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
              minWidth: 0,
            }}
          >
            {/* Language toggle */}
            <LangToggle />
            <MoreLanguagesMenu lang={lang} />

            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? " nav-link-active" : ""}`}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color:
                    pathname === link.href
                      ? "var(--amber)"
                      : "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "var(--amber)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    pathname === link.href
                      ? "var(--amber)"
                      : "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger + theme toggle */}
          <div
            className="nav-mobile-btn"
            style={{ alignItems: "center", gap: "0.75rem", flex: 1, justifyContent: "space-between" }}
          >
            {/* Lang toggle visible on mobile bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
              <LangToggle small />
              <MoreLanguagesMenu lang={lang} small />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {/* Donate */}
              <DonateButton />

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                {theme === "dark" ? "☀" : "☾"}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                  gap: "4px",
                  flexShrink: 0,
                }}
              >
                <span style={{ display: "block", width: "16px", height: "1.5px", background: "currentColor", transition: "transform 0.2s", transform: menuOpen ? "translateY(5.5px) rotate(45deg)" : "none" }} />
                <span style={{ display: "block", width: "16px", height: "1.5px", background: "currentColor", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: "block", width: "16px", height: "1.5px", background: "currentColor", transition: "transform 0.2s", transform: menuOpen ? "translateY(-5.5px) rotate(-45deg)" : "none" }} />
              </button>
            </div>
          </div>

          {/* Desktop theme toggle */}
          <div className="nav-desktop" style={{ alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <DonateButton />
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                width: "34px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-secondary)",
                fontSize: "1rem",
                transition: "border-color 0.2s, color 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--amber)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--amber)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
              }}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid var(--border)",
              background: "var(--nav-bg)",
              backdropFilter: "blur(12px)",
              padding: "0.75rem 1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: pathname === link.href ? "var(--amber)" : "var(--text-secondary)",
                  textDecoration: "none",
                  padding: "0.25rem 0",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
