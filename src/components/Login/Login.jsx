import React from 'react';
import classes from './Login.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={"input"} name={"login"} placeholder="login"/></div>
            <div><Field component={"input"} name={"password"} placeholder="password"/></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me</div>
            <button>Login</button>
        </form>
    )
};

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const submit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={submit}/>
        </div>
    )
};

export default Login;