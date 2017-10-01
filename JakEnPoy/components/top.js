import React, { Component } from 'react';
import { View, Image } from 'react-native';

const coverImage = require('../assets/top-cover.png');

export default class Top extends Component {
    render() {
        return (
            <View>
                <Image source={coverImage} style={{ width: 397, height: 197 }} />
            </View>
        );
    }
}
