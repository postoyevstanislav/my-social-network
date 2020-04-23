import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css'
import NavbarFriends from './NavbarFriends'

console.log(style)
const Navbar = (props) => {
    const navbarFriedsEl = props.state.dialogs.slice(0, 3).map(el => {
        return <NavbarFriends key={el.id} name={el.name} id={el.id} />
    })
    return (

        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={`${style.item} `}>
                <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            <div className={style.navbarFrinds}>
                {navbarFriedsEl}
            </div>

            </nav>


    )
}

export default Navbar