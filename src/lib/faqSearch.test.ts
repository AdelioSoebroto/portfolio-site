import { describe, expect, it } from "vitest";
import { findAnswer } from "./faqSearch";

describe("findAnswer", () => {
  it("matches a direct keyword", () => {
    expect(findAnswer("what do you do at telkomsel")).toContain("IT Tower");
  });

  it("matches suggested-question phrasing exactly", () => {
    expect(findAnswer("What awards have you won?")).toContain("MyoScope Alert");
  });

  it("tolerates plural forms of single-word keywords", () => {
    // Regression test: "award" must still match inside "awards".
    expect(findAnswer("tell me about your awards")).toContain("MyoScope Alert");
  });

  it("does not false-match a multi-word keyword as a substring of another word", () => {
    // Regression test: "about you" (an "identity" keyword) must not match
    // inside "about your" — this query has no real keyword hits and
    // should fall back rather than wrongly answering "who are you".
    const answer = findAnswer("what about your experience with SAP");
    expect(answer).toContain("don't have a canned answer");
  });

  it("matches natural phrasing for the roadmap", () => {
    expect(findAnswer("what projects are you building")).toContain("roadmap");
  });

  it("recognizes meta questions about the bot itself", () => {
    expect(findAnswer("are you a real AI or chatgpt?")).toContain("rule-based");
  });

  it("falls back gracefully on unrelated questions", () => {
    expect(findAnswer("what is the weather in tokyo")).toContain(
      "don't have a canned answer"
    );
  });

  it("falls back on empty input", () => {
    expect(findAnswer("")).toContain("don't have a canned answer");
    expect(findAnswer("   ")).toContain("don't have a canned answer");
  });

  it("is case-insensitive", () => {
    expect(findAnswer("WHAT ARE YOUR SKILLS")).toContain("Next.js");
  });
});
