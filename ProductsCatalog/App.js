import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItems from './src/components/listItems';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor');
  }

  componentWillMount() {
    // console.log('before render');
  }

  componentDidMount() {
    // console.log('after render');
  }

  render() {
    // console.log('rendering');
    return (
      <View style={styles.container}>
        <ListItems />
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
