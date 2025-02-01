import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class OnePairHand extends Hand {
  pairRank: CardRank;
  leftRank1: CardRank;
  leftRank2: CardRank;
  leftRank3: CardRank;

  handRank = 1;
  type = "one-pair" as const;

  compare(other: Hand) {
    if (other instanceof OnePairHand) {
      const pairResult = this.pairRank.compare(other.pairRank);
      const left1Result = this.leftRank1.compare(other.leftRank1);
      const left2Result = this.leftRank2.compare(other.leftRank2);
      const left3Result = this.leftRank2.compare(other.leftRank3);

      if (pairResult !== "same") return pairResult;
      if (left1Result !== "same") return left1Result;
      if (left2Result !== "same") return left2Result;

      return left3Result;
    }

    return super.compare(other);
  }
}
