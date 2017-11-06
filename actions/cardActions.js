export const ADD_CARD = 'ADD_CARD'

export function addCard ({title, card}) {
  return {
    type: ADD_CARD,
    title,
    card
  }
}
