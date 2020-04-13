const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
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
                users: [...state.users, ...action.users]
            };
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

export default usersReducer;