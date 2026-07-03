import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [];
}

export default function ExerciseSlugPage({
  params,
}: {
  params: { lang: string };
}) {
  redirect(`/${params.lang}/exercises`);
}
