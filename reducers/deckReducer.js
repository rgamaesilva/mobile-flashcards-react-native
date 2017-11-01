import {
  ADD_DECK,
  GET_ALL_DECKS,
} from '../actions/deckActions'
import {
  ADD_CARD,
} from '../actions/cardActions'

const initialState = {}

function decks (state = initialState, action) {
  const { title, decks, card } = action
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [title]: { title, questions: [] }
      }
    case GET_ALL_DECKS:
      return decks
    case ADD_CARD:
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat(card)
        }
      }
    default:
      return state
  }
}

export default decks
