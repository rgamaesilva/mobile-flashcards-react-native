import {
  ADD_DECK,
} from '../actions/deckActions'

const initialState = {}

function decks (state = initialState, action) {
  const { title } = action
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [title]: { title, questions: [] }
      };
    default:
      return state
  }
}

export default decks;
