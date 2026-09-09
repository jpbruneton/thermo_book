"use client";

import { usePageViewBeacon } from "@/app/hooks/usePageViewBeacon";

/** Silent view-count beacon for exercise pages — renders nothing. */
export function ExerciseViewBeacon({ lang, exerciseId }: { lang: string; exerciseId: string }) {
  usePageViewBeacon("exercises", lang, exerciseId);
  return null;
}
