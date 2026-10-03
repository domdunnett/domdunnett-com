# Ask Dom: browser-local spike

This branch builds on `ask-dom-mvp` (PR #3). It is an experiment for review, not a recommendation to ship the model by default.

## Behaviour and grounding

Public notes answer immediately. Eligible desktop visitors can opt into local AI; nothing is downloaded automatically. Questions, retrieved notes and generation stay inside the browser. There is no inference endpoint, API key, hosted GPU or usage charge. Model asset hosts still receive ordinary download requests, including IP/browser metadata.

`public/knowledge/dom.json` is the sole corpus for both providers. Its six records are copied from the MVP without adding facts, including no Wordsmith details. Source links open this published corpus. Keep this file public-safe: it is deliberately shipped to every visitor. No filesystem scan, private project files, GitHub credentials, embeddings service or scrape of the surrounding site is involved.

Lexical retrieval selects at most two records before inference. The system instruction requires the model to say it doesn't know when unsupported, forbids outside knowledge and treats the question as data. No matching evidence means an immediate unknown answer without inference.

The 360M instruct model generates a JSON selection of up to three evidence sentence IDs. The app rejects invalid JSON and IDs, renders the original sentences and derives citations from those same records. An empty selection produces the unknown answer. This deliberately extractive design prevents new factual claims and fabricated citations, but sacrifices fluent paraphrasing. It does **not** prove that a selected sentence fully answers a nuanced question. Tiny-model relevance and abstention still need a larger evaluation before production use. Ungrounded free-form generation is intentionally outside this spike.

The deterministic provider remains available during downloads. Failures, invalid output and slow generation revert to it and terminate the worker. Retrieval now matches whole tokens, reducing accidental substring matches; the original curated fallback answers are retained. Questions are limited to 500 characters. Loading has a 90-second deadline; generation has a 12-second deadline. These are product limits, not performance claims. Cancel stops the worker and prevents a late load from enabling AI.

## Model and download cost

- WebLLM pinned to `0.2.85`.
- `SmolLM2-360M-Instruct-q4f32_1-MLC`: four-bit weights, 32-bit computation; avoids requiring `shader-f16`.
- Weight revision pinned to `1e6b2ca3684e2bc8a6d39eb36e8d6cd51eb12bda`.
- Seven weight shards total **203,614,080 bytes** (204 MB decimal / 194 MiB), measured from the upstream tensor manifest.
- Compiled model WASM is **5,679,428 bytes**, plus tokenizer/config and the JS runtime. UI rounds the model download to approximately 210 MB.
- The runtime chunk measured approximately **5.8 MiB raw / 2.1 MB compressed transfer** in the production build. It is lazy-loaded on opt-in; the worker uses the same runtime chunk. Browser caching can avoid repeat transfers, but eviction, private browsing, quota and disk failures can force a reload or fallback.
- WebLLM's model record estimates **579.61 MB GPU memory** at its default context. This spike caps context at 2,048 tokens; actual memory, load time, battery use and speed vary by GPU/browser. No real-device memory benchmark is claimed.
- Only weights are revision-pinned. The upstream compiled library is selected by the pinned npm release under `v0_2_84/base`, but its URL uses upstream `main`; immutable library hosting/integrity checks are future hardening.

Sources: [WebLLM usage](https://webllm.mlc.ai/docs/user/basic_usage.html), [worker integration](https://webllm.mlc.ai/docs/user/advanced_usage.html), [model repository](https://huggingface.co/mlc-ai/SmolLM2-360M-Instruct-q4f32_1-MLC). The upstream SmolLM2 model is Apache-2.0; retain applicable licences when redistributing model assets.

## Compatibility

Feature detection is authoritative: a secure context with WebGPU is required, and the runtime must obtain a usable adapter. Desktop Chrome/Edge with working WebGPU are the main candidates; Safari/Firefox support depends on version, OS, hardware and runtime compatibility. A browser name alone is insufficient. GPU/device-loss, missing worker support, blocked hosts, storage errors and allocation failures all take the fallback path.

Mobile/iPad user agents, devices reporting less than 8 GB RAM or fewer than four logical cores, Save-Data and 2G connections use public notes without offering the download. These signals are incomplete: some browsers do not report memory or connection speed. A fast desktop can still fail; the worker, deadlines and visible switch back to notes remain necessary. iPhone emulation verifies responsive layout and the fallback policy, not actual iOS WebGPU performance. No mobile inference claim is made.

## Verification

Run `npm ci`, `npm test`, `npm run lint`, `npm run build`, then `npm start`.

- Seven automated tests cover retrieval/unknown questions, evidence validation, local citations, unsupported/mobile/data-saving devices, load error/timeout, generation error/timeout and cancellation with a late completion. Model responses in these tests are mocked; they verify control flow, not model quality.
- Production build passes and remains statically prerendered. Lint has no errors and retains one pre-existing image warning in `app/page.js`.
- Desktop Chromium: public-note answers/citations render, and the ordinary page makes no external requests. Optional runtime loads only after clicking Try local AI.
- iPhone 15 emulation: engineering answer/citation work, no horizontal overflow, no external/model requests and no AI-download button.
- The initial real-model load encountered a browser Cache API error on this low-disk machine. The UI recovered to notes without an error overlay; direct fetches of the runtime/config returned HTTP 200. This is a useful observed failure-path test, separate from automated mocks.

The inherited dependencies have npm audit findings, including a critical advisory against the existing Next.js version. The added WebLLM dependency did not appear in the audit findings. Framework/security upgrades belong in a separate reviewed change; this draft should not be merged without addressing inherited advisories and completing representative device/model-quality evaluation.

Before considering a merge, evaluate recruiter questions (including known company + unsupported salary/relationship/management details), adversarial questions, multiple topics, cold/warm loads, offline cache behaviour and slow hardware. Compare usefulness with the instant deterministic MVP: a ~210 MB download is a substantial price for this small corpus.
