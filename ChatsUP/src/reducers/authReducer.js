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
  } from '../actions/types';


const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: '',
    loginError: '',
    loadingLogin: false,
    loadingRegister: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);

    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, email: action.payload };
        
        case CHANGE_PASSWORD:
            return { ...state, password: action.payload };
    
        case CHANGE_NAME:
            return { ...state, name: action.payload };
        
        case USER_REGISTRED:
            return { 
                ...state, 
                name: '',
                password: '',
                registerError: '',
                loginError: '',
                loadingRegister: false
            };
        
        case REGISTER_ERROR:
            return { ...state, registerError: action.payload, loadingRegister: false };
        
        case SIGNIN_ERROR:
            return { ...state, loginError: action.payload, loadingLogin: false };

        case LOADING_LOGIN:
            return { ...state, loadingLogin: true };

        case LOADING_REGISTER:
            return { ...state, loadingRegister: true };

        case USER_LOGGEDIN:
            return { ...state, loadingLogin: false };
        
        default:
            return state;
    }
};
