import { CompareResult } from "./type";

export type CardRankType =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "T"
  | "J"
  | "Q"
  | "K";

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
];

export class CardRank {
  rank: CardRankType;

  constructor(rank: CardRankType) {
    this.rank = rank;
  }

  compare(other: CardRank): CompareResult {
    const thisIndex = CARD_RANK_SORTED.indexOf(this.rank);
    const otherIndex = CARD_RANK_SORTED.indexOf(other.rank);

    if (thisIndex > otherIndex) {
      return "strong";
    } else if (thisIndex === otherIndex) {
      return "same";
    } else {
      return "weak";
    }
  }
}
