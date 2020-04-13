const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState= {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'}
    ],
    dialogs: [
        {
            id: 1,
            name: 'Oksana',
        },
        {
            id: 2,
            name: 'Denis',
        }
    ],
    newMessageText: 'initial',
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id:5, message: message}]
            };
        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        default:
            return state;

    }
};

export const changeMessageActionCreator = (message) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    newMessageText: message
});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default dialogsReducer;