"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/app/context/LangContext";
import { sectionHref, type Lang } from "@/lib/i18n";
import type { QuizLessonCard } from "./page";

interface Props {
  cards: QuizLessonCard[];
}

export function QuizHomeClient({ cards }: Props) {
  const { lang } = useLang();

  const t = lang === "fr"
    ? {
        title: "Quiz : questions de cours",
        leconPrefix: "Leçon",
        startQuiz: "Commencer le quiz →",
        questionCount: (n: number) => `${n} question${n > 1 ? "s" : ""}`,
        frenchOnlyNote: "Note: quiz content is currently available in French only.",
      }
    : {
        title: "Quiz — Course Check",
        leconPrefix: "Lesson",
        startQuiz: "Start the quiz →",
        questionCount: (n: number) => `${n} question${n > 1 ? "s" : ""}`,
        frenchOnlyNote: "Note : le contenu des quiz est pour l'instant disponible uniquement en français.",
      };

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--text-heading)",
            marginBottom: "0.6rem",
          }}
        >
          {t.title}
        </h1>
        {lang === "en" && (
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              fontStyle: "italic",
              color: "var(--amber-soft)",
              marginBottom: "2rem",
            }}
          >
            {t.frenchOnlyNote}
          </p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {cards.map((card) => (
            <QuizLessonCardView
              key={card.lecon}
              card={card}
              lang={lang}
              leconPrefix={t.leconPrefix}
              startQuiz={t.startQuiz}
              questionCount={t.questionCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function QuizLessonCardView({
  card,
  lang,
  leconPrefix,
  startQuiz,
  questionCount,
}: {
  card: QuizLessonCard;
  lang: Lang;
  leconPrefix: string;
  startQuiz: string;
  questionCount: (n: number) => string;
}) {
  const [hovered, setHovered] = useState(false);
  const title = lang === "fr" ? card.titleFr : card.titleEn;

  return (
    <Link href={sectionHref(lang, "quiz", String(card.lecon))} style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1.6rem 1.4rem",
          border: `1px solid ${hovered ? "var(--amber)" : "var(--border)"}`,
          borderRadius: "3px",
          background: hovered ? "var(--bg-secondary)" : "var(--bg-primary)",
          cursor: "pointer",
          textAlign: "left",
          transition: "border-color 0.18s, background 0.18s, box-shadow 0.18s",
          boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
          width: "100%",
          minHeight: "150px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--amber)",
            fontWeight: 700,
            marginBottom: "0.55rem",
          }}
        >
          {leconPrefix} n°{card.lecon}
        </span>
        <span
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "0.97rem",
            fontWeight: 600,
            color: "var(--text-heading)",
            lineHeight: 1.45,
            flex: 1,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "var(--font-crimson)",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            marginTop: "0.85rem",
          }}
        >
          {questionCount(card.count)}
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.775rem",
            color: "var(--amber)",
            marginTop: "0.6rem",
          }}
        >
          {startQuiz}
        </span>
      </div>
    </Link>
  );
}
