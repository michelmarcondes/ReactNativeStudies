import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    StatusBar,
    Image,
    Text
} from 'react-native';

const businessDetail = require('../assets/detalhe_empresa.png');

export default class BusinessScreen extends Component {
    static navigationOptions = {
        title: 'Empresa'
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#ccc' />

                <View style={styles.headerContainer}>
                    <Image source={businessDetail} />
                    <Text style={styles.title}>A empresa</Text>
                </View>

                <ScrollView style={styles.content}>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla libero ex, semper sed pretium eget, eleifend in 
                        justo. Vestibulum sit amet venenatis enim. 
                        
                        Aliquam 
                        vel dapibus arcu. Aliquam dapibus augue et vehicula 
                        hendrerit. Nullam sed consequat nibh. Aliquam 
                        euismod velit urna, eu cursus lectus tincidunt et. 
                        Ut vitae enim turpis. Etiam posuere pretium nisi 
                        eu pulvinar.
                    </Text>
                    <Text style={styles.description}>
                        Ut sagittis, ex ut egestas facilisis, erat ipsum 
                        feugiat justo, in consequat quam lacus quis augue. 
                        Pellentesque eget arcu lacinia, laoreet quam sit amet, 
                        volutpat lacus. Pellentesque sagittis, magna sit amet 
                        imperdiet ullamcorper, lectus lacus pulvinar dui, eget 
                        sodales tortor ex et ipsum. Maecenas nisl enim, dapibus 
                        ac sollicitudin eget, tempor non urna. Ut elit sapien, 
                        commodo ac congue non, semper ut orci. Nulla ultricies 
                        felis justo, id facilisis magna consequat nec. Praesent 
                        tempor varius vestibulum. Donec pharetra nulla ut 
                        posuere condimentum. Aenean pellentesque justo arcu, 
                        et lacinia ante commodo sagittis. Quisque eget libero sem. 
                        Sed venenatis at mauris id dictum. Nullam ultricies 
                        dolor mollis tincidunt venenatis.
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 22,
        color: '#ff7f50',
        fontWeight: 'bold'
    },
    description: {
        paddingLeft: 20,
        color: '#777',
        fontWeight: 'bold',
        paddingBottom: 8
    },
    content: {
        marginTop: 25
    }
});

