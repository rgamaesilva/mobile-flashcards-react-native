import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { quizChangeCorrect, quizChangeCardCount, quizChangeScore, quizChangeQuestionState } from '../actions/quizActions'
import { purple, white, gray, black, red, green } from '../utils/colors'

class Quiz extends Component {

  onChangeCard = (index) => {
    const { deck, quizChangeScore, quizChangeCorrect, quizChangeCardCount, quizControl } = this.props
    if(deck.questions.length >= quizControl.cardCount) {
      const newCorrect = quizControl.correct + index
      const newCardCount = quizControl.cardCount + 1
      const newScore = Math.round((newCorrect/deck.questions.length)*100)
      quizChangeCorrect(newCorrect)
      quizChangeCardCount(newCardCount)
      quizChangeScore(newScore)
    }
  }

  onRestartOrBackToDeck = (component) => {
    const { quizChangeScore, quizChangeCorrect, quizChangeCardCount, navigation, deck } = this.props
    quizChangeCorrect(0)
    quizChangeCardCount(1)
    quizChangeScore(0)
    navigation.dispatch(NavigationActions.navigate(
      {
        routeName: component,
        params: { title: deck.title }
      }
    ))
  }

  onChangeQuestionState = () => {
    const { quizChangeQuestionState, quizControl } = this.props
    if(quizControl.questionState === 'question') {
      quizChangeQuestionState('answer')
    } else if(quizControl.questionState === 'answer') {
      quizChangeQuestionState('question')
    }
  }

  render () {
    const { deck, quizControl } = this.props
    return (
      <View style={styles.container}>
        {deck.questions.length >= quizControl.cardCount ?
          <View  style={styles.container}>
            <View>
              <Text>
                {`${quizControl.cardCount}/${deck.questions.length}`}
              </Text>
            </View>
            <TouchableOpacity
              onPress={this.onChangeQuestionState}
              >
              <View style={styles.deck}>
                <Text style={styles.title}>
                  {quizControl.questionState === 'question' ?
                     deck.questions[quizControl.cardCount-1].question
                     :
                     deck.questions[quizControl.cardCount-1].answer
                   }
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.correctButton}
              onPress={() => this.onChangeCard(1)}
              >
              <Text>CORRECT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.incorrectButton}
              onPress={() => this.onChangeCard(0)}
              >
              <Text style={styles.textWhite}>INCORRECT</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={styles.container}>
            <Text style={styles.title}>{`YOU GUESSED ${quizControl.score}% OF THE QUESTIONS CORRECT !!`}</Text>
            <TouchableOpacity
              style={styles.correctButton}
              onPress={() => this.onRestartOrBackToDeck('Quiz')}
              >
              <Text style={styles.textWhite}>RESTART QUIZ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.incorrectButton}
              onPress={() => this.onRestartOrBackToDeck('Deck')}
              >
              <Text style={styles.textWhite}>BACK TO DECK</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    marginBottom: 50,
    borderRadius: 10,
    borderColor: red,
    borderWidth: 1,
    height: 200,
    width: 350,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10
  },
  cards: {
    fontSize: 20,
    color: gray,
    textAlign: 'center',
    margin: 25
  },
  correctButton: {
    borderRadius: 10,
    borderColor: black,
    borderWidth: 2,
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: green,
  },
  incorrectButton: {
    borderRadius: 10,
    borderColor: white,
    borderWidth: 2,
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: red,
  },
  textWhite: {
    color: white
  }
})

function mapStateToProps ({ decks, quizControl }, { navigation }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  const decksAsArrayFiltered = decksAsArray.filter((deck) => (deck.title === navigation.state.params.title))[0]
  return {
    deck: decksAsArrayFiltered,
    quizControl
  }
}

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    quizChangeCorrect: (data) => dispatch(quizChangeCorrect(data)),
    quizChangeScore: (data) => dispatch(quizChangeScore(data)),
    quizChangeQuestionState: (data) => dispatch(quizChangeQuestionState(data)),
    quizChangeCardCount: (data) => dispatch(quizChangeCardCount(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
