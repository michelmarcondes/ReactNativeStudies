import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
        <View style={styles.top}>
            <Text style={styles.title}>Calculadora 1.0</Text>
        </View>
);

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#2196f3',
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: '#fff'
    }
});
