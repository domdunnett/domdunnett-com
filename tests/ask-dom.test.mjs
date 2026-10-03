import { test } from 'node:test';
import assert from 'node:assert/strict';
import knowledge from '../public/knowledge/dom.json' with { type: 'json' };
import { retrieve, evidenceFor, groundedResult, localEligibility, UNKNOWN } from '../lib/ask-dom/grounding.mjs';
import { createLocalProvider } from '../lib/ask-dom/localProvider.mjs';

const nav = { gpu: {}, userAgent: 'Desktop', deviceMemory: 8, hardwareConcurrency: 8 };
const fallback = async () => ({ answer: 'Public fallback', sources: ['Public notes'] });
function setup(loadModel, extra = {}) {
  const statuses = [];
  const provider = createLocalProvider({ knowledge, fallback, loadModel, nav, secure: true, onStatus: (value) => statuses.push(value), ...extra });
  return { provider, statuses };
}
test('retrieval covers suggested questions without retrieving unknown personal facts', () => {
  assert.equal(retrieve('What did Dom actually do at Xendit?', knowledge)[0].id, 'xendit');
  assert.equal(retrieve('Can Dom actually code?', knowledge)[0].id, 'engineering');
  assert.equal(retrieve('Why did he stop being a lawyer?', knowledge)[0].id, 'career-change');
  assert.deepEqual(retrieve('Does Dom know Tom?', knowledge), []);
  assert.deepEqual(retrieve('What is his salary?', knowledge), []);
  assert.deepEqual(retrieve('What is he doing at Wordsmith?', knowledge), []);
});
test('model cannot add facts or citations outside retrieved evidence', () => {
  const evidence = evidenceFor(retrieve('xendit', knowledge));
  assert.equal(groundedResult('{"sentences":["xendit:0"]}', evidence).answer, evidence[0].text);
  assert.throws(() => groundedResult('{"sentences":["salary:0"]}', evidence));
  assert.throws(() => groundedResult('Dom earns £100000', evidence));
  assert.deepEqual(groundedResult('{"sentences":[]}', evidence), UNKNOWN);
});
test('unsupported/mobile/slow/data-saving devices never download a model', async () => {
  for (const unsupported of [{}, { ...nav, userAgent: 'iPhone' }, { ...nav, platform: 'MacIntel', maxTouchPoints: 5 }, { ...nav, deviceMemory: 4 }, { ...nav, connection: { saveData: true } }]) {
    const { provider } = setup(() => assert.fail('No model should load'), { nav: unsupported });
    await provider.enable();
    assert.equal((await provider.ask('xendit')).provider, 'notes');
  }
});
test('load error and timeout gracefully fall back', async () => {
  for (const load of [async () => { throw new Error('network'); }, () => new Promise(() => {})]) {
    const { provider, statuses } = setup(load, { loadTimeout: 5 });
    await provider.enable();
    assert.equal(statuses.at(-1).state, 'off');
    assert.equal((await provider.ask('xendit')).answer, 'Public fallback');
  }
});
test('valid local generation retains citations; unknown skips inference', async () => {
  let calls = 0;
  const { provider } = setup(async () => ({ chat: { completions: { create: async () => { calls++; return { choices: [{ message: { content: '{"sentences":["xendit:0"]}' } }] }; } } } }));
  await provider.enable();
  const result = await provider.ask('xendit');
  assert.equal(result.provider, 'local');
  assert.deepEqual(result.sources, [knowledge[0].source]);
  assert.equal((await provider.ask('salary')).answer, UNKNOWN.answer);
  assert.equal(calls, 1);
});
test('generation timeout, malformed output and lost GPU use fallback and stop the worker', async () => {
  for (const create of [() => new Promise(() => {}), async () => ({ choices: [{ message: { content: 'invented answer' } }] }), async () => { throw new Error('device lost'); }]) {
    let stopped = false;
    const { provider } = setup(async (_, worker) => { worker({ terminate() { stopped = true; } }); return { chat: { completions: { create } } }; }, { answerTimeout: 5 });
    await provider.enable();
    assert.equal((await provider.ask('xendit')).provider, 'notes');
    assert.equal(stopped, true);
  }
});
test('cancellation prevents a late load from enabling local AI', async () => {
  let complete;
  let stopped = false;
  const { provider, statuses } = setup((_, onWorker) => { onWorker({ terminate() { stopped = true; } }); return new Promise((resolve) => { complete = resolve; }); });
  const pending = provider.enable();
  provider.stop();
  complete({ chat: {} });
  await pending;
  assert.equal(stopped, true);
  assert.equal(statuses.at(-1).state, 'off');
  assert.equal((await provider.ask('xendit')).provider, 'notes');
});
