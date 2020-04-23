import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (<div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>
            <img src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg" alt=""/>{props.name}</NavLink>
    </div>)
}


export default DialogItem