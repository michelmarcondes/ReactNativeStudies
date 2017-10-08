import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

import {
    CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_PASSWORD,
    USER_REGISTRED,
    REGISTER_ERROR,
    SIGNIN_ERROR,
    LOADING_LOGIN,
    USER_LOGGEDIN,
    LOADING_REGISTER
  } from './types';

export const changeEmail = (value) => {
    return {
        type: CHANGE_EMAIL,
        payload: value
    };
};


export const changePassword = (value) => {
    return {
        type: CHANGE_PASSWORD,
        payload: value
    };
};

export const changeName = (value) => {
    return {
        type: CHANGE_NAME,
        payload: value
    };
};

export const authenticateUser = ({ email, password }) => {
    // alert(`${email} || ${password}`);
    return dispatch => {
        dispatch({
            type: LOADING_LOGIN
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => userSignedIn(dispatch))
            .catch((error) => userSignInError(error, dispatch));
    };
};

export const registerUser = ({ name, email, password }) => {
    return dispatch => {
        dispatch({
            type: LOADING_REGISTER
        });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const encodedEmail = b64.encode(email);

                firebase.database().ref(`/contatos/${encodedEmail}`)
                    .push({ name })
                    .then(() => userCreated(email, dispatch))
                    //somente aqui dispara evento de cadastro com sucesso
                    ;
            })
            .catch(error => registerUserError(error, dispatch));
    };
};

const userSignedIn = (dispatch) => {
    dispatch({
        type: USER_LOGGEDIN
    });

    Actions.main();
};

const userSignInError = (error, dispatch) => {
    dispatch({
        payload: error.message,
        type: SIGNIN_ERROR
    });
};

const userCreated = (email, dispatch) => {
    dispatch({
        payload: email,
        type: USER_REGISTRED
    });

    Actions.welcome();
};

const registerUserError = (error, dispatch) => {
    dispatch({
        payload: error.message,
        type: REGISTER_ERROR
    });
};
