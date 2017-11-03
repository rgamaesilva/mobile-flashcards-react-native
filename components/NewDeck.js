import React, { Component } from 'react'
import {
        StyleSheet,
        View,
        Text,
        TextInput,
        TouchableOpacity,
        Platform,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { purple, white } from '../utils/colors'
import * as api from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions/deckActions'

class NewDeck extends Component {
  state = {
    textInput: ''
  }

  onAddDeck = () => {
    if(this.state.textInput === "") {
      alert('Please type the title of the Deck')
      return
    }
    api.addApiDeck(this.state.textInput).then(() => {
      this.props.addDeck(this.state.textInput)
      this.props.navigation.dispatch(NavigationActions.navigate(
        {
          routeName: 'Deck',
          params: { title: this.state.textInput }
        }
      ))
      this.setState({ textInput: '' })
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>WHAT IS THE TITLE OF YOUR NEW DECK ?</Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.textInput}
          onChangeText={(text) => this.setState({ textInput: text })}
          placeholder='Deck Title'
        />
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
          onPress={this.onAddDeck}
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
    addDeck: (data) => dispatch(addDeck(data)),
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
