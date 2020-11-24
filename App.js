import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Faeterj</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff007f',
  },
  welcome: {
    fontsize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
