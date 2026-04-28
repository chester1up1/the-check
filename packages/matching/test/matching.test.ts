import { describe, expect, it } from "vitest";
import { normalizeText, scoreCandidate } from "../src/index";

describe("normalizeText", () => {
  it("removes common noise tokens and extra whitespace", () => {
    expect(normalizeText("  Song Title (Official Audio)  ")).toBe("song title");
  });

  it("normalizes featuring variants", () => {
    expect(normalizeText("Artist ft. Guest")).toBe("artist feat guest");
  });
});

describe("scoreCandidate", () => {
  it("prioritizes exact ISRC matches", () => {
    expect(
      scoreCandidate(
        {
          title: "song",
          artists: ["artist"],
          isrc: "USRC17607839"
        },
        {
          title: "different song",
          artists: ["different artist"],
          isrc: "USRC17607839"
        }
      )
    ).toBe(0.99);
  });
});
