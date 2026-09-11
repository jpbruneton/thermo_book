"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";
import { useLang } from "@/app/context/LangContext";
import { sectionFromSlug, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/languages";
import { DonateButton } from "@/app/components/DonateButton";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

function localizedPagePath(lang: Lang): string | null | undefined {
  if (typeof document === "undefined") return undefined;
  const page = document.querySelector<HTMLElement>("[data-localized-paths]");
  if (!page) return undefined;

  try {
    const paths = JSON.parse(page.dataset.localizedPaths ?? "{}") as Partial<Record<Lang, unknown>>;
    const path = paths[lang];
    return typeof path === "string" && path.startsWith("/") ? path : null;
  } catch {
    return null;
  }
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
    { href: sectionHref(lang, "downloads"), label: t.nav.downloads },
    { href: sectionHref(lang, "about"), label: t.nav.about },
  ];

  const mobileLinks = desktopLinks;

  // Matches /{anyLang} or /{anyLang}/{section}[/...rest] — not just /en or /fr,
  // so switching language while browsing under /de, /zh, etc. still works.
  const pathMatch = new RegExp(`^/(${SUPPORTED_LANGS.join("|")})(?:/([^/]+))?(/.*)?$`).exec(pathname);

  const switchLang = (l: Lang) => {
    if (pathMatch) {
      const [, currentLang, sectionSlug, rest] = pathMatch;
      if (!sectionSlug) {
        // Bare /{lang} homepage — go to the same homepage in the new language.
        setLang(l);
        router.push(`/${l}`);
        return;
      }
      const section = sectionFromSlug(currentLang as Lang, sectionSlug);
      const localizedRest = rest ?? "";
      const localizedPage = rest ? localizedPagePath(l) : undefined;
      const queryAndHash = typeof window === "undefined"
        ? ""
        : `${window.location.search}${window.location.hash}`;
      const swapped = section
        ? (localizedPage === undefined
            ? sectionHref(l, section) + localizedRest
            : localizedPage ?? sectionHref(l, section)) + queryAndHash
        : `/${l}`;
      setLang(l);
      router.push(swapped);
      return;
    }
    setLang(l);
  };

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
          className="nav-bar-inner"
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
            <LanguageSelector lang={lang} onSelect={switchLang} />

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
            style={{ alignItems: "center", gap: "0.5rem", flex: 1, minWidth: 0, justifyContent: "space-between" }}
          >
            <LanguageSelector lang={lang} onSelect={switchLang} />

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
              {/* Donate */}
              <DonateButton compact lang={lang} />

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
            <DonateButton lang={lang} />
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
