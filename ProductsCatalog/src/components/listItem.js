import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.image}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.header}>{this.props.item.titulo}</Text>
          <Text style={styles.price}>R$ {this.props.item.valor}</Text>
          <Text style={styles.itemText}>{this.props.item.local_anuncio}</Text>
          <Text style={styles.itemText}>{this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  image: {
    width: 102,
    height: 102
  },
  itemDetails: {
    marginLeft: 20, 
    flex: 1
  },
  header: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemText: {
    fontSize: 16
  }
});
