const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    selectedPage: 1
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId){
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                } )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId){
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                } )
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
            }
        default:
            return state;

    }
};

export const followActionCreator = (id) => ({
    type: FOLLOW,
    userId: id
});

export const unfollowActionCreator = (id) => ({
    type: UNFOLLOW,
    userId: id
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
});

export const setSelectedPage = (selectedPage) => ({
    type: SET_SELECTED_PAGE,
    selectedPage: selectedPage
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
});

export default usersReducer;