import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setSelectedPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unfollow
} from "../../redux/UsersReducer";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.selectedPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }
        );
    };

    onPageChanged = (pageNumber) => {
        this.props.setSelectedPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            }
        );
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    selectedPage={this.props.selectedPage}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

const mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setSelectedPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingInProgress
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);