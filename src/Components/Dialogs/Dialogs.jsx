import React from 'react';
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogs} from "./Backend/Backend";
import {messages} from "./Backend/Backend";


let dialogsElements = dialogs
    .map(d => <DialogItem name={d.name} id={d.id}/>);

let messagesElements = messages
    .map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;