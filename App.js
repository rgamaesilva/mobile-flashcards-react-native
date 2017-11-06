import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { View } from 'react-native';
import { MainNavigator, FlashCardStatusBar } from './utils/navigation'
import { purple } from './utils/colors'
import reducer from './reducers'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <FlashCardStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
