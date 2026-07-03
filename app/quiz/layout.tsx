import type { Metadata } from "next";
import { bookMeta, bookMetaDisplayTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Quiz",
  description: `Quiz de cours (questions à choix multiples) pour ${bookMetaDisplayTitle()}.`,
  alternates: { canonical: absoluteUrl("/quiz") },
  openGraph: {
    title: `Quiz | ${bookMeta.title}`,
    description: `Testez vos connaissances de cours sur ${bookMeta.title}.`,
    url: absoluteUrl("/quiz"),
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
