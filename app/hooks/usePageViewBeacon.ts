"use client";

import { useEffect, useRef } from "react";
import type { PageViewSection } from "@/lib/pageViews.server";

/**
 * Fires a silent, fire-and-forget view-count beacon once per (section, lang, slug)
 * while the component is mounted — used on lesson and exercise pages. Never shown
 * in the UI; see docs/page-views.md for how the counts are stored and read back.
 */
export function usePageViewBeacon(section: PageViewSection, lang: string, slug: string | null | undefined) {
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const key = `${section}:${lang}:${slug}`;
    if (lastSent.current === key) return;
    lastSent.current = key;

    const payload = JSON.stringify({ section, lang, slug });
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon("/api/views", new Blob([payload], { type: "application/json" }));
    } else {
      fetch("/api/views", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  }, [section, lang, slug]);
}
