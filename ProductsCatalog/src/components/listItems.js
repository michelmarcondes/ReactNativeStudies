import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import ListItem from './listItem';

const serviceUrl = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = { listData: [] };
  }

componentWillMount() {
  axios.get(serviceUrl)
    .then(resp => { this.setState({ listData: resp.data }); })
    .catch(err => { console.log(err); });
}

  render() {
    return (
      <ScrollView>
        {this.state.listData.map((item) => 
          (
            <ListItem key={item.titulo} item={item} />
          )
        )}
      </ScrollView>
    );
  }
}
