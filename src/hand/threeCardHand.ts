import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class ThreeCardHand extends Hand {
  threeRank: CardRank;
  leftRank1: CardRank;
  leftRank2: CardRank;

  handRank = 3;
  type = "three-card" as const;

  compare(other: Hand) {
    if (other instanceof ThreeCardHand) {
      const threeResult = this.threeRank.compare(other.threeRank);
      const left1Result = this.leftRank1.compare(other.leftRank1);
      const left2Result = this.leftRank2.compare(other.leftRank2);

      if (threeResult !== "same") return threeResult;
      if (left1Result !== "same") return left1Result;

      return left2Result;
    }

    return super.compare(other);
  }
}
