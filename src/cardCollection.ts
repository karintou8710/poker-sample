import { Card } from "./card";

export class CardCollection {
  cards: Card[];

  constructor(...cards: Card[]) {
    cards.forEach((c) => this.add(c));
  }

  add(card: Card) {
    if (this.cards.find((c) => c.isEqual(card))) {
      throw new Error("同じカードを含んでいます");
    }

    this.cards.push(card);
  }
}
