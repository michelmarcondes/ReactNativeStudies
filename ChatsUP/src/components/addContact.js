import React, { Component } from 'react';
import { 
    View, 
    Text,
    TextInput, 
    TouchableOpacity, 
    StatusBar, 
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import {
    handleAddContactEmail,
    addContactEmail
} from '../actions/appActions';

class AddContact extends Component {
    _errorMessage() {
        if (this.props.addContactError) {
            return (
                <Text
                    style={{
                        color: 'red',
                        textAlign: 'center',
                        backgroundColor: '#ffb6c1',
                        paddingVertical: 5,
                        marginTop: 10
                    }}
                >
                    {this.props.addContactError}
                </Text >
            );
        }
    }

    renderContactAdded() {
        if (!this.props.contactAdded) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 3, justifyContent: 'center', marginHorizontal: 20 }}>
                        <TextInput
                            placeholder='e-mail'
                            style={{
                                fontSize: 20,
                                height: 45,
                                backgroundColor: '#fff',
                                paddingLeft: 5,
                                borderWidth: 1,
                                borderColor: '#ccc'
                            }}
                            onChangeText={value => this.props.handleAddContactEmail(value)}
                            value={this.props.contactEmail}
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />

                        {this._errorMessage()}
                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            marginHorizontal: 20
                        }}
                    >
                        {this.renderAddContactButton()}
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>
                        Cadastro realizado com sucesso!
                    </Text>
                </View>
            );
        }
    }

    renderAddContactButton() {
        if (this.props.loadingAddContact) {
            return (
                <ActivityIndicator size='large' />
            );
        }

        return (
            <TouchableOpacity
                style={{ backgroundColor: '#115e54', alignItems: 'center' }}
                onPress={() => this.props.addContactEmail(this.props.contactEmail)}
            >
                <Text
                    style={{
                        backgroundColor: '#115e54',
                        padding: 10,
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 16
                    }}
                >
                    Adicionar
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}
                behavior='padding'
            >
                <StatusBar barStyle="light-content" />

                {this.renderContactAdded()}

            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => ({
    contactEmail: state.AppReducer.contactEmail,
    addContactError: state.AppReducer.addContactError,
    loadingAddContact: state.AppReducer.loadingAddContact,
    contactAdded: state.AppReducer.contactAdded
});

export default connect(mapStateToProps,
    {
        handleAddContactEmail,
        addContactEmail
    }
)(AddContact);
