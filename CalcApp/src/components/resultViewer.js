import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class ResultViewer extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { result: null };
    // }

    render() {
        return (
            <View >
                <TextInput
                    placeholder='Resultado'
                    editable={false}
                    style={styles.field}
                    value={this.props.result}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    field: {
        fontSize: 30,
        paddingVertical: 35,
        paddingHorizontal: 10,
        // height: 100
    }
});
