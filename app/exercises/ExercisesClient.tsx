"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/app/context/LangContext";
import { exerciseMatchesQuery } from "@/lib/exerciseIndexUtils";
import type { ExerciseCard } from "./page";

interface Props {
  cardsFr: ExerciseCard[];
  cardsEn: ExerciseCard[];
}

export function ExercisesClient({ cardsFr, cardsEn }: Props) {
  const { lang } = useLang();
  const [query, setQuery] = useState("");

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
      };

  const cards = lang === "fr" ? cardsFr : cardsEn;

  const filtered = useMemo(
    () => cards.filter((c) => exerciseMatchesQuery(c, query)),
    [cards, query]
  );

  const groups = useMemo(() => {
    const map = new Map<number, ExerciseCard[]>();
    for (const c of filtered) {
      const list = map.get(c.lecon);
      if (list) list.push(c);
      else map.set(c.lecon, [c]);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [filtered]);

  const searching = query.trim().length > 0;

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

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
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          autoComplete="off"
          style={{ width: "100%", maxWidth: "500px", padding: "0.6rem 1rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-secondary)", color: "var(--text-heading)", fontFamily: "var(--font-crimson)", fontSize: "1rem", marginBottom: "2.5rem" }}
        />

        {filtered.length === 0 && (
          <p style={{ fontFamily: "var(--font-crimson)", color: "var(--text-secondary)", fontStyle: "italic" }}>
            {t.noMatch}
          </p>
        )}

        {searching ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {filtered.map((card) => (
              <ExoCard key={card.id} card={card} exoPrefix={t.exoPrefix} kwLabel={t.kwLabel} leconPrefix={t.leconPrefix} lang={lang} />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {groups.map(([lecon, groupCards]) => {
              const leconTitle = lang === "fr" ? groupCards[0].leconTitleFr : groupCards[0].leconTitleEn;
              return (
                <section key={lecon}>
                  <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 600 }}>
                      {t.leconPrefix} {lecon}
                    </span>
                    <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 600, color: "var(--text-heading)", margin: "0.2rem 0 0" }}>
                      {leconTitle}
                    </h2>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {groupCards.map((card) => (
                      <ExoCard key={card.id} card={card} exoPrefix={t.exoPrefix} kwLabel={t.kwLabel} leconPrefix={t.leconPrefix} lang={lang} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function ExoCard({ card, exoPrefix, kwLabel, leconPrefix, lang }: {
  card: ExerciseCard;
  exoPrefix: string;
  kwLabel: string;
  leconPrefix: string;
  lang: string;
}) {
  const leconTitle = lang === "fr" ? card.leconTitleFr : card.leconTitleEn;
  return (
    <div
      id={card.id}
      style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "0.85rem 1.1rem", background: "var(--bg-primary)" }}
    >
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
        <div style={{ fontFamily: "var(--font-crimson)", fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.35rem" }}>
          <span style={{ fontWeight: 600 }}>{kwLabel} : </span>
          {card.keywords.join(" · ")}
        </div>
      )}
    </div>
  );
}
