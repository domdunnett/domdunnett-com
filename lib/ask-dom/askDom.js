import { askDomKnowledge } from "./knowledge";

const UNKNOWN = {
  answer: "I don't have enough public information to answer that confidently. That's probably one to ask Dom directly.",
  sources: []
};

export async function askDom(question) {
  const terms = question.toLowerCase().match(/[a-z0-9-]+/g) || [];

  const ranked = askDomKnowledge
    .map((item) => ({
      item,
      score: item.tags.reduce((score, tag) => score + (question.toLowerCase().includes(tag) ? 3 : terms.includes(tag) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score);

  await new Promise((resolve) => setTimeout(resolve, 650));

  if (!ranked[0] || ranked[0].score === 0) return UNKNOWN;

  return {
    answer: ranked[0].item.answer,
    sources: [ranked[0].item.source]
  };
}
