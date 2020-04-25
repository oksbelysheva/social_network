import React from 'react';
import classes from './Login.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"login"} placeholder="login" validate={[required]}/></div>
            <div><Field component={Input} name={"password"} placeholder="password" validate={[required]}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me</div>
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