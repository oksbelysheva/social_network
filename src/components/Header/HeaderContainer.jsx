import React from 'react';
import classes from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
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
    authMe
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);