import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';

//middleware da App
// Permite q as funcoes asincronas funcionem no Redux
// precisa do applyMiddleware do Redux
import ReduxThunk from 'redux-thunk'; 

import Routes from './routes';
import reducers from './src/reducers/';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBGU8ke4MoniD-fbhP-pXCWSLtyeEm4B9w",
      authDomain: "chatsup-cdb28.firebaseapp.com",
      databaseURL: "https://chatsup-cdb28.firebaseio.com",
      projectId: "chatsup-cdb28",
      storageBucket: "chatsup-cdb28.appspot.com",
      messagingSenderId: "251662146051"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styles.container}>
          <Routes />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});
