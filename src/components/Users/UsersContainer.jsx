import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsers, unfollowActionCreator} from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsers(users)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);