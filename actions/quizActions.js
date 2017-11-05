export const QUIZ_CHANGE_CORRECT = 'QUIZ_CHANGE_CORRECT'
export const QUIZ_CHANGE_CARDCOUNT = 'QUIZ_CHANGE_CARDCOUNT'
export const QUIZ_CHANGE_SCORE = 'QUIZ_CHANGE_SCORE'
export const QUIZ_CHANGE_QUESTIONSTATE = 'QUIZ_CHANGE_QUESTIONSTATE'

export function quizChangeCorrect (correct) {
  return {
    type: QUIZ_CHANGE_CORRECT,
    correct,
  }
}

export function quizChangeCardCount (cardCount) {
  return {
    type: QUIZ_CHANGE_CARDCOUNT,
    cardCount,
  }
}

export function quizChangeScore (score) {
  return {
    type: QUIZ_CHANGE_SCORE,
    score,
  }
}

export function quizChangeQuestionState (questionState) {
  return {
    type: QUIZ_CHANGE_QUESTIONSTATE,
    questionState,
  }
}
