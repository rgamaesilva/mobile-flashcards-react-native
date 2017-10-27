import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'

const Deck = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.deck}>DECK NAME</Text>
      <Text>CARDS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    borderRadius: 10,
    borderColor: purple,
    borderWidth: 10,
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
  }
})

export default Deck;
