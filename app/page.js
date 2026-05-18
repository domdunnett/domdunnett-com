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
        <p style={{ fontSize: "var(--text-base)", maxWidth: "58ch", color: "var(--text-secondary)", marginBottom: "var(--space-4)" }}>
          Product Manager building AI-native tools and systems for real-world work.
          Engineer by training — I work close to the code and test the real thing.
        </p>
        <p style={{ fontSize: "var(--text-sm)", maxWidth: "52ch", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
          Based in Scotland — near enough to the sea that the surf forecast has become a side project.
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

      {/* ── Career ───────────────────────────────────────────────────────── */}
      <section className="container section">
        <p className="label" style={{ marginBottom: "var(--space-6)" }}>Career</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: "58ch" }}>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Wordsmith AI</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>2025–present</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)", marginBottom: "var(--space-2)" }}>Product Manager</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-snug)" }}>
              First product hire. Building AI-powered legal tooling — the first role where my background in law, engineering, and product are all in the same room.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Revolut</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>2024–2025</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)", marginBottom: "var(--space-2)" }}>Senior Product Manager</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-snug)" }}>
              Senior PM across consumer fintech at one of Europe&apos;s largest financial apps.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Xendit</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>2019–2024</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)", marginBottom: "var(--space-2)" }}>PM → Senior PM → Product Lead</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-snug)" }}>
              Four years scaling payments infrastructure across Southeast Asia. Joined as an early PM hire, left as Product Lead for Money-In across the region.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Skyscanner</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>2015–2019</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)", marginBottom: "var(--space-2)" }}>Software Engineer → Product Manager</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-snug)" }}>
              Started as a software engineer, transitioned into product. The engineering background I still rely on every day.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>MBM Commercial LLP</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>2011–2015</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)", marginBottom: "var(--space-2)" }}>Solicitor</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-snug)" }}>
              Corporate law, advising startups and scale-ups. Quit in 2015 to retrain as a software engineer — the decision that set the direction of everything since.
            </p>
          </div>

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
