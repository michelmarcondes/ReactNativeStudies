import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { log: null };

        this.getData = this.getData.bind(this);
        this.createUser = this.createUser.bind(this);
        this.userLoggedIn = this.userLoggedIn.bind(this);
        this.userLogOut = this.userLogOut.bind(this);
        this.userLogin = this.userLogin.bind(this);
    }

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBEfj4-HQQuWV4ObDVJtHtZDPq0i4Zu1gA",
            authDomain: "configuracao-firebase-react.firebaseapp.com",
            databaseURL: "https://configuracao-firebase-react.firebaseio.com",
            projectId: "configuracao-firebase-react",
            storageBucket: "configuracao-firebase-react.appspot.com",
            messagingSenderId: "382216754395"
        };
        firebase.initializeApp(config);
    }

    databaseActions() {
        // console.log('save data');
        // const db = firebase.database();
        // db.ref('pontuacao').set('110');
        //db.ref('pontuacao').remove();

        // //short way
        const employees = firebase.database().ref('employees');
        // employees.child('001').child('name').set('Michel M');

        // //update
        // employees.child('001').child('name').set('Michel Marcondes');

        // //remove item
        // employees.child('001').remove();

        // //remove root object
        // employees.remove();

        //using automatic ID
        //employees.push().child('name').set('Michel Marcondes');

        //using literal object
        employees.push().set(
            {
                name: 'Michel M',
                weight: '90',
                filiation: {
                    father: 'JH',
                    mother: 'LM'
                }
            }
        );
    }

    getData() {
        const p = firebase.database().ref('pontuacao');

        //adding listener
        p.on('value', (snapshot) => {
            //alert(snapshot.val());
            this.setState({ points: snapshot.val() });
        });
    }

    createUser() {
        const email = 'michel.marcondes@gmail.com';
        const password = '123456';

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => { alert('Usuário criado!'); })
            .catch(err => { this.setState({ log: err.code }); });
    }

    userLoggedIn() {
        // const email = 'michel.marcondes@gmail.com';
        // const password = '123456';

        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(() => { this.setState({ log: 'Logado com sucesso!' }); })
        //     .catch(err => { this.setState({ log: err.code }); });
        
        // const user = firebase.auth().currentUser;
        // if(!user) {
        //     alert('Usuário não está logado!');
        // }

        const user = firebase.auth();
        user.onAuthStateChanged(
            (currentUser) => {
                if (currentUser) {
                    alert('Usuário logado!');
                } else {
                    alert('Usuário NÃO logado!');
                }
            }
        );
    }

    userLogin() {
        const email = 'michel.marcondes@gmail.com';
        const password = '123456';

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => { this.setState({ log: err.code }); });
    }

    userLogOut() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Create User' onPress={this.createUser} />
                <Button title='Logged In?' onPress={this.userLoggedIn} />
                <Button title='Log In' onPress={this.userLogin} />
                <Button title='Logout' onPress={this.userLogOut} />
                
                <Text>
                    {this.state.log}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#6495ed',
        padding: 15
    }
});
