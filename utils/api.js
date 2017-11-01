import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'Flashcards:deck'

export function getAllDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function addApiDeck(title) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: { title, questions: [] }
  }))
}

export function addApiCard (title, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      const newDecks = {
        ...decks,
        [title]: {
          ...decks[title],
          questions: decks[title].questions.concat(card)
        }
      }
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(newDecks))
    })
}

//export const CALENDAR_STORAGE_KEY = 'UdaciFitness:calendar'
//
// {
//   React: {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }
//
// getDecks
// getDeck (id)
// saveDeckTitle (title)
// addCardToDeck (title, card)
//
// import { AsyncStorage } from 'react-native'
// import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'
//
// export function fetchCalendarResults () {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then(formatCalendarResults)
// }
//
// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }
//
// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }
