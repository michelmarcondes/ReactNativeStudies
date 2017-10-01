import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Top from './components/top';
import Icons from './components/icons';
import Score from './components/score';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userChoice: null,
      computerChoice: null,
      gameResult: 'Pedra, Papel ou Tesoura?',
      myScore: 0,
      computerScore: 0
    };
  }

  getGameResult(userChoice, computerChoice) {
    let result = null;

    const options = [
      { c1: 'papel', c2: 'pedra', r: 'papel' },
      { c1: 'pedra', c2: 'tesoura', r: 'pedra' },
      { c1: 'tesoura', c2: 'papel', r: 'tesoura' }
    ];

    result = this.whosWin(options, userChoice, computerChoice);

    if (!result) {
      result = 'Empate!';
    }

    this.setState({ gameResult: result });
  }

  getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    const options = ['pedra', 'papel', 'tesoura'];

    return options[index];
  }

  jakenPoy(userChoice) {
    const computerChoice = this.getComputerChoice();
    this.setState(...this.state, { userChoice, computerChoice });
    this.getGameResult(userChoice, computerChoice);
  }

  whosWin(options, userChoice, computerChoice) {
    let result = null;

    options.filter((o) => {
      if (o.c1 === userChoice & o.c2 === computerChoice
        || o.c2 === userChoice & o.c1 === computerChoice) {
        if (userChoice === o.r) {
          result = 'Você Venceu';
          this.setState({ myScore: ++this.state.myScore });
        } else {
          result = 'Perdeu :(';
          this.setState({ computerScore: ++this.state.computerScore });
        }
      }
      return null;
    });
    return result;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topPanel}>
          <Top />
        </View>

        <View style={styles.actionPanel}>
          <View style={styles.btnChoices}>
            <Button title='Pedra' onPress={() => { this.jakenPoy('pedra'); }} />
          </View>
          <View style={styles.btnChoices}>
            <Button title='Papel' onPress={() => { this.jakenPoy('papel'); }} />
          </View>
          <View style={styles.btnChoices}>
            <Button title='Tesoura' onPress={() => { this.jakenPoy('tesoura'); }} />
          </View>
        </View>

        <View style={styles.stage}>
          <Text style={styles.featuredText}>{this.state.gameResult}</Text>

          <View style={styles.icons}>
            <Icons choice={this.state.computerChoice} gamer='Computador' />
          </View>

          <View style={styles.icons}>
            <Icons choice={this.state.userChoice} gamer='Você' />
          </View>
        </View>

        <View>
          <Score myScore={this.state.myScore} computerScore={this.state.computerScore} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topPanel: {
    flex: 2,
  },
  stage: {
    flex: 3,
    alignItems: 'center'
  },
  btnChoices: {
    width: 90
  },
  actionPanel: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20
  },
  featuredText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'darkturquoise',
    height: 50
  },
  icons: {
    flex: 1,
    marginBottom: 45
  }
});
