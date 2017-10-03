import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara = require('../assets/moeda_cara.png');
const coroa = require('../assets/moeda_coroa.png');

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = { result: null };
  }

  componentWillMount() {
    this.sort();
  }

  sort() {
    const index = Math.floor(Math.random() * 2);
    this.setState({ result: index });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.result === 0 
          ? <Image source={cara} /> 
          : <Image source={coroa} /> 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61BD8C',
    paddingTop: 60
  }
});
