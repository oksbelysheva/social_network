import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'/>
            {props.message}
            <div><span>like {props.likesCouner}</span></div>
        </div>
    )
};

export default Post;