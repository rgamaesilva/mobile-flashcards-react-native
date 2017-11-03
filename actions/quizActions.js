export const QUIZ_CHANGE = 'QUIZ_CHANGE'

export function quizChange (correct, cardCount, score, questionState) {
  return {
    type: QUIZ_CHANGE,
    correct,
    cardCount,
    score,
    questionState
  }
}
