"use client";
import Link from "next/link";
import Image from "next/image";
import { bookMeta } from "@/lib/bookMetadata";
import { getBookCover } from "@/lib/bookCover";
import { useLang } from "@/app/context/LangContext";
import { isRtlLang, sectionHref } from "@/lib/languages";
import { usePageViewBeacon } from "@/app/hooks/usePageViewBeacon";

function WaveBackground() {
  return (
    <div className="wave-bg">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,160 C180,80 360,240 540,160 C720,80 900,240 1080,160 C1260,80 1350,200 1440,160 L1440,320 L0,320 Z" />
        <path d="M0,200 C200,120 400,280 600,200 C800,120 1000,280 1200,200 C1350,140 1400,220 1440,200 L1440,320 L0,320 Z" />
      </svg>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,120 C240,200 480,40 720,120 C960,200 1200,40 1440,120 L1440,320 L0,320 Z" />
      </svg>
    </div>
  );
}

export default function HomePageClient() {
  const { t, lang, chapters } = useLang();
  usePageViewBeacon("home", lang, "home");
  const book = t.book;
  const cover = getBookCover(lang);
  const webThemes = Object.values(chapters).filter((theme) => theme.listed);
  const introParagraphs = t.home.intro;
  const mobile = t.home.mobile;
  const direction = isRtlLang(lang) ? "rtl" : "ltr";
  const arrow = direction === "rtl" ? "←" : "→";

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* ─── Hero ─── */}
      <section
        className="home-hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          overflow: "hidden",
          padding: "calc(4.5rem - 1cm) 1.5rem 3rem",
        }}
      >
        <WaveBackground />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, var(--glow-radial) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="home-mobile-intro" lang={lang} dir={direction}>
          <div className="home-mobile-heading">
            <h1 className="home-mobile-title">{mobile.title}</h1>
            <Image
              className="home-mobile-cover"
              src={cover.src}
              alt={book.title.replace(/\n/g, " ")}
              width={84}
              height={112}
              sizes="84px"
            />
          </div>
          <p className="home-mobile-description">
            {mobile.description.split(/(\*\*.*?\*\*)/g).map((part, index) =>
              part.startsWith("**")
                ? <strong key={index}>{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
          <p className="home-mobile-language-hint">
            <em>{introParagraphs[1]}</em>
          </p>
          <nav className="home-mobile-actions" aria-label={mobile.title}>
            <Link
              className="home-mobile-action home-mobile-action-primary"
              href={sectionHref(lang, "chapters")}
            >
              <span>{mobile.lessons}</span><span aria-hidden="true">{arrow}</span>
            </Link>
            <Link className="home-mobile-action" href={sectionHref(lang, "exercises")}>
              <span>{mobile.exercises}</span><span aria-hidden="true">{arrow}</span>
            </Link>
            <Link className="home-mobile-action" href={sectionHref(lang, "quiz")}>
              <span>{mobile.quizzes}</span><span aria-hidden="true">{arrow}</span>
            </Link>
          </nav>
          <div className="home-mobile-details">
            {introParagraphs.slice(2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div
          className="home-hero-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 380px",
            gap: "5rem",
            alignItems: "center",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left: Text */}
          <div className="home-hero-text" style={{ marginTop: "calc(-0.5cm)" }}>
            <h1
              className="home-main-title animate-fade-up stagger-2 amber-glow"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.85rem, 4vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--text-bright)",
                marginTop: "calc(-1cm)",
                marginBottom: "1cm",
                whiteSpace: "pre-line",
              }}
            >
              {book.title}
            </h1>

            {book.subtitle.trim() ? (
              <p
                className="animate-fade-up stagger-3"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.1rem, 2.1vw, 1.55rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--amber-soft)",
                  marginBottom: "1rem",
                }}
              >
                {book.subtitle}
              </p>
            ) : null}

            <div className="home-desktop-introduction animate-fade-up stagger-4">
              <div className="home-intro-highlight">
                <p className="home-hero-description">{introParagraphs[0]}</p>
                <p className="home-hero-description"><em>{introParagraphs[1]}</em></p>
              </div>
              {introParagraphs.slice(2).map((paragraph, index) => (
                  <p key={index} className="home-hero-description">
                    {paragraph}
                  </p>
                ))}
            </div>

            <div
              className="animate-fade-up stagger-5"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "calc(-0.4cm)",
              }}
            >
              <Link
                href={sectionHref(lang, "chapters")}
                style={{
                  background: "var(--amber)",
                  color: "var(--bg-primary)",
                  padding: "0.9rem 2.2rem",
                  borderRadius: "2px",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "opacity 0.2s",
                }}
              >
                {t.home.readOnline}
              </Link>
              <Link
                href={sectionHref(lang, "about")}
                style={{
                  border: "1px solid var(--accent-border-lg)",
                  color: "var(--amber)",
                  padding: "0.9rem 2.2rem",
                  borderRadius: "2px",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                {t.home.aboutBook}
              </Link>
            </div>

          </div>

          {/* Right: Book cover */}
          <div
            className="home-cover-column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.9rem",
              width: "100%",
              maxWidth: "380px",
              marginTop: "3cm",
              transform: "translateY(-90px)",
            }}
          >
            <div
              className="animate-fade-up stagger-3"
              style={{
                position: "relative",
                marginTop: "0.5cm",
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "3px",
                overflow: "hidden",
                background: "var(--bg-card)",
                boxShadow:
                  "0 40px 100px rgba(40, 20, 5, 0.28), 0 0 0 1px var(--accent-border-md), inset 0 0 60px var(--accent-glow)",
              }}
            >
              <Image
                src={cover.src}
                alt={book.title}
                fill
                priority
                sizes="(max-width: 900px) 70vw, 380px"
                style={{
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "1rem",
                  right: "1rem",
                  bottom: "1rem",
                  textAlign: "center",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "#f8fafc",
                    textShadow: "0 1px 10px rgba(0,0,0,0.85), 0 0 1px rgba(0,0,0,0.9)",
                  }}
                >
                  {bookMeta.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapters preview ─── */}
      <section
        className="home-chapters-preview"
        style={{
          padding: "6rem 1.5rem",
          background: "var(--bg-secondary)",
          transition: "background 0.25s ease",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--amber)",
                marginBottom: "0.75rem",
              }}
            >
              {t.home.contentsLabel}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--text-heading)",
                lineHeight: 1.2,
              }}
            >
              {t.home.exploreTitle}
            </h2>
          </div>

          <div
            className="home-chapters-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {webThemes.map((theme) => (
              <Link
                key={theme.slug}
                href={sectionHref(lang, "chapters", theme.urlSlug)}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="chapter-card"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--accent-border-sm)",
                    borderRadius: "8px",
                    padding: "1.75rem",
                    cursor: "pointer",
                    height: "100%",
                    transition: "background 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "0.75rem",
                        color: "var(--amber)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t.home.themePrefix} {String(theme.number).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                      marginBottom: "0.4rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {theme.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                      fontSize: "0.875rem",
                      color: "var(--amber-soft)",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {theme.description}
                  </p>
                  <div
                    style={{
                      marginTop: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.775rem",
                      color: "var(--amber)",
                    }}
                  >
                    {t.home.readTheme}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
