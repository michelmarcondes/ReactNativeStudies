import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operations extends React.Component {
    render() {
        return (
            <Picker 
                style={styles.container}
                selectedValue={this.props.op}
                onValueChange={op => { this.props.action(op); }}
            >
                <Picker.Item label='Soma' value='sum' />
                <Picker.Item label='Subtração' value='subtract' />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    }
});
