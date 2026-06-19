import type { Metadata } from "next";
import { bookMeta, bookMetaDisplayTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";

// This metadata applies to /chapters (the listing page).
// Individual /chapters/[slug] pages override it via their own generateMetadata.
export const metadata: Metadata = {
  title: "Lessons",
  description: `Browse all lessons of ${bookMetaDisplayTitle()}.`,
  alternates: { canonical: absoluteUrl("/chapters") },
  openGraph: {
    title: `Lessons | ${bookMeta.title}`,
    description: `All lessons of ${bookMeta.title}.`,
    url: absoluteUrl("/chapters"),
  },
};

export default function ChaptersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
