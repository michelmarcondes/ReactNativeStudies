import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import {
    handleMessageChange,
    sendMessage
} from '../actions/appActions';

const sendImg = require('../assets/enviar_mensagem.png');

class Chat extends Component {
    _sendMessage = () => {
        const { contactName, contactEmail, message } = this.props;

        this.props.sendMessage(contactName, contactEmail, message);
    }

    render() {
        return (
            <KeyboardAvoidingView 
                style={{ flex: 1, marginTop: 60, backgroundColor: '#eee4dc' }} 
                behavior='padding'
            >
                <TouchableOpacity 
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                    style={{ flex: 1 }}
                >
                    <View style={{ flex: 1, paddingBottom: 20, padding: 10 }}>
                        <Text>fadasfasda</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={[
                        {
                            flexDirection: 'row',
                            height: 60,
                            backgroundColor: '#f5f5f5',
                            paddingHorizontal: 10
                        },
                        this.editingMode && { marginBottom: 255, marginTop: -255 }
                    ]}
                >
                    <TextInput
                        style={{
                            flex: 5,
                            backgroundColor: '#fff',
                            fontSize: 18,
                            paddingHorizontal: 15,
                            marginVertical: 8,
                            borderRadius: 45,
                            borderWidth: 1,
                            borderColor: '#ddd'
                        }}
                        value={this.props.message}
                        onChangeText={(value) => this.props.handleMessageChange(value)}
                    />

                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => this._sendMessage()}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Image
                            source={sendImg}
                            style={{ width: 45, height: 45, padding: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            message: state.AppReducer.message
        }
    );
};

export default connect(mapStateToProps, { handleMessageChange, sendMessage })(Chat);
