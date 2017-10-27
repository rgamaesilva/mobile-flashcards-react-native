import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { purple, white, gray } from '../utils/colors'

const DecksList = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.deck}>
        <Text style={styles.title}>DECK NAME</Text>
        <Text style={styles.count}>XX CARDS</Text>
      </View>
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
    borderRadius: 30,
    borderColor: purple,
    borderWidth: 2,
    height: 200,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
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
export default DecksList;
