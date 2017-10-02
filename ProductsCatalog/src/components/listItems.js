import React from 'react';
import { View } from 'react-native';
import axios from 'axios';

import ListItem from './listItem';

const serviceUrl = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class ListItems extends React.Component {
componentWillMount() {
  axios.get(serviceUrl)
    .then(resp => { console.log(resp); })
    .catch(err => { console.log(err); });
}

  render() {
    return (
      <View>
        <ListItem />
        <ListItem />
        <ListItem />
      </View>
    );
  }
}
