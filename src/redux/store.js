import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hey', likesCounter: 12},
                {id: 2, message: 'Hello', likesCounter: 0},
            ],
            newPostText: 'initial'
        },
        sidebar:{}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;
