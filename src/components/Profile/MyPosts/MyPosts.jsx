import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const handleAddButtonClick = () => {
        props.addPost();
    };

    const handleChange = (event) => {
        props.changeNewPostText(event.target.value);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newPostText} onChange={handleChange}/>
                </div>
                <div>
                    <button onClick={handleAddButtonClick}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.profilePage.posts.map((post) => <Post key={post.id} message={post.message} likesCouner={post.likesCounter}/>)}
            </div>
        </div>
    )
};

export default MyPosts;