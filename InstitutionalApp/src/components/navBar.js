import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NavBar extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.backgroundColor]}>
        <Text style={styles.title}>XYZ Consulting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    padding: 10,
    paddingTop: 35,
    height: 80
  },
  title: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      color: '#000',
      fontWeight: 'bold'
  }
});

