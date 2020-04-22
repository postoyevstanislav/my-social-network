import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsElements =  props.dialogs.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    })
    const messagesElements =  props.messages.map(el => {
        return <Message key={el.id} message={el.message}/>

    })
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs