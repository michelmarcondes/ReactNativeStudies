import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { changeEmail, changePassword, changeName } from '../../actions/authActions';

class RegisterForm extends Component {
    render() {
        return (
            <Image source={require('../../assets/bg.png')} style={styles.bgImage}>
                <View style={styles.container}>
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
                        />
                        <TextInput
                            value={this.props.password}
                            style={styles.formControl}
                            placeholder='Senha'
                            onChangeText={value => this.props.changePassword(value)}
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableHighlight onPress={() => false}>
                            <Text style={styles.btnStyle}>Criar Conta</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Image>
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
        flex: 4,
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
    }
});

const mapStateToProps = (state) => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        name: state.AuthReducer.name
    }
);

export default connect(
    mapStateToProps,
    { changeEmail, changeName, changePassword }
)(RegisterForm);
