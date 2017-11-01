import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple, white } from '../utils/colors'

class Quiz extends Component {
  render () {
    return (
      <View>
        <Text>
          DDD
        </Text>
      </View>
    )
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
// // here all the actions are mapped to props.
//     addCard: (data) => dispatch(addCard(data)),
//   }
// }

function mapStateToProps ({ decks }, { navigation }) {
  const decksAsArray = Object.keys(decks).map((title) => (decks[title]))
  const decksAsArrayFiltered = decksAsArray.filter((deck) => (deck.title === navigation.state.params.title))[0]
  return {
    deck: decksAsArrayFiltered,
  }
}

export default connect(mapStateToProps)(Quiz)
