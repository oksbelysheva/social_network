import React from 'react';
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateUserStatus} from "../../../redux/ProfileReducer";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;