"use client";
import type { CSSProperties } from "react";
import { useLang } from "@/app/context/LangContext";
import { getExerciseTranslations } from "@/lib/exerciseTranslations";
import type { Lang } from "@/lib/i18n";

// Typographie native de la ligne « Mots-clés : … »
const KEYWORD_COLON: Partial<Record<Lang, string>> = { fr: " : ", zh: "：", ja: "：" };
const KEYWORD_SEPARATOR: Partial<Record<Lang, string>> = { zh: "、", ja: "、", ar: "، ", fa: "، ", ur: "، " };

// En français, les mots-clés d'une liste s'écrivent en minuscules, sauf les
// noms propres placés en tête (« Joule », « Legendre et géométrie »…).
const FR_PROPER_NOUNS = new Set(["Joule", "Carnot", "Kelvin", "Clausius", "Legendre", "Maxwell", "Gibbs", "Boltzmann"]);

function formatTopic(topic: string, lang: Lang): string {
  if (lang !== "fr") return topic;
  const firstWord = topic.split(/[\s'’-]/)[0];
  if (FR_PROPER_NOUNS.has(firstWord) || firstWord === firstWord.toUpperCase()) return topic;
  return topic.charAt(0).toLocaleLowerCase("fr") + topic.slice(1);
}

export function LessonKeywords({ topics, style }: { topics: string[]; style?: CSSProperties }) {
  const { lang } = useLang();
  if (topics.length === 0) return null;
  return (
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-inter)",
        fontSize: "0.8rem",
        lineHeight: 1.5,
        color: "var(--text-heading)",
        ...style,
      }}
    >
      <span style={{ fontWeight: 600 }}>
        {getExerciseTranslations(lang).keywords}
        {KEYWORD_COLON[lang] ?? ": "}
      </span>
      {topics.map((topic) => formatTopic(topic, lang)).join(KEYWORD_SEPARATOR[lang] ?? ", ")}
    </p>
  );
}
