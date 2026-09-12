import { knowledgeBase } from "@/content/botKnowledge";

const FALLBACK =
  "I don't have a canned answer for that yet. Try asking about my current job, the 6-month roadmap, past projects, skills, or education. You can also check the Projects or About pages directly.";

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesWholePhrase(input: string, phrase: string): boolean {
  // Single words tolerate suffixes (award -> awards, awarded); multi-word
  // phrases require an exact boundary match to avoid prefix collisions
  // (e.g. "about you" must not match inside "about your").
  const hasSpace = phrase.includes(" ");
  const pattern = hasSpace
    ? new RegExp(`\\b${escapeRegExp(phrase)}\\b`)
    : new RegExp(`\\b${escapeRegExp(phrase)}`);
  return pattern.test(input);
}

export function findAnswer(question: string): string {
  const normalized = question.toLowerCase().trim();
  if (!normalized) return FALLBACK;

  let bestScore = 0;
  let bestAnswer = FALLBACK;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (matchesWholePhrase(normalized, keyword)) {
        score += keyword.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  return bestScore > 0 ? bestAnswer : FALLBACK;
}
