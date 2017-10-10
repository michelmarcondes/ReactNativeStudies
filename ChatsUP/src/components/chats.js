import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import { userChatsHistoryList } from '../actions/appActions';

class Chats extends Component {
    componentWillMount() {
        this.props.userChatsHistoryList();
        this.dataSource = this.props.chatHistoryList;
    }

    componentWillReceiveProps(nextProps) {
        this.dataSource = this.props.chatHistoryList;
    }


    _renderRow(data) {
        return (
            <TouchableOpacity
                onPress={() => Actions.chat({
                    title: data.item.name,
                    contactName: data.item.name,
                    contactEmail: data.item.email
                })}
            >
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc',
                        paddingVertical: 8,
                        paddingHorizontal: 15
                    }}
                >
                    <Text style={{ fontSize: 18 }}>{data.item.name}</Text>
                    <Text style={{ fontSize: 12, color: '#ccc' }}>{data.item.email}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.dataSource}
                    renderItem={this._renderRow}
                    keyExtractor={(item, index) => item.uid}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const chatHistoryList = _.map(state.ChatReducer.userChatHistory, (val, uid) => {
        return { ...val, uid };
    });

    // console.log(chatHistoryList);

    return {
        chatHistoryList
    };
};

export default connect(mapStateToProps, { userChatsHistoryList })(Chats);
