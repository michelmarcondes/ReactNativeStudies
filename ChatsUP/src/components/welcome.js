import React, { Component } from 'react';
import { 
    Text, 
    View, 
    Image, 
    ImageBackground, 
    StyleSheet, 
    TouchableHighlight, 
    StatusBar 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const bgImage = require('../assets/bg.png');
const logoImage = require('../assets/logo.png');

class Welcome extends Component {
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.bgImage}>
                <View style={styles.container}>
                    
                    <StatusBar barStyle="light-content" />

                    <View style={styles.topContainer}>
                        <Text style={styles.h2}>Seja bem-vindo!</Text>
                        <Image source={logoImage} />
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableHighlight onPress={() => { Actions.login(); }}>
                            <Text style={styles.btnStyle}>Fazer Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        padding: 10
    },
    topContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    btnStyle: {
        backgroundColor: '#115e54',
        padding: 10,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    bgImage: {
        flex: 1,
        width: null
    },
    h2: {
        fontSize: 15,
        marginTop: 10,
        color: '#fff',
        paddingBottom: 25
    },
});

export default Welcome;
