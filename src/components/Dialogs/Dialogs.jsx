import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    const dialogsElements =  props.state.dialogs.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    })
    const messagesElements =  props.state.messages.map(el => {
        return <Message key={el.id} message={el.message}/>

    })
    const newMessageText = React.createRef()
    const addNewMessage = () => {
        const text = newMessageText.current.value
        alert(text)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageText}></textarea>
            </div>
            <div>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs