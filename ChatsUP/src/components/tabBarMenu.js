import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
    enableAddContactForm
} from '../actions/appActions';

const addContactImg = require('../assets/adicionar-contato.png');

const TabBarMenu = props => (
    <View style={styles.container}>
        <View style={styles.statusBarContainer}>
            <StatusBar barStyle='light-content' backgroundColor='#114d44' />
        </View>

        <View style={styles.actionsContainerWrapper}>
            <View style={styles.topContainer}>
                <Text style={styles.h2}>ChatsUP</Text>
            </View>

            <View style={styles.actionsContainer}>

                <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity 
                        activeOpacity={0.6} 
                        onPress={() => { Actions.addContact(); props.enableAddContactForm(); }}
                    >
                        <Image source={addContactImg} />
                    </TouchableOpacity>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Sair</Text>
                </View>
            </View>
        </View>

        <TabBar {...props} style={styles.tabBarStyle} />
    </View>
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#115e54',
        elevation: 4,
        marginBottom: 6,
    },
    actionsContainer: {
        flexDirection: 'row',
        marginRight: 20
        // justifyContent: 'space-around'
    },
    actionsContainerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statusBarContainer: {
        backgroundColor: '#114d44',
        height: 20
    },
    topContainer: {
        height: 50,
        justifyContent: 'center',
    },
    h2: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 20
    },
    tabBarStyle: {
        backgroundColor: '#115e54',
        elevation: 0
    }
});

export default connect(null, { enableAddContactForm })(TabBarMenu);
