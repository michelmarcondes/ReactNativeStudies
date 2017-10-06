import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableHighlight, 
    TouchableOpacity, 
    Image 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { changeEmail, changePassword } from '../../actions/authActions';

class FormLogin extends Component {
    render() {
        return (
            <Image source={require('../../assets/bg.png')} style={styles.bgImage}>
                <View style={styles.container}>
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
                        />
                        <TextInput
                            value={this.props.password}
                            style={styles.formControl}
                            placeholder='Senha'
                            placeholderTextColor='#ccc'
                            onChangeText={value => this.props.changePassword(value)}
                            secureTextEntry
                        />

                        <TouchableOpacity onPress={() => Actions.register()}>
                            <Text style={[styles.h2, { textAlign: 'center' }]}>
                                Ainda não tem cadastro? Cadastre-se!
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableHighlight onPress={() => false}>
                            <Text style={styles.btnStyle}>ACESSAR</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Image>
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
        password: state.AuthReducer.password
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex: 2,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        flex: 2,
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
    }
});

export default connect(mapStateToProps, { changeEmail, changePassword })(FormLogin);
