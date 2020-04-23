import React from 'react';
import {addMessage} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = {
        addMessage
};

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

export default DialogsContainer;