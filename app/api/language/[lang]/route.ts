import { isLang, SUPPORTED_LANGS } from "@/lib/languages";
import { getReaderLanguage } from "@/lib/readerLanguage.server";

// The unprefixed homepage restores a saved preference without bundling every
// dictionary or changing its URL. These responses are generated at build time.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export function GET(_request: Request, { params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return new Response(null, { status: 404 });
  return Response.json(getReaderLanguage(params.lang));
}
