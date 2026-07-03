import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import legacyExerciseSlugRedirects from "@/lib/legacyExerciseSlugRedirects.json";

const legacy = legacyExerciseSlugRedirects as Record<string, string>;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const exercisesMatch = /^\/(?:(en|fr)\/)?exercises\/(.+)$/.exec(pathname);
  if (!exercisesMatch) {
    return NextResponse.next();
  }

  const [, lang, rest] = exercisesMatch;
  const cleanRest = rest.replace(/\/$/, "");
  if (cleanRest.includes("/")) {
    return NextResponse.next();
  }

  const to = legacy[cleanRest];
  if (to) {
    const url = request.nextUrl.clone();
    url.pathname = lang ? `/${lang}/exercises/${to}` : `/exercises/${to}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/exercises/:path*", "/en/exercises/:path*", "/fr/exercises/:path*"],
};
