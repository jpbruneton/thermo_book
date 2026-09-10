"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useLang } from "@/app/context/LangContext";
import { ShareIcon } from "./ShareIcon";

interface ShareButtonProps {
  /** "fab" = round icon-only button (mobile floating button). "inline" = pill with label, used in page content. */
  variant: "fab" | "inline";
  style?: CSSProperties;
  className?: string;
}

function Badge({ bg, children }: { bg: string; children: ReactNode }) {
  return (
    <span
      style={{
        width: "26px",
        height: "26px",
        borderRadius: "50%",
        background: bg,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.72rem",
        fontWeight: 700,
        fontFamily: "var(--font-inter)",
        letterSpacing: "-0.02em",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

export function ShareButton({ variant, style, className }: ShareButtonProps) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [justCopied, setJustCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickAway = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [open]);

  // Native share sheet already lists X, WhatsApp, etc. on phones — only fall
  // back to our own menu where the Web Share API isn't available (desktop).
  const handleTriggerClick = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: document.title, url: window.location.href });
      } catch {
        // User dismissed the native share sheet — nothing to do.
      }
      return;
    }
    setOpen((o) => !o);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setJustCopied(true);
      setOpen(false);
      setTimeout(() => setJustCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — silently no-op rather than throw.
    }
  };

  const url = typeof window !== "undefined" ? window.location.href : "";
  const title = typeof document !== "undefined" ? document.title : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = [
    { name: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, badge: <Badge bg="#000000">X</Badge> },
    { name: "WhatsApp", href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, badge: <Badge bg="#25D366">W</Badge> },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, badge: <Badge bg="#1877F2">f</Badge> },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, badge: <Badge bg="#0A66C2">in</Badge> },
    { name: "Email", href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`, badge: <Badge bg="var(--text-dim)">@</Badge> },
  ];

  const menuRowStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.4rem 0.5rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontFamily: "var(--font-inter)",
    fontSize: "0.82rem",
    color: "var(--text-secondary)",
  };

  const menu = open && (
    <div
      style={{
        position: "absolute",
        ...(variant === "fab" ? { bottom: "calc(100% + 0.6rem)", right: 0 } : { top: "calc(100% + 0.5rem)", left: 0 }),
        zIndex: 60,
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        padding: "0.4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.1rem",
        minWidth: "190px",
      }}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={menuRowStyle}
        >
          {link.badge}
          {link.name}
        </a>
      ))}
      <button type="button" onClick={copyLink} style={{ ...menuRowStyle, border: "none", background: "transparent", textAlign: "left", cursor: "pointer" }}>
        <Badge bg="var(--text-dim)">🔗</Badge>
        {t.share.copyLink}
      </button>
    </div>
  );

  if (variant === "fab") {
    return (
      <div ref={containerRef} className={className} style={{ position: "fixed", ...style }}>
        {menu}
        <button
          type="button"
          onClick={handleTriggerClick}
          aria-label={t.share.label}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "color-mix(in srgb, var(--amber-soft) 55%, transparent)",
            backdropFilter: "blur(6px)",
            color: "#0a0b0f",
            border: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          <ShareIcon checked={justCopied} size={22} />
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} style={{ position: "relative", display: "inline-block", ...style }}>
      <button
        type="button"
        onClick={handleTriggerClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "transparent",
          border: "1px solid var(--accent-border-sm)",
          borderRadius: "100px",
          padding: "0.3rem 0.9rem",
          color: "var(--amber-soft)",
          fontFamily: "var(--font-inter)",
          fontSize: "0.78rem",
          cursor: "pointer",
        }}
      >
        <ShareIcon checked={justCopied} size={15} />
        {justCopied ? t.share.copied : t.share.label}
      </button>
      {menu}
    </div>
  );
}
