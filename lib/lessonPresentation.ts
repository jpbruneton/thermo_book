import type { Lesson } from "./chapters";

export interface LessonTocEntry {
  id: string;
  text: string;
  level: 2 | 3 | 4;
}

// Only the finished HTML and its small navigation index cross the server/client
// boundary. The intermediate lesson source stays on the server.
export interface LessonPresentation extends Omit<Lesson, "content"> {
  renderedLang: string;
  toc: LessonTocEntry[];
  topicsLang: string[];
}
