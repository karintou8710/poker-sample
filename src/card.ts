import { CardMark } from "./cardMark";
import { CardRank } from "./cardRank";

export class Card {
  mark: CardMark;
  rank: CardRank;

  constructor(mark: CardMark, rank: CardRank) {
    this.mark = mark;
    this.rank = rank;
  }

  isEqual(other: Card) {
    return this.mark === other.mark && this.rank.compare(other.rank) === "same";
  }
}
