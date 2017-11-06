export const ADD_CARD = 'ADD_CARD'

export function addCard ({title, card}) {
  console.log(card)
  console.log('action')
  return {
    type: ADD_CARD,
    title,
    card
  }
}
