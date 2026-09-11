import type { Lang } from "./languages";

export function getBookCover(lang: Lang) {
  return {
    src: lang === "fr" ? "/figs/fr/front.png" : "/covers/front-en.png",
    width: 598,
    height: 768,
  };
}
