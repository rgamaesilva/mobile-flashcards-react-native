import {
  ADD_DECK,
  GET_ALL_DECKS,
} from '../actions/deckActions'

const initialState = {}

function decks (state = initialState, action) {
  const { title, decks } = action
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [title]: { title, questions: [] }
      }
    case GET_ALL_DECKS:
      return decks
    default:
      return state
  }
}

export default decks;
