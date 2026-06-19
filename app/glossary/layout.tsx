import type { Metadata } from "next";
import { bookMeta } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Glossary",
  description: `Key terms and concepts from ${bookMeta.title}.`,
  alternates: { canonical: absoluteUrl("/glossary") },
  openGraph: {
    title: `Glossary | ${bookMeta.title}`,
    description: `Key terms and concepts from ${bookMeta.title}.`,
    url: absoluteUrl("/glossary"),
  },
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
