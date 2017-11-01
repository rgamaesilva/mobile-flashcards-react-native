import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { purple, white } from '../utils/colors'
import * as api from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../actions/cardActions'

class NewQuestion extends Component {
  state = {
    questionInput: '',
    answerInput: ''
  }

  onAddQuestion = () => {
    if(this.state.questionInput === "") {
      alert('Please type a Question')
      return
    } else if(this.state.answerInput === "") {
      alert('Please type an ANSWER')
    }
    const card = {question: this.state.questionInput, answer: this.state.answerInput}
    api.addApiCard(this.props.deck.title, card).then(() => {
      this.props.addCard(this.props.deck.title, card)
      this.props.navigation.goBack()
      this.setState({ questionInput: '', answerInput: ''})
    })
  }

  render () {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>ADD NEW CARD</Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.textInput}
          onChangeText={(text) => this.setState({ questionInput: text })}
          placeholder='Type the question here!'
        />
        <TextInput
          style={styles.input}
          value={this.state.textInput}
          onChangeText={(text) => this.setState({ answerInput: text })}
          placeholder='Type the answer here!'
        />
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
          onPress={this.onAddQuestion}
          >
          <Text style={styles.submitBtnText}>SUBMIT</Text>
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
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    margin: 10
  }
})

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    addCard: (data) => dispatch(addCard(data)),
  }
}

function mapStateToProps ({ decks }, { navigation }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  const decksAsArrayFiltered = decksAsArray.filter((deck) => (deck.title === navigation.state.params.title))[0]
  return {
    deck: decksAsArrayFiltered,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
