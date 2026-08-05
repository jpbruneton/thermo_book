"use client";
import { ChapterList } from "./ChapterList";
import { useLang } from "@/app/context/LangContext";

export default function ChaptersPage() {
  const { t } = useLang();

  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        padding: "calc(3rem - 1cm) 1.5rem 4rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "1.75rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.7rem, 3.6vw, 2.3rem)",
              fontWeight: 700,
              color: "var(--text-heading)",
              lineHeight: 1.15,
              marginBottom: "0.5rem",
            }}
          >
            {t.chapters.title}
          </h1>
          {t.chapters.description.trim() ? (
            <p
              style={{
                fontFamily: "var(--font-crimson)",
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                maxWidth: "520px",
              }}
            >
              {t.chapters.description}
            </p>
          ) : null}
        </div>

        {/* Chapter list */}
        <ChapterList />
      </div>
    </div>
  );
}
