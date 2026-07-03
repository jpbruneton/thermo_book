"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLang } from "@/app/context/LangContext";
import type { QuizQuestion } from "@/lib/quizzes";

interface Props {
  lecon: number;
  titleFr: string;
  titleEn: string;
  questions: QuizQuestion[];
}

interface QuestionState {
  /** Index of the first choice clicked (determines whether the question counts as correct). */
  firstClick: number | null;
  /** Index of the choice currently highlighted / whose explanation is shown. */
  activeChoice: number | null;
}

export function QuizRunner({ lecon, titleFr, titleEn, questions }: Props) {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);
  const [states, setStates] = useState<QuestionState[]>(
    () => questions.map(() => ({ firstClick: null, activeChoice: null }))
  );
  const [finished, setFinished] = useState(false);

  const t = lang === "fr"
    ? {
        back: "← Retour aux quiz",
        controlLabel: "Contrôle de cours",
        leconPrefix: "Leçon",
        questionOf: (a: number, b: number) => `Question ${a} / ${b}`,
        next: "Question suivante →",
        seeScore: "Voir mon score →",
        restart: "Recommencer ce quiz",
        backToList: "← Retour à la liste des quiz",
        scoreTitle: "Résultat",
        scoreLine: (score: number, total: number) => `${score} / ${total} bonnes réponses du premier coup.`,
        correct: "Correct",
        incorrect: "Incorrect",
        recap: "Récapitulatif",
      }
    : {
        back: "← Back to quizzes",
        controlLabel: "Course check",
        leconPrefix: "Lesson",
        questionOf: (a: number, b: number) => `Question ${a} / ${b}`,
        next: "Next question →",
        seeScore: "See my score →",
        restart: "Restart this quiz",
        backToList: "← Back to the quiz list",
        scoreTitle: "Result",
        scoreLine: (score: number, total: number) => `${score} / ${total} correct on the first try.`,
        correct: "Correct",
        incorrect: "Incorrect",
        recap: "Summary",
      };

  const title = lang === "fr" ? titleFr : titleEn;

  const score = useMemo(
    () =>
      states.reduce(
        (acc, s, i) => acc + (s.firstClick !== null && s.firstClick === questions[i].correctIndex ? 1 : 0),
        0
      ),
    [states, questions]
  );

  function handleChoiceClick(qIndex: number, choiceIndex: number) {
    setStates((prev) => {
      const next = [...prev];
      const current = next[qIndex];
      next[qIndex] = {
        firstClick: current.firstClick === null ? choiceIndex : current.firstClick,
        activeChoice: choiceIndex,
      };
      return next;
    });
  }

  function goNext() {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setStates(questions.map(() => ({ firstClick: null, activeChoice: null })));
    setIndex(0);
    setFinished(false);
  }

  const headerBlock = (
    <div style={{ marginBottom: "2rem" }}>
      <Link
        href="/quiz"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.85rem",
          color: "var(--amber)",
          textDecoration: "none",
        }}
      >
        {t.back}
      </Link>
      <div style={{ marginTop: "1rem" }}>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--amber)",
            fontWeight: 700,
          }}
        >
          {t.controlLabel} — {t.leconPrefix} n°{lecon}
        </span>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--text-heading)",
            margin: "0.35rem 0 0",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );

  if (finished) {
    return (
      <div style={{ position: "relative", zIndex: 1, padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {headerBlock}

          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "4px",
              background: "var(--bg-card)",
              padding: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "0.5rem",
              }}
            >
              {t.scoreTitle}
            </p>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--text-heading)",
              }}
            >
              {t.scoreLine(score, questions.length)}
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              marginBottom: "1rem",
            }}
          >
            {t.recap}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2.5rem" }}>
            {questions.map((q, i) => {
              const s = states[i];
              const ok = s.firstClick === q.correctIndex;
              return (
                <div
                  key={q.id}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "3px",
                    padding: "0.85rem 1.1rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: ok ? "#3a8f4a" : "#c0392b",
                    }}
                  >
                    {ok ? "✓" : "✗"}
                  </span>
                  <span style={{ fontFamily: "var(--font-crimson)", fontSize: "0.95rem", color: "var(--text-heading)" }}>
                    {q.question}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={restart}
              style={{
                background: "var(--amber)",
                color: "var(--bg-primary)",
                padding: "0.75rem 1.6rem",
                borderRadius: "2px",
                border: "none",
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {t.restart}
            </button>
            <Link
              href="/quiz"
              style={{
                border: "1px solid var(--accent-border-lg)",
                color: "var(--amber)",
                padding: "0.75rem 1.6rem",
                borderRadius: "2px",
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {t.backToList}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const s = states[index];
  const locked = s.firstClick !== null;

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {headerBlock}

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.78rem",
            letterSpacing: "0.06em",
            color: "var(--text-secondary)",
            marginBottom: "0.75rem",
          }}
        >
          {t.questionOf(index + 1, questions.length)}
        </p>

        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "4px",
            background: "var(--bg-card)",
            padding: "1.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "var(--text-heading)",
              lineHeight: 1.5,
              marginBottom: "1.5rem",
            }}
          >
            {q.question}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {q.choices.map((choice, ci) => {
              const isCorrect = ci === q.correctIndex;
              const isActive = s.activeChoice === ci;
              let borderColor = "var(--border)";
              let bg = "var(--bg-primary)";
              if (locked && isCorrect) {
                borderColor = "#3a8f4a";
                bg = "rgba(58, 143, 74, 0.08)";
              } else if (isActive && !isCorrect) {
                borderColor = "#c0392b";
                bg = "rgba(192, 57, 43, 0.08)";
              }
              return (
                <div key={ci}>
                  <button
                    onClick={() => handleChoiceClick(index, ci)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.8rem 1rem",
                      borderRadius: "3px",
                      border: `1px solid ${borderColor}`,
                      background: bg,
                      cursor: "pointer",
                      fontFamily: "var(--font-crimson)",
                      fontSize: "1rem",
                      color: "var(--text-heading)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "50%",
                        border: "1px solid var(--border-bright)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--amber)",
                      }}
                    >
                      {q.choices.length === 2 ? (ci === 0 ? "V" : "F") : String.fromCharCode(65 + ci)}
                    </span>
                    <span>{choice}</span>
                  </button>
                  {isActive && (
                    <p
                      style={{
                        fontFamily: "var(--font-crimson)",
                        fontSize: "0.9rem",
                        fontStyle: "italic",
                        color: isCorrect ? "#3a8f4a" : "#c0392b",
                        margin: "0.5rem 0 0 2.15rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {q.explanations[ci]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {locked && (
          <div style={{ marginTop: "1.5rem" }}>
            <button
              onClick={goNext}
              style={{
                background: "var(--amber)",
                color: "var(--bg-primary)",
                padding: "0.75rem 1.6rem",
                borderRadius: "2px",
                border: "none",
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {index < questions.length - 1 ? t.next : t.seeScore}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
