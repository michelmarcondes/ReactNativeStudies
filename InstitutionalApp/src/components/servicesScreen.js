import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    Text
} from 'react-native';

const servicesDetail = require('../assets/detalhe_servico.png');

export default class ServicesScreen extends Component {
    static navigationOptions = {
        title: 'Serviços'
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#ccc' />

                <View style={styles.headerContainer}>
                    <Image source={servicesDetail} />
                    <Text style={styles.title}>Serviços</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.description}>- Consultoria</Text>
                    <Text style={styles.description}>- Processos</Text>
                    <Text style={styles.description}>- Acompanhamento de Projetos</Text>
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

