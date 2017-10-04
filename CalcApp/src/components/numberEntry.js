import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
    <TextInput 
        style={styles.field} 
        placeholder='000' 
        value={props.num} 
        onChangeText={newValue => { props.action(props.id, newValue); }}
        keyboardType='numeric'
    />
);

const styles = StyleSheet.create({
    field: {
        width: 140,
        height: 80,
        fontSize: 20,
        textAlign: 'center'
    }
});
