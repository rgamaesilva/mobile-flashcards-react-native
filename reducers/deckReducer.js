import {
  ADD_DECK,
  GET_ALL_DECKS,
  REMOVE_DECK
} from '../actions/deckActions'
import {
  ADD_CARD,
} from '../actions/cardActions'
import R from 'ramda'

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
    case REMOVE_DECK:
      return R.omit([title], state)
    default:
      return state
  }
}

export default decks
