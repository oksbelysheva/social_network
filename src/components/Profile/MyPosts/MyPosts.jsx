import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPost" placeholder="Enter new post"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const MyPostReduxForm = reduxForm({form: 'myPostForm'})(MyPostForm);

const MyPosts = (props) => {

    const handleAddButtonClick = (values) => {
        props.addPost(values.newPost);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <MyPostReduxForm onSubmit={handleAddButtonClick}/>
            <div className={classes.posts}>
                {props.profilePage.posts.map((post) => <Post key={post.id} message={post.message}
                                                             likesCouner={post.likesCounter}/>)}
            </div>
        </div>
    )
};

export default MyPosts;