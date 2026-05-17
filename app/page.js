export default function Home() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="container" style={{ paddingBlock: "var(--space-32) var(--space-24)" }}>
        <p className="label" style={{ color: "var(--accent)", marginBottom: "var(--space-6)" }}>
          Dom Dunnett — Senior PM
        </p>
        <h1 style={{ maxWidth: "16ch", marginBottom: "var(--space-8)" }}>
          I turn complexity into clarity — then ship it.
        </h1>
        <p style={{ fontSize: "var(--text-lg)", maxWidth: "52ch", color: "var(--text-secondary)" }}>
          Senior product leader building AI-native products. Scotland-based.
          Increasingly close to the code.
        </p>
      </section>

      <hr className="divider" />

      {/* ── What I'm Looking For ─────────────────────────────────────────── */}
      <section className="container section">
        <p className="label" style={{ marginBottom: "var(--space-12)" }}>
          What I&apos;m Looking For
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)" }}>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>An AI-native senior PM role</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              I want to help shape both product direction and the future of how software gets built.
              AI as a genuine platform shift — not a feature layer.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>Environments where craft still matters</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              I do my best work when product, design and engineering are genuinely close.
              Speed matters — but so does quality. Direct, adult-to-adult communication.
              Leadership that trusts people.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>Sustainable ambition</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              I want to do exceptional work. I no longer believe burnout and permanent urgency
              are signs of a healthy company. The best work comes from people who have a life
              outside work.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>Scotland-based. Hybrid-open.</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              Based in Fife, near the coast. I enjoy being around strong teams in person.
              The key for me is flexibility — a career that works alongside family life and
              keeps me connected to the things that keep me grounded.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-12)", maxWidth: "65ch" }}>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-tertiary)", fontStyle: "italic" }}>
            I&apos;m also drawn to companies that care about sustainability, build products that
            genuinely improve people&apos;s lives, and attract thoughtful, grounded people.
            Compatibility with the kind of life I actually want to live matters.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section className="container section">
        <p className="label" style={{ marginBottom: "var(--space-12)" }}>Projects</p>
        <div style={{ display: "grid", gap: "var(--space-6)", maxWidth: "680px" }}>
          <div className="card">
            <p className="label" style={{ color: "var(--accent)", marginBottom: "var(--space-4)" }}>
              Active — 2025–present
            </p>
            <h3 style={{ marginBottom: "var(--space-4)" }}>Should I Surf?</h3>
            <p style={{ marginBottom: "var(--space-4)" }}>
              A personalised surf forecast tool that interprets raw conditions data in the
              context of your spots, skill level, and logged session history. Built because
              forecast tools give you numbers — not decisions.
            </p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-tertiary)" }}>
              React · Vercel · Claude AI · Open-Meteo · Supabase · PWA
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section className="container section" style={{ paddingBottom: "var(--space-32)" }}>
        <p className="label" style={{ marginBottom: "var(--space-6)" }}>Get in Touch</p>
        <h2 style={{ maxWidth: "18ch", marginBottom: "var(--space-6)" }}>
          Open to the right conversation.
        </h2>
        <p style={{ maxWidth: "48ch", marginBottom: "var(--space-8)" }}>
          If you&apos;re building something meaningful and think I might be a fit — I&apos;d like
          to hear about it.
        </p>
        <a
          href="https://linkedin.com/in/domdunnett"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </section>

    </main>
  );
}
