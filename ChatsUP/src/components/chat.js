import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
    handleMessageChange,
    sendMessage,
    userChatFetch
} from '../actions/appActions';

const sendImg = require('../assets/enviar_mensagem.png');

class Chat extends Component {
    componentWillMount() {
        this.props.userChatFetch(this.props.contactEmail);
        this.dataSource = this.props.chat;
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if (this.props.contactEmail !== nextProps.contactEmail) {
            this.props.userChatFetch(nextProps.contactEmail);
        }

        this.dataSource = nextProps.chat;
    }

    componentWillUnmount() {
        this.dataSource = [];
    }
    
    _sendMessage = () => {
        const { contactName, contactEmail, message } = this.props;
        this.props.sendMessage(contactName, contactEmail, message);
    }

    _renderRow = data => {
        if (data.item.type === 'r') {
            return (
                <View style={{ alignItems: 'flex-end', marginVertical: 5, marginLeft: 40 }}>
                    <Text
                        style={{
                            fontSize: 18,
                            color: '#000',
                            padding: 10,
                            backgroundColor: '#dbf5b4',
                            elevation: 1
                        }}
                    >
                        {data.item.message}
                    </Text>
                </View>
            );
        }

        return (
            <View style={{ alignItems: 'flex-start', marginVertical: 5, marginRight: 40 }}>
                <Text
                    style={{
                        fontSize: 18,
                        color: '#000',
                        padding: 10,
                        backgroundColor: '#f7f7f7',
                        elevation: 1
                    }}
                >
                    {data.item.message}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1, marginTop: 60, backgroundColor: '#eee4dc' }}
                behavior='padding'
            >
                {/* <TouchableOpacity
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                    style={{ flex: 1 }}
                > */}
                <View style={{ flex: 1, paddingBottom: 20, padding: 10 }}>

                    <FlatList
                        data={this.dataSource}
                        renderItem={this._renderRow}
                        keyExtractor={(item, index) => item.uid}
                    />

                </View>
                {/* </TouchableOpacity> */}
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
                        onPress={() => { this._sendMessage(); Keyboard.dismiss(); }}
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
    const chat = _.map(state.ChatReducer, (val, uid) => {
        return { ...val, uid };
    });

    return (
        {
            message: state.AppReducer.message,
            chat
        }
    );
};

export default connect(mapStateToProps, { handleMessageChange, sendMessage, userChatFetch })(Chat);
