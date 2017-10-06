const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'change-email':
            return { ...state, email: action.payload };
        case 'change-password':
            return { ...state, password: action.payload };
        case 'change-name':
            return { ...state, name: action.payload };
        default:
            return state;
    }
};
