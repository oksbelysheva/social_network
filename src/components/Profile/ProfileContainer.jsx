import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getProfileUser(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {getProfileUser})(withRouter(ProfileContainer));