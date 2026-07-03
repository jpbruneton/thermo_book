import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import legacyExerciseSlugRedirects from "@/lib/legacyExerciseSlugRedirects.json";

const legacy = legacyExerciseSlugRedirects as Record<string, string>;

function withSiteLangHeader(response: NextResponse, pathname: string): NextResponse {
  const match = /^\/(en|fr)(?:\/|$)/.exec(pathname);
  response.headers.set("x-site-lang", match ? match[1] : "fr");
  return response;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const exercisesMatch = /^\/(?:(en|fr)\/)?(exercises|exercices)\/(.+)$/.exec(pathname);
  if (exercisesMatch) {
    const [, lang, section, rest] = exercisesMatch;
    const cleanRest = rest.replace(/\/$/, "");
    if (!cleanRest.includes("/")) {
      const to = legacy[cleanRest];
      if (to) {
        const url = request.nextUrl.clone();
        url.pathname = lang ? `/${lang}/${section}/${to}` : `/${section}/${to}`;
        return NextResponse.redirect(url, 308);
      }
    }
  }

  return withSiteLangHeader(NextResponse.next(), pathname);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|figs|pdfs).*)"],
};
