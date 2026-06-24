"use client";
import Link from "next/link";
import { getWebThemes } from "@/lib/chapters";
import { useLang } from "@/app/context/LangContext";

export function ChapterList() {
  const { t, lang } = useLang();
  const webThemes = getWebThemes();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
      {webThemes.map((theme, i) => (
        <div key={theme.slug}>
          {(lang === "fr" ? theme.partHeadingFr : theme.partHeadingEn) && (
            <div
              style={{
                marginTop: i === 0 ? 0 : "3rem",
                marginBottom: "1.5rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--accent-border-md)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--amber)",
                  fontWeight: 600,
                }}
              >
                {lang === "fr" ? theme.partHeadingFr : theme.partHeadingEn}
              </span>
            </div>
          )}
          <div
          style={{
            borderBottom:
              i < webThemes.length - 1
                ? "1px solid var(--border-subtle)"
                : "none",
          }}
        >
          <Link
            href={`/chapters/${theme.slug}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px 1fr auto",
                alignItems: "center",
                gap: "1.5rem",
                padding: "0.55rem 0",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--accent-bg-xs)";
                (e.currentTarget as HTMLDivElement).style.margin = "0 -1rem";
                (e.currentTarget as HTMLDivElement).style.padding =
                  "0.55rem 1rem";
                (e.currentTarget as HTMLDivElement).style.borderRadius = "6px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "";
                (e.currentTarget as HTMLDivElement).style.margin = "";
                (e.currentTarget as HTMLDivElement).style.padding = "0.55rem 0";
                (e.currentTarget as HTMLDivElement).style.borderRadius = "";
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "var(--accent-border-lg)",
                    lineHeight: 1,
                  }}
                >
                  {String(theme.number).padStart(2, "0")}
                </div>
              </div>

              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--text-heading)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {lang === "fr" ? theme.titleFr : theme.titleEn}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: "var(--amber-soft)",
                    marginBottom: 0,
                  }}
                >
                  {lang === "fr" ? theme.descriptionFr : theme.descriptionEn}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.8rem",
                    color: "var(--amber)",
                    fontWeight: 500,
                  }}
                >
                  {t.home.readTheme}
                </span>
              </div>
            </div>
          </Link>
        </div>
        </div>
      ))}
    </div>
  );
}
