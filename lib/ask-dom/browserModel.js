import { CreateWebWorkerMLCEngine, prebuiltAppConfig } from '@mlc-ai/web-llm';

// q4f32 avoids requiring the optional shader-f16 GPU feature.
export const MODEL_ID = 'SmolLM2-360M-Instruct-q4f32_1-MLC';
export async function createBrowserModel(onProgress, onWorker) {
  const worker = new Worker(new URL('./model.worker.js', import.meta.url), { type: 'module' });
  onWorker(worker);
  const record = prebuiltAppConfig.model_list.find((item) => item.model_id === MODEL_ID);
  const appConfig = { ...prebuiltAppConfig, model_list: [{ ...record, model: `${record.model}/resolve/1e6b2ca3684e2bc8a6d39eb36e8d6cd51eb12bda/` }] };
  return CreateWebWorkerMLCEngine(worker, MODEL_ID, { initProgressCallback: onProgress, appConfig }, {
    context_window_size: 2048,
  });
}
