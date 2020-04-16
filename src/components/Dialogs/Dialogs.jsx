import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const handleChangeMessage = (event) => {
        props.changeMessage(event.target.value);
    };

    const handleAddMessage = () => {
        props.addMessage();
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}
            </div>
            <div>
                <div className={classes.messages}>
                    {props.dialogsPage.messages.map((message) => <Message key={message.id} message={message.message}/>)}
                </div>
                <div>
                    <div>
                        <textarea value={props.dialogsPage.newMessageText} onChange={handleChangeMessage}/>
                    </div>
                    <div>
                        <button onClick={handleAddMessage}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;