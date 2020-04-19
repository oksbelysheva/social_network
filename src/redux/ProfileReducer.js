import {getProfile} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hey', likesCounter: 12},
        {id: 2, message: 'Hello', likesCounter: 0},
    ],
    newPostText: 'initial',
    profile: null
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPost = () => ({
    type: ADD_POST
});
export const changeNewPostText = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    newPostText: text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const getProfileUser = (userId) => {
    return (dispatch) => {
        getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            }
        );
    }
};

export default profileReducer;