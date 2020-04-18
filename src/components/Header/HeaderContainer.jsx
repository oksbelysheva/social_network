import React from 'react';
import classes from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/AuthReducer";
import {auth} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        auth().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setUserData(id, email, login);
                }
            }
        );
    }

    render() {
        return <Header {...this.props}/>
    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

const mapDispatchToProps = {
    setUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);