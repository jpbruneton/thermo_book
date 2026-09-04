import { SiteDocument, siteMetadata } from "@/app/components/SiteDocument";

export const metadata = siteMetadata;

// The unprefixed homepage starts in English. Saved language preferences are
// still applied by LangProvider after hydration.
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
