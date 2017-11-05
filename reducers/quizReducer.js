import {
  QUIZ_CHANGE_SCORE,
  QUIZ_CHANGE_CARDCOUNT,
  QUIZ_CHANGE_QUESTIONSTATE,
  QUIZ_CHANGE_CORRECT
} from '../actions/quizActions'

const initialState = {
  score: 0,
  cardCount: 1,
  correct: 0,
  questionState: 'question',
}

function quizControl (state = initialState, action) {
  const { score, cardCount, correct, questionState } = action
  switch (action.type) {
    case QUIZ_CHANGE_SCORE:
      return {
        ...state,
          score: score,
      }
    case QUIZ_CHANGE_CARDCOUNT:
      return {
        ...state,
          cardCount: cardCount,
      }
    case QUIZ_CHANGE_CORRECT:
      return {
        ...state,
          correct: correct,
      }
    case QUIZ_CHANGE_QUESTIONSTATE:
      return {
        ...state,
          questionState: questionState,
      }
    default:
      return state
  }
}

export default quizControl
