export default function Home() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="container" style={{ paddingBlock: "var(--space-16) var(--space-10)" }}>
        <p className="label" style={{ color: "var(--accent)", marginBottom: "var(--space-6)" }}>
          Dom Dunnett
        </p>
        <h1 style={{ maxWidth: "15ch", marginBottom: "var(--space-6)" }}>
          I turn complexity into clarity — then ship it.
        </h1>
        <p style={{ fontSize: "var(--text-base)", maxWidth: "58ch", color: "var(--text-secondary)" }}>
          Senior PM on the frontier of AI-native product work. Hands-on — I build real things,
          test the real deal, and design the systems that help teams make better decisions faster.
        </p>
      </section>

      <hr className="divider" />

      {/* ── How I Work ───────────────────────────────────────────────────── */}
      <section className="container section">
        <p className="label" style={{ marginBottom: "var(--space-6)" }}>How I work</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "58ch" }}>
          <p style={{ color: "var(--text-primary)", lineHeight: "var(--leading-snug)" }}>
            Craft over volume. Systems over features.
          </p>
          <p style={{ color: "var(--text-primary)", lineHeight: "var(--leading-snug)" }}>
            I build real things and test the real deal — not manage from a distance.
          </p>
          <p style={{ color: "var(--text-primary)", lineHeight: "var(--leading-snug)" }}>
            AI as a genuine platform shift. Direct, adult-to-adult communication.
          </p>
          <p style={{ color: "var(--text-primary)", lineHeight: "var(--leading-snug)" }}>
            Sustainable ambition — exceptional work at a liveable pace.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section className="container section">
        <p className="label" style={{ marginBottom: "var(--space-6)" }}>Projects</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxWidth: "60ch" }}>
          <details>
            <summary>
              <span className="summary-icon">▸</span>
              <span className="summary-title">Should I Surf?</span>
              <span className="summary-meta">2025–present</span>
            </summary>
            <div className="expand-content">
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>
                Personalised surf forecast tool. Interprets raw conditions in the context of your
                spots, skill level, and session history. Built because forecast tools give you
                numbers — not decisions.
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)", marginBottom: "var(--space-3)" }}>
                React · Vercel · Claude AI · Open-Meteo · Supabase · PWA
              </p>
              <a
                href="https://should-i-surf.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)" }}
              >
                should-i-surf.vercel.app ↗
              </a>
            </div>
          </details>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section className="container section" style={{ paddingBottom: "var(--space-16)" }}>
        <p className="label" style={{ marginBottom: "var(--space-6)" }}>Get in touch</p>
        <p style={{ maxWidth: "48ch", marginBottom: "var(--space-6)", color: "var(--text-secondary)" }}>
          If something here resonates and you think there&apos;s a conversation worth having —
          I&apos;d like to hear about it.
        </p>
        <a
          href="https://linkedin.com/in/domdunnett"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-sm)",
            color: "var(--accent)",
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            transition: "color var(--duration-fast) var(--ease)"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ color: "var(--text-tertiary)" }}>→</span>
          linkedin.com/in/domdunnett
        </a>
      </section>

    </main>
  );
}
