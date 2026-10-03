import { askDomKnowledge } from "./knowledge";
import { UNKNOWN, retrieve } from "./grounding.mjs";

export async function askDom(question) {
  const [item] = retrieve(question, askDomKnowledge);
  return item ? { answer: item.answer, sources: [item.source] } : UNKNOWN;
}
