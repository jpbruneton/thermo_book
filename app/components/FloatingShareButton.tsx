"use client";
import { useEffect, useState } from "react";
import { ShareButton } from "./ShareButton";

const SCROLL_THRESHOLD = 400;

export function FloatingShareButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
