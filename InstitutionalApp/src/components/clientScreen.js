import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    Text
} from 'react-native';

const clientDetail = require('../assets/detalhe_cliente.png');
const client1 = require('../assets/cliente1.png');
const client2 = require('../assets/cliente2.png');

export default class ClientScreen extends Component {
    static navigationOptions = {
        title: 'Clientes'
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#ccc' />

                <View style={styles.headerContainer}>
                    <Image source={clientDetail} />
                    <Text style={styles.title}>Nossos Clientes</Text>
                </View>

                <View style={styles.clientsContainer}>
                    <Image source={client1} />
                    <Text style={styles.clientDescription}>Lorem ipsum</Text>
                </View>

                <View style={styles.clientsContainer}>
                    <Image source={client2} />
                    <Text style={styles.clientDescription}>Lorem ipsum</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 22,
        color: '#B9C941',
        fontWeight: 'bold'
        
    },
    clientsContainer: {
        marginLeft: 20,
        paddingVertical: 20
    },
    clientDescription: {
        paddingLeft: 20,
        color: '#777',
        fontWeight: 'bold'
    },
    navBarBgColor: {
        backgroundColor: '#B9C941'
    }
});

