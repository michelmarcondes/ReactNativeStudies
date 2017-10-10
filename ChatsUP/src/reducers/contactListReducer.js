import { CONTACT_USER_LIST } from '../actions/types';

const INITIAL_STATE = {
    // data: []
};

/**
* @param {Object} state - Default aplication state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_USER_LIST: 
            return action.payload;

        default: return state;
    }
};
