import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const stoneIcon = require('../assets/pedra.png');
const paperIcon = require('../assets/papel.png');
const scissorsIcon = require('../assets/tesoura.png');

export default class Icons extends Component {
    getImage() {
        switch (this.props.choice) {
            case 'pedra':
                return (
                    <Image source={stoneIcon} />
                );
            case 'papel':
                return (
                    <Image source={paperIcon} />
                );
            case 'tesoura':
                return (
                    <Image source={scissorsIcon} />
                );
            default:
                return false;
        }
    }

    render() {
        return (
            <View style={styles.stage}>
                <Text>{this.props.gamer}</Text>
                {this.getImage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stage: {
        alignItems: 'center'
    }
});
