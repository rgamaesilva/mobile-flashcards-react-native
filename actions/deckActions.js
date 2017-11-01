export const ADD_DECK = 'ADD_DECK'
export const GET_ALL_DECKS = 'GET_ALL_DECKS'

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function getAllDecks (decks) {
  return {
    type: GET_ALL_DECKS,
    decks
  }
}
