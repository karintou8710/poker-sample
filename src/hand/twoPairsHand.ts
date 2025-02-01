import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class TwoPairsHand extends Hand {
  highRank: CardRank;
  lowRank: CardRank;
  leftRank: CardRank;

  handRank = 2;
  type = "two-pairs" as const;

  compare(other: Hand) {
    if (other instanceof TwoPairsHand) {
      const highResult = this.highRank.compare(other.highRank);
      const lowResult = this.lowRank.compare(other.lowRank);
      const leftResult = this.leftRank.compare(other.leftRank);

      if (highResult !== "same") return highResult;
      if (lowResult !== "same") return lowResult;

      return leftResult;
    }

    return super.compare(other);
  }
}
