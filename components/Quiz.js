import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { quizChangeCorrect, quizChangeCardCount, quizChangeScore, quizChangeQuestionState } from '../actions/quizActions'
import { purple, white, gray, black, red, green } from '../utils/colors'

class Quiz extends Component {

  onChangeCard = (index) => {
    const { cardCount, correct } = this.props.quizControl
    const { deck, quizChangeScore, quizChangeCorrect, quizChangeCardCount } = this.props
    if(deck.questions.length >= cardCount) {
      const newCorrect = correct + index
      const newCardCount = cardCount + 1
      const newScore = Math.round((newCorrect/deck.questions.length)*100)
      console.log(newScore)
      quizChangeCorrect(newCorrect)
      quizChangeCardCount(newCardCount)
      quizChangeScore(newScore)
    } else {
      const finalScore = this.props.quizControl.score
      console.log(finalScore)
      Alert.alert(
        'FINAL SCORE',
        finalScore,
        [
          {text: 'OK', onPress: () => {
              console.log('OK Pressed!')
              quizChangeCorrect(0)
              quizChangeCardCount(1)
              quizChangeScore(0)
          }}
        ]
      )
    }
  }

  onChangeQuestionState = () => {
    const { questionState } = this.props.quizControl
    const { quizChangeQuestionState } = this.props
    if(questionState === 'question') {
      quizChangeQuestionState('answer')
    } else if(questionState === 'answer') {
      quizChangeQuestionState('question')
    }
  }

  render () {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View>
          <Text>
            {`${this.props.quizControl.cardCount}/${this.props.deck.questions.length}`}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.onChangeQuestionState}
          >
          <View style={styles.deck}>
            <Text style={styles.title}>
              {this.props.quizControl.questionState === 'question' ?
                 this.props.deck.questions[this.props.quizControl.cardCount-1].question
                 :
                 this.props.deck.questions[this.props.quizControl.cardCount-1].answer
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
