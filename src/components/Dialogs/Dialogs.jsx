import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const dialogs = [
    {id: 1, name: 'Stas'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Ostap'},
    {id: 4, name: 'Volodya'},
    {id: 5, name: 'Anya'},
    {id: 6, name: 'Serhiy'}
]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'yoyo'},
    {id: 5, message: 'yoyoyo'},

]


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (<div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
const dialogsElements = dialogs.map(el => {
    return <DialogItem key={el.id} name={el.name} id={el.id}/>
})
const messagesElements = messages.map(el => {
    return <Message key={el.id} message={el.message}/>
})

const Dialogs = (props) => {
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