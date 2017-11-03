import {
  QUIZ_CHANGE
} from '../actions/quizActions'

const initialState = {
  correct: 0,
  cardCount: 1,
  score: 0,
  questionState: 'question'
}

function quizControl (state = initialState, action) {
  const { correct, cardCount, score, questionState } = action
  switch (action.type) {
    case QUIZ_CHANGE:
      return {
        ...state,
        correct: correct,
        cardCount: cardCount,
        score: score,
        questionState: questionState,
      }
    default:
      return state
  }
}

export default quizControl
