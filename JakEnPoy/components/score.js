import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Score extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Você</Text>
                    <Text style={styles.scoreNumber}>
                        {this.props.myScore}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Computador</Text>
                    <Text style={styles.scoreNumber}>
                        {this.props.computerScore}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    textContainer: {
        alignItems: 'center'
    },
    scoreNumber: {
        fontSize: 30,
        // fontFamily: 'Didot',
        color: 'cornflowerblue',
        fontWeight: 'bold'
    }
});
