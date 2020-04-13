import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator,
    setSelectedPage,
    setTotalUsersCount,
    setUsers,
    unfollowActionCreator
} from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsers(users)),
        setSelectedPage: (selectedPage) => dispatch(setSelectedPage(selectedPage)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCount(count))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);