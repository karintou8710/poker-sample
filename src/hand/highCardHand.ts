import { Hand } from "./hand";
import { CardRank } from "../cardRank";

export class HighCardHand extends Hand {
  rank1: CardRank;
  rank2: CardRank;
  rank3: CardRank;
  rank4: CardRank;
  rank5: CardRank;

  handRank = 0;
  type = "high-card" as const;

  compare(other: Hand) {
    if (other instanceof HighCardHand) {
      const rank1Result = this.rank1.compare(other.rank1);
      const rank2Result = this.rank2.compare(other.rank2);
      const rank3Result = this.rank3.compare(other.rank3);
      const rank4Result = this.rank4.compare(other.rank4);
      const rank5Result = this.rank5.compare(other.rank5);

      if (rank1Result !== "same") return rank1Result;
      if (rank2Result !== "same") return rank2Result;
      if (rank3Result !== "same") return rank3Result;
      if (rank4Result !== "same") return rank4Result;

      return rank5Result;
    }

    return super.compare(other);
  }
}
