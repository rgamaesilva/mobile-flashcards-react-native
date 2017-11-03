import { combineReducers } from 'redux'
import decks from './deckReducer'
import quizControl from './quizReducer'

export default combineReducers({
  decks,
  quizControl
})
