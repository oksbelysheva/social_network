import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

class Users extends React.Component {
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
            debugger
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    };

    onPageChanged = (pageNumber) => {
        this.props.setSelectedPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        );
    }

    render() {
        let countPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pagesNumber = [];
        for(let i = 1; i <= countPage; i++){
            pagesNumber.push(i);
        }

        return (
            <div>
                {pagesNumber.map((i) => <span className={this.props.selectedPage === i && classes.selectedPage} onClick={() => this.onPageChanged(i)}>{i}</span>)}
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