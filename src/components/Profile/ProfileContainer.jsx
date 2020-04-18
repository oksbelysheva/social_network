import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        getProfile(userId).then(data => {
                this.props.setUserProfile(data);
            }
        );
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));