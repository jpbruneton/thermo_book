import { getListedWebThemes } from "./chapters";
import { loadExercises } from "./exercisesLibrary.server";
import { SUPPORTED_LANGS, type Lang } from "./languages";

/** Lesson number → exercise count, per language, for the homepage "Explore the Exercises" grid. */
export type ExerciseLessonCounts = Record<Lang, Record<number, number>>;

export function getExerciseLessonCounts(): ExerciseLessonCounts {
  const listed = new Set(getListedWebThemes().map((theme) => theme.number));
  const counts = {} as ExerciseLessonCounts;
  for (const lang of SUPPORTED_LANGS) {
    const perLesson: Record<number, number> = {};
    for (const exercise of loadExercises(lang)) {
      if (listed.has(exercise.lecon)) perLesson[exercise.lecon] = (perLesson[exercise.lecon] ?? 0) + 1;
    }
    counts[lang] = perLesson;
  }
  return counts;
}
