"use client";
import { useEffect, useState } from "react";
import { ShareButton } from "./ShareButton";

const SCROLL_THRESHOLD = 400;

export function MobileShareButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .mobile-share-btn { display: none; }
        @media (max-width: 700px) {
          .mobile-share-btn { display: inline-flex; }
        }
      `}</style>
      <ShareButton
        variant="fab"
        className="mobile-share-btn"
        style={{
          right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
          bottom: "calc(1.75rem + env(safe-area-inset-bottom, 0px))",
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
