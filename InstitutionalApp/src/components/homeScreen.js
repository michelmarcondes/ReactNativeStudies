import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

const logo = require('../assets/logo1.png');
const menuCliente = require('../assets/menu_cliente.png');
const menuContato = require('../assets/menu_contato1.png');
const menuEmpresa = require('../assets/menu_empresa1.png');
const menuServico = require('../assets/menu_servico1.png');

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'XYZ Consulting'
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#ccc' />

                <View style={styles.logoContainer}>
                    <Image source={logo} />
                </View>
                <View style={styles.menuItemsContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Clients')}
                    >
                        <Image style={styles.menuItems} source={menuCliente} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Contact')}
                    >
                        <Image style={styles.menuItems} source={menuContato} />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItemsContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Business')}
                    >
                        <Image style={styles.menuItems} source={menuEmpresa} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Services')}
                    >
                        <Image style={styles.menuItems} source={menuServico} />
                    </TouchableOpacity>
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
    logoContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    menuItemsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuItems: {
        margin: 15
    }
});

