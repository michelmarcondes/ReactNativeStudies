import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './src/components/home';
import About from './src/components/about';
import MoreGames from './src/components/moreGames';
import Play from './src/components/result';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='home' component={Home} initial hideNavBar />
        <Scene 
          key='about' component={About} 
          title='Sobre o Jogo' backTitle='Voltar' 
          hideNavBar={false}
        />
        <Scene key='more' component={MoreGames} title='Outros Jogos' hideNavBar={false} />
        <Scene key='play' component={Play} title='Resultado' hideNavBar={false} />
      </Router>
    );
  }
}
