import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,
    StatusBar,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import {
    changeEmail,
    changePassword,
    changeName,
    registerUser
} from '../actions/authActions';

const bgImage = require('../assets/bg.png');

class RegisterForm extends Component {
    _registerUser() {
        //destructuring assignment!!!
        const { name, email, password } = this.props;

        this.props.registerUser({ name, email, password });
    }

    renderRegisterButton() {
        if (this.props.loadingRegister) {
            return (
                <ActivityIndicator size='large' />
            );
        }

        return (
            <TouchableHighlight onPress={() => this._registerUser()}>
                <Text style={styles.btnStyle}>Criar Conta</Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.bgImage}>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.formContainer}>
                        <TextInput
                            value={this.props.name}
                            style={styles.formControl}
                            placeholder='Nome'
                            onChangeText={value => this.props.changeName(value)}
                        />
                        <TextInput
                            value={this.props.email}
                            style={styles.formControl}
                            placeholder='E-mail'
                            onChangeText={value => this.props.changeEmail(value)}
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                        <TextInput
                            value={this.props.password}
                            style={styles.formControl}
                            placeholder='Senha'
                            onChangeText={value => this.props.changePassword(value)}
                            secureTextEntry
                            autoCapitalize='none'
                        />

                        {
                            this.props.registerError
                                ? <Text style={styles.txtError}>{this.props.registerError}</Text>
                                : null
                        }

                    </View>

                    <View style={styles.btnContainer}>
                        { this.renderRegisterButton() }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        padding: 10
    },
    formContainer: {
        flex: 5,
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

const mapStateToProps = (state) => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        name: state.AuthReducer.name,
        registerError: state.AuthReducer.registerError,
        loadingRegister: state.AuthReducer.loadingRegister
    }
);

export default connect(
    mapStateToProps,
    { changeEmail, changeName, changePassword, registerUser }
)(RegisterForm);
