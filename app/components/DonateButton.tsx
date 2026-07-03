/**
 * Hand-built equivalent of the Buy Me a Coffee widget button (bg #FFDD00, black outline/text,
 * Cookie font, coffee emoji, "Buy me a coffee" text — same params as the buymeacoffee.com embed).
 *
 * The official <script data-name="bmc-button"> embed renders via `document.writeln`, which only
 * works for scripts parsed synchronously in the initial HTML — browsers silently ignore it for
 * scripts inserted after the page has loaded (as happens in any React/Next.js app), so it never
 * appears here. This renders the same look directly as JSX instead.
 */
export function DonateButton() {
  return (
    <a
      href="https://www.buymeacoffee.com/physics.lessons"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        background: "#FFDD00",
        color: "#000000",
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "0.4rem 0.9rem",
        fontFamily: "'Cookie', cursive",
        fontSize: "1.15rem",
        lineHeight: 1,
        textDecoration: "none",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <span aria-hidden="true">☕</span>
      Buy me a coffee
    </a>
  );
}
