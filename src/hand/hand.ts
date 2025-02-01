import { CompareResult } from "../type";

export type StraightFlushHandType = "straight-flush";
export type FourCardHandType = "four-card";
export type FullHouseHandType = "full-house";
export type FlushHandType = "flush";
export type StraightHandType = "straight";
export type ThreeCardHandType = "three-card";
export type TwoPairsHandType = "two-pairs";
export type OnePairHandType = "one-pair";
export type HighCardHandType = "high-card";
export type HandType =
  | StraightFlushHandType
  | FourCardHandType
  | FullHouseHandType
  | FlushHandType
  | StraightHandType
  | ThreeCardHandType
  | TwoPairsHandType
  | OnePairHandType
  | HighCardHandType;
export type HandRank = number;

export class Hand {
  type: HandType;
  handRank: HandRank;

  compare(other: Hand): CompareResult {
    if (this.handRank > other.handRank) {
      return "strong";
    } else if (this.handRank === other.handRank) {
      return "same";
    } else {
      return "weak";
    }
  }
}
