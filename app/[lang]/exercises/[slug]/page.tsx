import { redirect } from "next/navigation";
import { isLang, sectionHref } from "@/lib/i18n";

export function generateStaticParams() {
  return [];
}

export default function ExerciseSlugPage({
  params,
}: {
  params: { lang: string };
}) {
  redirect(isLang(params.lang) ? sectionHref(params.lang, "exercises") : "/");
}
