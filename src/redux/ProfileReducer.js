const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hey', likesCounter: 12},
        {id: 2, message: 'Hello', likesCounter: 0},
    ],
    newPostText: 'initial'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const message = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id:5, message: message, likesCouner: 3}],
                newPostText: ''
            };
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const changeNewPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    newPostText: text
});

export default profileReducer;