import { NextRequest, NextResponse } from "next/server";
import { isLang } from "@/lib/i18n";
import { incrementShareClick, type ShareNetwork } from "@/lib/pageViews.server";

const PAGE_PATTERN = /^[a-zA-Z0-9_-]{1,150}$/;
const NETWORKS: readonly ShareNetwork[] = ["x", "whatsapp", "facebook", "linkedin", "email", "copy", "native"];

function isNetwork(value: unknown): value is ShareNetwork {
  return (NETWORKS as readonly unknown[]).includes(value);
}

// Silent counter endpoint: no response body is read by callers (sendBeacon
// can't read one anyway), so failures are swallowed rather than surfaced.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const network = body?.network;
  const lang = body?.lang;
  const page = body?.page;

  if (!isNetwork(network) || typeof lang !== "string" || !isLang(lang) || typeof page !== "string" || !PAGE_PATTERN.test(page)) {
    return new NextResponse(null, { status: 400 });
  }

  await incrementShareClick(network, lang, page);
  return new NextResponse(null, { status: 204 });
}
