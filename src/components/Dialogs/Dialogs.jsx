import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControls/FormControls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLengthValidate = maxLength(50);

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessage" placeholder="Enter new message" validate={[required, maxLengthValidate]}/>
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )
};

const DialogFormRedux = reduxForm({form: 'addMessageForm'})(DialogForm);

const Dialogs = (props) => {

    const handleAddMessage = (values) => {
        debugger
        props.addMessage(values.newMessage);
    };

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id}
                                                                       name={dialog.name}/>)}
            </div>
            <div>
                <div className={classes.messages}>
                    {props.dialogsPage.messages.map((message) => <Message key={message.id} message={message.message}/>)}
                </div>
                <DialogFormRedux onSubmit={handleAddMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;