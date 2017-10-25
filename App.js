import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
{/* view deck list */}
        <View>
          <View>
            <Text>HEADER</Text>
          </View>
          <View>
            <Text>DECK</Text>
            <Text>Card Count</Text>
          </View>
        </View>
{/* view of an individual deck */}
        <View>
          <View>
            <Text>HEADER</Text>
          </View>
          <View>
            <Text>DECK</Text>
            <Text>Card Count</Text>
          </View>
          <TouchableOpacity>
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
{/* view of the quiz */}
        <View>
          <View>
            <Text>HEADER</Text>
          </View>
          <View>
            <Text>Question</Text>
          </View>
          <TouchableOpacity>
            <Text>Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
