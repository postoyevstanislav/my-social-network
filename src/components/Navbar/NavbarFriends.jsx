import React from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css'

const NavbarFriends = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.singleNavUser}>
            <NavLink to ={path}><img src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg" alt=""/>
                {props.name}</NavLink>
        </div>
    )
}

export default NavbarFriends