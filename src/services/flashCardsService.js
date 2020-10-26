export const flashCards = [
  { id: "12436586952", term: "Hello", meaning: "مرحبا", categoryId: "0"},
];

export function getFlashCards() {
  return flashCards;
}
export function saveCard(card, categoryId) {
  let cardDb = flashCards.find((fc) => fc.id === card.id) || {};
  cardDb.term = card.term;
  cardDb.meaning = card.meaning;
  cardDb.categoryId = categoryId;
  if (!card.id) {
    cardDb.id = Date.now().toString();
    flashCards.push(cardDb);
  }
  return cardDb;
}
