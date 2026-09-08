"use client";

import { useLang } from "@/app/context/LangContext";

export default function DownloadsPage() {
  const { t } = useLang();

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem 4rem",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.9rem, 4vw, 2.5rem)",
            color: "var(--text-heading)",
            marginBottom: "0.6rem",
          }}
        >
          {t.nav.downloads}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-crimson)",
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
          }}
        >
          {t.downloads.comingSoon}
        </p>
      </div>
    </main>
  );
}
