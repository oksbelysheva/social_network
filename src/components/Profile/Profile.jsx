import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainter";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;