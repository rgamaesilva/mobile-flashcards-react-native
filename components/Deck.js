import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as api from '../utils/api'
import { purple, white, gray, black, red } from '../utils/colors'
import { removeDeck } from '../actions/deckActions'

class Deck extends Component {

  onRemoveDeck = () => {
    const { deck, removeDeck, navigation } = this.props
    api.removeDeck(deck.title).then(() => {
      removeDeck(deck.title)
    })
    navigation.dispatch(NavigationActions.navigate(
      {
        routeName: 'DecksList',
      }
    ))
  }

  render () {

    const { deck, navigation } = this.props
    return (
      <View style={styles.container}>
        {deck &&
          <View style={styles.container}>
            <View style={styles.deck}>
              <Text style={styles.title}>{deck.title}</Text>
              <Text style={styles.cards}>{`${deck.questions.length} cards`}</Text>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.dispatch(NavigationActions.navigate(
                {
                  routeName: 'NewQuestion',
                  params: { title: deck.title }
                }
              ))}
              >
              <Text>ADD CARD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startQuiz}
              onPress={() => navigation.dispatch(NavigationActions.navigate(
                {
                  routeName: 'Quiz',
                  params: { title: deck.title }
                }
              ))}
              >
              <Text style={styles.textWhite}>START QUIZ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={this.onRemoveDeck}
              >
              <Text>DELETE DECK</Text>
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
  },
  deleteButton: {
    borderRadius: 10,
    borderColor: black,
    borderWidth: 2,
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: red
  }
})

function mapStateToProps ({ decks } = {}, { navigation }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  const decksAsArrayFiltered = decksAsArray.filter((deck) => (deck.title === navigation.state.params.title))[0]
  return {
    deck: decksAsArrayFiltered,
  }
}

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    removeDeck: (data) => dispatch(removeDeck(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Deck);
