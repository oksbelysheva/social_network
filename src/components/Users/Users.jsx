import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let countPage = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesNumber = [];
    for (let i = 1; i <= countPage; i++) {
        pagesNumber.push(i);
    }

    return (
        <div>
            {pagesNumber.map((i) => <span className={props.selectedPage === i && classes.selectedPage}
                                          onClick={() => props.onPageChanged(i)}>{i}</span>)}
            {props.users.map((user) => (<div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={classes.user_photo} src={user.photos.small || userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button onClick={() => props.unfollow(user.id)}>unfollow</button> :
                        <button onClick={() => props.follow(user.id)}>follow</button>
                    }
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>user.location.country</div>
                    <div>user.location.city</div>
                </span>
            </span>
                </div>
            ))}
        </div>
    )
};

export default Users;