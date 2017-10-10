import { 
    USER_CHAT_LIST,
    USER_CHATS_HISTORY
} from '../actions/types';

const INITIAL_STATE = {
    chatList: null,
    userChatHistory: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CHAT_LIST: 
            return { ...state, chatList: action.payload };

        case USER_CHATS_HISTORY: 
            return { ...state, userChatHistory: action.payload };

        default: return state;
    }
};
