import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hey', likesCounter: 12},
        {id: 2, message: 'Hello', likesCounter: 0},
    ],
    profile: null,
    status: 'add status'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id:5, message: action.newPost, likesCouner: 3}],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPost = (newPost) => ({
    type: ADD_POST,
    newPost
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
});

export const getProfileUser = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            }
        );
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        });
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0){
                dispatch(setUserStatus(status));
            }
        });
    }
};

export default profileReducer;