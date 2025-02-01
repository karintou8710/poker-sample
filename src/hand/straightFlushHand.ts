import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class StraightFlushHand extends Hand {
  rank: CardRank;

  handRank = 8;
  type = "straight-flush" as const;

  compare(other: Hand) {
    if (other instanceof StraightFlushHand) {
      return this.rank.compare(other.rank);
    }

    return super.compare(other);
  }
}
