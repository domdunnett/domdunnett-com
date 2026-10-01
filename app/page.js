export default function Home() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="container" style={{ paddingBlock: "var(--space-16) var(--space-10)" }}>
        <p className="label" style={{ color: "var(--accent)", marginBottom: "var(--space-6)" }}>
          Dom Dunnett
        </p>
        <h1 style={{ maxWidth: "15ch", marginBottom: "var(--space-6)" }}>
          I turn complexity into clarity, then ship it.
        </h1>
        <p style={{ fontSize: "var(--text-base)", maxWidth: "58ch", color: "var(--text-secondary)", marginBottom: "var(--space-4)" }}>
          Product leader with a background in law and software engineering.
          I turn complicated problems into useful products, and still work close to the code.
        </p>
        <p style={{ fontSize: "var(--text-sm)", maxWidth: "52ch", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
          Based in Scotland, near enough to the sea that the surf forecast has become a side project.
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
            I build real things and test the real deal, rather than manage from a distance.
          </p>
          <p style={{ color: "var(--text-primary)", lineHeight: "var(--leading-snug)" }}>
            Direct, adult-to-adult communication. Small teams with real ownership.
          </p>
          <p style={{ color: "var(--text-primary)", lineHeight: "var(--leading-snug)" }}>
            Sustainable ambition. Exceptional work at a liveable pace.
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
              Building AI-powered legal technology. It&apos;s the first role where my background in law, engineering, and product are all in the same room.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Revolut</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>2024–2025</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)", marginBottom: "var(--space-2)" }}>Senior Product Manager</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-snug)" }}>
              Led onboarding for Revolut Business, improving conversion while reducing fraud and support demand.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Xendit</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>2019–2024</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)", marginBottom: "var(--space-2)" }}>PM → Senior PM → Product Lead</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-snug)" }}>
              Four years scaling payments infrastructure across Southeast Asia. Joined as an early PM hire and became Product Lead for Money-In, leading teams across five markets.
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
              Corporate law, advising startups and scale-ups. Quit in 2015 to retrain as a software engineer. That decision set the direction of everything since.
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
              <span className="sis-project-mark" aria-hidden="true">
                <img src="/should-i-surf-mark.svg" alt="" />
                <span className="sis-project-swell">
                  <svg className="sis-project-wave sis-project-wave-a" viewBox="0 0 336 10" aria-hidden="true">
                    <path d="M0 5 Q 14 1 28 5 T 56 5 T 84 5 T 112 5 T 140 5 T 168 5 T 196 5 T 224 5 T 252 5 T 280 5 T 308 5 T 336 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <svg className="sis-project-wave sis-project-wave-b" viewBox="0 0 336 10" aria-hidden="true">
                    <path d="M0 6 Q 18 3 36 6 T 72 6 T 108 6 T 144 6 T 180 6 T 216 6 T 252 6 T 288 6 T 324 6 T 336 6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
              <span className="summary-title">Should I Surf?</span>
              <span className="summary-meta">2025–present</span>
            </summary>
            <div className="expand-content">
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>
                A personalised surf forecasting app that learns where, when, and how you like to
                surf, then turns forecast data into a simple recommendation. Built because forecast
                tools give you numbers, not decisions. Currently building the native iOS app.
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)", marginBottom: "var(--space-3)" }}>
                iOS · AI · Open-Meteo · Supabase
              </p>
              <a
                href="https://shouldi.surf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--accent)" }}
              >
                shouldi.surf ↗
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
          I&apos;m always interested in thoughtful people building useful things.
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
