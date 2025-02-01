import { expect, test } from "vitest";
import { CardRank } from "./cardRank";
import { CompareResult } from "./type";

const CARD_RANK_SORTED = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
] as const;

test("CardRankの比較が全パターン正しい", () => {
  const cardRanks = CARD_RANK_SORTED.map((r) => new CardRank(r));

  for (let i = 0; i < cardRanks.length; i++) {
    for (let j = 0; j < cardRanks.length; j++) {
      const expectedResult: CompareResult =
        i > j ? "strong" : i === j ? "same" : "weak";

      expect(cardRanks[i].compare(cardRanks[j])).toBe(expectedResult);
    }
  }
});
