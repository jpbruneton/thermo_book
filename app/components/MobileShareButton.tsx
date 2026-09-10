"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/app/context/LangContext";

const SCROLL_THRESHOLD = 400;

export function MobileShareButton() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [justCopied, setJustCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleShare = async () => {
    const shareData = { title: document.title, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User dismissed the native share sheet — nothing to do.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — silently no-op rather than throw.
    }
  };

  return (
    <>
      <style>{`
        .mobile-share-btn { display: none; }
        @media (max-width: 700px) {
          .mobile-share-btn { display: flex; }
        }
      `}</style>
      <button
        type="button"
        onClick={handleShare}
        aria-label={t.share.label}
        className="mobile-share-btn"
        style={{
          position: "fixed",
          right: "1rem",
          bottom: "1.25rem",
          zIndex: 40,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--amber)",
          color: "#0a0b0f",
          border: "none",
          boxShadow: "0 4px 16px rgba(0,0,0,0.28)",
          cursor: "pointer",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.85)",
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {justCopied ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="18" cy="5" r="2.6" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="6" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="18" cy="19" r="2.6" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8.3 10.7l7.4-4.2M8.3 13.3l7.4 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </>
  );
}
