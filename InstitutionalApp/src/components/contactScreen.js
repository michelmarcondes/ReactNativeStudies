import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    Text
} from 'react-native';

const contactDetail = require('../assets/detalhe_contato.png');

export default class ContactScreen extends Component {
    static navigationOptions = {
        title: 'Contatos'
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#ccc' />

                <View style={styles.headerContainer}>
                    <Image source={contactDetail} />
                    <Text style={styles.title}>Contatos</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.description}>TEL: (11) 1234-1234</Text>
                    <Text style={styles.description}>CEL: (11) 91234-1234</Text>
                    <Text style={styles.description}>email: contato@meudominio.com</Text>
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
        color: '#61bb8c',
        fontWeight: 'bold'
    },
    description: {
        paddingLeft: 20,
        color: '#777',
        fontWeight: 'bold',
        paddingBottom: 8
    },
    content: {
        marginTop: 25
    }
});

