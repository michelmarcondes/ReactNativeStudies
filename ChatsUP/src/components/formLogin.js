import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
    changeEmail,
    changePassword,
    authenticateUser
} from '../actions/authActions';

const bgImage = require('../assets/bg.png');

class FormLogin extends Component {
    _authenticateUser() {
        const { email, password } = this.props;

        this.props.authenticateUser({ email, password });
    }

    renderAccessButton() {
        if(this.props.loadingLogin) {
            return (
                <ActivityIndicator size='large' />
            );
        }

        return (
            <TouchableHighlight onPress={() => this._authenticateUser()}>
                <Text style={styles.btnStyle}>ACESSAR</Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.bgImage}>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.top}>
                        <Text style={styles.h1}>
                            ChatsUP
                    </Text>
                    </View>

                    <View style={styles.formContainer}>
                        <TextInput
                            value={this.props.email}
                            style={styles.formControl}
                            placeholder='E-mail'
                            placeholderTextColor='#ccc'
                            onChangeText={value => this.props.changeEmail(value)}
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                        <TextInput
                            value={this.props.password}
                            style={styles.formControl}
                            placeholder='Senha'
                            placeholderTextColor='#ccc'
                            onChangeText={value => this.props.changePassword(value)}
                            secureTextEntry
                            autoCapitalize='none'
                        />

                        <TouchableOpacity onPress={() => Actions.register()}>
                            <Text style={[styles.h2, { textAlign: 'center' }]}>
                                Ainda não tem cadastro? Cadastre-se!
                        </Text>
                        </TouchableOpacity>

                        {
                            this.props.loginError
                                ? <Text style={styles.txtError}>{this.props.loginError}</Text>
                                : null
                        }

                    </View>

                    <View style={styles.btnContainer}>
                        {this.renderAccessButton()}
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

// function mapStateToProps(state) {
//     return ({
//         email: state.AuthReducer.email,
//         password: state.AuthReducer.password
//     });
// }

const mapStateToProps = (state) => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        loginError: state.AuthReducer.loginError,
        loadingLogin: state.AuthReducer.loadingLogin
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        padding: 10,

    },
    top: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex: 4,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    btnStyle: {
        backgroundColor: '#115e54',
        padding: 10,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    h1: {
        fontSize: 25,
        color: '#fff'
    },
    h2: {
        fontSize: 15,
        marginTop: 10,
        color: '#fff'
    },
    formControl: {
        fontSize: 20,
        height: 45,
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginBottom: 8
    },
    bgImage: {
        flex: 1,
        width: null
    },
    txtError: {
        color: 'red',
        textAlign: 'center',
        padding: 5,
        backgroundColor: '#ffb6c1',
    }
});

export default connect(
    mapStateToProps,
    {
        changeEmail,
        changePassword,
        authenticateUser
    }
)(FormLogin);
