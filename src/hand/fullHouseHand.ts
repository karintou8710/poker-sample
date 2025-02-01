import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class FullHouseHand extends Hand {
  threeRank: CardRank;
  twoRank: CardRank;

  handRank = 6;
  type = "full-house" as const;

  compare(other: Hand) {
    if (other instanceof FullHouseHand) {
      const threeResult = this.threeRank.compare(other.threeRank);
      const twoResult = this.twoRank.compare(other.twoRank);

      if (threeResult !== "same") return threeResult;

      return twoResult;
    }

    return super.compare(other);
  }
}
