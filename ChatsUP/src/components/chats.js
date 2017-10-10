import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Chats extends Component {
    render() {
        return (
            <View>
                <Text>Chats</Text>
            </View>
        );
    }
}

//const mapStateToProps = ({ }) => ({});

export default connect(null, null)(Chats);
