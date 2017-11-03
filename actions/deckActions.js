export const ADD_DECK = 'ADD_DECK'
export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'

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

export function removeDeck (title) {
  return {
    type: REMOVE_DECK,
    title
  }
}
