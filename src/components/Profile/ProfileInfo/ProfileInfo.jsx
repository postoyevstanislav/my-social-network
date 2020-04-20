import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/originals/e7/e9/1f/e7e91f5fef6726ff99a620202694340e.jpg" alt=""/>
            </div>
            <div className={style.discriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo