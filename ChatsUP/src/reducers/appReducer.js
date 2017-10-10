import {
    ADD_CONTACT_EMAIL_CHANGED,
    ADD_CONTACT_ERROR,
    LOADING_ADD_CONTACT,
    ADD_CONTACT_SUCCESS,
    MESSAGE_CHANGED,
    SEND_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
    contactEmail: '',
    addContactError: '',
    loadingAddContact: false,
    contactAdded: false,
    message: ''
};

/**
* @param {Object} state - Default aplication state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CONTACT_EMAIL_CHANGED:
            return { ...state, contactEmail: action.payload };

        case ADD_CONTACT_ERROR:
            return {
                ...state,
                addContactError: action.payload,
                loadingAddContact: false
            };

        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                contactAdded: action.payload,
                contactEmail: '',
                loadingAddContact: false,
                addContactError: ''
            };

        case LOADING_ADD_CONTACT:
            return { ...state, loadingAddContact: true };

        case MESSAGE_CHANGED:
            return { ...state, message: action.payload };

        case SEND_MESSAGE:
            return { ...state, message: '' };

        default: return state;
    }
};
