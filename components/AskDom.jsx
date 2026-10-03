"use client";

import { useEffect, useRef, useState } from "react";
import { askDom } from "../lib/ask-dom/askDom";
import { askDomKnowledge, suggestedQuestions } from "../lib/ask-dom/knowledge";

import { createLocalProvider } from "../lib/ask-dom/localProvider.mjs";
import { localEligibility } from "../lib/ask-dom/grounding.mjs";

export default function AskDom() {
  const provider = useRef(null);
  const busy = useRef(false);
  const [model, setModel] = useState({ state: "off", message: "Public notes · optional local AI" });
  const [eligible, setEligible] = useState(false);
  useEffect(() => {
    const unavailable = localEligibility(navigator, window.isSecureContext);
    const capabilityCheck = setTimeout(() => {
      setEligible(!unavailable);
      if (unavailable) setModel({ state: "off", message: unavailable });
    }, 0);
    provider.current = createLocalProvider({
      knowledge: askDomKnowledge, fallback: askDom, nav: navigator, secure: window.isSecureContext,
      onStatus: setModel,
      loadModel: async (...args) => (await import("../lib/ask-dom/browserModel")).createBrowserModel(...args),
    });
    return () => { clearTimeout(capabilityCheck); provider.current?.dispose(); provider.current = null; };
  }, []);
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(value) {
    const next = (value ?? question).trim();
    if (!next || busy.current || !provider.current) return;
    busy.current = true;
    setQuestion(next);
    setLoading(true);
    setResult(null);
    try {
      const response = await provider.current.ask(next.slice(0, 500));
      setResult(response);
    } finally {
      busy.current = false;
      setLoading(false);
    }
  }

  return (
    <div className="ask-dom">
      <div className="ask-dom-model">
        <span role="status">{model.message}</span>
        {eligible && model.state === "off" && <button type="button" disabled={loading} onClick={() => provider.current?.enable()}>Try local AI</button>}
        {model.state !== "off" && <button type="button" disabled={loading} onClick={() => provider.current?.stop()}>Use public notes</button>}
        {eligible && model.state === "off" && <small>Optional ~210 MB download. Runs here; model files come from Hugging Face and MLC.</small>}
        {model.state === "loading" && <progress aria-label="Local AI preparation" value={model.progress} max="1" />}
      </div>
      <form className="ask-dom-input" onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <input
          aria-label="Ask about Dom's work"
          maxLength={500}
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
          <span className="ask-dom-provider">{result.provider === "local" ? "Local AI · checked against public notes" : "From public notes"}</span>
          {result.sources.length > 0 && (
            <div className="ask-dom-sources">
              <span>Source</span>
              {result.sources.map((source) => <a className="ask-dom-source" href="/knowledge/dom.json" key={source}>{source}</a>)}
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
