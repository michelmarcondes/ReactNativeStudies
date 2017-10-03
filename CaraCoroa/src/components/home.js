import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


const logo = require('../assets/logo.png');
const btnPlay = require('../assets/botao_jogar.png');
const btnAbout = require('../assets/sobre_jogo.png');
const btnMoreGames = require('../assets/outros_jogos.png');

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stage}>
          <Image source={logo} />
          <TouchableHighlight onPress={() => { Actions.play(); }}>
            <Image style={{ marginTop: 20 }} source={btnPlay} />
          </TouchableHighlight>
        </View>

        <View style={styles.footer}>
          <TouchableHighlight onPress={() => { Actions.about(); }}>
            <Image source={btnAbout} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { Actions.more(); }}>
            <Image source={btnMoreGames} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#61BD8C'
  },
  stage: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  }
});
