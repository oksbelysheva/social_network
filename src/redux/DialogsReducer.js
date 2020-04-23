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
    ]
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:5, message: action.message}]
            };
        default:
            return state;

    }
};

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message: message
});

export default dialogsReducer;