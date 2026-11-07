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
  /**
   * Set only for a lesson that also exists in a simplified version
   * (lecon1_simplf.tex next to lecon1.tex). The simplified text is then
   * served by default in renderedLang/toc, and this holds the full text.
   */
  fullVersion?: Pick<LessonPresentation, "renderedLang" | "toc">;
}
