import type { Metadata } from "next";
import { bookMeta } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import type { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const isFr = lang === "fr";
  const title = isFr ? "Glossaire" : "Glossary";
  const description = isFr
    ? `Termes et notions clés de ${bookMeta.title}.`
    : `Key terms and concepts from ${bookMeta.title}.`;
  const url = absoluteUrl(`/${lang}/glossary`);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl("/fr/glossary"),
        en: absoluteUrl("/en/glossary"),
      },
    },
    openGraph: {
      title: `${title} | ${bookMeta.title}`,
      description,
      url,
    },
  };
}

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
