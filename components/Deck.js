import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { purple, white, gray} from '../utils/colors'

class Deck extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.deck.title}</Text>
        <Text style={styles.cards}>CARDS</Text>
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
    borderRadius: 30,
    borderColor: purple,
    borderWidth: 2,
    height: 200,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
  cards: {
    fontSize: 20,
    color: gray,
    textAlign: 'center',
    margin: 10
  }
})

function mapStateToProps ({ decks }, { navigation }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  const decksAsArrayFiltered = decksAsArray.filter((deck) => (deck.title === navigation.state.params.title))[0]
  console.log(decksAsArrayFiltered)
  return {
    deck: decksAsArrayFiltered,
  }
}

export default connect(mapStateToProps)(Deck);
