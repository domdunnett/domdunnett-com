"use client";

import { useState } from "react";
import { askDom } from "../lib/ask-dom/askDom";
import { suggestedQuestions } from "../lib/ask-dom/knowledge";

export default function AskDom() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(value) {
    const next = (value ?? question).trim();
    if (!next || loading) return;
    setQuestion(next);
    setLoading(true);
    setResult(null);
    const response = await askDom(next);
    setResult(response);
    setLoading(false);
  }

  return (
    <div className="ask-dom">
      <form className="ask-dom-input" onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <input
          aria-label="Ask about Dom's work"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask anything about my work..."
        />
        <button type="submit" aria-label="Ask" disabled={loading}>→</button>
      </form>

      {!result && !loading && (
        <div className="ask-dom-suggestions">
          <span>Try</span>
          {suggestedQuestions.map((item) => (
            <button key={item} type="button" onClick={() => submit(item)}>{item}</button>
          ))}
        </div>
      )}

      {loading && (
        <div className="ask-dom-answer ask-dom-thinking" aria-live="polite">
          <span className="ask-dom-pulse">~</span>
          <span>Looking through Dom&apos;s work…</span>
        </div>
      )}

      {result && (
        <div className="ask-dom-answer" aria-live="polite">
          <p>{result.answer}</p>
          {result.sources.length > 0 && (
            <div className="ask-dom-sources">
              <span>Source</span>
              {result.sources.map((source) => <span className="ask-dom-source" key={source}>{source}</span>)}
            </div>
          )}
          <button className="ask-dom-again" type="button" onClick={() => { setQuestion(""); setResult(null); }}>
            Ask something else
          </button>
        </div>
      )}
    </div>
  );
}
