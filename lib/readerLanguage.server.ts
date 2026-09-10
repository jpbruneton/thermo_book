import { getTranslations, type Lang } from "./i18n";
import { bookMeta, getWebThemes, getThemeTitle, getThemeDescription, getThemePartHeading, getThemeUrlSlug } from "./chapters";
import { getExerciseTranslations } from "./exerciseTranslations";
import type { ReaderLanguage } from "./readerLanguage";

export function getReaderLanguage(lang: Lang): ReaderLanguage {
  const t = getTranslations(lang);
  const { readTime: _readTime, ...chapter } = t.chapter;
  return {
    lang,
    t: {
      ...t,
      chapter,
      footer: { ...t.footer, copyright: t.footer.copyright(bookMeta.year, bookMeta.author) },
    },
    chapters: Object.fromEntries(getWebThemes().map((theme) => [theme.slug, {
      slug: theme.slug,
      number: theme.number,
      listed: theme.listed !== false,
      title: getThemeTitle(theme, lang),
      description: getThemeDescription(theme, lang),
      partHeading: getThemePartHeading(theme, lang) ?? null,
      urlSlug: getThemeUrlSlug(theme, lang),
    }])),
    exercises: getExerciseTranslations(lang),
  };
}
