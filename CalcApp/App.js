import React from 'react';
import { View } from 'react-native';

import { Top, Panel, Result } from './src/components';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };
  }

  setResult(result) {
    this.setState({ result });
  }

  render() {
    return (
      <View>
        <Top />
        <Result result={this.state.result} />
        <Panel result={this.state.result} action={this.setResult.bind(this)} />
      </View>
    );
  }
}
