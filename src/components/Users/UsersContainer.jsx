import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setSelectedPage,
    setTotalUsersCount,
    setUsers,
    unfollowActionCreator
} from "../../redux/UsersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
                debugger
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    };

    onPageChanged = (pageNumber) => {
        this.props.setSelectedPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        );
    };

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                selectedPage={this.props.selectedPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
            />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);