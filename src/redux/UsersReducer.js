import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    selectedPage: 1,
    isFetching: true,
    followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: action.selectedPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            debugger
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;

    }
};

export const follow = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setSelectedPage = (selectedPage) => ({
    type: SET_SELECTED_PAGE,
    selectedPage
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleFollowingInProgress = (userId, isFetching) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    userId,
    isFetching
});

export const getUsers = (selectedPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setSelectedPage(selectedPage));
        usersAPI.getUsers(selectedPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            }
        );
    }
};

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(userId, true));
        usersAPI.unfollow(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(toggleFollowingInProgress(userId, false));
            }
        );
    }
};

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(userId, true));
        usersAPI.follow(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleFollowingInProgress(userId, false));
            }
        );
    }
};

export default usersReducer;