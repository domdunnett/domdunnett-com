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

      {/* ── How I Work ───────────────────────────────────────────────────── */}
      <section className="container section">
        <p className="label" style={{ marginBottom: "var(--space-12)" }}>
          How I Work
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)" }}>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>AI as a platform shift, not a feature layer</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              I treat AI as a genuine shift in how software gets built — not a trend to bolt
              onto existing products. I stay close to the work: code, systems, evaluation.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>Craft still matters</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              I do my best work when product, design and engineering are genuinely close.
              Speed matters — but so does quality. I care about directness, clarity, and
              communication that treats people as adults.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>Systems thinking over isolated features</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              I connect strategy to execution. I prototype quickly. I bridge technical and
              non-technical worlds. I bring clarity to ambiguity — and I build things to
              prove ideas rather than just describe them.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginBottom: "var(--space-3)" }}>Sustainable ambition</h4>
            <p style={{ fontSize: "var(--text-sm)" }}>
              Exceptional work doesn&apos;t require burnout or permanent urgency. I believe the
              best work comes from people who have a life outside work — and I try to be
              one of those people.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-12)", maxWidth: "65ch" }}>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-tertiary)", fontStyle: "italic" }}>
            Based in Fife, near the Scottish coast. I surf, I build things, I spend time with
            my family. These aren&apos;t distractions from the work — they&apos;re what makes the
            work good.
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
          If something here resonates and you think there&apos;s a conversation worth having —
          I&apos;d like to hear about it.
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
