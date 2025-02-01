import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class StraightHand extends Hand {
  rank: CardRank;

  handRank = 4;
  type = "straight" as const;

  compare(other: Hand) {
    if (other instanceof StraightHand) {
      return this.rank.compare(other.rank);
    }

    return super.compare(other);
  }
}
