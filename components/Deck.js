import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { purple, white, gray, black } from '../utils/colors'

class Deck extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.title}>{this.props.deck.title}</Text>
          <Text style={styles.cards}>{`${this.props.deck.questions.length} cards`}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.dispatch(NavigationActions.navigate(
            {
              routeName: 'NewQuestion',
              params: { title: this.props.deck.title }
            }
          ))}
          >
          <Text>ADD CARD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startQuiz}
          onPress={() => this.props.navigation.dispatch(NavigationActions.navigate(
            {
              routeName: 'Quiz',
              params: { title: this.props.deck.title }
            }
          ))}
          >
          <Text style={styles.textWhite}>START QUIZ</Text>
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
    marginBottom: 50
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },
  cards: {
    fontSize: 20,
    color: gray,
    textAlign: 'center',
    margin: 25
  },
  addButton: {
    borderRadius: 10,
    borderColor: black,
    borderWidth: 2,
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  startQuiz: {
    borderRadius: 10,
    borderColor: white,
    borderWidth: 2,
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black,
  },
  textWhite: {
    color: white
  }
})

function mapStateToProps ({ decks }, { navigation }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  const decksAsArrayFiltered = decksAsArray.filter((deck) => (deck.title === navigation.state.params.title))[0]
  return {
    deck: decksAsArrayFiltered,
  }
}

export default connect(mapStateToProps)(Deck);
