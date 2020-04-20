import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const dialogsData = [
    {id: 1, name: 'Stas'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Ostap'},
    {id: 4, name: 'Volodya'},
    {id: 5, name: 'Anya'},
    {id: 6, name: 'Serhiy'}
]

const messagesData = [
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
    return(
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs