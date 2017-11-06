import React, { Component } from 'react'
import {
        View,
        Text,
        StyleSheet,
        ScrollView,
        FlatList,
        TouchableOpacity
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as api from '../utils/api'
import { purple, white, gray, red, black } from '../utils/colors'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions/deckActions'

class DecksList extends Component {
//renderItem is what is going to be rendered in FlatList.
  renderItem = ({ item }) => {
    const { navigation } = this.props
    return (
      <TouchableOpacity
        key={item.title}
        onPress={() => navigation.dispatch(NavigationActions.navigate(
          {
            routeName: 'Deck',
            params: { title: item.title }
          }
        ))}
        >
        <View style={styles.deck} {...item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.count}>{`${item.questions.length} cards`}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  componentDidMount () {
    const { getAllDecks } = this.props
    api.getAllDecks().then((results) => {
      const parsedResults = JSON.parse(results)
      getAllDecks(parsedResults)
    })
  }

  render () {
    const { decks } = this.props
    return (
      decks.length > 0 ?
      <View style={styles.container}>
        <FlatList
          data={decks}
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

function mapStateToProps ({ decks }, { quizControl }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  return {
    decks: decksAsArray,
    quizControl
  }
}

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    getAllDecks: (data) => dispatch(getAllDecks(data)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
