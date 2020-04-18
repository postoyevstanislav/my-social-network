import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/originals/e7/e9/1f/e7e91f5fef6726ff99a620202694340e.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile