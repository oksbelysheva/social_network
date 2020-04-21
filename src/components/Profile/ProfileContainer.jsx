import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getUserStatus, updateUserStatus} from "../../redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getProfileUser(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        if (!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return (
            <Profile {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(connect(mapStateToProps, {getProfileUser, getUserStatus, updateUserStatus}), withRouter, withAuthRedirect)(ProfileContainer);