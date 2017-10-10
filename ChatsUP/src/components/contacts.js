import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

import { fetchUserContacts } from '../actions/appActions';

class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = { listData: [] };
    }

    componentWillMount() {
        this.props.fetchUserContacts();
    }

    componentWillReceiveProps(nextProps) {
        // console.log('CWRP');
        // console.log(nextProps.data); //ok
        // console.log(`wm: ${this.props.data}`); //vazio
        this.setState({ listData: nextProps.data });
    }

    _keyExtractor = (item, index) => index;

    _renderRow(data) {
        const name = data.item.name;
        const email = data.item.email;

        return (
            <TouchableOpacity 
                onPress={() => Actions.chat({ 
                    title: name, 
                    contactName: name, 
                    contactEmail: email 
                })}
            >
                <View
                    style={{
                        flex: 1,
                        padding: 20,
                        borderBottomWidth: 1,
                        borderColor: '#ccc'
                    }}
                >
                    <Text style={{ fontSize: 25 }}>{name}</Text>
                    <Text style={{ fontSize: 18 }}>{email}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <FlatList
                data={this.state.listData}
                renderItem={this._renderRow}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const contacts = _.map(state.ContactListReducer, (val, uid) => {
        return { ...val, uid };
    });

    // console.log(state.ContactListReducer);
    // console.log(contacts);
    return {
        data: contacts
    };
};

export default connect(mapStateToProps, { fetchUserContacts })(Contacts);
