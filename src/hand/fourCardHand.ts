import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class FourCardHand extends Hand {
  fourRank: CardRank;
  leftRank: CardRank;

  handRank = 7;
  type = "four-card" as const;

  compare(other: Hand) {
    if (other instanceof FourCardHand) {
      const fourResult = this.fourRank.compare(other.fourRank);
      const leftResult = this.leftRank.compare(other.leftRank);

      if (fourResult !== "same") return fourResult;

      return leftResult;
    }

    return super.compare(other);
  }
}
