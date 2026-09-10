"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ShareButton } from "./ShareButton";
import { isLang } from "@/lib/languages";

const SCROLL_THRESHOLD = 400;

/** Landing pages short enough that there's nothing to scroll past before sharing is relevant. */
function isAlwaysVisiblePage(pathname: string): boolean {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length !== 2) return false;
  const [lang, page] = segments;
  return isLang(lang) && (page === "exercises" || page === "quiz" || page === "downloads");
}

export function FloatingShareButton() {
  const pathname = usePathname();
  const alwaysVisible = isAlwaysVisiblePage(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  const visible = alwaysVisible || scrolled;

  return (
    <>
      {/* Above 700px, the "back to top" arrow also occupies this corner
          (at right/bottom 1.2rem, 42px tall) — sit clear above it there. */}
      <style>{`
        .floating-share-btn {
          right: calc(1.25rem + env(safe-area-inset-right, 0px));
          bottom: calc(1.75rem + env(safe-area-inset-bottom, 0px));
        }
        @media (min-width: 701px) {
          .floating-share-btn {
            right: 1.2rem;
            bottom: 4.6rem;
          }
        }
      `}</style>
      <ShareButton
        variant="fab"
        className="floating-share-btn"
        style={{
          zIndex: 40,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.85)",
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      />
    </>
  );
}
