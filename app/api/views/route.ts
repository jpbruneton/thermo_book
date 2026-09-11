import { NextRequest, NextResponse } from "next/server";
import { isLang } from "@/lib/i18n";
import { incrementPageView, type PageViewSection } from "@/lib/pageViews.server";

const SLUG_PATTERN = /^[a-zA-Z0-9_-]{1,150}$/;

function isSection(value: unknown): value is PageViewSection {
  return value === "home" || value === "chapters" || value === "exercises" || value === "quiz";
}

// Silent counter endpoint: no response body is read by callers (sendBeacon
// can't read one anyway), so failures are swallowed rather than surfaced.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const section = body?.section;
  const lang = body?.lang;
  const slug = body?.slug;

  if (!isSection(section) || typeof lang !== "string" || !isLang(lang) || typeof slug !== "string" || !SLUG_PATTERN.test(slug)) {
    return new NextResponse(null, { status: 400 });
  }

  await incrementPageView(section, lang, slug);
  return new NextResponse(null, { status: 204 });
}
