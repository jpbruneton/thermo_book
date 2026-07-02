"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/app/context/LangContext";
import { exerciseMatchesQuery } from "@/lib/exerciseIndexUtils";
import { processLatex } from "@/lib/latex";
import type { ExerciseCard } from "./page";

interface Props {
  cardsFr: ExerciseCard[];
  cardsEn: ExerciseCard[];
}

export function ExercisesClient({ cardsFr, cardsEn }: Props) {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const [selectedLecon, setSelectedLecon] = useState<number | null>(null);

  const t = lang === "fr"
    ? {
        title: "Exercices corrigés",
        subtitle: "Recherche par titre ou mots-clés, ou parcourez par leçon.",
        searchPlaceholder: "Rechercher (titre, mots-clés)…",
        searchLabel: "Recherche",
        noMatch: "Aucun exercice ne correspond à cette recherche.",
        exoPrefix: "Exercice",
        kwLabel: "Mots-clés",
        leconPrefix: "Leçon",
        exosOnLecon: "Exercices sur la leçon",
        back: "← Retour aux exercices",
        exoCount: (n: number) => `${n} exercice${n > 1 ? "s" : ""}`,
      }
    : {
        title: "Solved Exercises",
        subtitle: "Search by title or keywords, or browse by lesson.",
        searchPlaceholder: "Search (title, keywords)…",
        searchLabel: "Search",
        noMatch: "No exercises match this search.",
        exoPrefix: "Exercise",
        kwLabel: "Keywords",
        leconPrefix: "Lesson",
        exosOnLecon: "Exercises on lesson",
        back: "← Back to exercises",
        exoCount: (n: number) => `${n} exercise${n > 1 ? "s" : ""}`,
      };

  const cards = lang === "fr" ? cardsFr : cardsEn;

  const filtered = useMemo(
    () => cards.filter((c) => exerciseMatchesQuery(c, query)),
    [cards, query]
  );

  const groups = useMemo(() => {
    const map = new Map<number, ExerciseCard[]>();
    for (const c of cards) {
      const list = map.get(c.lecon);
      if (list) list.push(c);
      else map.set(c.lecon, [c]);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [cards]);

  const searching = query.trim().length > 0;

  const selectedGroup = selectedLecon !== null
    ? groups.find(([lecon]) => lecon === selectedLecon)
    : null;

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text-heading)", marginBottom: "0.6rem" }}>
          {t.title}
        </h1>
        <p style={{ fontFamily: "var(--font-crimson)", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
          {t.subtitle}
        </p>

        <label htmlFor="exo-search" style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.45rem" }}>
          {t.searchLabel}
        </label>
        <input
          id="exo-search"
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setSelectedLecon(null); }}
          placeholder={t.searchPlaceholder}
          autoComplete="off"
          style={{ width: "100%", maxWidth: "500px", padding: "0.6rem 1rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-secondary)", color: "var(--text-heading)", fontFamily: "var(--font-crimson)", fontSize: "1rem", marginBottom: "2.5rem" }}
        />

        {searching ? (
          <>
            {filtered.length === 0 && (
              <p style={{ fontFamily: "var(--font-crimson)", color: "var(--text-secondary)", fontStyle: "italic" }}>
                {t.noMatch}
              </p>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {filtered.map((card) => (
                <ExoCard key={card.id} card={card} exoPrefix={t.exoPrefix} kwLabel={t.kwLabel} leconPrefix={t.leconPrefix} lang={lang} />
              ))}
            </div>
          </>
        ) : selectedLecon !== null && selectedGroup ? (
          <SelectedLeconView
            lecon={selectedLecon}
            groupCards={selectedGroup[1]}
            lang={lang}
            t={t}
            onBack={() => setSelectedLecon(null)}
          />
        ) : (
          <LessonGrid
            groups={groups}
            lang={lang}
            t={t}
            onSelect={setSelectedLecon}
          />
        )}
      </div>
    </div>
  );
}

function LessonGrid({
  groups,
  lang,
  t,
  onSelect,
}: {
  groups: [number, ExerciseCard[]][];
  lang: string;
  t: { exosOnLecon: string; leconPrefix: string; exoCount: (n: number) => string };
  onSelect: (lecon: number) => void;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.25rem",
      }}
    >
      {groups.map(([lecon, groupCards]) => {
        const leconTitle = lang === "fr" ? groupCards[0].leconTitleFr : groupCards[0].leconTitleEn;
        return (
          <LessonCard
            key={lecon}
            lecon={lecon}
            leconTitle={leconTitle}
            count={groupCards.length}
            t={t}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}

function LessonCard({
  lecon,
  leconTitle,
  count,
  t,
  onSelect,
}: {
  lecon: number;
  leconTitle: string;
  count: number;
  t: { exosOnLecon: string; exoCount: (n: number) => string };
  onSelect: (lecon: number) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onSelect(lecon)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "1.6rem 1.4rem",
        border: `1px solid ${hovered ? "var(--amber)" : "var(--border)"}`,
        borderRadius: "10px",
        background: hovered ? "var(--bg-secondary)" : "var(--bg-primary)",
        cursor: "pointer",
        textAlign: "left",
        transition: "border-color 0.18s, background 0.18s, box-shadow 0.18s",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
        width: "100%",
        minHeight: "130px",
      }}
    >
      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 700, marginBottom: "0.55rem" }}>
        {t.exosOnLecon} n°{lecon}
      </span>
      <span style={{ fontFamily: "var(--font-playfair)", fontSize: "0.97rem", fontWeight: 600, color: "var(--text-heading)", lineHeight: 1.45, flex: 1 }}>
        {leconTitle}
      </span>
      <span style={{ fontFamily: "var(--font-crimson)", fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.85rem" }}>
        {t.exoCount(count)}
      </span>
    </button>
  );
}

function SelectedLeconView({
  lecon,
  groupCards,
  lang,
  t,
  onBack,
}: {
  lecon: number;
  groupCards: ExerciseCard[];
  lang: string;
  t: { exosOnLecon: string; exoPrefix: string; kwLabel: string; leconPrefix: string; back: string };
  onBack: () => void;
}) {
  const leconTitle = lang === "fr" ? groupCards[0].leconTitleFr : groupCards[0].leconTitleEn;

  return (
    <div>
      <button
        onClick={onBack}
        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "0.88rem", color: "var(--amber)", marginBottom: "1.75rem", padding: 0, display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
      >
        {t.back}
      </button>

      <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.6rem", marginBottom: "1.25rem" }}>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 700 }}>
          {t.exosOnLecon} n°{lecon}
        </span>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 600, color: "var(--text-heading)", margin: "0.2rem 0 0" }}>
          {leconTitle}
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {groupCards.map((card) => (
          <ExoCard key={card.id} card={card} exoPrefix={t.exoPrefix} kwLabel={t.kwLabel} leconPrefix={t.leconPrefix} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function ExoCard({ card, exoPrefix, kwLabel, lang }: {
  card: ExerciseCard;
  exoPrefix: string;
  kwLabel: string;
  leconPrefix: string;
  lang: string;
}) {
  const [open, setOpen] = useState(false);

  const renderedEnonce = useMemo(() => open && card.enonceHtml ? processLatex(card.enonceHtml) : "", [open, card.enonceHtml]);
  const renderedIndication = useMemo(() => open && card.indicationHtml ? processLatex(card.indicationHtml) : "", [open, card.indicationHtml]);
  const renderedSolution = useMemo(() => open && card.solutionHtml ? processLatex(card.solutionHtml) : "", [open, card.solutionHtml]);

  const openLabel = lang === "fr" ? "Ouvrir" : "Open";
  const closeLabel = lang === "fr" ? "Fermer" : "Close";

  return (
    <div
      id={card.id}
      style={{ border: "1px solid var(--border)", borderRadius: "8px", background: "var(--bg-primary)", overflow: "hidden" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.85rem 1.1rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-crimson)", fontSize: "0.97rem", color: "var(--text-heading)", lineHeight: 1.5 }}>
            <span style={{ color: "var(--amber)", fontWeight: 600 }}>{exoPrefix} {card.number}</span>
            {card.titleHtml ? (
              <>
                <span style={{ color: "var(--text-secondary)", margin: "0 0.35rem" }}>—</span>
                <span style={{ fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: card.titleHtml }} />
              </>
            ) : null}
          </div>
          {card.keywords.length > 0 && (
            <div style={{ fontFamily: "var(--font-crimson)", fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
              <span style={{ fontWeight: 600 }}>{kwLabel} : </span>
              {card.keywords.join(" · ")}
            </div>
          )}
        </div>
        <span style={{ color: "var(--amber)", fontSize: "0.8rem", fontFamily: "var(--font-inter)", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" }}>
          {open ? closeLabel : openLabel} {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div style={{ padding: "0 1.1rem 1.25rem", borderTop: "1px solid var(--border)" }}>
          {renderedEnonce && (
            <div className="prose-content" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: renderedEnonce }} />
          )}
          {renderedIndication && (
            <div className="prose-content" style={{ marginTop: "0.5rem" }} dangerouslySetInnerHTML={{ __html: renderedIndication }} />
          )}
          {renderedSolution && (
            <div className="prose-content" style={{ marginTop: "0.5rem" }} dangerouslySetInnerHTML={{ __html: renderedSolution }} />
          )}
        </div>
      )}
    </div>
  );
}
