import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import * as api from '../utils/api'
import { purple, white, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions/deckActions'

class DecksList extends Component {

//renderItem is what is going to be rendered in FlaList.
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.title}
        onPress={() => this.props.navigation.navigate(
          'Deck',
          { title: item.title },
        )}
        >
        <View style={styles.deck} {...item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.count}>{item.questions.length}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  componentDidMount () {
    api.getAllDecks().then((results) => {
      const parsedResults = JSON.parse(results)
      this.props.getAllDecks(parsedResults)
    })
  }

  render () {
    console.log(this.props)
    return (
      this.props.decks ?
      <View style={styles.container}>
        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
        />
      </View>
      :
      <View style={styles.container}>
        <Text style={styles.title}>NO DECKS AVAIABLE</Text>
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
  count: {
    fontSize: 20,
    color: gray,
    textAlign: 'center',
    margin: 10
  }
})

function mapStateToProps ({ decks }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  return {
    decks: decksAsArray,
  }
}

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    getAllDecks: (data) => dispatch(getAllDecks(data)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
