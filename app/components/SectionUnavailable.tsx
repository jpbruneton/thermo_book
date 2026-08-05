"use client";
import Link from "next/link";
import { useLang } from "@/app/context/LangContext";

/**
 * Shown instead of a page's real content when the current language has no
 * translation for that section yet. Deliberately does not fall back to
 * French or English content — see docs/languages.md.
 */
export function SectionUnavailable() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "5rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.85rem",
            color: "var(--amber)",
            textDecoration: "none",
          }}
        >
          {isFr ? "← Retour à l'accueil" : "← Back to home"}
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--text-heading)",
            margin: "1rem 0 0.75rem",
          }}
        >
          {isFr ? "Page non disponible" : "Page not available"}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-crimson)",
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
          }}
        >
          {isFr
            ? "Cette page n'est pas encore disponible dans cette langue."
            : "This page is not yet available in this language."}
        </p>
      </div>
    </div>
  );
}
