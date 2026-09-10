import { Redis } from "@upstash/redis";

/**
 * Silent view counter, stored in Upstash Redis (set up via the Vercel Storage
 * marketplace or directly at upstash.com; needs UPSTASH_REDIS_REST_URL and
 * UPSTASH_REDIS_REST_TOKEN in the environment). Never surfaced in the UI —
 * see docs/page-views.md for how to read the counts.
 */
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

export type PageViewSection = "chapters" | "exercises" | "quiz";

function pageViewKey(section: PageViewSection, lang: string, slug: string): string {
  return `views:${section}:${lang}:${slug}`;
}

/** No-ops (and never throws) when Redis isn't configured, so local dev and preview builds without the env vars keep working. */
export async function incrementPageView(
  section: PageViewSection,
  lang: string,
  slug: string
): Promise<void> {
  if (!redis) return;
  try {
    await redis.incr(pageViewKey(section, lang, slug));
  } catch {
    // A visit counter must never break the page it's counting.
  }
}

export type ShareNetwork = "x" | "whatsapp" | "facebook" | "linkedin" | "email" | "copy" | "native";

function shareClickKey(network: ShareNetwork, lang: string, page: string): string {
  return `shares:${network}:${lang}:${page}`;
}

/** Same silent, no-op-when-unconfigured counter as incrementPageView, for share-menu clicks. */
export async function incrementShareClick(
  network: ShareNetwork,
  lang: string,
  page: string
): Promise<void> {
  if (!redis) return;
  try {
    await redis.incr(shareClickKey(network, lang, page));
  } catch {
    // A click counter must never break the share action it's counting.
  }
}
