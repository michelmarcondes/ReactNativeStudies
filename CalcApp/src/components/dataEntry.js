import React from 'react';
import { View, StyleSheet } from 'react-native';

import NumberEntry from './numberEntry';

export default props => (
        <View style={styles.container}>
            <NumberEntry id='num1' num={props.num1} action={props.action} />
            <NumberEntry id='num2' num={props.num2} action={props.action} />
        </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
