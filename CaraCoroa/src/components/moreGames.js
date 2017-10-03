import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MoreGames extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Outros Jogos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#61BD8C',
    paddingTop: 60
  }
});
