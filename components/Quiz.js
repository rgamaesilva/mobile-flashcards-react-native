import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { quizChange } from '../actions/quizActions'
import { purple, white, gray, black, red, green } from '../utils/colors'

class Quiz extends Component {

  onChangeCard = (index) => {
    const { cardCount, correct } = this.props.quizControl
    const { deck } = this.props
    if(deck.questions.length >= cardCount) {
      const newCorrect = correct + index
      const newCardCount = cardCount + 1
      const newScore = (correct/deck.questions.length)*100
      this.props.quizChange(newCorrect, newCardCount, newScore)
      console.log(this.state)
    }
    console.log('DONE')
    console.log(this.state)
  }

  onChangeQuestionState = () => {
    const { quizState } = this.props.quizControl
    if(questionState === 'question') {
      this.setState({ questionState: 'answer'})
    } else if(questionState === 'answer') {
      this.setState({ questionState: 'question'})
    }
    console.log(this.state)
  }

  render () {
    console.log(this.props)
    console.log(this.props.deck)
    console.log(this.props.deck.questions)
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View>
          <Text>
            {`${this.state.cardCount}/${this.props.deck.questions.length}`}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.onChangeQuestionState}
          >
          <View style={styles.deck}>
            <Text style={styles.title}>
              {this.state.questionState === 'question' ?
                 this.props.deck.questions[this.state.cardCount-1].question
                 :
                 this.props.deck.questions[this.state.cardCount-1].answer
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

function mapStateToProps ({ decks }, { navigation }, { quizControl }) {
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
    quizChange: (data) => dispatch(quizChange(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
