import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import AppReducer from './appReducer';
import ContactListReducer from './contactListReducer';
import ChatReducer from './chatReducer';

export default combineReducers({
    AuthReducer,
    AppReducer,
    ContactListReducer,
    ChatReducer
});
