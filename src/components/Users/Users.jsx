import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

/*const Users = (props) => {
    const getUsers = () => {
        props.users.length === 0 && axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            }
        );
    }
    return (
        <div>
            <div><button onClick={getUsers}>Get users</button></div>
            {props.users.map((user) => (<div key={user.id}>
            <span>
                <div>
                    <img className={classes.user_photo} src={user.photos.small || userPhoto}/>
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
};*/

class Users extends React.Component {
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            }
        );
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.getUsers}>Get users</button>
                </div>
                {this.props.users.map((user) => (<div key={user.id}>
            <span>
                <div>
                    <img className={classes.user_photo} src={user.photos.small || userPhoto}/>
                </div>
                <div>
                    {user.followed ?
                        <button onClick={() => this.props.unfollow(user.id)}>unfollow</button> :
                        <button onClick={() => this.props.follow(user.id)}>follow</button>
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
    }
}

export default Users;