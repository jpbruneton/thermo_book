import type { Lang, Translations } from "./i18n";
import type { ExerciseTranslations } from "./exerciseTranslations";

// Functions stay on the server; the footer receives its finished text.
export type ReaderTranslations = Omit<Translations, "chapter" | "footer"> & {
  chapter: Omit<Translations["chapter"], "readTime">;
  footer: Omit<Translations["footer"], "copyright"> & { copyright: string };
};

export interface ReaderChapter {
  slug: string;
  number: number;
  listed: boolean;
  title: string;
  description: string;
  partHeading: string | null;
  urlSlug: string;
}

export interface ReaderLanguage {
  lang: Lang;
  t: ReaderTranslations;
  chapters: Record<string, ReaderChapter>;
  exercises: ExerciseTranslations;
}
