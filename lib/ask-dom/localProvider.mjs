import { UNKNOWN, retrieve, evidenceFor, messagesFor, groundedResult, localEligibility } from './grounding.mjs';

export function deadline(promise, ms) {
  let timer;
  return Promise.race([promise, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Local AI timed out')), ms); })]).finally(() => clearTimeout(timer));
}

// One instance per mounted UI. Terminating the worker also stops downloads/generation.
export function createLocalProvider({ knowledge, fallback, loadModel, nav, secure, onStatus, loadTimeout = 90000, answerTimeout = 12000 }) {
  let engine;
  let worker;
  let loading = false;
  let generation = 0;
  let disposed = false;
  const status = (value) => { if (!disposed) onStatus(value); };
  function stop(message = 'Using public notes. Local AI is switched off.') {
    generation++;
    worker?.terminate();
    worker = null;
    engine = null;
    loading = false;
    status({ state: 'off', message });
  }
  async function enable() {
    if (loading || engine || disposed) return;
    const unavailable = localEligibility(nav, secure);
    if (unavailable) { status({ state: 'off', message: unavailable }); return; }
    const current = ++generation;
    loading = true;
    status({ state: 'loading', progress: 0, message: 'Preparing local AI…' });
    try {
      const loaded = await deadline(loadModel((report) => {
        if (current === generation) status({ state: 'loading', progress: Math.max(0, Math.min(1, report.progress)), message: 'Downloading and preparing local AI…' });
      }, (nextWorker) => {
        if (current !== generation) nextWorker.terminate();
        else worker = nextWorker;
      }), loadTimeout);
      if (current !== generation) return;
      engine = loaded;
      loading = false;
      status({ state: 'ready', message: 'Local AI ready · answers stay in this browser.' });
    } catch (error) {
      console.warn('Local AI could not load:', error instanceof Error ? error.message : String(error));
      if (current === generation) stop('Local AI could not load. Public notes are ready to use.');
    }
  }
  async function ask(question) {
    const records = retrieve(question, knowledge);
    if (!records.length) return { ...UNKNOWN, provider: 'notes' };
    if (!engine) return { ...await fallback(question), provider: 'notes' };
    const evidence = evidenceFor(records);
    try {
      const reply = await deadline(engine.chat.completions.create({
        messages: messagesFor(question, evidence), temperature: 0, max_tokens: 96,
        response_format: { type: 'json_object' },
      }), answerTimeout);
      return { ...groundedResult(reply.choices[0].message.content, evidence), provider: 'local' };
    } catch {
      stop('Local AI hit a snag. Using public notes instead.');
      return { ...await fallback(question), provider: 'notes' };
    }
  }
  return { enable, ask, stop, dispose() { stop(); disposed = true; } };
}
