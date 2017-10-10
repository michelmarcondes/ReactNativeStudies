import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import { 
    ADD_CONTACT_EMAIL_CHANGED, 
    ADD_CONTACT_ERROR,
    ADD_CONTACT_SUCCESS,
    LOADING_ADD_CONTACT,
    CONTACT_USER_LIST,
    MESSAGE_CHANGED,
    SEND_MESSAGE
} from './types';

export const handleAddContactEmail = value => {
    return {
        payload: value,
        type: ADD_CONTACT_EMAIL_CHANGED
    };
};

export const handleMessageChange = value => {
    return {
        payload: value,
        type: MESSAGE_CHANGED
    };
};

export const addContactEmail = email => {

    return dispatch => {
        dispatch({ type: LOADING_ADD_CONTACT });

        const contactEncodedEmail = b64.encode(email);

        firebase.database().ref(`/contatos/${contactEncodedEmail}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    // console.log('Usuário encontrado');

                    const contactData = _.first(_.values(snapshot.val()));
                    // console.log(contactData);

                    //using destructuring assingment
                    const { currentUser } = firebase.auth();
                    const userEncodedEmail = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${userEncodedEmail}`)
                        .push({ email, name: contactData.name })
                        .then(() => addContactSuccess(dispatch))
                        .catch((error) => addContactError(error.message, dispatch));
                } else {
                    addContactError('Usuário não encontrado', dispatch);
                }
            });
    };
};

const addContactSuccess = (dispatch) => {
    dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: true
    });
};

const addContactError = (error, dispatch) => {
    dispatch({
        payload: error,
        type: ADD_CONTACT_ERROR
    });
};

export const enableAddContactForm = () => (
    {
        type: ADD_CONTACT_SUCCESS,
        payload: false
    }
);

export const fetchUserContacts = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        const userEncodedEmail = b64.encode(currentUser.email);

        firebase.database().ref(`/usuario_contatos/${userEncodedEmail}`)
            .on('value', snapshot => {
                dispatch({ 
                    type: CONTACT_USER_LIST,
                    payload: snapshot.val()
                 });
            });
    };
};


export const sendMessage = (contactName, contactEmail, message) => {
    console.log(contactName);
    console.log(contactEmail);
    console.log(message);

    return (
        {
            type: SEND_MESSAGE
        }
    );
};
