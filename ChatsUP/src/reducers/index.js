import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import AppReducer from './appReducer';
import ContactListReducer from './contactListReducer';

export default combineReducers({
    AuthReducer,
    AppReducer,
    ContactListReducer
});
